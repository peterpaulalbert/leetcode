SELECT
    c.category,
    COALESCE(a.accounts_count, 0) AS accounts_count
FROM
    (
        SELECT 'Low Salary' AS category
        UNION ALL
        SELECT 'Average Salary' AS category
        UNION ALL
        SELECT 'High Salary' AS category
    ) AS c
    LEFT OUTER JOIN
    (
        SELECT
            CASE
                WHEN income < 20000
                THEN 'Low Salary'
                WHEN income > 50000
                THEN 'High Salary'
                ELSE 'Average Salary'
                END AS category,
            SUM(1) AS accounts_count
        FROM
            Accounts
        GROUP BY
            CASE
                WHEN income < 20000
                THEN 'Low Salary'
                WHEN income > 50000
                THEN 'High Salary'
                ELSE 'Average Salary'
                END
    ) AS a
        ON c.category = a.category