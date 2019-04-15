const users = [{ login: 'janny_9991', password: '123456' }, { login: 'katya', password: 'katya1' }, { login: '2', password: '2' }];

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

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

  descriptionButton(event) {
    const descriptionTag = event.target.previousSibling.previousSibling;
    const postNode = event.target.closest('.post');
    descriptionTag.textContent = postNode.dataset.description.substring(0, 200);
    postNode.querySelector('.myBtn').style.display = 'none';
  }

  addPostButton(event) {
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

  editPostButton(event) {
    let addPostButton;
    event.target.className === 'far fa-edit' ? addPostButton = event.target.closest('.edit') : addPostButton = event.target;
    if (!addPostButton.dataset.clicked)addPostButton.dataset.clicked = '0';
    if (addPostButton.dataset.clicked === '0') {
      addPostButton.dataset.clicked = '1';
      document.querySelector('.main-def').style.display = 'none';
      document.querySelector('.main-edit').style.display = 'block';
    } else {
      addPostButton.dataset.clicked = '0';
      document.querySelector('.main-edit').style.display = 'none';
      document.querySelector('.main-def').style.display = 'block';
    }
  }

  filtDataButton1(event) {
    const addPostButton = event.target;
    if (!addPostButton.dataset.clicked)addPostButton.dataset.clicked = '0';
    if (addPostButton.dataset.clicked === '0') {
      addPostButton.dataset.clicked = '1';
      document.querySelector('.filt-data').style.display = 'inline-block';
    } else {
      addPostButton.dataset.clicked = '0';
      document.querySelector('.filt-data').style.display = 'none';
    }
    const searchInput = document.querySelector('.input');
    const sumbitButton = document.querySelector('.submit');
    let string;
    searchInput.onchange = function () {
      string = searchInput.value;
    };
    sumbitButton.onclick = function () { // realizing input to search form(take a look on mockup;)
      const postTemplate = view.wrapper.querySelector('#post-template');
      view.wrapper.textContent = '';
      view.wrapper.insertAdjacentElement('beforeend', postTemplate);
      const filterConfig = { hashtags: [] };
      const words = string.split(' ');
      const indexUserName = words.findIndex(el => el.charAt(0) !== '#');
      if (indexUserName !== -1) {
        filterConfig.author = words.splice(indexUserName, 1)[0];
      }
      words.forEach((tag) => {
        if (tag.length !== 0) { filterConfig.hashtags.push(`${tag}`); }
      });
      view.showPosts(0, 10, filterConfig);
      searchInput.value = '';
      return false;
    };
  }

  filtDataButton2(event) {
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

  logInButton(event) {
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

  addPostLogic() {
    document.querySelector('.time').textContent = new Date().toLocaleString('en-US', dateCo);
    document.querySelector('.usser-name').textContent = this.view.user._name;
  }

  filterFormLogic() {
    const dateInputFrom = document.querySelector('.field-filter-from');
    const dateInputTo = document.querySelector('.field-filter-to');
    const filterButton = document.querySelector('.continue-btn');
    const filterUersButton = document.querySelector('.continue-btn-uers');
    const userField = document.querySelector('.input-user');
    const filterConfig = {};
    dateInputFrom.onchange = function () {
      filterConfig.dateFrom = new Date(dateInputFrom.value);
    };
    dateInputTo.onchange = function () {
      filterConfig.dateTo = new Date(dateInputTo.value);
    };
    userField.onchange = function () {
      filterConfig.author = userField.value;
    };

    filterButton.onclick = function () {
      document.querySelector('.filt-data').style.display = 'none';
      const postTemplate = view.phototape.querySelector('#post-template');
      view.phototape.textContent = '';
      view.phototape.insertAdjacentElement('beforeend', postTemplate);
      view.showPosts(0, 10, filterConfig);
      dateInputFrom.value = '1999-12-22';
      dateInputTo.value = '2019-04-04';
      return false;
    };
    filterUersButton.onclick = function () {
      document.querySelector('.filt-user-name').style.display = 'none';
      const postTemplate = view.phototape.querySelector('#post-template');
      view.phototape.textContent = '';
      view.phototape.insertAdjacentElement('beforeend', postTemplate);
      view.showPosts(0, 10, filterConfig);
      return false;
    };
  }

  addAllEvents(phototape) {
    const form = document.querySelector('.edit-form');
    const inputPhoto = form.firstChild.nextSibling;
    const inputTags = document.querySelector('.tags');
    const inputDescription = document.querySelector('.description-edit');
    phototape.addEventListener('click', (event) => {
      if (event.target.className === 'like' || event.target.className === 'far fa-heart fa-lg') {
        this.like(event);
      }
      if (event.target.className === 'myBtn') {
        this.descriptionButton(event);
      }
      if (event.target.className === 'edit' || event.target.className === 'far fa-edit') {
        if (event.target.closest('.post').dataset.author === this.view.user._name) {
          this.editPostButton(event);
          this.addPostLogic();
          const edits = {};
          edits.id = randomInteger(1000, 10000);
          edits.likes = [];
          edits.hashtags = [];
          inputPhoto.oninput = function () {
            edits.photoLink = `images/${inputPhoto.files[0].name}`;
          };
          inputTags.onchange = function () {
            const tagsArray = inputTags.value.split('#');
            tagsArray.forEach((tag) => {
              if (tag.length !== 0) { edits.hashtags.push(`#${tag}`); }
            });
          };
          inputDescription.onchange = function () {
            edits.description = inputDescription.value;
          };
          document.querySelector('.continue').onclick = function () {
            edits.author = view.user._name;
            edits.create = new Date().toLocaleString('en-US', dateCo);
            console.log(view);
            view.editPost(event.target.closest('.post').dataset.id, edits);
            document.querySelector('.main-edit').style.display = 'none';
            document.querySelector('.main-def').style.display = 'block';
            return false;
          };
          let like;
          event.target.className === 'far fa-edit' ? like = event.target.closest('.edit') : like = event.target;
          like.dataset.clicked = '0';
          inputPhoto.value = '';
          inputTags.value = '';
          inputDescription.value = '';
        }
      }
      if (event.target.className === 'delete' || event.target.className === 'fas fa-trash-alt') {
        if (event.target.closest('.post').dataset.author === this.view.user._name) {
          this.view.removePost(event.target.closest('.post').dataset.id);
        }
      }
    });
    document.querySelector('.main-def').addEventListener('click', (event) => {
      if (event.target.className === 'btn-container' || event.target.className === 'add-btn') {
        this.addPostButton(event);
        this.addPostLogic();
        const post = new PhotoPost();
        post.id = `${randomInteger(1000, 10000)}`;
        post.likes = [];
        post.hashtags = [];
        inputPhoto.oninput = function () {
          post.photoLink = `images/${inputPhoto.files[0].name}`;
        };
        inputTags.onchange = function () {
          const tagsArray = inputTags.value.split('#');
          tagsArray.forEach((tag) => {
            if (tag.length !== 0) { post.hashtags.push(`#${tag}`); }
          });
        };
        inputDescription.onchange = function () {
          post.description = inputDescription.value;
        };
        document.querySelector('.btn-continue').onclick = function () {
          post.author = view.user._name;
          post.create = new Date().toLocaleString('en-US', dateCo);
          view.addPost(post);
          document.querySelector('.main-def').style.display = 'block';
          document.querySelector('.main-edit').style.display = 'none';
          document.querySelector('.add-btn').dataset.clicked = '0';
          return false;
        };

        inputPhoto.value = '';
        inputTags.value = '';
        inputDescription.value = '';
      }
    });
    document.querySelector('header').addEventListener('click', (event) => {
      if (event.target.className === 'btn-group1 btn') {
        this.filtDataButton1(event);
        this.filterFormLogic();
      }
      if (event.target.className === 'btn-group2 btn') {
        this.filtDataButton2(event);
        this.filterFormLogic();
      }
      if (event.target.className === 'log-out') {
        this.view.setAutorized();
      }
      if (event.target.className === 'log-in') {
        this.logInButton(event);
      }
    });
    const searchInput = document.querySelector('.input');
    const sumbitButton = document.querySelector('.submit');
    let string;
    searchInput.onchange = function () {
      string = searchInput.value;
    };
    sumbitButton.onclick = function () {
      const postTemplate = view.phototape.querySelector('#post-template');
      view.phototape.textContent = '';
      view.phototape.insertAdjacentElement('beforeend', postTemplate);
      const filterConfig = { hashtags: [] };
      const words = string.split(' ');
      words.forEach((tag) => {
        if (tag.length !== 0) { filterConfig.hashtags.push(`${tag}`); }
      });
      view.showPosts(0, 10, filterConfig);
      searchInput.value = '';
      return false;
    };
  }

  signInLogic(view) {
    const inpLog = document.querySelector('.log-in-field');
    const inpPas = document.querySelector('.pas-in-field');
    const logButton = document.querySelector('.sign-btn');
    console.log(logButton);
    const object = { login: '', password: '' };
    inpLog.oninput = function () {
      object.login = inpLog.value;
    };
    inpPas.oninput = function () {
      object.password = inpPas.value;
    };

    logButton.onclick = function () {
      console.log(object);
      users.find(el => JSON.stringify(el) === JSON.stringify(object))
        ? view.setAutorized(new User(object.login)) : view.setAutorized();
      document.querySelector('.main-log-form').style.display = 'none';
      document.querySelector('.main-def').style.display = 'block';
    };
  }
}
