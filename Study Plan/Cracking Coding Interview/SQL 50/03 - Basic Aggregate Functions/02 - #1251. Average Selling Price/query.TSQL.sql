SELECT
    p.product_id,
    ROUND(SUM(p.price * ISNULL(s.units, 0.) * 1.) / ISNULL(SUM(s.units), 1.), 2) AS average_price 
FROM
    Prices AS p
    LEFT OUTER JOIN UnitsSold AS s
        ON p.product_id = s.product_id
        AND s.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY
    p.product_id