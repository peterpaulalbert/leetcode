DECLARE @secondHighest AS integer;

SELECT
    @secondHighest = salary
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

SELECT
    @secondHighest AS SecondHighestSalary;