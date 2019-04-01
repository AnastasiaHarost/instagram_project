class User {
  constructor(name) {
    if (name === '' || typeof (name) !== 'string') {
      return;
    }
    this._name = name;
    this._photoLink = '';
    this._numOfPosts = 0;
    this._likedPosts = [];
  }

  set userName(name = '') {
    if (name === '' || typeof (name) !== 'string') {
      return;
    }
    this._name = name;
  }

  set userPhoto(link = '') {
    if (link === '' || typeof (link) !== 'string') {
      return;
    }
    this._photoLink = link;
  }

  get userName() {
    return this._name;
  }

  get userPhoto() {
    return this._photoLink;
  }
}
