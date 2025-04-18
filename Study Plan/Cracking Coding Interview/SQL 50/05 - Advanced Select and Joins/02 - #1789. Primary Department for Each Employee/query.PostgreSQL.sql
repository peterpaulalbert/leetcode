SELECT
    employee_id,
    department_id
FROM    
    (
        SELECT
            employee_id,
            department_id
        FROM    
            Employee
        WHERE
            primary_flag = 'Y'
    )
    UNION ALL
    (
        SELECT
            employee_id,
            MIN(department_id) AS department_id
        FROM    
            Employee
        GROUP BY
            employee_id
        HAVING
            COUNT(*) = 1
    )