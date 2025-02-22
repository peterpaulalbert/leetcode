SELECT
    s.product_id,
    f.first_year,
    SUM(s.quantity) AS quantity,
    s.price
FROM
    sales AS s
    INNER JOIN 
    (
        SELECT
            product_id,
            MIN(year) AS first_year
        FROM
            sales AS s
        GROUP BY
            product_id
    ) AS f
        ON s.product_id = f.product_id
        AND s.year = f.first_year
GROUP BY
    s.product_id,
    f.first_year,
    s.price