@echo off
chcp 65001 >nul
title Branka Update

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0.branka-update\apply-update.ps1"

if errorlevel 1 (
  echo.
  echo تعذر تطبيق التحديث. لم يتم حذف ملفات المشروع.
  echo ارسل صورة هذه النافذة للمراجعة.
  pause
  exit /b 1
)

rmdir /s /q "%~dp0.branka-update"

echo.
echo تم تحديث موقع برانكا بنجاح.
echo افتح GitHub Desktop ثم نفذ Commit و Push origin.
echo.
pause

start "" /b cmd /c "ping 127.0.0.1 -n 2 >nul & del /f /q \"%~f0\""
exit /b 0
