---
sidebar_label: 'Ruff (Formatter & Linter)'
sidebar_level: 2
---

# Ruff Formatter and Linter

## Ruff

Ruff is a powerful python code formatter and linter written in Rust.

:::note
For more details refer official documentation: [Ruff](https://docs.astral.sh/ruff/)
:::

## Installing Ruff

- Ruff VS Code extension: [Ruff Extension](https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff)
- Ruff python CLI: [Ruff CLI](https://pypi.org/project/ruff/)

:::tip
Extensions can come in handy during development as it shows warning as we write and CLI can help in extensive
validation and fixing.
:::

## Configuration

Ruff claims to be an alternative for `black`, `flake8`, `pydocstyle`, `isort` etc.,

### Configure Extension

Ruff VS Code Extension can be configured via VS Code settings or settings.json. For easy reference settings.json is
captured here for example.

`settings.json`

```json
{
    "editor.formatOnSave": true,
    "[python]": {
        "editor.defaultFormatter": "charliermarsh.ruff"
    },
    "ruff.lineLength": 120
}
```

### Configuring CLI

Ruff CLI can be configured from pyproject.toml and ruff.toml. I would recommend ruff.toml for cleaner configuration
and separation of concerns. This also makes the pyproject toml clutter free for poetry.

`ruff.toml`

```toml
# Indentations
line-length = 120

# Includes
include = ["project_template/**/*.py"]

# Other Configs
show-fixes = true

# Lints

[lint]
select = [
    "E",    # pycodestyle Errors
    "W",    # pycodestyle Warnings
    "F",    # Pyflakes
    "I",    # isort
    "B",    # flake8-bugbear
    "C4",   # flake8-comprehensions
    "D",    # pydocstyle
    "N",    # pep8-naming
    "UP",   # pyupgrade
    "PL",   # Pylint
    "SIM",  # flake8-simplify
    "TC",   # flake8-type-checking
]

[lint.pydocstyle]
convention = "google"   # Google Style Docstring. Can be "numpy", "pep257", or "google"

[lint.per-file-ignores]
"__init__.py" = ["F401"]    # Ignore "F401: 'module' imported but unused" in __init__.py files

```

#### Useful Commands for Ruff CLI

1. Run Ruff checker / linter

   ```powershell
   ruff check
   ```

2. Run Ruff checker and fix possible errors

   ```powershell
   ruff check --fix
   ```

3. List all available linters from Ruff

   ```powershell
   ruff linter  
   ```

   :::info
   The linters can be configured in pytoml file.
   :::

4. Check only specific errors

   ```powershell
   ruff check --select I
   ```
