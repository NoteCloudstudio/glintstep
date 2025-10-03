Set-Location "D:\glintstep"

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# .gitignore에 Desktop 폴더 제외
Set-Content .gitignore "Desktop/"

# 커밋 메시지 입력
$msg = Read-Host "📝 커밋 메시지를 입력하세요"

# Git 초기화 및 원격 연결
git init
git remote remove origin 2>$null
git remote add origin https://github.com/NoteCloudstudio/glintstep
git branch -M glintstep

# 커밋 + 강제 푸시
git add .
git commit -m "$msg"
git push -u origin glintstep --force

Write-Host "`n✅ GitHub에 푸시 완료"
pause