SELECT
    u.unique_id,
    e.name
FROM
    employees AS e
    LEFT OUTER JOIN employeeuni AS u
        ON e.id = u.id