SELECT
    d.name AS Department,
    e.name AS Employee,
    e.salary AS Salary
FROM
    Employee AS e
    INNER JOIN 
    (
        SELECT
            departmentId,
            salary,
            RANK() OVER(PARTITION BY departmentId ORDER BY salary DESC) AS salaryRank
        FROM
            (
                SELECT DISTINCT
                    departmentId,
                    salary
                FROM
                    Employee
            ) AS s
    ) AS s
        ON e.departmentId = s.departmentId
        AND s.salaryRank <= 3
        AND e.salary = s.salary
    LEFT OUTER JOIN Department AS d
        ON e.departmentId = d.id