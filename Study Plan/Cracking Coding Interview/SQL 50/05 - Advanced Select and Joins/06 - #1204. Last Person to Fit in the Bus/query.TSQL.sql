WITH cte AS
(
    SELECT
        turn,
        SUM(weight) OVER(ORDER BY turn ASC) AS running_weight
    FROM
        [Queue]
)
SELECT
    person_name
FROM
    [Queue]
WHERE
    turn =
    (
        SELECT
            MAX(turn)
        FROM
            cte
        WHERE
            running_weight <= 1000
    )