class View {
  constructor(model, isLogged) {
    this.model = model;
    this.isLogged = isLogged;
  }

  static createPostHtml(post, isLogged) {
    const newPost = document.createElement('div');
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
        ${isLogged ? `<button type="submit" class="edit">
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
    newPost.dataset.id = post.id;
    tagsBlock.innerHTML = post.hashtags.map(
      tag => `<li class="tag"><a href="" >#${tag}</a></li>`
    ).join('');
    return newPost;
  }

  addPost(post) {
    if (this.model.add(post)) {
      const phototape = document.querySelector('.phototape');
      const newPost = View.createPostHtml(post, this.isLogged);
      phototape.insertAdjacentElement('afterbegin', newPost);
      return true;
    }
    return false;
  }

  removePost(id) {
    if (this.model.remove(id)) {
      const post = document.querySelector(`[data-id="${id}"]`);
      if (post) {
        post.parentNode.removeChild(post);
      }
      return true;
    }
    return false;
  }

  editPost(id, post) {
    if (this.model.edit(id, post)) {
      const newPost = document.querySelector(`[data-id="${id}"]`);
      if (newPost) {
        newPost.parentNode
          .replaceChild(View.createPostHtml(this.model.get(id), this.isLogged), newPost);
      }
      return true;
    }
    return false;
  }

  showPosts() {
    this.model.getPage().reverse().forEach((post) => {
      const phototape = document.querySelector('.phototape');
      const newPost = View.createPostHtml(post, this.isLogged);
      phototape.insertAdjacentElement('afterbegin', newPost);
    });
  }


  showElementsAutorized() {
    if (this.isLogged) {
      document.querySelector('.log-in').style.display = 'none';
      document.querySelector('.user').style.display = 'inline-block';
      document.querySelector('.log-out button').style.display = 'inline-block';
      document.querySelector('a.add-btn').style.display = 'inline-block';
    }
  }
}

const photoPosts = new PhotoPosts();
photoPosts.add(new PhotoPost('1', 'Beautiful cat', '2017-02-23T23:00:00', 'janny_9991', 'images/1.jpg', ['janny_9991'], ['cat', 'kitten', 'animals', 'hello']));
photoPosts.add(new PhotoPost('2', 'Funny animals', '2016-02-23T23:00:00', 'alex1', 'images/2.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('3', 'nothing to add', '2019-02-23T23:00:00', 'spupen45', 'images/3.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('4', 'Cats have 30 teeth', '2004-02-23T23:00:00', 'AnaLiakh', 'images/4.jpg', ['janny_9991', 'stupen45'], ['cat']));
photoPosts.add(new PhotoPost('5', 'Cats have 30 teeth', '2013-02-23T23:00:00', 'janny_9991', 'images/5.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('6', 'Cats have 30 teeth', '2015-02-23T23:00:00', 'AnaLiakh', 'images/6.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('7', 'Cats have 30 teeth', '2014-02-23T23:00:00', 'AnaLiakh', 'images/7.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('8', 'Cats have 30 teeth', '2017-02-23T23:00:00', 'spupen45', 'images/8.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('9', 'Cats have 30 teeth', '2018-02-23T23:00:00', 'AnaLiakh', 'images/9.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
const view = new View(photoPosts, true);
view.showElementsAutorized();
view.showPosts();
view.addPost(new PhotoPost('20', 'New', '2005-02-23T23:00:00', 'stupen45', 'images/13.jpg', ['janny_9991', 'stupen45', 'alex1'], ['cat', 'kitten', 'animals']));
view.removePost('20');
view.editPost('3', {
  description: 'new description',
  hashtags: ['planet'],
});
