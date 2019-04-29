<%--
  Created by IntelliJ IDEA.
  User: fpm.kazachin
  Date: 2019-04-29
  Time: 10:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>glebogram</title>
    <link rel = "stylesheet" href = "resources/styles/styles.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="shortcut icon" href="images/logo.png" type="image/x-icon">
</head>
<body>
<header>
    <h1 class = "site-name"> glebogram </h1>
    <button data-action="add-post" class="add-post-btn"><i class="fas fa-plus fa-2x"></i></button>
    <div class = "user-name"></div>
    <button data-action="log-out" class = "log-out-btn"><i class="fas fa-sign-out-alt fa-2x"></i></button>
    <button data-action="sign-in" class = "sign-in-btn"><span class="sign-in-span">sign in</span></button>
</header>
<main>
    <form class="add-post-form">
        <input type="file" name="photo" multiple accept="image/*,image/jpeg" class = "photo-input">
        <div><p>user_name</p><input type = "text" placeholder="" class="inp-user" readonly></div>
        <div><p>current_date</p><div class="current-date"></div></div>
        <div><p>hashtags</p><textarea name="tags" class="add-post-form-tags" name="text"></textarea> </div>
        <div><p>photo description</p><textarea name="desc"  class="add-post-form-des" name = "text"></textarea></div>
        <button class="continue">continue</button>
    </form>
    <form class="authorization-form">
        <div><p>login</p><input class="input-login" type = "text"></div>
        <div><p>password</p><input class="input-password" type = "text"></div>
        <button class="login-auth">login</button>
    </form>
    <div id = "wrapper">
        <!--Here will be our posts-->
        <template id="post-template">
            <div class = "post">
                <p class = "postInfo">
                    <b data-target="author"></b><date data-target="createdAt"></date>
                </p>
                <div class="image">
                    <img data-target="photolink"  alt="1" width="640" height="640">
                </div>
                <div class = "description">
                    <button data-action="like" class="like-btn" ><span><i class="far fa-thumbs-up fa-2x"></span></i></button>
                    <button data-action="edit" class="edit-post-btn"><i class="far fa-edit fa-2x"></i></button>
                    <button data-action="delete" class="delete-post-btn"><i class="far fa-trash-alt fa-2x"></i></button>
                    <p class="likes-count" data-target="likes"></p>
                    <span class="text-description">
                            <b data-target="author"></b>
                            <div data-target="description"></div>
                            <button data-action="show-more-desc" class="description-button">...</button><br>
                        </span>
                    <ul class="tags-block">
                    </ul>
                </div>
            </div>
        </template>
    </div>
    <aside id = "sidebar">
        <form class="search-form" data-target="search-form">
            <input type="search" name="name" placeholder="search" class="input"/>
            <button class="submit"></button>
        </form>
        <button data-action="filter!" class = "filter"><span class = "filter-span">filter by date</span> </button>
        <form class="filter-form">
            <p>from </p><input class="date-input1" type="date" value="1999-12-22">
            <p><br>to </p><input class="date-input2" type="date" value="2019-04-04">
            <button class="filter-button-reset">reset</button>
            <button class="filter-button-confirm">filter!</button>
        </form>
    </aside>
</main>
<button id = "show-more">show more...</button>
<footer>
    <div class = "footer-site-name"> glebogram </div>
    <p class="footer-elems">
        <b>All content © 2019 Gleb Kazachynski</b>
        <b> FAMCS, 2 course 7 group</b>
        <b><time datetime="2019-03-21">last update - today ;)</time></b>
        <a href = "mailto: raul221299@gmail.com">raul221299@gmail.com</a>
    </p>
</footer>
<script src="resources/scripts/posts.js"></script>
<script src="resources/scripts/view.js"></script>
<script src="resources/scripts/MVC.js"></script>
<script src="resources/scripts/test.js"></script>
</body>
</html>
