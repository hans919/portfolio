@echo off
echo ========================================
echo Portfolio Setup Script
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b %errorlevel%
)

echo.
echo ========================================
echo Setup completed successfully!
echo ========================================
echo.
echo You can now run the following commands:
echo   npm run dev      - Start development server
echo   npm run build    - Build for production
echo   npm run preview  - Preview production build
echo.
echo To start the development server now, run:
echo   npm run dev
echo.
pause
