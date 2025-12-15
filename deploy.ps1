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
    
    # 4. Remote Execution
    Write-Host "`n4. Applying changes on server..." -ForegroundColor Yellow
    ssh -t hugo@20.199.130.29 "sudo rm -rf /var/www/html/* && sudo tar -xzf ~/site.tar.gz -C /var/www/html/ && sudo chown -R www-data:www-data /var/www/html"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`nDEPLOYMENT COMPLETE! Site updated successfully." -ForegroundColor Green
    }
    else {
        Write-Host "`nWARNING: Automatic deployment failed. Please run these commands manually on the server:" -ForegroundColor Yellow
        Write-Host "sudo rm -rf /var/www/html/*"
        Write-Host "sudo tar -xzf ~/site.tar.gz -C /var/www/html/"
        Write-Host "sudo chown -R www-data:www-data /var/www/html"
    }
}
else {
    Write-Host "Error during SCP transfer." -ForegroundColor Red
}

Read-Host -Prompt "Press Enter to exit"
