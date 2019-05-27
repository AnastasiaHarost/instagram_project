// 'use strict';
const DEFAULT_FILTER = {
  dateFrom: new Date(-8640000000000000),
  dateTo: new Date(8640000000000000),
  author: '',
  hashtags: [],
};
const dateCo = {
  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',
};
class PhotoPost {
  constructor(id, description, created, author, photoLink, likes = [], hashtags = []) {
    this.id = id;
    this.description = description;
    this.create = new Date(created).toLocaleString('en-Us', dateCo);
    this.author = author;
    this.photoLink = photoLink;
    this.likes = likes;
    this.hashtags = hashtags;
  }

  _validate() {
    if (!this.id || !this.description || this.description.length >= 200 || !this.create
    || !this.author || this.author.length === 0 || !this.photoLink
    || this.photoLink.length === 0) {
      return false;
    }
    return true;
  }

  isLiked(user) {
    return this.likes.includes(user);
  }
}

class PhotoPosts {

  async get(id) {
    const response = await fetch(`/photo-post?id=${id}`, {
      method: 'GET',
    }).catch(error => console.log(error));
    const result = await response.json();
    return result;
  }

  async add(post) {
    const postId = await this.get(post.id).id;
    if (!postId && post._validate()) {
      const response = await fetch('/photo-post', {
        method: 'POST',
        body: JSON.stringify(post),
      }).catch(error => console.log(error));
      if (!response.ok) {
        console.log(response.statusText);
      }
    }
  }

  toggleLike(postid, user) {
    const post = this.get(postid);
    if (post.isLiked(user)) {
      const index = post.likes.indexOf(user);
      post.likes.splice(index, 1);
    } else {
      post.user.push(user);
    }
    return post;
  }

  remove(id) {
    const index = this._posts.findIndex(el => el.id === id);
    if (index !== -1) {
      this._posts.splice(index, 1);
      return true;
    }

    return false;
  }

  edit(id, edits) {
    const expost = this.get(id);
    if (expost) {
      const isvalidate = expost._validate();
      if (isvalidate) {
        Object.keys(edits)
          .filter(key => key !== 'id' && key !== 'author' && key !== 'create' && key !== 'likes')
          .forEach(
            (key) => { expost[key] = edits[key]; },
          );
        return true;
      }
      return false;
    }
    return false;
  }

    async getPhotoPosts(skip, top, config) {// TODO
        const response = await fetch(`/photoposts`, {
            method: 'GET',
        }).catch(error => console.log(error));
        if (!response.ok) {
            console.log(response.statusText);
        }
        const result = await response.json();
        return result;
    }

  addAll(posts) {
    const notValid = [];
    posts.forEach((originalPost) => {
      const post = Object.assign(new PhotoPost(), originalPost);
      if (!this.add(post)) {
        notValid.push(post);
      }
    });
    return notValid;
  }

  clear() {
    this._posts.splice(0, this._posts.length);
    return true;
  }
}


