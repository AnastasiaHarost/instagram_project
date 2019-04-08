class MVC {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  showMorePosts() {
    const button = document.querySelector('.show-more-posts');
    let count = 0;
    button.addEventListener('click', () => {
      count += 10;
      this.view.showPosts(count);
    });
  }

  like(event) {
    let like;
    event.target.className === 'far fa-heart fa-lg' ? like = event.target.closest('.like') : like = event.target;
    const post = like.closest('.post');
    if (!like.dataset.liked) { like.dataset.liked = '0'; }
    if (like.dataset.liked === '0') {
      like.dataset.liked = '1';
      post.querySelector('.likes-count').textContent = `${+post.dataset.likes + 1} likes`;
      like.style.backgroundColor = 'red';
    } else {
      like.dataset.liked = '0';
      post.querySelector('.likes-count').textContent = `${post.dataset.likes} likes`;
      like.style.backgroundColor = 'white';
    }
  }

  descriptionButton(event, user) { // see later
    const descriptionTag = event.target.previousSibling.previousSibling;
    const postNode = event.target.closest('.post');
    descriptionTag.textContent = postNode.dataset.description.substring(0, 200);
    postNode.querySelector('.myBtn').style.display = 'none';
  }

  addPostButton(event, user) {
    const addPostButton = event.target;
    if (!addPostButton.dataset.clicked)addPostButton.dataset.clicked = '0';
    if (addPostButton.dataset.clicked === '0') {
      addPostButton.dataset.clicked = '1';
      document.querySelector('.main-edit').style.display = 'block';
      document.querySelector('.main-def').style.display = 'none';
    } else {
      addPostButton.dataset.clicked = '0';
      document.querySelector('.main-edit').style.display = 'none';
      document.querySelector('.main-def').style.display = 'block';
    }
  }

  filtDataButton1(event, user) {
    const addPostButton = event.target;
    if (!addPostButton.dataset.clicked)addPostButton.dataset.clicked = '0';
    if (addPostButton.dataset.clicked === '0') {
      addPostButton.dataset.clicked = '1';
      document.querySelector('.filt-data').style.display = 'inline-block';
    } else {
      addPostButton.dataset.clicked = '0';
      document.querySelector('.filt-data').style.display = 'none';
    }
  }

  filtDataButton2(event, user) {
    const addPostButton = event.target;
    if (!addPostButton.dataset.clicked)addPostButton.dataset.clicked = '0';
    if (addPostButton.dataset.clicked === '0') {
      addPostButton.dataset.clicked = '1';
      document.querySelector('.filt-user-name').style.display = 'inline-block';
    } else {
      addPostButton.dataset.clicked = '0';
      document.querySelector('.filt-user-name').style.display = 'none';
    }
  }

  logInButton(event, user) {
    const logInButton = event.target;
    if (!logInButton.dataset.clicked) logInButton.dataset.clicked = '0';
    if (logInButton.dataset.clicked === '0') {
      logInButton.dataset.clicked = '1';
      document.querySelector('.main-log-form').style.display = 'inline-block';
      document.querySelector('.main-def').style.display = 'none';
    } else {
      logInButton.dataset.clicked = '0';
      document.querySelector('.main-log-form').style.display = 'none';
      document.querySelector('.main-def').style.display = 'inline-block';
    }
  }

  addAllEvents(phototape, user) {
    phototape.addEventListener('click', (event) => {
      if (event.target.className === 'like' || event.target.className === 'far fa-heart fa-lg') {
        this.like(event);
      }
      if (event.target.className === 'myBtn') {
        this.descriptionButton(event, user);
      }
    });
    document.querySelector('.main-def').addEventListener('click', (event) => {
      if (event.target.className === 'btn-container' || event.target.className === 'add-btn') {
        this.addPostButton(event, user);
      }
    });
    document.querySelector('header').addEventListener('click', (event) => {
      if (event.target.className === 'btn-group1') {
        this.filtDataButton1(event, user);
      }
      if (event.target.className === 'btn-group2') {
        this.filtDataButton2(event, user);
      }
      if (event.target.className === 'log-out') {
        this.view.setAutorized();
      }
      if (event.target.className === 'log-in') {
        this.logInButton(event, user);
      }
    });
  }
}
/* function likeHandling(event) {
  let likeNode;
  event.target.className === 'far fa-heart fa-lg' ? likeNode = event.target.closest('.like') : likeNode = event.target;
  const postNode = likeNode.closest('.post');
  if (!likeNode.dataset.liked) { likeNode.dataset.liked = '0'; }
  if (likeNode.dataset.liked === '0') {
    likeNode.dataset.liked = '1';
    postNode.querySelector('.likes-count').textContent = `${+postNode.dataset.likes + 1} likes`;
    likeNode.style.backgroundColor = 'red';
  } else {
    likeNode.dataset.liked = '0';
    postNode.querySelector('.likes-count').textContent = `${postNode.dataset.likes} likes`;
    likeNode.style.backgroundColor = 'white';
  }
}

function addAllListeners(view, wrapper, user) {
  wrapper.addEventListener('click', (event) => {
    if (event.target.className === 'like' || event.target.className === 'far fa-heart fa-lg') {
      likeHandling(event);
    }
  });
} */
