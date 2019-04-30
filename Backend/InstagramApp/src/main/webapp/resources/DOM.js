class View {
  constructor(el, model, user) {
    this.model = model;
    this.phototape = el;
    this.user = user;
  }

  createPostHtml(post) {
    const template = document.getElementById('post-template');
    const fragment = document.importNode(template.content, true);
    const newPost = fragment.firstElementChild;
    const likes = post.likes.length;
    const placeholders = newPost.querySelectorAll('[data-target]');
    [].forEach.call(placeholders || [], (phElement) => {
      const key = phElement.getAttribute('data-target');
      if (key === '#create') {
        phElement.textContent = post[key].toLocaleString('en-US', dateCo);
      } else if (key === 'photoLink') {
        phElement.src = post[key];
      } else if (key === 'description') {
        phElement.textContent = post[key].substring(0, 80);
      } else if (key === 'likes') {
        phElement.textContent = `${likes} likes `;
      } else { phElement.textContent = post[key]; }
    });
    const tagsBlock = newPost.querySelector('.hashtags');
    newPost.dataset.id = post.id;
    newPost.dataset.author = post.author;
    newPost.dataset.likes = likes;
    newPost.dataset.description = post.description;
    tagsBlock.innerHTML = post.hashtags.map(
      tag => `<li class="tag"><a href="" >${tag}</a></li>`
    ).join('');

    // Todo: get rid of the next lines
    /* const user = new User('#kasper');
if (user instanceof User) {
  newPost.querySelector('.like').dataset.liked = '0';
  newPost.querySelector('.like').addEventListener('#click', () => {
    if (newPost.querySelector('.like').dataset.liked === '0') {
      newPost.querySelector('.like').dataset.liked = '1';
      newPost.querySelector('.likes-count').textContent = `${post.likes.length + 1} likes`;
      newPost.querySelector('.like').style.backgroundColor = 'red';
    } else {
      newPost.querySelector('.like').dataset.liked = '0';
      newPost.querySelector('.likes-count').textContent = `${post.likes.length} likes`;
      newPost.querySelector('.like').style.backgroundColor = 'white';
    }
  });
  newPost.querySelector('.delete').addEventListener('#click', () => {
    this.removePost(post.id);
  });
} */
    return newPost;
  }

  addPost(post) {
    if (this.model.add(post)) {
      const newPost = this.createPostHtml(post);
      this.phototape.insertAdjacentElement('afterbegin', newPost);
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
          .replaceChild(this.createPostHtml(this.model.get(id)), newPost);
      }
      return true;
    }
    return false;
  }

  showPosts(skip = 0, top = 10, filterCongig = DEFAULT_FILTER) {
    this.model.getPage(skip, top, filterCongig).forEach((post) => {
      const newPost = this.createPostHtml(post);
      this.phototape.insertAdjacentElement('beforeend', newPost);
    });
  }


  setAutorized(user) {
    if (user instanceof User) {
      document.querySelector('.user').textContent = user._name;
      document.body.classList.toggle('is-auth', true);
      this.user = user;
    } else {
      document.querySelector('.user').textContent = '';
      document.body.classList.toggle('is-auth', false);
    }
  }
}

const photoPosts = new PhotoPosts();
if (localStorage.length === 0) {
  photoPosts.add(new PhotoPost('1', '1Beautiful catghvhgvhgvhgvhgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggghgkvghvhgchgchhgchchrgeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', '2019-03-15T23:00:00', 'janny_9991', 'resources/images/1.jpg', ['janny_9991'], ['#cat', '#kitten', '#animals', '#hello']));
  photoPosts.add(new PhotoPost('2', '2Funny animals', '2018-02-23T23:00:00', 'alex1', 'resources/images/2.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('3', '3nothing to add', '2017-02-23T23:00:00', 'spupen45', 'resources/images/3.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('4', '4Cats have 30 teeth', '2016-02-23T23:00:00', 'AnaLiakh', 'resources/images/4.jpg', ['janny_9991', 'stupen45'], ['#cat']));
  photoPosts.add(new PhotoPost('5', '5Cats have 30 teeth', '2015-02-23T23:00:00', 'janny_9991', 'resources/images/5.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('6', '6Cats have 30 teeth', '2014-02-23T23:00:00', 'AnaLiakh', 'resources/images/6.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('7', '7Cats have 30 teeth', '2013-02-23T23:00:00', 'AnaLiakh', 'resources/images/7.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('8', '8Cats have 30 teeth', '2012-02-23T23:00:00', 'spupen45', 'resources/images/8.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('9', '9Cats have 30 teeth', '2011-02-23T23:00:00', 'AnaLiakh', 'resources/mages/9.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('10', '10Cats have 30 teeth', '2010-02-23T23:00:00', 'AnaLiakh', 'resources/images/9.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('11', '11Cats have 30 teeth', '2009-02-23T23:00:00', 'AnaLiakh', 'resources/images/9.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('12', '12Funny animals', '2008-02-23T23:00:00', 'alex1', 'resources/images/2.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('13', '13nothing to add', '2007-02-23T23:00:00', 'spupen45', 'resources/images/3.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('14', '14Cats have 30 teeth', '2006-02-23T23:00:00', 'AnaLiakh', 'resources/images/4.jpg', ['janny_9991', 'stupen45'], ['#cat']));
  photoPosts.add(new PhotoPost('15', '15 Cats have 30 teeth', '2005-02-23T23:00:00', 'janny_9991', 'resources/images/5.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('16', '16 Cats have 30 teeth', '2004-02-23T23:00:00', 'AnaLiakh', 'resources/images/6.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('17', '17Cats have 30 teeth', '2003-02-23T23:00:00', 'AnaLiakh', 'resources/images/7.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('18', '18Cats have 30 teeth', '2002-02-23T23:00:00', 'spupen45', 'resources/images/8.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('19', '19Cats have 30 teeth', '2001-02-23T23:00:00', 'AnaLiakh', 'resources/images/9.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
  photoPosts.add(new PhotoPost('20', '20Cats have 30 teeth', '2000-02-23T23:00:00', 'AnaLiakh', 'resources/images/9.jpg', ['janny_9991', 'stupen45'], ['#cat', '#kitten', '#animals']));
}
console.log(photoPosts.getPage(0, 10, { author: '' },));
const phototape = document.querySelector('.phototape');
const user = new User('janny_9991');
const view = new View(phototape, photoPosts);
view.setAutorized(user);

view.showPosts();
view.addPost(new PhotoPost('20', 'New', '2005-02-23T23:00:00', 'stupen45', 'resources/images/13.jpg', ['janny_9991', 'stupen45', 'alex1'], ['#cat', '#kitten', '#animals']));
view.removePost('20');
view.editPost('3', {
  description: 'new description',
  hashtags: ['#planet'],
});
const mvc = new MVC(photoPosts, view);
const photoTape = document.querySelector('.phototape');
mvc.showMorePosts();
mvc.addAllEvents(photoTape);
mvc.signInLogic(view);
// addAllListeners(view, photoTape, new User('janny_9991'));
