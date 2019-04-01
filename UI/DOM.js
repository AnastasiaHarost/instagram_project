const phototape = document.querySelector('.phototape');

class View {
  constructor(model) {
    this.model = model;
  }

  static createPostHtml(post) {
    const template = document.getElementById('post-template');
    const fragment = document.importNode(template.content, true);
    const newPost = fragment.firstElementChild;
    const likesCount = post.likes.length;
    const placeholders = newPost.querySelectorAll('[data-target]');
    [].forEach.call(placeholders || [], (phElement) => {
      const key = phElement.getAttribute('data-target');
      if (key === 'photoLink') {
        phElement.src = post[key];
      } else if (key === 'likes') {
        phElement.textContent = `${likesCount} likes `;
      } else { phElement.textContent = post[key]; }
    });
    const tagsBlock = newPost.querySelector('.hashtags');
    newPost.dataset.id = post.id;
    tagsBlock.innerHTML = post.hashtags.map(
      tag => `<li class="tag"><a href="" >#${tag}</a></li>`
    ).join('');
    return newPost;
  }

  addPost(post) {
    if (this.model.add(post)) {
      const newPost = View.createPostHtml(post);
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
          .replaceChild(View.createPostHtml(this.model.get(id)), newPost);
      }
      return true;
    }
    return false;
  }

  showPosts(count) {
    this.model.getPage(count, 2).reverse().forEach((post) => {
      const newPost = View.createPostHtml(post);
      phototape.insertAdjacentElement('beforeend', newPost);
    });
  }


  showElementsAutorized(user) {
    if (user instanceof User) {
      document.querySelector('.user').textContent = user._name;
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
photoPosts.add(new PhotoPost('10', 'Cats have 30 teeth', '2018-02-23T23:00:00', 'AnaLiakh', 'images/9.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('11', '11Cats have 30 teeth', '2000-02-23T23:00:00', 'AnaLiakh', 'images/9.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('12', '12Funny animals', '2016-02-23T23:00:00', 'alex1', 'images/2.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('13', '13nothing to add', '2019-02-23T23:00:00', 'spupen45', 'images/3.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('14', '14Cats have 30 teeth', '2004-02-23T23:00:00', 'AnaLiakh', 'images/4.jpg', ['janny_9991', 'stupen45'], ['cat']));
photoPosts.add(new PhotoPost('15', '15 Cats have 30 teeth', '2013-02-23T23:00:00', 'janny_9991', 'images/5.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('16', '16 Cats have 30 teeth', '2015-02-23T23:00:00', 'AnaLiakh', 'images/6.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('17', '17Cats have 30 teeth', '2014-02-23T23:00:00', 'AnaLiakh', 'images/7.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('18', '18Cats have 30 teeth', '2017-02-23T23:00:00', 'spupen45', 'images/8.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('19', '19Cats have 30 teeth', '2018-02-23T23:00:00', 'AnaLiakh', 'images/9.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('20', '20Cats have 30 teeth', '2018-02-23T23:00:00', 'AnaLiakh', 'images/9.jpg', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
const view = new View(photoPosts);
view.showElementsAutorized(new User('Liakh'));
view.showPosts();
view.addPost(new PhotoPost('20', 'New', '2005-02-23T23:00:00', 'stupen45', 'images/13.jpg', ['janny_9991', 'stupen45', 'alex1'], ['cat', 'kitten', 'animals']));
view.removePost('20');
view.editPost('3', {
  description: 'new description',
  hashtags: ['planet'],
});
const mvc = new MVC(photoPosts, view);
mvc.showMorePosts();
