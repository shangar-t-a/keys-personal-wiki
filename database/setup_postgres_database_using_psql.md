# Setup Postgres Database using psql

- [Setup Postgres Database using psql](#setup-postgres-database-using-psql)
  - [Launch Postgres Command Line Interface](#launch-postgres-command-line-interface)
  - [Create a New User and Database](#create-a-new-user-and-database)
    - [Useful Commands](#useful-commands)
    - [Create a New User](#create-a-new-user)
    - [Create a New Database](#create-a-new-database)

## Launch Postgres Command Line Interface

1. Open CMD or PowerShell.

2. Go to the directory where you have psql executable file installed for Postgres. Typically,
   `"C:\Program Files\PostgreSQL\<version>\bin"`. Alternatively, you can add this path to the system to access it from
   anywhere.

3. Run the following command to connect to the Postgres server.

   ```powershell
   psql -U postgres
   ```

   > [!NOTE]
   > - You will be prompted to enter the password for the user. Enter the password and press Enter.
   > - The password will not be visible on the screen.
   > - This password is the one you set during the installation of Postgres.

4. To disconnect from the Postgres server, run the below command.

   ```shell
   \q
   ```

## Create a New User and Database

### Useful Commands

1. To check the list of users available in the Postgres server, run the below command.

   ```shell
   \du
   ```

2. To check the list of databases available in the Postgres server, run the below command.

   ```shell
   \l
   ```

### Create a New User

1. Login to the Postgres server using the default user `postgres`.

   ```powershell
   psql -U postgres
   ```

2. Run the below command to create a new user.

   ```sql
   CREATE USER <username> WITH PASSWORD '<password>';
   ```

   > [!NOTE]
   > Replace `<username>` with the username you want to use and `<password>` with the password you want to set.

3. Check the list of users to verify if the user is created. Run the below command.

   ```shell
   \du
   ```

   The newly created user should be listed in the output.

4. Exit from shell and login using the newly created user.

   ```shell
   \q
   ```

   ```powershell
   psql -U <username> -d postgres
   ```

   > [!NOTE]
   > - Replace `<username>` with the username you want to use. Not providing the database name will try to connect to
   > a database with the same name as the username. If the database does not exist, you will get an error.
   > - To avoid this, here we are connecting to the default database `postgres`.

### Create a New Database

1. Login to the Postgres server using the user you want to use.

   ```powershell
   psql -U <username> -d postgres
   ```

   > [!NOTE]
   > - Replace `<username>` with the username you want to use. Not providing the database name will try to connect to
   > a database with the same name as the username. If the database does not exist, you will get an error.
   > - To avoid this, here we are connecting to the default database `postgres`.

2. Run the below command to list all available databases.

   ```shell
   \l
   ```

3. To create DB for a user, the user should have the `CREATEDB` privilege. If the user does not have this privilege, you
   can grant it using the below command. Before running this command, make sure you are logged in as the default user
   `postgres`.

   ```powershell
   psql -U postgres
   ```

   ```shell
   ALTER USER <username> CREATEDB;
   ```

   > [!NOTE]
   > Replace `<username>` with the username you want to use.

4. Exit from shell and login using the user you want to use to create a new database. Run the below command to create a
   new database.

   ```powershell
   psql -U <username> -d postgres
   ```

   ```sql
   CREATE DATABASE <database_name>;
   ```

   > [!NOTE]
   > Replace `<database_name>` with the name you want to use for the database.
