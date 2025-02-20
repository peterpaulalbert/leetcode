SELECT
    ROUND(
        (
            SUM(CASE 
                WHEN d.order_date = d.customer_pref_delivery_date 
                THEN 1. 
                ELSE 0.
                END) 
            / SUM(1.)
        ) * 100,
        2) AS immediate_percentage
FROM
    (
        SELECT
            customer_id,
            MIN(order_date) AS first_order_date
        FROM
            Delivery
        GROUP BY
            customer_id
    ) AS f
    LEFT OUTER JOIN Delivery AS d
        ON f.customer_id = d.customer_id
        AND f.first_order_date = d.order_date