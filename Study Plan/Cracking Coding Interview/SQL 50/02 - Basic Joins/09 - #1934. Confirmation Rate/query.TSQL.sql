SELECT
    s.user_id,
    ROUND(
        SUM(
            CASE c.action
            WHEN  'confirmed'
            THEN 1.
            ELSE 0.
            END) /
        ISNULL(SUM(1.), 1.),
        2) AS confirmation_rate
FROM
    Signups AS s
    LEFT OUTER JOIN Confirmations AS c
        ON s.user_id = c.user_id
GROUP BY
    s.user_id