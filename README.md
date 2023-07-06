# customDBJS

A simple database project written in JavaScript to parse and execute queries

## Project Status

This project is currently in development. It is not yet ready for use. Feel free to explore the code and contribute if you're interested.

## Scripts

### `npm start`

Runs the app in terminal

### `npm test`

Launches Jest test runner
[learn more](https://jestjs.io/docs/getting-started)

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

## Add Comments

```sql
-- Some comment
```

Any command under -- will not execute.
