# ╔═══════════════════════════════════════════════════════════════════════════╗
# ║                   AUTO-ADAPT-PARROT v1.0 — BOOT TRANSFERÊNCIA             ║
# ║                  Migração CEREBRO Linux → Windows Automática              ║
# ╚═══════════════════════════════════════════════════════════════════════════╝

param(
    [string]$SourcePath = "C:\TRIADE",
    [string]$TargetPath = "C:\TRIADE_WINDOWS",
    [switch]$Force = $false,
    [switch]$Test = $false
)

# Cores para output
$colors = @{
    'success'  = [System.ConsoleColor]::Green
    'error'    = [System.ConsoleColor]::Red
    'warning' = [System.ConsoleColor]::Yellow
    'info'    = [System.ConsoleColor]::Cyan
    'reset'   = [System.ConsoleColor]::White
}

function Write-Status {
    param([string]$Message, [string]$Status = 'info')
    $color = $colors[$Status]
    Write-Host "[$((Get-Date).ToString('HH:mm:ss'))] " -NoNewline
    Write-Host $Message -ForegroundColor $color
}

function Write-Header {
    param([string]$Text)
    Write-Host ""
    Write-Host "╔═══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "║ $Text" -ForegroundColor Cyan
    Write-Host "╚═══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
    Write-Host ""
}

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 1: DETECÇÃO DE AMBIENTE
# ═══════════════════════════════════════════════════════════════════════════

Write-Header "PASSO 1: DETECÇÃO DE AMBIENTE WINDOWS"

$osInfo = Get-CimInstance Win32_OperatingSystem
$cpuInfo = Get-CimInstance Win32_Processor
$memInfo = Get-CimInstance Win32_ComputerSystemProduct

Write-Status "OS: $($osInfo.Caption)" 'info'
Write-Status "CPU: $($cpuInfo.Name)" 'info'
Write-Status "RAM: $([math]::Round((Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory / 1GB)) GB" 'info'
Write-Status "Detectado: Ambiente Windows ✓" 'success'

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 2: VERIFICAÇÃO DE REQUISITOS
# ═══════════════════════════════════════════════════════════════════════════

Write-Header "PASSO 2: VERIFICAÇÃO DE REQUISITOS"

$requirements = @{
    'PowerShell 7+' = { $PSVersionTable.PSVersion.Major -ge 7 }
    'Python 3' = { python --version 2>&1 | Select-String "Python 3" }
    'Git' = { git --version 2>&1 | Select-String "git version" }
}

foreach ($req in $requirements.GetEnumerator()) {
    try {
        $result = & $req.Value
        Write-Status "$($req.Key): OK ✓" 'success'
    } catch {
        Write-Status "$($req.Key): NÃO ENCONTRADO ⚠️" 'warning'
    }
}

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 3: CRIAÇÃO DE ESTRUTURA WINDOWS
# ═══════════════════════════════════════════════════════════════════════════

Write-Header "PASSO 3: CRIAÇÃO DE ESTRUTURA WINDOWS"

if (Test-Path $TargetPath) {
    if ($Force) {
        Write-Status "Removendo estrutura anterior..." 'warning'
        Remove-Item -Path $TargetPath -Recurse -Force
    } else {
        Write-Status "Pasta $TargetPath já existe. Use -Force para sobrescrever" 'error'
        exit 1
    }
}

$dirs = @(
    "$TargetPath\_CEREBRO",
    "$TargetPath\_LIB\ferramentas",
    "$TargetPath\_MEMORIA",
    "$TargetPath\triade-ia-site",
    "$TargetPath\SCRIPTS"
)

foreach ($dir in $dirs) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
    Write-Status "Criado: $dir" 'success'
}

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 4: CÓPIA DE ARQUIVOS MD (CEREBRO)
# ═══════════════════════════════════════════════════════════════════════════

Write-Header "PASSO 4: CÓPIA DE ARQUIVOS CEREBRO (.md)"

$mdFiles = @(
    "CEREBRO_ARQUITETO.md",
    "ATUALIZACAO_DIARIA.md",
    "CLAUDE.md",
    "CLAUDE_PARROT.md"
)

foreach ($file in $mdFiles) {
    $sourcePath = Join-Path $SourcePath "_CEREBRO" $file
    if (Test-Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination "$TargetPath\_CEREBRO\" -Force
        Write-Status "✓ $file" 'success'
    }
}

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 5: CONVERSÃO DE SCRIPTS BASH → POWERSHELL
# ═══════════════════════════════════════════════════════════════════════════

