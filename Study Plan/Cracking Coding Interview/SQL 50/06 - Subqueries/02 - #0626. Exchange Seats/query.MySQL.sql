SELECT
    s1.id,
    COALESCE(s2.student, s1.student) AS student
FROM
    Seat AS s1
    LEFT OUTER JOIN Seat AS s2
        ON s1.id <> s2.id
        AND ROUND(s1.id / 2., 0) = ROUND(s2.id / 2., 0)