SELECT
    d.visited_on,
    SUM(amount * 1.) AS amount,
    ROUND(SUM(amount * 1.) / 7., 2) AS average_amount
FROM
    (
        SELECT DISTINCT
            visited_on
        FROM
            Customer
    ) AS d
    LEFT OUTER JOIN Customer AS v
        ON v.visited_on <= d.visited_on 
        AND v.visited_on >= DATEADD(day, -6, d.visited_on)
GROUP BY
    d.visited_on
HAVING
    MIN(v.visited_on) = DATEADD(day, -6, d.visited_on)
ORDER BY
    visited_on ASC