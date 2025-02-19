SELECT
    e.name,
    b.bonus
FROM
    Employee AS e WITH(NOLOCK)
    LEFT OUTER JOIN Bonus AS b WITH(NOLOCK)
        ON e.empId = b.empId
WHERE
    ISNULL(b.bonus, 0) < 1000