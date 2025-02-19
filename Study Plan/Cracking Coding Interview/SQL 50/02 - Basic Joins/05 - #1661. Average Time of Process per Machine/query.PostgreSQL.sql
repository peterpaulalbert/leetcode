SELECT
    machine_id,
    ROUND(AVG(end_timestamp - start_timestamp)::numeric, 3) AS processing_time
FROM
    (
        SELECT
            machine_id,
            process_id,
            MAX(CASE
                WHEN activity_type = 'start'
                THEN timestamp
                ELSE NULL
                END) AS start_timestamp,
            MAX(CASE
                WHEN activity_type = 'end'
                THEN timestamp
                ELSE NULL
                END) AS end_timestamp
        FROM
            Activity
        GROUP BY
            machine_id,
            process_id
    ) AS t
GROUP BY
    machine_id