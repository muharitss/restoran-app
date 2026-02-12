# Quick Fix Script untuk Network Error
# Jalankan script ini jika ada Network Error

Write-Host "🔧 Fixing Network Error..." -ForegroundColor Cyan
Write-Host ""

# Step 1: Check .env file
Write-Host "1️⃣ Checking .env file..." -ForegroundColor Yellow
if (Test-Path ".env") {
    $envContent = Get-Content ".env"
    Write-Host "   Current .env content:" -ForegroundColor Gray
    Write-Host "   $envContent" -ForegroundColor Gray
    
    if ($envContent -match "VITE_API_BASE_URL") {
        Write-Host "   ✅ .env file is correct!" -ForegroundColor Green
    } else {
        Write-Host "   ❌ .env file needs to be fixed!" -ForegroundColor Red
        Write-Host "   Fixing .env file..." -ForegroundColor Yellow
        "VITE_API_BASE_URL=https://restoran-backend-srdw.onrender.com" | Set-Content ".env"
        Write-Host "   ✅ .env file fixed!" -ForegroundColor Green
    }
} else {
    Write-Host "   ❌ .env file not found! Creating..." -ForegroundColor Red
    "VITE_API_BASE_URL=https://restoran-backend-srdw.onrender.com" | Set-Content ".env"
    Write-Host "   ✅ .env file created!" -ForegroundColor Green
}

Write-Host ""

# Step 2: Kill existing dev server
Write-Host "2️⃣ Stopping existing dev server..." -ForegroundColor Yellow
$nodeProcesses = Get-Process | Where-Object {$_.ProcessName -like '*node*'}
if ($nodeProcesses) {
    Write-Host "   Found running Node processes. Stopping..." -ForegroundColor Gray
    Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 2
    Write-Host "   ✅ Dev server stopped!" -ForegroundColor Green
} else {
    Write-Host "   ℹ️ No running dev server found" -ForegroundColor Gray
}

Write-Host ""

# Step 3: Clear node_modules cache (optional)
Write-Host "3️⃣ Clearing cache..." -ForegroundColor Yellow
if (Test-Path ".vite") {
    Remove-Item -Recurse -Force ".vite" -ErrorAction SilentlyContinue
    Write-Host "   ✅ Vite cache cleared!" -ForegroundColor Green
} else {
    Write-Host "   ℹ️ No cache to clear" -ForegroundColor Gray
}

Write-Host ""

# Step 4: Instructions
Write-Host "✅ Fix completed!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Run: pnpm dev" -ForegroundColor White
Write-Host "   2. Open: http://localhost:5173/login" -ForegroundColor White
Write-Host "   3. Open browser console (F12)" -ForegroundColor White
Write-Host "   4. Try login with:" -ForegroundColor White
Write-Host "      Email: owner@gmail.com" -ForegroundColor Gray
Write-Host "      Password: password123" -ForegroundColor Gray
Write-Host ""
Write-Host "🔍 Look for this log in console:" -ForegroundColor Cyan
Write-Host "   🌐 API Base URL: https://restoran-backend-srdw.onrender.com" -ForegroundColor Gray
Write-Host ""
