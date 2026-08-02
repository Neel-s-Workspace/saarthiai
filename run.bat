@echo off
echo =========================================
echo Starting Sarthi Counselor Platform
echo =========================================

echo Starting Backend Server (Port 5000)...
start "Sarthi Backend" cmd /c "cd backend && npx nodemon server.js"

echo Starting Frontend Application (Port 5173)...
start "Sarthi Frontend" cmd /c "cd frontend && npm run dev"

echo.
echo Both servers have been launched in separate windows!
echo It may take a few seconds for the frontend to be fully available.
echo Usually it runs on: http://localhost:5173
echo =========================================
