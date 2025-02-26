SELECT
    p.product_name,
    o.unit
FROM
    (
        SELECT
            product_id,
            SUM(unit) AS unit
        FROM
            Orders
        WHERE
            order_date BETWEEN '2020-02-01' AND '2020-02-29'
        GROUP BY
            product_id
        HAVING
            SUM(unit) >= 100
    ) AS o
    LEFT OUTER JOIN Products AS p
        ON o.product_id = p.product_id