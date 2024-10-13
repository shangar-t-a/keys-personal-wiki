---
sidebar_label: 'Pyenv (Py Version Management)'
sidebar_level: 2
---

# Python Version Management & Pyenv

## Python Version Management

- Handling multiple Python versions can be a pain, especially when working on multiple projects that require different
  versions of Python.
- Some tips and tricks to manage multiple Python versions effectively:

1. Python 3 supports easy command-line access to the Python interpreters using `Py` command. This also allows to
   use different versions of Python installed on the system without changing the system Python or updating the PATH
   variable.

   ```bash
   # List all available Python versions
   py -0

   # Run a specific Python version
   py -3.12 --version

   # Install packages using pip for a specific Python version
   py -3.12 -m pip install <package_name>
   ```

2. Use `pyenv` to manage multiple Python versions on a single machine. It allows to set the Python version on a
   per-project basis without actually changing the system Python or installing Python packages globally.

## Pyenv Introduction

- Pyenv is a Python version management tool that allows to easily switch between different versions of Python.
- It helps install, manage and switch between multiple versions of Python on a single machine without conflicting
  with the system Python.
- It allows to set the Python version on a per-project basis without actually changing the system Python or installing
  Python packages globally.

### Installation

- Follow the official `pyenv-windows` installation page to setup pyenv in windows.
- Reference: [Official pyenv-win Installation Guide](https://pyenv-win.github.io/pyenv-win/)

:::info

- `PowerShell` is the easiest way to setup or install pyenv in windows.
- [Install pyenv using Powershell](https://pyenv-win.github.io/pyenv-win/docs/installation.html#powershell)

:::

### Usage

#### Basic pyenv commands

1. Pyenv version. To check pyenv is installed correctly and to check the version of pyenv.

   ```bash
   pyenv --version
   ```

2. List all available Python versions that can be installed using pyenv.

   ```bash
   pyenv install --list
   ```

3. Install a specific version of Python using pyenv.

   ```bash
   pyenv install <python_version>
   ```

4. List all installed Python versions using pyenv.

   ```bash
   pyenv versions
   ```

5. Set a specific version of Python as the global version using pyenv.

   ```bash
   pyenv global <python_version>
   ```

6. Set a specific version of Python as the local version for a specific directory using pyenv.

   ```bash
   pyenv local <python_version>
   ```

7. Remove a specific version of Python using pyenv.

   ```bash
   pyenv uninstall <python_version>
   ```

#### Use pyenv in poetry project

1. Navigate to the project directory where the `pyproject.toml` file is located and set the local python version using
   pyenv.

   ```bash
   pyenv local <python_version>
   ```

2. Create a virtual environment using poetry with the local python version set using pyenv.

   ```bash
   poetry env use $(pyenv which python)
   ```

   Alternatively, poetry install can be used to create a virtual environment with the local python version set using
   pyenv.

   ```bash
   poetry install
   ```
