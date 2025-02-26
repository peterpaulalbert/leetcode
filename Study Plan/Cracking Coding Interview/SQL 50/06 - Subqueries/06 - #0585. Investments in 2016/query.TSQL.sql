SELECT
    ROUND(SUM(i.tiv_2016), 2) AS tiv_2016
FROM
    Insurance AS i
    INNER JOIN 
    (
		SELECT DISTINCT
			i.pid
		FROM
			Insurance AS i
			LEFT OUTER JOIN Insurance AS l
				ON i.pid <> l.pid
				AND i.lat = l.lat
				AND i.lon = l.lon
		WHERE
			l.pid IS NULL
    ) AS l
        ON i.pid = l.pid
	INNER JOIN
	(
		SELECT DISTINCT
			i.pid
		FROM
			Insurance AS i
			INNER JOIN Insurance AS l
				ON i.pid <> l.pid
				AND i.tiv_2015 = l.tiv_2015
	) as tiv
		ON i.pid = tiv.pid