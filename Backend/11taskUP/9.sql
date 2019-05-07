SELECT user.NAME, photo_post.CREATE_DATE FROM `kyky`.photo_post
	JOIN `kyky`.user ON user.USER_ID = photo_post.USER_ID
    WHERE LENGTH(photo_post.DECSRIPTION) > 8