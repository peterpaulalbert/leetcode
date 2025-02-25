SELECT
    i.product_id,
    COALESCE(p.new_price, 10) AS price
FROM
    (
        SELECT DISTINCT
            product_id
        FROM
            Products
    ) AS i
    LEFT OUTER JOIN
    (
        SELECT
            product_id,
            MAX(change_date) AS change_date
        FROM
            Products
        WHERE
            change_date <= '2019-08-16'
        GROUP BY
            product_id
    ) AS d
        ON i.product_id = d.product_id
    LEFT OUTER JOIN Products AS p
        ON d.product_id = p.product_id
        AND d.change_date = p.change_date