/* photoPosts.add(new PhotoPost('1', 'Beautiful cat', '2017-02-23T23:00:00', 'janny_9991', 'images/1', ['janny_9991'], ['cat', 'kitten', 'animals', 'hello']));
photoPosts.add(new PhotoPost('2', 'Funny animals', '2016-02-23T23:00:00', 'alex1', 'images/2', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('3', 'nothing to add', '2019-02-23T23:00:00', 'spupen45', 'images/3', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('4', 'Cats have 30 teeth', '2004-02-23T23:00:00', 'AnaLiakh', 'images/4', ['janny_9991', 'stupen45'], ['cat']));
photoPosts.add(new PhotoPost('5', 'Cats have 30 teeth', '2013-02-23T23:00:00', 'janny_9991', 'images/5', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('6', 'Cats have 30 teeth', '2015-02-23T23:00:00', 'AnaLiakh', 'images/6', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('7', 'Cats have 30 teeth', '2014-02-23T23:00:00', 'AnaLiakh', 'images/7', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('8', 'Cats have 30 teeth', '2017-02-23T23:00:00', 'spupen45', 'images/8', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('9', 'Cats have 30 teeth', '2018-02-23T23:00:00', 'AnaLiakh', 'images/9', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('9', 'Cats have 30 teeth', '2018-02-23T23:00:00', 'AnaLiakh', 'images/9', ['janny_9991', 'stupen45', 'alex1', 'AnaLiakh'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('10', 'Cats have 30 teeth', '2015-02-23T23:00:00', 'janny_9991', 'images/10', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('11', 'Beautiful cat', '2011-02-23T23:00:00', 'AnaLiakh', 'images/11', ['vasilisa3', 'stupen45'], ['cat', 'kitten', 'animals', 'hello']));
photoPosts.add(new PhotoPost('12', 'Funny animals', '2019-02-23T23:00:00', 'spupen45', 'images/12', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('13', 'nothing to add', '2002-02-23T23:00:00', 'janny_9991', 'images/13', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('14', 'Cats have 30 teeth', '2001-02-23T23:00:00', 'AnaLiakh', 'images/14', ['janny_9991', 'alex1'], ['cat']));
photoPosts.add(new PhotoPost('15', 'Cats have 30 teeth', '2017-02-23T23:00:00', 'vasilisa3', 'images/15', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('16', 'Cats have 30 teeth', '2011-02-23T23:00:00', 'janny_9991', 'images/16', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals']));
photoPosts.add(new PhotoPost('17', 'Cats have 30 teeth', '2010-02-23T23:00:00', 'AnaLiakh', 'images/17', ['vasilisa3', 'stupen45'], ['annimal', 'world']));
photoPosts.add(new PhotoPost('18', 'Cats have 30 teeth', '2014-02-23T23:00:00', 'vasilisa3', 'images/18', ['janny_9991', 'AnaLiakh', 'stupen45'], ['cat', 'kitten', 'animals', 'day']));
photoPosts.add(new PhotoPost('19', 'Cats have 30 teeth', '2013-02-23T23:00:00', 'AnaLiakh', 'images/19', ['janny_9991', 'stupen45'], ['cat', 'kitten', 'animals', 'world']));
photoPosts.add(new PhotoPost('20', 'Cats have 30 teeth', '2005-02-23T23:00:00', 'stupen45', 'images/19', ['janny_9991', 'stupen45', 'alex1'], ['cat', 'kitten', 'animals']));
const posts = [
  {
    id: '55',
    description: 'Beautiful cat',
    createdAt: new Date('2017-02-23T23:00:00'),
    author: 23,
    photoLink: 'images/1',
    likes: ['janny_9991'],
    hashtags: ['cat', 'kitten', 'animals', 'hello'],
  },
  {
    id: '56',
    description: 'Funny animals',
    createdAt: new Date('2016-02-23T23:00:00'),
    author: 'alex1',
    photoLink: 'images/2',
    likes: ['janny_9991', 'stupen45'],
    hashtags: ['cat', 'kitten', 'animals'],
  },
  {
    id: '57',
    description: 'nothing to add',
    createdAt: new Date('2019-02-20T23:00:00'),
    author: 'spupen45',
    photoLink: 'images/3',
    likes: ['janny_9991', 'stupen45'],
    hashtags: ['cat', 'kitten', 'animals'],
  },
];


/* console.log('get post with id=2 ');
console.log(photoPosts.get('2'));
console.log('remove post with id=2 ');
console.log(photoPosts.remove('2'));
console.log(photoPosts);
console.log('try to add invalid post');
photoPosts.add(new PhotoPost('40', 23, '2005-02-23T23:00:00', 'stupen45', 'images/19', ['janny_9991', 'stupen45', 'alex1'], ['cat', 'kitten', 'animals']));
console.log(photoPosts);
console.log('try to add post with id that is not unique');
photoPosts.add(new PhotoPost('1', 'Cats have 30 teeth', 2000, 'stupen45', 'images/19', ['janny_9991', 'stupen45', 'alex1'], ['cat', 'kitten', 'animals']));
console.log(photoPosts);
console.log('id=3 post before editing:');
console.log(photoPosts.get('3'));
console.log('try to edit id=3 post:');
console.log(photoPosts.edit('3', {
  description: 'new description',
  hashtags: ['planet'],
}));
console.log('id=3 post after editing:');
console.log(photoPosts.get('3'));
console.log('get 10 posts, skip 0, sorted by date');
console.log(photoPosts.getPage());
console.log('get 14 posts, skip 5, sorted by date');
console.log(photoPosts.getPage(5, 14));
console.log('posts after filtering by author:');
console.log(photoPosts.getPage(0, 10, { author: 'janny_9991' }));
console.log('posts after filtering by date (2011-2018):');
console.log(photoPosts.getPage(0, 10, {
  dateFrom: new Date('2011-10-23T10:00:00'),
  dateTo: new Date('2018-02-23T23:00:00'),
}));
console.log('posts after filtering by hashtagstag "world"');
console.log(photoPosts.getPage(0, 10, { hashtags: ['world'] }));
console.log('posts after filtering by hashtags "world" and "cat"');
console.log(photoPosts.getPage(0, 10, { hashtags: ['world', 'cat'] }));
console.log('posts after filtering by hashtags,author and date ( 2015-2001)');
console.log(photoPosts.getPage(0, 10, {
  hashtags: ['cat', 'kitten'],
  author: 'AnaLiakh',
  dateFrom: new Date('2001-10-23T10:00:00'),
  dateTo: new Date('2015-02-23T23:00:00'),
}));
console.log('Add mas posts, return not valid element');
console.log(photoPosts.addAll(posts));
console.log('new elements added');
console.log(photoPosts);
console.log('clear photoPosts');
photoPosts.clear();
console.log(photoPosts); */
