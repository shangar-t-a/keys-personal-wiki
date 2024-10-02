# Poetry Python Dependency Management

**Reference**: [Poetry CLI](https://python-poetry.org/docs/cli/)

## pipx setup for CLI management

1. Install pipx for global CLI availability
   **Reference**: [pipx-in-pipx](https://pypi.org/project/pipx-in-pipx/)

   ```powershell
   pip install pipx-in-pipx
   ```

2. If the `pipx-in-pipx` not working directly
   1. Install pipx globally first

      ```powershell
      pip install pipx
      ```

   2. Install pipx inside pipx

      ```powershell
      pipx install pipx
      ```

   3. Ensure pipx path in environment variables

      ```powershell
      pipx ensurepath
      ```

   4. Uninstall pipx in global environment, one inside pipx should be enough

      ```powershell
      pip uninstall pipx -y
      ```

## Poetry Setup

1. Install using pipx to have the CLI available globally

   ```powershell
   pipx install poetry
   ```

2. Make poetry to create virtualenv inside project

   ```powershell
   poetry config virtualenvs.in-project true
   ```

## Poetry Management

### Setup Poetry project

1. Setup Poetry project using the below command

   ```powershell
   poetry init
   ```

2. Provide the required details asked by poetry CLI to create pyproject.toml file

### Create or Activate virtual environment

Virtual environment will also get activated by default while running other commands like 'poetry install'

```powershell
poetry shell
```

### Install dependencies

1. Install all dependencies

   ```powershell
   poetry install
   ```

2. Install with groups

   ```powershell
   poetry install with dev
   ```

3. Sync environment with lock file

   ```powershell
   poetry install --sync
   ```

### Update dependencies

1. Update all dependencies

   ```powershell
   poetry update
   ```

2. Update specific dependencies

   ```powershell
   poetry update requests toml
   ```

### Install new dependencies

1. Install latest version

   ```powershell
   poetry add requests pendulum
   ```

2. Install and allow minor version update `(Allow >=2.0.5, <3.0.0 versions)`

   ```powershell
   poetry add pendulum@^2.0.5
   ```

3. Install and allow bugfix version update `(Allow >=2.0.5, <2.1.0 versions)`

   ```powershell
   poetry add pendulum@~2.0.5
   ```

4. Install without upperbound `(Allow >=2.0.5 versions, without upper bound)`

   ```powershell
   poetry add "pendulum>=2.0.5"
   ```

5. Install only specified version `(Allow only 2.0.5 version)`

   ```powershell
   poetry add pendulum==2.0.5
   ```

6. Add git dependency

   ```powershell
   poetry add git+[https://github.com/sdispater/pendulum.git](https://github.com/sdispater/pendulum.git)
   ```

7. Add local dependency

   ```powershell
   poetry add ../my-package/dist/my_package-0.1.0.whl
   ```

8. Add dependency to a group. The below command will add pytest to dev dependencies

   ```powershell
   poetry add pytest -G dev
   ```

### Uninstall dependencies

1. Uninstall a dependency

   ```powershell
   poetry remove pendulum
   ```

2. Uninstall a dependency from a specific group

   ```powershell
   poetry remove pytest --group dev
   ```

### List dependencies

1. List all dependencies

   ```powershell
   poetry show
   ```

2. List all dependencies with branching

   ```powershell
   poetry show --tree
   ```

3. List specific dependency

   ```powershell
   poetry show pendulum
   ```

### Build Project

```powershell
poetry build
```

### Publish Project

```powershell
poetry publish
```

## Internal PyPI

Internal pypi server can be hosted in pc via `pypiserver` package

### Setup Internal Server (Server Side)

1. Install `pypiserver` in pipx

   ```powershell
   pipx install pypiserver
   ```

2. Setup a folder to act as pypi server  
   _Recommendation_: Create a sub directory `packages`
3. Run the server.

   ```powershell
   pypi-server run -p 8080 -P . -a . --hash-algo=sha256 packages
   ```

   -p 8080: Port to be used to serve  
   -P . -a .: No password file and no authentication  
   --hash-algo=sha256: hash algo to generate links  
   packages: path to publish packages

### Publish to internal server via poetry (Client Side)

1. Configure the internal PyPI URL in poetry

   ```powershell
   poetry config repositories.internal_pypi http:/localhost:8080
   ```

2. Publish to internal PyPI

   ```powershell
   poetry publish -r internal_pypi
   ```
