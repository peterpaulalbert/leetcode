/* Write your T-SQL query statement below */
SELECT
    t.id
FROM
    Weather AS t
    INNER JOIN Weather AS y
        ON t.recordDate = DATEADD(day, 1, y.recordDate)
        AND t.temperature > y.temperature