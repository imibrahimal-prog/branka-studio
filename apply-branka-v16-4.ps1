$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$footerPath = Join-Path $root "components\layout\Footer.tsx"

if (-not (Test-Path -LiteralPath $footerPath)) {
  throw "Run this update from inside the branka-studio project folder."
}

$utf8 = New-Object System.Text.UTF8Encoding($false)
$content = [System.IO.File]::ReadAllText($footerPath, $utf8)
$pattern = '(?s)<Link\b(?=[^>]*\bhref="/")(?=[^>]*\bclassName="[^"]*")[^>]*>\s*<FooterBrandLogo(?:\s+className="[^"]*")?\s*/>\s*</Link>'
$regex = New-Object System.Text.RegularExpressions.Regex($pattern)

if ($regex.Matches($content).Count -ne 1) {
  throw "Could not find the footer logo block safely. No file was changed."
}

$replacement = @'
<Link
              href="/"
              className="!flex !w-full !justify-center lg:!justify-start"
            >
              <FooterBrandLogo className="!mx-auto lg:!mx-0" />
            </Link>
'@

$updated = $regex.Replace($content, $replacement, 1)
[System.IO.File]::WriteAllText($footerPath, $updated, $utf8)

Write-Host "Footer logo is now locked to the exact mobile center." -ForegroundColor Green
Write-Host "No other part of the website was changed."
Write-Host "Open GitHub Desktop, commit the change, then Push origin."
