@echo off

%= URL of my NodePort service =%
SET URL=http://localhost:8080

%= Infinite loop to simulate network traffic =%
:loop
curl -s %URL% > NUL
echo Sent request to %URL%     %= Send requests to Nodeport service URL =%
%=timeout /t 1 > NUL             Set timeout to 1 second between messages =%
goto loop
