SELECT
    user_id,
    UPPER(LEFT(name, 1)) + SUBSTRING(LOWER(name), 2, LEN(name)-1) AS name
FROM
    Users
ORDER BY
    user_id ASC