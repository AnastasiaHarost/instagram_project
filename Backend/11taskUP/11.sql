SELECT DATEDIFF(DATE(NOW()) , DATE(photo_post.CREATE_DATE)) FROM `kyky`.photo_post
	ORDER BY photo_post.CREATE_DATE
    LIMIT 1