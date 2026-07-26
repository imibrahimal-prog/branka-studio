@echo off
setlocal
title Branka Update

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0.branka-update\apply-update.ps1"

if errorlevel 1 (
  echo.
  echo Update failed. Please send a screenshot of this window.
  pause
  exit /b 1
)

rmdir /s /q "%~dp0.branka-update"

echo.
echo Branka update completed successfully.
echo Open GitHub Desktop, then Commit and Push origin.
echo.
pause

start "" /b cmd /c "ping 127.0.0.1 -n 2 >nul & del /f /q \"%~f0\""
exit /b 0
