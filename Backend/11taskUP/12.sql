SELECT NAME, usersTable.USER_ID, COALESCE(
(SELECT COUNT(*) FROM `kyky`.photo_post
	JOIN `kyky`.user ON user.USER_ID = photo_post.USER_ID
	WHERE DAY(photo_post.CREATE_DATE) = 9
			AND MONTH(photo_post.CREATE_DATE) = 5
			AND photo_post.USER_ID = usersTable.USER_ID
	), 0) as 'Posts Count'
	FROM `kyky`.photo_post
	RIGHT JOIN `kyky`.user as usersTable ON usersTable.USER_ID = photo_post.USER_ID
	GROUP BY usersTable.USER_ID