DELETE FROM
    Person
WHERE
    id NOT IN 
    (
        SELECT
            MIN(id) AS id
        FROM
            Person
        GROUP BY
            email
    )