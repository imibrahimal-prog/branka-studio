@echo off
setlocal
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0apply-branka-v16-3.ps1"
echo.
pause
