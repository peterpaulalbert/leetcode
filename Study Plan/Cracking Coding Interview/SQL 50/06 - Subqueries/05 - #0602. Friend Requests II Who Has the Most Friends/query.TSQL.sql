SELECT TOP 1
    [user] AS [id],
    SUM(1) AS [num]
FROM
    (
        SELECT
            requester_id AS [user],
            accepter_id AS friend
        FROM
            RequestAccepted
        
        UNION

        SELECT
            accepter_id AS [user],
            requester_id AS [friend]
        FROM
            RequestAccepted
    ) AS a
GROUP BY
    [user]
ORDER BY
    [num] DESC