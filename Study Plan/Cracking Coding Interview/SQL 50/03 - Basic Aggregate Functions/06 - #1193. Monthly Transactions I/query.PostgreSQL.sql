SELECT
    LEFT(to_char(trans_date, 'YYYY-MM-DD'), 7) AS month,
    country,

    SUM(1) AS trans_count,
    SUM(CASE WHEN state='approved' THEN 1 ELSE 0 END) AS approved_count,
    
    SUM(amount) AS trans_total_amount,
    SUM(CASE WHEN state='approved' THEN amount ELSE 0 END) AS approved_total_amount
FROM
    Transactions
GROUP BY
    LEFT(to_char(trans_date, 'YYYY-MM-DD'), 7),
    country