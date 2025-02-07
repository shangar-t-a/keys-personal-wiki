---
sidebar_label: 'Database Normalization Forms (1-3)'
sidebar_level: 2
---
# Database Normalization

## What is Normalization?

Normalization is the process of organizing data in a database. This includes creating tables and establishing
relationships between those tables according to rules designed both to protect the data and to make the database more
flexible by eliminating redundancy and inconsistent dependency.

## Normal Forms

There are several normal forms, each with its own specific rules. The first three of these rules are the most commonly
used. They are as follows:

1. First Normal Form (1NF)
2. Second Normal Form (2NF)
3. Third Normal Form (3NF)

### First Normal Form (1NF)

1. Every column or attribute in a table must contain atomic values, and there should be no repeating groups of data.
   - In a user table, the address column should contain only one value, not multiple values. For example, the current
     address column should only have `<current_address>` and not `<current_address>`, `<permanent_address>`, etc.
2. Each row should be unique. No two rows should be identical. Either through a single column or a combination of
   columns, each row should be unique. Not mandatory, but it is a good practice to have a primary key in a table.

### Second Normal Form (2NF)

1. The table should be in 1NF.
2. All non-key attributes should be fully functional dependent on the candidate key.
   - `Candidate key`: A candidate key is a column or a set of columns that can be used to uniquely identify a row in a
     table. A table can have multiple candidate keys.
   - `Non key attributes`: Attributes that are not part of the candidate key are called non-key attributes.
   - If a non key attribute is partially dependent on the candidate key, then split the table into separate tables.
   - For example, consider a table with columns: `{user name, current address, service name, service description and
     service price}`. Here, the service name, service description, and service price are dependent on the service name
     whereas the current address is dependent on the user name. So, we need to split the table into two tables:
     `{user name, current address}` and `{service name, service description, service price}`. `{user name}` is the
     candidate key for the first table and `{service name}` is the candidate key for the second table.
3. Every table should have a primary key and relationships between tables should be defined using foreign keys.
   - If a table does not have a primary key, then create a primary key. For example, consider a table with columns:
     `{user name, current address}`. Here, the user name might not be unique when the user changes the address. So, we
     need to create a primary key for the table. We can add a new column called user id and make it the primary key.
   - If there is a relationship between two tables, then define the relationship using foreign keys. For example, if
     there is a relationship between the user table and the service table, then add a user id column in the service
     table and make it a foreign key. Similarly, add a service id column in the user table and make it a foreign key.
     This way user and service have a many-to-many relationship.
   - There is another way to define relationships between tables using a junction table. For example, consider a
     many-to-many relationship between the user table and the service table. In this case, we can create a junction
     table with columns `{user id, service id}` and define the relationship between the user table and the service
     table.

### Third Normal Form (3NF)

1. The table should be in 2NF.
2. Avoid transitive dependencies.
   - A transitive dependency is a type of functional dependency in which the value of a non-key attribute is dependent
     on another non-key attribute. For example, consider a table with columns: `{user name, current address, city,
     state, country}`. Here, the city, state, and country are dependent on the current address. So, we need to split
     the table into two tables: `{user name, current address}` and `{current address, city, state, country}`. `{user
     name}` is the candidate key for the first table and `{current address}` is the candidate key for the second table.

## Anomalies

Normalization helps to eliminate anomalies in a database. There are three types of anomalies:

- **Insertion anomaly**: When we try to insert data into a table, we may not be able to insert the data because of
  missing data in other columns. Or we may have to insert duplicate data. For example, if we try to insert only user
  then we may have to insert empty values for the service details. Or when try to insert multiple services for a user,
  we may have to insert duplicate user details of the user.
- **Deletion anomaly**: When we try to delete data from a table, we may lose other data that is dependent on the data
  we are deleting. For example, if we delete a user, we may lose the service details.
- **Update anomaly**: When we try to update data in a table, we may have to update the same data in multiple rows. For
  example, if we try to update the user name, we may have to update the user name in multiple rows. Or if we try to
  update the service price, we may have to update the service price in multiple rows.

## References

- [Database Normalization](https://www.youtube.com/watch?v=rBPQ5fg_kiY)
