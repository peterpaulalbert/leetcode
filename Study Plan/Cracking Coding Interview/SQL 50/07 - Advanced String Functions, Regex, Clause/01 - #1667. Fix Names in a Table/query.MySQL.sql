SELECT
    user_id,
    CONCAT(UPPER(LEFT(name, 1)), SUBSTRING(LOWER(name), 2, LENGTH(name)-1)) AS name
FROM
    Users
ORDER BY
    user_id ASC