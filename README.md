# customDBJS

A simple database project written in JavaScript to parse and execute queries

## Project Status

This project is currently in development. It is not yet ready for use. Feel free to explore the code and contribute if you're interested.

## Scripts

### `npm start`

Runs the application in the terminal.

### `npm test`

Launches the Jest test runner for running automated tests. For more information about Jest, please refer to the [official documentation](https://jestjs.io/docs/getting-started)

### `prettier . --write`

Formats the code using Prettier to ensure consistent code style and formatting.

## SELECT statement on table

```sql
SELECT columnOne, columnTwo FROM tableName
SELECT * FROM tableName
SELECT * FROM tableName where {"columnOne": value}
```

throw error if no table exists

## INSERT a record in table

```sql
INSERT {"a" : 10, "B" : 20} INTO table
```

Creates table if it does not exists

## WHERE clause

```sql
SELECT * FROM tableName where {"columnOne": value}
```

## DELETE a record in table

```sql
DELETE FROM tableName where {"columnOne": value}
```

## Add Comments

```sql
-- Some comment here
```

You can add comments using the "--" syntax. Comments are ignored by the parser.
