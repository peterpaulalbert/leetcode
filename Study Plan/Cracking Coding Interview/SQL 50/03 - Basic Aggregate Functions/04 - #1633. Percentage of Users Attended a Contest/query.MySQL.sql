SELECT
    c.contest_id,
    ROUND((SUM(CASE WHEN r.user_id IS NOT NULL THEN 1. ELSE 0. END) / (COUNT(u.user_id) * 1.)) * 100., 2)  AS percentage
FROM
    Users AS u
    CROSS JOIN
    (
        SELECT DISTINCT 
            contest_id 
        FROM Register
    ) AS c
    LEFT OUTER JOIN Register AS r
        ON u.user_id = r.user_id
        AND c.contest_id = r.contest_id
GROUP BY
    c.contest_id
ORDER BY
    2 DESC, 
    1 ASC