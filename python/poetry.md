# POETRY

**Reference**: [Poetry CLI](https://python-poetry.org/docs/cli/)

- [POETRY](#poetry)
  - [pipx setup for CLI management](#pipx-setup-for-cli-management)
  - [Poetry Setup](#poetry-setup)
  - [Poetry Management](#poetry-management)
    - [Setup Poetry project](#setup-poetry-project)
    - [Create or Activate virtual environment](#create-or-activate-virtual-environment)
    - [Install dependencies](#install-dependencies)
    - [Update depenedencies](#update-depenedencies)
    - [Install new dependencies](#install-new-dependencies)
    - [Uninstall dependencies](#uninstall-dependencies)
    - [List dependencies](#list-dependencies)
    - [Build Project](#build-project)
    - [Publish Project](#publish-project)
  - [Internal PyPI](#internal-pypi)
    - [Setup Internal Server (Server Side)](#setup-internal-server-server-side)
    - [Publish to internal server via poetry (Client Side)](#publish-to-internal-server-via-poetry-client-side)

## pipx setup for CLI management

1. Install pipx for global CLI availability
   **Reference**: [pipx-in-pipx](https://pypi.org/project/pipx-in-pipx/)
   > pip install pipx-in-pipx
2. If the `pipx-in-pipx` not working directly
   1. Install pipx globally first
      > pip install pipx
   2. Install pipx inside pipx
      > pipx install pipx
   3. Ensure pipx path in enironment variables
      > pipx ensurepath
   4. Uninstall pipx in global environment, one inside pipx should be enough
      > pip uninstall pipx -y

## Poetry Setup

1. Install using pipx to have the CLI available globally
   > pipx install poetry
2. Make poetry to create virtualenv inside project
   > poetry config virtualenvs.in-project true

## Poetry Management

### Setup Poetry project

1. Setup Poetry project using the below command
   > poetry init
2. Provide the required details asked by poetry CLI to create pyproject.toml file

### Create or Activate virtual environment

Virtual environment will also get activated by default while running other commands like 'poetry install'

> poetry shell

### Install dependencies

1. Install all dependencies
   > poetry install
2. Install with groups
   > poetry install with dev
3. Sync environment with lock file
   > poetry install --sync

### Update depenedencies

1. Update all dependencies
   > poetry update
2. Update specific dependencies
   > poetry update requests toml

### Install new dependencies

1. Install latest version
   > poetry add requests pendulum
2. Install and allow minor version update (Allow >=2.0.5, <3.0.0 versions)
   > poetry add pendulum@^2.0.5
3. Install and allow bugfix version update (Allow >=2.0.5, <2.1.0 versions)
   > poetry add pendulum@~2.0.5
4. Install without upperbound (Allow >=2.0.5 versions, without upper bound)
   > poetry add "pendulum>=2.0.5"
5. Install only specified version (Allow only 2.0.5 version)
   > poetry add pendulum==2.0.5
6. Add git dependency
   > poetry add git+https://github.com/sdispater/pendulum.git
7. Add local dependency
   > poetry add ../my-package/dist/my_package-0.1.0.whl
8. Add dependency to a group. The below command will add pytest to dev dependencies
   > poetry add pytest -G dev

### Uninstall dependencies

1. Uninstall a dependency
   > poetry remove pendulum
2. Uninstall a dependency from a specific group
   > poetry remove pytest --group dev

### List dependencies

1. List all dependencies
   > poetry show
2. List specific dependency
   > poetry show pendulum

### Build Project

> poetry build

### Publish Project

> poetry publish

## Internal PyPI

Internal pypi server can be hosted in pc via `pypiserver` package

### Setup Internal Server (Server Side)

1. Install `pypiserver` in pipx
   > pipx install pypiserver
2. Setup a folder to act as pypi server<br>
   _Recommendation_: Create a sub directory `packages`
3. Run the server.

   > pypi-server run -p 8080 -P . -a . --hash-algo=sha256 packages

   -p 8080: Port to be used to serve<br>
   -P . -a .: No password file and no authentication<br>
   --hash-algo=sha256: hash algo to generate links<br>
   packages: path to publish packages<br>

### Publish to internal server via poetry (Client Side)

1. Configure the internal PyPI URL in poetry
   > poetry config repositories.internal_pypi http:/localhost:8080
2. Publish to internal PyPI
   > poetry publish -r internal_pypi
