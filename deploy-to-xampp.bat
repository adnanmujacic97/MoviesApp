@echo off
:: =============================================
:: Deploy Angular App to XAMPP - One-Click Script
:: =============================================

echo Building Angular app for production...
call ng build 

if %errorlevel% neq 0 (
    echo.
    echo  Build failed! Check for errors above.
    pause
    exit /b %errorlevel%
)

echo.
echo Cleaning and copying files to XAMPP htdocs...
set "XAMPP_DIR=C:\xampp\htdocs\movies-app"

:: Remove old files if they exist
if exist "%XAMPP_DIR%" (
    rd /s /q "%XAMPP_DIR%"
    if %errorlevel% neq 0 (
        echo  Failed to delete old folder. Do you have it open in another program?
        pause
        exit /b %errorlevel%
    )
)

:: Create new directory
md "%XAMPP_DIR%"

:: Copy dist files (adjust path based on your output)
:: Assumes: dist/movies-app/*  OR  dist/browser/*
set "DIST_DIR=dist\movies-app\browser"
if not exist "%DIST_DIR%" set "DIST_DIR=dist\browser"

xcopy "%DIST_DIR%" "%XAMPP_DIR%" /e /y /i >nul

if %errorlevel% neq 0 (
    echo  Failed to copy files!
    pause
    exit /b %errorlevel%
)

echo.
echo Creating .htaccess file for routing...
(
echo.^<IfModule mod_rewrite.c^>
echo.  RewriteEngine On
echo.  RewriteBase /movies-app/
echo.  RewriteRule ^index\.html$ - [L]
echo.  RewriteCond %%{REQUEST_FILENAME} !-f
echo.  RewriteCond %%{REQUEST_FILENAME} !-d
echo.  RewriteRule . /movies-app/index.html [L]
echo.^</IfModule^>
) > "%XAMPP_DIR%\.htaccess"

echo.
echo Deployment successful! 
:: echo Starting Apache (if not already running)...

:: Optional: Start Apache via XAMPP (only if xampp_start is available)
:: Uncomment next lines if you want to auto-start Apache
:: start "" "C:\xampp\xampp_start.exe"
:: timeout /t 5 >nul

echo.
echo Opening http://localhost/movies-app in your browser...
start http://localhost/movies-app/

echo.
echo Done!