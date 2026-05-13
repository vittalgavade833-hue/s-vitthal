@echo off
echo ==============================================
echo Installing necessary packages...
echo ==============================================
call npm install

echo.
echo ==============================================
echo Starting the Development Server...
echo ==============================================
call npm run dev

echo.
echo If the server crashed or didn't start, please look at the errors above.
pause
