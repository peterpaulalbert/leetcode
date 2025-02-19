SELECT
    e.name
FROM
    Employee AS e
    INNER JOIN
    (
        SELECT
            managerId
        FROM
            Employee
        GROUP BY
            managerId
        HAVING
            COUNT(managerId) >= 5
    ) AS m
        ON e.id = m.managerId