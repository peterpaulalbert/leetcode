SELECT
    CASE
        WHEN COUNT(*) = 0
        THEN NULL
        ELSE salary
        END AS SecondHighestSalary
FROM
    (
        SELECT
            salary,
            ROW_NUMBER() OVER(ORDER BY salary DESC) AS RowSeq
        FROM   
            (
                SELECT DISTINCT
                    salary
                FROM
                    Employee
            ) AS d
    ) AS s
WHERE
    RowSeq = 2;