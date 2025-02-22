UPDATE STATISTICS Sales;
UPDATE STATISTICS Product;

SELECT
    s.product_id,
    f.first_year,
    SUM(s.quantity) AS quantity,
    s.price
FROM
    Sales AS s,
    (
        SELECT
            product_id,
            MIN(year) AS first_year
        FROM
            Sales AS s
        GROUP BY
            product_id
    ) AS f
WHERE
    s.product_id = f.product_id
    AND s.year = f.first_year
GROUP BY
    s.product_id,
    f.first_year,
    s.price