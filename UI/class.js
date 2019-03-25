// 'use strict';

class PhotoPost {
  constructor(id, description, created, author, photoLink, likes = [], hashtags = []) {
    this.id = id;
    this.description = description;
    this.create = new Date(created);
    this.author = author;
    this.photoLink = photoLink;
    this.likes = likes;
    this.hashtags = hashtags;
  }

  _validate() {
    return !(typeof (this.id) !== 'string' || typeof (this.description) !== 'string'
            || typeof (this.author) !== 'string' || typeof (this.photoLink) !== 'string'
            || !(this.create instanceof Date) || this.description.length >= 200
            || !this.create || !this.author
            || !this.id || !this.description || !this.photoLink);
  }
}

const DEFAULT_FILTER = {
  dateFrom: new Date(-8640000000000000),
  dateTo: new Date(8640000000000000),
  author: '',
  hashtagstags: [],
};
class PhotoPosts {
  constructor() {
    this._posts = [];
  }

  add(post) {
    const expost = this.get(post.id);
    if (!expost && post._validate()) {
      this._posts.push(post);
      return true;
    }

    return false;
  }

  get(id) {
    const post = this._posts.find(el => el.id === id);
    return post || false;
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

  _isIntersect(posthashtagstags, confighashtagstags) {
    return confighashtagstags.every(
      postTag => posthashtagstags.indexOf(postTag) !== -1,
    );
  }

  getPage(skip = 0, top = 10, filterConfig = DEFAULT_FILTER) {
    if (typeof skip !== 'number' || typeof top !== 'number' || typeof filterConfig !== 'object') {
      throw new Error('Incorrect filter params!');
    }
    filterConfig = Object.assign({}, DEFAULT_FILTER, filterConfig || {});
    const filterPredicate = (a) => {
      if (filterConfig.dateFrom.getTime() && a.create.getTime() < filterConfig.dateFrom.getTime()) {
        return false;
      }
      if (filterConfig.dateTo.getTime() && a.create.getTime() > filterConfig.dateTo.getTime()) {
        return false;
      }
      if (filterConfig.author && a.author !== filterConfig.author) return false;
      if (filterConfig.hashtags && !this._isIntersect(a.hashtags, filterConfig.hashtags)) {
        return false;
      }
      return true;
    };
    return this._posts.filter(filterPredicate)
      .sort((a, b) => b.create - a.create).slice(skip, skip + top);
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
    hashtagstags: ['cat', 'kitten', 'animals', 'hello'],
  },
  {
    id: '56',
    description: 'Funny animals',
    createdAt: new Date('2016-02-23T23:00:00'),
    author: 'alex1',
    photoLink: 'images/2',
    likes: ['janny_9991', 'stupen45'],
    hashtagstags: ['cat', 'kitten', 'animals'],
  },
  {
    id: '57',
    description: 'nothing to add',
    createdAt: new Date('2019-02-20T23:00:00'),
    author: 'spupen45',
    photoLink: 'images/3',
    likes: ['janny_9991', 'stupen45'],
    hashtagstags: ['cat', 'kitten', 'animals'],
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
  hashtagstags: ['planet'],
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
console.log(photoPosts.getPage(0, 10, { hashtagstags: ['world'] }));
console.log('posts after filtering by hashtagstags "world" and "cat"');
console.log(photoPosts.getPage(0, 10, { hashtagstags: ['world', 'cat'] }));
console.log('posts after filtering by hashtagstags,author and date ( 2015-2001)');
console.log(photoPosts.getPage(0, 10, {
  hashtagstags: ['cat', 'kitten'],
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
