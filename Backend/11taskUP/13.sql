SELECT user.NAME FROM `kyky`.user
	JOIN `kyky`.photo_post ON user.USER_ID = photo_post.USER_ID
	WHERE DATE(photo_post.CREATE_DATE) = DATE(NOW())
    GROUP BY user.NAME
    HAVING COUNT(photo_post.POST_ID) > 3