$ErrorActionPreference = "Stop"

$updateRoot = $PSScriptRoot
$projectRoot = Split-Path -Parent $updateRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)

function Read-Utf8File {
    param([string]$Path)
    return [System.IO.File]::ReadAllText($Path, $utf8)
}

function Write-Utf8File {
    param(
        [string]$Path,
        [string]$Content
    )
    [System.IO.File]::WriteAllText($Path, $Content, $utf8)
}

function Update-JsonFile {
    param(
        [string]$Path,
        [string]$Language
    )

    if (-not (Test-Path $Path)) {
        throw "Missing translation file: $Path"
    }

    $content = Read-Utf8File $Path
    $content = [regex]::Replace(
        $content,
        '"studio"\s*:\s*"[^"]*"',
        '"studio": "Ibrahim Almusabi"'
    )

    if ($Language -eq "ar") {
        $content = [regex]::Replace(
            $content,
            '("designExperience"\s*:\s*")\+?4',
            '${1}+5'
        )
        $content = [regex]::Replace(
            $content,
            '("stat1Value"\s*:\s*")\+?4(")',
            '${1}+5${2}'
        )
    }
    else {
        $content = [regex]::Replace(
            $content,
            '("designExperience"\s*:\s*")4\+',
            '${1}5+'
        )
        $content = [regex]::Replace(
            $content,
            '("stat1Value"\s*:\s*")4\+(")',
            '${1}5+${2}'
        )
    }

    $content = [regex]::Replace(
        $content,
        '"signature"\s*:\s*"[^"]*"',
        '"backToTop": "Back to top"'
    )

    Write-Utf8File $Path $content
}

$footerPath = Join-Path $projectRoot "components\layout\Footer.tsx"
if (-not (Test-Path $footerPath)) {
    throw "Missing footer file: $footerPath"
}

$footer = Read-Utf8File $footerPath
$footerBefore = $footer
$backToTopButton = @'
<button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="branka-back-to-top"
            aria-label={t("backToTop")}
            title={t("backToTop")}
          >
            <span aria-hidden="true">&#8593;</span>
          </button>
'@

$footer = [regex]::Replace(
    $footer,
    '<(p|span)\b[^>]*>\s*\{t\("signature"\)\}\s*</\1>',
    $backToTopButton,
    [System.Text.RegularExpressions.RegexOptions]::Singleline
)

if ($footer -eq $footerBefore -and $footer -notmatch "branka-back-to-top") {
    throw "The current footer format is different. No files were removed."
}

Write-Utf8File $footerPath $footer

Update-JsonFile (Join-Path $projectRoot "messages\ar.json") "ar"
Update-JsonFile (Join-Path $projectRoot "messages\en.json") "en"

$projectsPath = Join-Path $projectRoot "components\sections\ProjectsSection.tsx"
if (Test-Path $projectsPath) {
    $projects = Read-Utf8File $projectsPath
    $projects = [regex]::Replace(
        $projects,
        'Array\.from\(\{\s*length:\s*4\s*\}([\s\S]{0,240}?graphics/infographics)',
        'Array.from({ length: 3 }$1',
        1
    )
    Write-Utf8File $projectsPath $projects
}

$stylesPath = Join-Path $projectRoot "styles\globals.css"
if (-not (Test-Path $stylesPath)) {
    $stylesPath = Join-Path $projectRoot "app\globals.css"
}
if (-not (Test-Path $stylesPath)) {
    throw "Missing global styles file."
}

$styles = Read-Utf8File $stylesPath
if ($styles -notmatch "BRANKA_LIGHT_HEADER_V8") {
    $styles += @'

/* BRANKA_LIGHT_HEADER_V8 */
html:not(.dark) header {
  --color-background: #2a1912;
  --color-surface: #3a2419;
  --color-foreground: #d4b88a;
  --color-muted: #c7a46a;
  --color-border: rgba(212, 184, 138, 0.34);
  border-color: rgba(212, 184, 138, 0.34) !important;
  background-color: rgba(42, 25, 18, 0.96) !important;
  box-shadow: 0 12px 32px rgba(42, 25, 18, 0.16);
}

html:not(.dark) header a,
html:not(.dark) header button {
  color: #d4b88a;
}

html:not(.dark) header button {
  border-color: rgba(212, 184, 138, 0.34);
}

.branka-back-to-top {
  display: inline-flex;
  width: 3.25rem;
  height: 3.25rem;
  align-items: center;
  justify-content: center;
  border: 1px solid #c7a46a;
  border-radius: 9999px;
  background: #c7a46a;
  color: #2a1912;
  font-size: 1.45rem;
  line-height: 1;
  box-shadow: 0 12px 28px rgba(42, 25, 18, 0.18);
  transition:
    transform 220ms ease,
    background-color 220ms ease,
    color 220ms ease,
    box-shadow 220ms ease;
}

.branka-back-to-top:hover {
  transform: translateY(-4px);
  background: #d4b88a;
  color: #2a1912;
  box-shadow: 0 16px 34px rgba(42, 25, 18, 0.24);
}
'@
    Write-Utf8File $stylesPath $styles
}

$assetsSource = Join-Path $updateRoot "public"
$assetsDestination = Join-Path $projectRoot "public"
if (Test-Path $assetsSource) {
    Copy-Item -Path (Join-Path $assetsSource "*") -Destination $assetsDestination -Recurse -Force
}

Get-ChildItem -Path $projectRoot -File -Filter "*.cmd" | ForEach-Object {
    if ($_.Name -ne "apply-branka-update.cmd") {
        $cmdContent = [System.IO.File]::ReadAllText($_.FullName)
        if ($cmdContent -match "title Branka Update") {
            Remove-Item -LiteralPath $_.FullName -Force
        }
    }
}

Write-Host ""
Write-Host "Branka update completed successfully." -ForegroundColor Green
