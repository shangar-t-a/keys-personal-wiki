# Keys' PowerShell Scripting Tutorial

# Parameters
Param(
    [Parameter(Mandatory, HelpMessage = "Name of the Executor", Position=0)]
    [string]$Name,

    [Parameter(HelpMessage = "Age of the Executor", Position=1)]
    [ValidateRange(1, 120)]
    [int]$Age,

    [Parameter(HelpMessage = "Favorite Color of the Executor", Position=2)]
    [ValidateSet("Red", "Green", "Blue")]
    [string]$FavoriteColor = "Blue",

    [Parameter(HelpMessage = "Optional Parameter", Position=3)]
    [switch]$Flag
)

# Starting Script Execution
Write-Host "Keys' PowerShell Scripting Tutorial..."
Write-Host "`n" -NoNewLine

$date = Get-Date -format "dd-MM-yyyy hh:mm:ss tt"

# Displaying Parameters
Write-Host "Displaying Parameters..."
Write-Host "Date: $date"
Write-Host "Name: $Name"
Write-Host "Age: $Age"
Write-Host "Favorite Color: $FavoriteColor"
Write-Host "Flag: $Flag"
Write-Host "`n" -NoNewLine

# Writing to Console
Write-Host "Types of Write Commands..."
Write-Host "[Write-Host]: Writing to Console..."
Write-Warning "[Write-Warning]: Writing Warning..."
Write-Error "[Write-Error]: Writing Error..."
Write-Host "`n" -NoNewLine

# Setting a variable
# Variables can be defined using the `$` symbol. Use double quotes and `$` symbol to output the variable's value.
# To escape and output the variable name with $ symbol, prefix the variable name with a backtick (`).
$PI = 3.14159
Write-Host "The value of `$PI is: $PI"

# Flow Control
if ($Age -gt 19 -And $Age -lt 100) {
    Write-Host "Running script as an adult ($Age)..."
} elseif ($Age -lt 13 -And $Age -gt 0) {
    Write-Host "Running script as a child ($Age)..."
} elseif ($Age -ge 13 -And $Age -le 19) {
    Write-Host "Running script as a teenager ($Age)..."
} else {
    Throw "Unable to categorize age ($Age)..."
}
