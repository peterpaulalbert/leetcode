SELECT
    ROUND(
        SUM(CASE 
            WHEN d2.event_date IS NOT NULL
            THEN 1.
            ELSE 0.
            END)
            /
            (COUNT(DISTINCT d1.player_id) * 1.)
        , 2) AS fraction
FROM
    (
        SELECT
            player_id,
            MIN(event_date) AS first_login
        FROM
            Activity
        GROUP BY
            player_id
    ) AS d1
    LEFT OUTER JOIN Activity AS d2
        ON d1.player_id = d2.player_id
        AND d1.first_login = DATE_ADD(d2.event_date, INTERVAL -1 DAY)