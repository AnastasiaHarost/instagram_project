SELECT user.NAME, DATE_FORMAT(photo_post.CREATE_DATE, '%k:%i') as time, photo_post.DECSRIPTION
	FROM `kyky`.photo_post
	JOIN `kyky`.user ON user.USER_ID = photo_post.USER_ID
    ORDER BY photo_post.CREATE_DATE