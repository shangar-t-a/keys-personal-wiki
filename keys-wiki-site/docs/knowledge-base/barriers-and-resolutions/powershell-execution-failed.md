---
sidebar_label: 'Update PowerShell Execution Policy'
sidebar_level: 2
---

# Resolving PowerShell Execution Issue Due to Execution Policy

PowerShell scripts often fail to execute due to the system's execution policy. The execution policy is a safety feature
that controls the conditions under which PowerShell loads configuration files and runs scripts. Here's how you can
resolve this issue:

:::note
**Sample Error Message:** *running scripts is disabled on this system. For more information, see
about_Execution_Policies at [https://go.microsoft.com/fwlink/?LinkID=135170](https://go.microsoft.com/fwlink/?LinkID=135170).*
:::

## Check Current Execution Policy

First, check your current execution policy. Open PowerShell and run the following command:

```powershell
Get-ExecutionPolicy
```

## Change Execution Policy

If the returned policy is `Restricted`, PowerShell prevents scripts from running. To change this, you can set the
policy to `Unrestricted`, `RemoteSigned`, or `Bypass`.

**Unrestricted**: This policy allows all scripts to run.

```powershell
Set-ExecutionPolicy Unrestricted
```

**RemoteSigned**: This policy allows scripts downloaded from the internet to run if they are signed by a trusted
publisher.

```powershell
Set-ExecutionPolicy RemoteSigned
```

**Bypass**: This policy allows all scripts to run, regardless of where they come from and whether they are signed.

```powershell
Set-ExecutionPolicy Bypass
```

:::caution
Changing the execution policy might expose your system to risks. Understand the implications of each policy before
changing it.
:::

## Run Script with Policy Change

If you don't want to change the system-wide policy, you can run your script with a temporary policy change:

```powershell
powershell -ExecutionPolicy Bypass -File script.ps1
```

This command runs `script.ps1` with the `Bypass` policy, regardless of the system's execution policy.

## Execution Policy Scope (Recommended)

You can also change the execution policy for a particular scope (CurrentUser, LocalMachine, etc.):

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

This command changes the execution policy for the current user only.

Remember to always run PowerShell as an administrator when changing the execution policy.
