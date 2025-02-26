DELETE
    Person
FROM
    Person AS p
    LEFT OUTER JOIN
    (
        SELECT
            MIN(id) AS id
        FROM
            Person
        GROUP BY
            email
    ) AS f
        ON p.id = f.id
WHERE
    f.id IS NULL