SELECT
    t.id
FROM
    Weather AS t
    INNER JOIN Weather AS y
        ON t.recordDate = DATE_ADD(y.recordDate, INTERVAL 1 DAY)
        AND t.temperature > y.temperature