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

function Replace-Regex([string]$relativePath, [string]$pattern, [string]$replacement) {
  $content = Read-Utf8 $relativePath
  $updated = [System.Text.RegularExpressions.Regex]::Replace($content, $pattern, $replacement)
  Write-Utf8 $relativePath $updated
}

# Footer logo, email and copyright.
$footerPath = "components\layout\Footer.tsx"
$footer = Read-Utf8 $footerPath
$footer = $footer.Replace(
  'import { BrandLogo } from "@/components/ui/BrandLogo";',
  'import { FooterBrandLogo } from "@/components/ui/FooterBrandLogo";'
)
$footer = $footer.Replace("<BrandLogo />", "<FooterBrandLogo />")
$footer = $footer.Replace("im.ibrahim.al@gmail.com", "info@braanka.com")
$footer = $footer.Replace("Branka Studio.", "Branka.")
Write-Utf8 $footerPath $footer

# Contact email.
Replace-Literal "components\sections\ContactSection.tsx" "im.ibrahim.al@gmail.com" "info@braanka.com"
Replace-Regex ".env.example" '(?m)^NEXT_PUBLIC_CONTACT_EMAIL=.*$' 'NEXT_PUBLIC_CONTACT_EMAIL=info@braanka.com'

# Cursor must always use the physical left edge, including RTL pages.
Replace-Literal "components\ui\CustomCursor.tsx" "fixed start-0 top-0" "fixed left-0 top-0"

# Use the warm ivory instead of pure white across Tailwind utilities and tokens.
$tailwindPath = "tailwind.config.ts"
$tailwind = Read-Utf8 $tailwindPath
if ($tailwind -notmatch 'colors:\s*\{\s*white:\s*"#fef3e4"') {
  $tailwind = [regex]::Replace(
    $tailwind,
    'colors:\s*\{\s*luxury:',
    "colors: {`r`n        white: `"#fef3e4`",`r`n        luxury:",
    1
  )
}
$tailwind = [regex]::Replace(
  $tailwind,
  '(?m)(^\s*white:\s*)"#[0-9a-fA-F]{6}"',
  '${1}"#fef3e4"'
)
Write-Utf8 $tailwindPath $tailwind

$sourceRoots = @("app", "components", "styles", "lib")
foreach ($sourceRoot in $sourceRoots) {
  $absoluteRoot = Join-Path $root $sourceRoot
  if (-not (Test-Path -LiteralPath $absoluteRoot)) { continue }

  Get-ChildItem -LiteralPath $absoluteRoot -Recurse -File |
    Where-Object { $_.Extension -in ".ts", ".tsx", ".css" } |
    ForEach-Object {
      $content = [System.IO.File]::ReadAllText($_.FullName, $utf8)
      $content = $content.Replace("#F8F8F6", "#fef3e4")
      $content = $content.Replace("#f8f8f6", "#fef3e4")
      $content = $content.Replace("#f8f2ed", "#fef3e4")
      $content = $content.Replace("#ffffff", "#fef3e4")
      $content = $content.Replace("#FFFFFF", "#fef3e4")
      $content = $content.Replace("rgba(255, 255, 255,", "rgba(254, 243, 228,")
      $content = $content.Replace("rgba(248, 242, 237,", "rgba(254, 243, 228,")
      [System.IO.File]::WriteAllText($_.FullName, $content, $utf8)
    }
}

# Explicit square favicon; the new filename also clears the old browser cache.
Replace-Literal "app\[locale]\layout.tsx" "/icons/branka-mark.png" "/icons/branka-favicon-v15.png"

Write-Host "Branka V15 update applied successfully." -ForegroundColor Green
Write-Host "Open GitHub Desktop, commit the changes, then Push origin."
