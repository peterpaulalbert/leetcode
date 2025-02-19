SELECT
    e.name,
    b.bonus
FROM
    Employee AS e
    LEFT OUTER JOIN Bonus AS b
        ON e.empId = b.empId
WHERE
    CASE WHEN ISNULL(b.bonus) THEN 0 ELSE b.bonus END < 1000
