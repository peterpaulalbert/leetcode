SELECT
    query_name,
    ROUND(SUM((rating * 1.) / (position * 1.)) / SUM(1.), 2) AS quality,
    ROUND((SUM(CASE WHEN rating * 1.  < 3. THEN 1 ELSE 0 END) / SUM(1.)) * 100., 2) AS poor_query_percentage
FROM
    Queries
GROUP BY
    query_name