SELECT
    results
FROM
    (
        SELECT
            u.name AS results
        FROM
            (
                SELECT
                    user_id,
                    COUNT(*) AS ratings
                FROM
                    MovieRating
                GROUP BY
                    user_id
            ) AS r
            LEFT OUTER JOIN Users AS u
                ON r.user_id = u.user_id
        ORDER BY
            r.ratings DESC,
            u.name ASC
        LIMIT 1
    ) AS u

UNION ALL

SELECT
    m.results
FROM
    (
        SELECT
            m.title AS results
        FROM
            (
                SELECT
                    movie_id,
                    AVG(rating * 1.) AS ratings
                FROM
                    MovieRating
                WHERE
                    created_at BETWEEN '2020-02-01' AND '2020-02-29'
                GROUP BY
                    movie_id
            ) AS r
            LEFT OUTER JOIN Movies AS m
                ON r.movie_id = m.movie_id
        ORDER BY
            r.ratings DESC,
            m.title ASC
        LIMIT 1
    ) AS m