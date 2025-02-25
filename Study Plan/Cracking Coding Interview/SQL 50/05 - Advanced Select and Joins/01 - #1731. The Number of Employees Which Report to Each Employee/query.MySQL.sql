SELECT
    e.employee_id,
    e.name,
    m.reports_count,
    m.average_age
FROM
    (
        SELECT
            reports_to AS employee_id,
            SUM(1) AS reports_count,
            ROUND(AVG(age * 1.), 0) AS average_age
        FROM   
            Employees
        GROUP BY
            reports_to
    ) AS m
    INNER JOIN Employees AS e
        ON m.employee_id = e.employee_id
ORDER BY
    e.employee_id