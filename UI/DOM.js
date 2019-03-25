const photoPosts = new PhotoPosts();
class View {
  static createPostHtml(post, isAutorized) {
    const newPost = document.createElement('div');
    this.isLogged = isAutorized;
    newPost.innerHTML = `<div class = "post">
        <div class="user_name">
            ${post.author}
        </div>
        <div class="image">
            <img src = ${post.photoLink} alt = "cat" width= "100%" >
        </div>
        <button type="submit" class="like"  >
            <i class="far fa-heart fa-lg"  data-fa-transform="shrink-8 right-6"  data-fa-transform="shrink-8 down-116"></i>
        </button>
        ${this.isLogged ? `<button type="submit" class="edit">
          <i class="far fa-edit"  data-fa-transform="shrink-8 right-6"  data-fa-transform="shrink-8 down-116"></i>
          </button>
          <button type="submit" class="delete"  >
          <i class="fas fa-trash-alt"  data-fa-transform="shrink-8 right-6"  data-fa-transform="shrink-8 down-116"></i>
          </button>` : ''} 
        <time class="post-time" datetime=${post.create} title=${post.create}>
        ${post.create}
        </time>
        <div class="text-container">
            <p>
                <b>${post.likes.length} likes </b>
                <br><b>${post.author} </b> ${post.description}
                <button  class="myBtn">show more</button>
            </p>
            <ul class="hashtags">
            </ul>
        </div>`;
    const tagsBlock = newPost.querySelector('.hashtags');
    newPost.classList.add(`${post.id}`);
    post.hashtags.forEach((tag) => {
      const li = document.createElement('li');
      li.classList.add('tag');
      li.innerHTML = `<a href="" >#${tag}</a>`;
      tagsBlock.insertAdjacentElement('beforebegin', li);
    });
    return newPost;
  }

  static addPost(post) {
    if (photoPosts.add(post)) {
      const phototape = document.querySelector('.phototape');
      const newPost = this.createPostHtml(post, this.isLogged);
      phototape.insertAdjacentElement('afterbegin', newPost);
      return true;
    }
    return false;
  }

  static removePost(id) {
    if (photoPosts.remove(id)) {
      const post = document.getElementsByClassName(`${id}`)[0];
      if (post) {
        post.parentNode.removeChild(post);
      }
      return true;
    }
    return false;
  }

  static editPost(id, post) {
    if (photoPosts.edit(id, post)) {
      const newPost = document.getElementsByClassName(`${id}`)[0];
      if (newPost) {
        newPost.parentNode
          .replaceChild(this.createPostHtml(photoPosts.get(id), this.isLogged), newPost);
      }
      return true;
    }
    return false;
  }

  static showPosts() {
    photoPosts._posts.forEach((post) => {
      const phototape = document.querySelector('.phototape');
      const newPost = this.createPostHtml(post, this.isLogged);
      phototape.insertAdjacentElement('afterbegin', newPost);
    });
  }

  static headerView(isAutorized) {
    const header = document.createElement('header');
    const addBtn = document.createElement('div');
    this.isLogged = isAutorized;
    addBtn.innerHTML = `
    ${this.isLogged ? `<div class="btn-container">
      <a href="#" class="add-btn">add post</a>
      </div>` : ''}`;
    header.innerHTML = `<h2 class = "site-name">Photoblog</h2>
        <form action="javascript:alert('hi')" method="post" class="search-form">
                <input type="search" name="search" placeholder="search" class="input" />
                <button type="submit" class="submit"></button>
        </form>
        <div class="btn-group">
            <button>Date</button>
            <button>User_name</button>
            <button>Hashtags</button>
        </div>
        ${this.isLogged ? `<div class="user">janny_9991</div>
          <div class = "log-out">
          <button>Log out</button>
          </div> ` : ''} 
        ${this.isLogged ? '' : `<div class = "log-in">
          <button>Sign in</button></div>`} 
        `;
    const body = document.getElementsByTagName('body')[0];
    body.insertAdjacentElement('afterbegin', addBtn);
    body.insertAdjacentElement('afterbegin', header);
  }
}

photoPosts.add(new PhotoPost('1', 'Beautiful cat', '2017-02-23T23:00:00', 'janny_9991', 'images/1.jpg', ['janny_9991'], ['cat', 'kitten', 'animals', 'hello']));
photoPosts.add(new PhotoPost('2', 'Funny animals', '2016-02-23T23:00:00', 'alex1', 'images/2.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('3', 'nothing to add', '2019-02-23T23:00:00', 'spupen45', 'images/3.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('4', 'Cats have 30 teeth', '2004-02-23T23:00:00', 'AnaLiakh', 'images/4.jpg', ['janny_9991', 'stupen45'], ['cat']));
photoPosts.add(new PhotoPost('5', 'Cats have 30 teeth', '2013-02-23T23:00:00', 'janny_9991', 'images/5.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('6', 'Cats have 30 teeth', '2015-02-23T23:00:00', 'AnaLiakh', 'images/6.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('7', 'Cats have 30 teeth', '2014-02-23T23:00:00', 'AnaLiakh', 'images/7.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('8', 'Cats have 30 teeth', '2017-02-23T23:00:00', 'spupen45', 'images/8.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('9', 'Cats have 30 teeth', '2018-02-23T23:00:00', 'AnaLiakh', 'images/9.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));

View.headerView(true);
View.showPosts();
View.addPost(new PhotoPost('20', 'Cats have 30 teeth', '2005-02-23T23:00:00', 'stupen45', 'images/13.jpg', ['janny_9991', 'stupen45', 'alex1'], ['cat', 'kitten', 'animals']));
View.addPost(new PhotoPost('21', 'Beautiful cat', '2017-02-23T23:00:00', 'janny_9991', 'images/1.jpg', ['janny_9991'], ['cat', 'kitten', 'animals', 'hello']));
View.addPost(new PhotoPost('22', 'Funny animals', '2016-02-23T23:00:00', 'alex1', 'images/2.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
View.addPost(new PhotoPost('23', 'nothing to add', '2019-02-23T23:00:00', 'spupen45', 'images/3.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
View.removePost('21');
View.removePost('22');
View.removePost('23');

View.editPost('20', {
  description: 'new description',
  hashtags: ['planet'],
});
