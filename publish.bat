del /Q ..\soham1.github.io\*.gz
del /Q ..\soham1.github.io\*.map
del /Q ..\soham1.github.io\*.js
del /S /Q ..\soham1.github.io\assets
del /Q ..\soham1.github.io\index.html
xcopy dist ..\soham1.github.io /E
cd ..\soham1.github.io
git add --all
git commit -m "New version"
git push -u origin master