$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$source = Join-Path $root ".branka-v16-3-files\components\ui\InitialLoader.tsx"
$destination = Join-Path $root "components\ui\InitialLoader.tsx"

if (-not (Test-Path -LiteralPath $source)) {
  throw "Missing update file: InitialLoader.tsx"
}

if (-not (Test-Path -LiteralPath (Split-Path -Parent $destination))) {
  throw "Run this update from inside the branka-studio project folder."
}

Copy-Item -LiteralPath $source -Destination $destination -Force

Write-Host "Branka loader shine effect applied successfully." -ForegroundColor Green
Write-Host "Only the loading screen animation was changed."
Write-Host "Open GitHub Desktop, commit the change, then Push origin."
