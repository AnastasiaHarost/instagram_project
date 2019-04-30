<%--
  Created by IntelliJ IDEA.
  User: fpm.kazachin
  Date: 2019-04-29
  Time: 10:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <title>guest main page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = "resources/styles.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>
<body>
<header>
    <h2 class = "site-name">Photoblog</h2>
    <form action="javascript:alert('hi')" method="post" class="search-form">
        <input type="search" name="search" placeholder="search" class="input" />
        <button type="submit" class="submit"></button>
    </form>
    <div class="btn-group">
        <button class="btn-group1 btn">Date</button>

        <button class="btn-group2 btn">User_name</button>

        <div class="dropdown-group">
            <label class="btn" for="hash-btn">Hashtags</label>
            <input type="checkbox" class="marker" id="hash-btn"/>
            <div class="dropdown-modal">
                <select multiple name="hashtags" class="select-param">
                    <option value="cat">cat</option>
                    <option value="home">home</option>
                </select>
            </div>
        </div>

    </div>
    <div class="user"></div>
    <div class = "log-out">
        <button class = "log-out">Log out</button>
    </div>
    <div class = "log-in">
        <button class = "log-in">Sign in</button>
    </div>
</header>
<asside class="main-filters">
    <form id="main-filter-form">
        <div class="filt-data hide">
            <div class="from-data"><p class="from">From:</p>
                <input type="date" class="field-filter-from" value="1999-12-22" name="dateFrom" >
            </div>
            <div class="to-data"><p class="to">To:</p>
                <input type="date" class="field-filter-to"  value="2999-12-22" name="dateTo" >
            </div>
            <div class="filter-container">
                <button class="continue-btn">Continue</button>
            </div>
        </div>
        <div class="filt-user-name hide">
            <textarea class="input-user" placeholder="user_nickname" name="author"></textarea>
            <div class="filter-container">
                <button type="submit" class="continue-btn-uers">Continue</button>
            </div>
        </div>
    </form>
</asside>
<main class="main-def">
    <div class="btn-container">
        <a href="#" class="add-btn">add post</a>
    </div>
    <div class = "phototape">
        <template id="post-template">
            <div class = "post">
                <div class="user_name" data-target = "author">
                </div>
                <div class="image">
                    <img data-target="photoLink" alt = "cat" width= "100%" >
                </div>
                <button type="submit" class="like" data-action="like">
                    <i class="far fa-heart fa-lg"  data-fa-transform="shrink-8 right-6"  data-fa-transform="shrink-8 down-116"></i>
                </button>
                <button type="submit" class="edit" data-action="edit">
                    <i class="far fa-edit"  data-fa-transform="shrink-8 right-6"  data-fa-transform="shrink-8 down-116"></i>
                </button>
                <button type="submit" class="delete" data-action="delete" >
                    <i class="fas fa-trash-alt"  data-fa-transform="shrink-8 right-6"  data-fa-transform="shrink-8 down-116"></i>
                </button>
                <time class="post-time" data-target="create">
                </time>
                <div class="text-container">
                        <span><b class="likes-count" data-target="likes"></b>
                        <br><b data-target="author"></b>
                        <div class="description exspanded" data-target="description"></div>
                        <button  class="myBtn">show more</button>
                        </span>
                    <ul class="hashtags">
                    </ul>
                </div>
            </div>
        </template>
    </div>
    <div class="show-more-posts">
        <button><b>Show more posts</b></button>
    </div>
</main>
<main class="main-edit">
    <form class="edit-form">
        <input class="input-edit" type="file" name="photo" multiple accept="image/*,image/jpeg">
        <p class=edit-data><b>Author:</b><span class="usser-name"></span>
            <br><b>Data & Time:</b><span class="time"></span></p>
        <br><textarea class="tags" placeholder="#hashtags"></textarea>
        <br><textarea class="description-edit"  placeholder="Short description..."></textarea>
        <div class=btn-continue><a href="#" class="continue">Continue</a></div>
    </form>
</main>
<main class="main-delete">
    <div class="delete-form">
        <p class="del-question"><b>Delete post?</b>
        <hr><button class="del">Cancel</button>
        <hr class="vertical"><button class="cancel">Delete</button></p>
    </div>
</main>
<main class="main-log-form">
    <div class="log-form">
        <p class=title>Photoblog</p>
        <div class="login"><p class="log">Login</p>
            <textarea class="log-in-field"  ></textarea>
        </div>
        <div class="password"><p class="pas">Password</p>
            <textarea class="pas-in-field"  ></textarea>
        </div>
        <p class="wrong">*Wrong user or password</p>
        <div class="sign-in-btn">
            <a href="#" class="sign-btn">Sign in</a>
        </div>
    </div>
</main>
<footer>
    <h2 class = "site-name"> Photoblog</h2>
    <div class="footer-text">
        <p>All content Anastasia Harost 2019</p>
        <p> FAMCS, 2 course, 7 group </p>
        <p> last update:
            <time id="footer-time" datetime="2011-12-14T16:16" title="2011-12-14 at 04:16 PM">
                04.03.2019
            </time></p>
    </div>
    <p id="footer-contact">
        Contact email:
        <a href="garost99@mail.ru">garost99@mail.ru</a>
    </p>
</footer>
<script src="resources/user.js"></script>
<script src="resources/class.js"></script>
<script src="resources/MVC.js"></script>
<script src="resources/DOM.js"></script>
</body>
</html>