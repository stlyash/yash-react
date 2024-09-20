REM Updating alacritty config hosting
curl https://raw.githubusercontent.com/yashlikescode/prepareLinux/refs/heads/main/alacritty.toml > ./public/alacritty

REM Updating debian app installer hosting
curl https://raw.githubusercontent.com/yashlikescode/prepareLinux/refs/heads/main/prepareDebian.sh > ./public/debian

REM Adding all the files of this directory or its children and pushing them to remote server
git add .
@echo off
set /p userInput="Enter commit message: "
git commit -m "%userInput%"
git push origin main