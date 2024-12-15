---
sidebar_label: 'PowerShell Scripting'
sidebar_level: 2
---

# PowerShell Scripting

PowerShell is a task-based command-line shell and scripting language built on .NET.  PowerShell helps system
administrators and power-users rapidly automate task that manage operating systems (Linux, macOS, and Windows) and
processes.

PowerShell offers more benefits compared to Bash for power-users, some of which include:

- First of all PowerShell is being told to compatible for Windows, Linux, and macOS.
- PowerShell also offer backward compatibility for Windows PowerShell. PowerShell also supports the windows commands
  like `cd`.
- PowerShell 7 is a next-generation version of PowerShell 5.1 and 6.0 that offer. It offers more features and one
  notable feature is auto completion which makes scripting easier and faster.

Useful Resources and Reads:

- [PowerShell 7 Installation](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4)
- [Why PowerShell?](https://www.makeuseof.com/tag/use-powershell-instead-batch/)

## PowerShell Tutorial

PowerShell 7 can be launched using `pwsh` command.

### PowerShell Profiles

PowerShell profiles offer a way to store configuration settings for the current user or for all users on the system.
To list all available profiles, run the following command:

```powershell
$Profile | Select-Object *
```

It would print something like this:

```powershell
AllUsersAllHosts       : C:\Program Files\PowerShell\7\profile.ps1
AllUsersCurrentHost    : C:\Program Files\PowerShell\7\Microsoft.PowerShell_profile.ps1
CurrentUserAllHosts    : C:\Users\<username>\Documents\PowerShell\profile.ps1
CurrentUserCurrentHost : C:\Users\<username>\Documents\PowerShell\Microsoft.PowerShell_profile.ps1
Length                 : 81
```

PowerShell profiles can be edited using the `profile.ps1` file.

:::tip
My `CurrentUserCurrentHost` profile is customized as below to include my name in the prompt.

- Call `$Profile | Select-Object *` to list all available profiles. Get the path of the `CurrentUserCurrentHost`
  profile and open it in code using `code <profile path>`.
- Alternatively, call the following command `code $Profile.CurrentUserCurrentHost` to directly open the profile.

Open Current User Current Host PS Profile

```powershell
code $Profile.CurrentUserCurrentHost
```

Customize the PS Launch Pre-Operation. Adding the below context to the file will print the statement whenever a PS is
launched from CurrentUserCurrentHost.

```powershell
Write-Host "Welcome to <Name>" -ForegroundColor Green PowerShell!"
```

:::

### Useful PowerShell Commands

#### Print contents to the console, Similar to `echo` in Bash

- Plain text

```powershell
Write-Host "Hello World"
```

- Write Error to the console

```powershell
Write-Error "This is an error message"
```

- Print warning to the console, Similar to `echo` in Bash.

```powershell
Write-Warning "This is a warning message"
```

#### Create a new file

```powershell
New-Item -Path "path/to/file.txt" -ItemType File
```

The command can also be simplified to

```powershell
New-Item "path/to/file.txt"
```

#### Delete a file

```powershell
Remove-Item -Path "path/to/file.txt"
```

The command can also be simplified to

```powershell
Remove-Item "path/to/file.txt"
```

#### Move a file

```powershell
Move-Item -Path "path/to/file.txt" -Destination "path/to/new/file.txt"
```

The command can also be simplified to

```powershell
Move-Item "path/to/file.txt" "path/to/new/file.txt"
```

### Parameters

#### Reference

- [Parameters](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_parameters?view=powershell-7.4)

#### Inputs

- Parameters should be defined on top of the file.
- Parameters can be prefixed with data type and assigned default values.
- You can get help on the parameters by calling `Get-Help` command on the powershell script.

```powershell
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
```

- Some common parameter types are listed above: string, int and switch (boolean).
- Parameters can be used in the script by using `$ParameterName` variable.
- $ sign can be escaped by prefixing it with backtick.
- Parameters can be passed to the script using `.\script.ps1 -Name "John" -Age 30 -FavoriteColor "Red"`
- Parameters can be made optional by assigning default values to them.
- Validation can be added for the parameters. Couple of examples are listed above including `ValidateRange` which
  validates the input against a range of values and `ValidateSet` which validates the input against a set of values.
- When the switch parameter is uncalled the default value is false.

:::tip
Compressing a folder using powershell

```powershell
Compress-Archive -Path .\folder -CompressionLevel Fastest -DestinationPath .\folder.zip
```

:::

### Flow Control

#### If-Else

Powershell provides `if`, `elseif` and `else` keywords.

```powershell
if ($Flag) {
    Write-Host "Flag is true"
} else {
    Write-Host "Flag is false"
}
```

:::tip
Useful keywords in if-else statements

- `-eq` - Equal
- `-ne` - Not Equal
- `-gt` - Greater Than
- `-ge` - Greater Than or Equal
- `-lt` - Less Than
- `-le` - Less Than or Equal
- `-and` - Logical And
- `-or` - Logical Or
- `-not` - Logical Not

:::
