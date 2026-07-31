$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$utf8 = New-Object System.Text.UTF8Encoding($false)

function Read-Utf8([string]$relativePath) {
  $path = Join-Path $root $relativePath
  if (-not (Test-Path -LiteralPath $path)) {
    throw "Missing project file: $relativePath"
  }
  return [System.IO.File]::ReadAllText($path, $utf8)
}

function Write-Utf8([string]$relativePath, [string]$content) {
  $path = Join-Path $root $relativePath
  [System.IO.File]::WriteAllText($path, $content, $utf8)
}

function Replace-Literal([string]$relativePath, [string]$oldValue, [string]$newValue) {
  $content = Read-Utf8 $relativePath
  if ($content.Contains($oldValue)) {
    Write-Utf8 $relativePath ($content.Replace($oldValue, $newValue))
  }
}

# Reorder only the requested portfolio covers. The marker keeps this step idempotent.
$projectsPath = "components\sections\ProjectsSection.tsx"
$projects = Read-Utf8 $projectsPath
$orderMarker = "// BRANKA-V16-PORTFOLIO-ORDER"

if (-not $projects.Contains($orderMarker)) {
  # Visual identity order: 02, 03, 01.
  $projects = $projects.Replace(
    "/projects/graphics/identities/identity-5.jpg",
    "/projects/graphics/identities/__branka_identity_01__.jpg"
  )
  $projects = $projects.Replace(
    "/projects/graphics/identities/identity-6.jpg",
    "/projects/graphics/identities/__branka_identity_02__.jpg"
  )
  $projects = $projects.Replace(
    "/projects/graphics/identities/identity-7.jpg",
    "/projects/graphics/identities/__branka_identity_03__.jpg"
  )
  $projects = $projects.Replace(
    "/projects/graphics/identities/__branka_identity_01__.jpg",
    "/projects/graphics/identities/identity-6.jpg"
  )
  $projects = $projects.Replace(
    "/projects/graphics/identities/__branka_identity_02__.jpg",
    "/projects/graphics/identities/identity-7.jpg"
  )
  $projects = $projects.Replace(
    "/projects/graphics/identities/__branka_identity_03__.jpg",
    "/projects/graphics/identities/identity-5.jpg"
  )

  # Social media order: put work 02 on the featured card and keep work 01 next.
  $socialFirstPattern = '(?s)\{\s*image:\s*"/projects/graphics/social/social-9\.jpg",\s*category:\s*"social",\s*order:\s*1,\s*\},'
  $socialFirstReplacement = @'
{
    image: "/projects/graphics/social/social-10.jpg",
    category: "social",
    order: 1,
  },
'@
  $socialFirstRegex = New-Object System.Text.RegularExpressions.Regex($socialFirstPattern)
  $projects = $socialFirstRegex.Replace($projects, $socialFirstReplacement.TrimStart(), 1)

  $socialRestPattern = '(?s)\.\.\.Array\.from\(\{\s*length:\s*9\s*\},\s*\(_,\s*index\)\s*=>\s*\(\{\s*image:\s*`/projects/graphics/social/social-\$\{index\s*\+\s*10\}\.jpg`,\s*category:\s*"social"\s*as\s*const,\s*order:\s*index\s*\+\s*2,\s*\}\)\),'
  $socialRestReplacement = @'
{
    image: "/projects/graphics/social/social-9.jpg",
    category: "social",
    order: 2,
  },
  ...Array.from({ length: 8 }, (_, index) => ({
    image: `/projects/graphics/social/social-${index + 11}.jpg`,
    category: "social" as const,
    order: index + 3,
  })),
'@
  $socialRestRegex = New-Object System.Text.RegularExpressions.Regex($socialRestPattern)
  $projects = $socialRestRegex.Replace($projects, $socialRestReplacement.TrimStart(), 1)

  if (-not $projects.Contains('/projects/graphics/social/social-10.jpg') -or
      -not $projects.Contains('/projects/graphics/social/social-9.jpg') -or
      -not $projects.Contains('social-${index + 11}.jpg')) {
    throw "Could not safely update the social media portfolio order. No project files were written."
  }

  $projectNewline = if ($projects.Contains("`r`n")) { "`r`n" } else { "`n" }
  $projects = $projects.Replace(
    "const graphicsProjects: GraphicsProject[] = [",
    "${orderMarker}${projectNewline}const graphicsProjects: GraphicsProject[] = ["
  )

  Write-Utf8 $projectsPath $projects
}

# Loading page background only.
$loaderFiles = @(
  "components\ui\InitialLoader.tsx",
  "app\[locale]\loading.tsx"
)
foreach ($loaderFile in $loaderFiles) {
  $content = Read-Utf8 $loaderFile
  $content = $content.Replace("bg-[#2b2122]", "bg-[#2b2022]")
  $content = $content.Replace("bg-[#120b08]", "bg-[#2b2022]")
  Write-Utf8 $loaderFile $content
}

# Footer logo tile background, if the V15 logo component is present.
$footerLogoPath = Join-Path $root "components\ui\FooterBrandLogo.tsx"
if (Test-Path -LiteralPath $footerLogoPath) {
  Replace-Literal "components\ui\FooterBrandLogo.tsx" "bg-[#2b2122]" "bg-[#2b2022]"
}

# Footer section background only.
$footerPath = "components\layout\Footer.tsx"
$footer = Read-Utf8 $footerPath
$footer = $footer.Replace("bg-[var(--color-surface)]", "bg-[#2b2022]")
$footer = $footer.Replace("bg-[#2b2122]", "bg-[#2b2022]")
Write-Utf8 $footerPath $footer

Write-Host "Branka V16 update applied successfully." -ForegroundColor Green
Write-Host "Only portfolio order, loader background and footer background were changed."
Write-Host "Open GitHub Desktop, commit the changes, then Push origin."
