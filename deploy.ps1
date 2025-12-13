Write-Host "=== DEPLOYMENT CONTRECARE DAMS ===" -ForegroundColor Cyan

# 1. Build
Write-Host "`n1. Building site (npm run build)..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error during build." -ForegroundColor Red
    exit
}

# 2. Archive
Write-Host "`n2. Creating archive (site.tar.gz)..." -ForegroundColor Yellow
if (Test-Path "site.tar.gz") { Remove-Item "site.tar.gz" }
tar -czf site.tar.gz -C build .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error during archive creation." -ForegroundColor Red
    exit
}

# 3. Transfer
Write-Host "`n3. Transferring to server (enter password if asked)..." -ForegroundColor Yellow
scp site.tar.gz hugo@20.199.130.29:~/

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSUCCESS: Transfer complete!" -ForegroundColor Green
    Write-Host "`n--> COPY AND PASTE THESE COMMANDS ON THE SERVER:" -ForegroundColor Cyan
    Write-Host "---------------------------------------------------"
    Write-Host "sudo rm -rf /var/www/html/*" -ForegroundColor White
    Write-Host "sudo tar -xzf ~/site.tar.gz -C /var/www/html/" -ForegroundColor White
    Write-Host "sudo chown -R www-data:www-data /var/www/html" -ForegroundColor White
    Write-Host "---------------------------------------------------"
} else {
    Write-Host "Error during SCP transfer." -ForegroundColor Red
}

Read-Host -Prompt "Press Enter to exit"
