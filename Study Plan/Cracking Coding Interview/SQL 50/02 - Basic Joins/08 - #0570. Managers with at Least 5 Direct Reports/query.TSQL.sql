SELECT
    e.[name]
FROM
    Employee AS e WITH(NOLOCK)
    INNER JOIN
    (
        SELECT
            managerId
        FROM
            Employee WITH(NOLOCK)
        GROUP BY
            managerId
        HAVING
            COUNT(managerId) >= 5
    ) AS m
        ON e.id = m.managerId