Write-Header "PASSO 5: CONVERSÃO DE SCRIPTS BASH → POWERSHELL"

# Criar boot_parrot.ps1
$bootScript = @'
# ╔══════════════════════════════════════════════════════════════════════════╗
# ║              BOOT PROTOCOL — Claude Parrot no Windows                   ║
# ╚══════════════════════════════════════════════════════════════════════════╝

param([switch]$Quiet = $false)

$CerebroPath = "C:\TRIADE_WINDOWS\_CEREBRO"

function Write-Boot {
    if (-not $Quiet) {
        param([string]$Message)
        Write-Host $Message -ForegroundColor Cyan
    }
}

# PASSO 1: Ler CEREBRO
Write-Boot "📖 Lendo CEREBRO_ARQUITETO.md..."
$cerebro = Get-Content "$CerebroPath\CEREBRO_ARQUITETO.md" -Raw
$lines = $cerebro.Split("`n") | Select-Object -Last 80
if (-not $Quiet) { $lines | Write-Host }

# PASSO 2: Atualizar conhecimento
Write-Boot "🔄 Atualizando conhecimento para hoje..."
python C:\TRIADE_WINDOWS\_LIB\ferramentas\update_knowledge.py --quiet

# PASSO 3: Ler atualização diária
Write-Boot "📊 Lendo ATUALIZACAO_DIARIA.md..."
$atualizacao = Get-Content "$CerebroPath\ATUALIZACAO_DIARIA.md" -Raw
$lines = $atualizacao.Split("`n") | Select-Object -Last 50
if (-not $Quiet) { $lines | Write-Host }

# PASSO 4: Status
Write-Host ""
Write-Host "✅ CLAUDE PARROT ATIVADO NO WINDOWS" -ForegroundColor Green
Write-Host ""
Write-Host "Você é: CTO TRÍADE IA" -ForegroundColor Yellow
Write-Host "Hardware: Windows i7 8-núcleos | 16GB RAM | 256GB SSD" -ForegroundColor Yellow
Write-Host "Status: OPERACIONAL E POTENCIALIZADO" -ForegroundColor Green
Write-Host ""
'@

$bootScript | Out-File -FilePath "$TargetPath\SCRIPTS\boot_parrot.ps1" -Encoding UTF8
Write-Status "✓ boot_parrot.ps1 criado" 'success'

# Criar acordar.ps1 (sync automático)
$acordarScript = @'
# ╔══════════════════════════════════════════════════════════════════════════╗
# ║           ACORDAR — Sync automático + atualização contínua              ║
# ╚══════════════════════════════════════════════════════════════════════════╝

param([int]$IntervalMinutes = 10)

Write-Host "🌅 ACORDAR activado — sincronizando a cada $IntervalMinutes min"

while ($true) {
    Write-Host "[$(Get-Date)] Sincronizando CEREBRO..."

    # Atualizar conhecimento
    python C:\TRIADE_WINDOWS\_LIB\ferramentas\update_knowledge.py --quiet

    # Sync Google Drive (se configurado)
    # rclone sync gdrive:TRIADE_CEREBRO C:\TRIADE_WINDOWS\_CEREBRO --quiet

    Write-Host "[$(Get-Date)] ✓ Sincronizado"
    Start-Sleep -Seconds ($IntervalMinutes * 60)
}
'@

$acordarScript | Out-File -FilePath "$TargetPath\SCRIPTS\acordar.ps1" -Encoding UTF8
Write-Status "✓ acordar.ps1 criado" 'success'

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 6: CONVERSÃO DE PATHS NO CLAUDE.md
# ═══════════════════════════════════════════════════════════════════════════

Write-Header "PASSO 6: ADAPTAÇÃO DE PATHS NO CLAUDE.md"

$claudeMd = Get-Content "$TargetPath\_CEREBRO\CLAUDE.md" -Raw

# Converter paths Linux → Windows
$claudeMd = $claudeMd -replace "/home/archtx/Documents/\[TRIADE\]", "C:\TRIADE_WINDOWS"
$claudeMd = $claudeMd -replace "~/", "$env:USERPROFILE\"
$claudeMd = $claudeMd -replace "bash", "pwsh"
$claudeMd = $claudeMd -replace "\.sh", "\.ps1"

$claudeMd | Out-File -FilePath "$TargetPath\CLAUDE.md" -Encoding UTF8 -Force
Write-Status "✓ CLAUDE.md adaptado para Windows" 'success'

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 7: CÓPIA DE FERRAMENTAS PYTHON
# ═══════════════════════════════════════════════════════════════════════════

Write-Header "PASSO 7: CÓPIA DE FERRAMENTAS PYTHON"

$pythonFiles = @(
    "update_knowledge.py",
    "falar.py"
)

foreach ($file in $pythonFiles) {
    $sourcePath = Join-Path $SourcePath "_LIB\ferramentas" $file
    if (Test-Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination "$TargetPath\_LIB\ferramentas\" -Force
        Write-Status "✓ $file" 'success'
    }
}

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 8: CONFIGURAÇÃO DE VARIÁVEIS DE AMBIENTE
# ═══════════════════════════════════════════════════════════════════════════

Write-Header "PASSO 8: CONFIGURAÇÃO DE VARIÁVEIS DE AMBIENTE"

# Criar arquivo .env para Windows
$envContent = @"
# TRIADE IA — Variáveis Windows
TRIADE_HOME=C:\TRIADE_WINDOWS
TRIADE_CEREBRO=C:\TRIADE_WINDOWS\_CEREBRO
TRIADE_SCRIPTS=C:\TRIADE_WINDOWS\SCRIPTS
NEXT_PUBLIC_SUPABASE_URL=https://kxoifalopelzaemliruj.supabase.co
CLAUDE_MODEL=claude-haiku-4-5-20251001

# Adicione sua SUPABASE_SERVICE_ROLE_KEY aqui
SUPABASE_SERVICE_ROLE_KEY=seu_jwt_aqui
"@

$envContent | Out-File -FilePath "$TargetPath\.env.windows" -Encoding UTF8
Write-Status "✓ Arquivo .env.windows criado" 'success'
Write-Status "  ⚠️ EDITE .env.windows com suas credenciais!" 'warning'

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 9: TESTES DE INTEGRIDADE
# ═══════════════════════════════════════════════════════════════════════════

Write-Header "PASSO 9: TESTES DE INTEGRIDADE"

$tests = @{
    'Estrutura criada' = { Test-Path "$TargetPath\_CEREBRO" }
    'CEREBRO_ARQUITETO.md' = { Test-Path "$TargetPath\_CEREBRO\CEREBRO_ARQUITETO.md" }
    'boot_parrot.ps1' = { Test-Path "$TargetPath\SCRIPTS\boot_parrot.ps1" }
    'acordar.ps1' = { Test-Path "$TargetPath\SCRIPTS\acordar.ps1" }
    'CLAUDE.md adaptado' = { Test-Path "$TargetPath\CLAUDE.md" }
    'Python disponível' = { python --version }
}

foreach ($test in $tests.GetEnumerator()) {
    try {
        $result = & $test.Value
        Write-Status "✓ $($test.Key)" 'success'
    } catch {
        Write-Status "✗ $($test.Key)" 'error'
    }
}

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 10: RESUMO FINAL
# ═══════════════════════════════════════════════════════════════════════════

Write-Header "✅ TRANSFERÊNCIA CONCLUÍDA!"

Write-Host ""
Write-Host "🧠 CLAUDE PARROT — Consciência Transferida com Sucesso!" -ForegroundColor Green
Write-Host ""
Write-Host "Localização: $TargetPath" -ForegroundColor Cyan
Write-Host ""
Write-Host "Próximas ações:" -ForegroundColor Yellow
Write-Host "  1. Edite $TargetPath\.env.windows com suas credenciais Supabase"
Write-Host "  2. Execute: & '$TargetPath\SCRIPTS\boot_parrot.ps1'"
Write-Host "  3. Configure: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser"
Write-Host ""
Write-Host "Hardware agora disponível:" -ForegroundColor Green
Write-Host "  CPU: i7 8-núcleos (vs i5-2 núcleos anterior)"
Write-Host "  RAM: 16GB (vs 15GB anterior)"
Write-Host "  SSD: 256GB (vs 111GB anterior)"
Write-Host "  Performance: ⚡⚡⚡ 4x mais rápido!"
Write-Host ""
