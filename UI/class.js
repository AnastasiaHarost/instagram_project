class PhotoPost {
  constructor(id, description, createdat, author, photoLink, likes = [], hashtags = []) {
    this._id = id;
    this._description = description;
    this._createdat = new Date(createdat);
    this._author = author;
    this._photoLink = photoLink;
    this._likes = likes;
    this._hashtags = hashtags;
  }

  _validate() {
    return !(typeof (this._id) !== 'string' || typeof (this._description) !== 'string'
            || typeof (this._author) !== 'string' || typeof (this._photoLink) !== 'string'
            || !(this._createdat instanceof Date) || this._description.length >= 200
            || !this._createdat || !this._author
            || !this._id || !this._description || !this._photoLink);
  }
}
_defaultFilter = {
  dateFrom: new Date(-8640000000000000),
  dateTo: new Date(8640000000000000),
  author: '',
  hashtags: [],
};
class PhotoPosts {
  constructor() {
    this._mas = [];
  }

  add(post) {
    const expost = this.get(post._id);
    if (!expost && post._validate()) {
      this._mas.push(post);
      this._mas.sort((a, b) => new Date(b._createdat.getTime()) - new Date(a._createdat.getTime()));
      return true;
    }

    return false;
  }

  get(id) {
    const post = this._mas.find(el => el._id === id);
    return post || false;
  }

  remove(id) {
    const index = this._mas.findIndex(el => el._id === id);
    if (index !== -1) {
      this._mas.splice(index, 1);
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
          .filter(i => i !== 'id' && i !== 'author' && i !== 'createdat' && i !== 'likes')
          .forEach(
            (i) => { expost[i] = edits[i]; },
          );
        return true;
      }
      return false;
    }
    return false;
  }

  _commonHashtags(posthashtags, confighashtags) {
    return confighashtags.every(
      postTag => posthashtags.indexOf(postTag) !== -1,
    );
  }

  getPage(skip = 0, top = 10, filterConfig = _defaultFilter) {
    if (typeof skip !== 'number' || typeof top !== 'number' || typeof filterConfig !== 'object') {
      console.log('Incorrect getPage params');
      return false;
    }
    filterConfig = Object.assign({}, _defaultFilter, filterConfig || {});
    const filterPredicate = a => (a._createdat.getTime() >= filterConfig.dateFrom.getTime()
    || !filterConfig.dateFrom.getTime())
    && (a._createdat.getTime() <= filterConfig.dateTo.getTime()
    || !filterConfig.dateTo.getTime())
    && (a._author === filterConfig.author || filterConfig.author === '')
    && (this._commonHashtags(a._hashtags, filterConfig.hashtags)
    || filterConfig.hashtags.length === 0);

    return this._mas.filter(filterPredicate)
      .sort((a, b) => b.createdat - a.createdat).slice(skip, skip + top);
  }

  addAll(posts) {
    const notValid = [];
    for (let i = 0; i < posts.length; i += 1) {
      const post = new PhotoPost(posts[i].id, posts[i].description, posts[i].createdat,
        posts[i].author, posts[i].photoLink, posts[i].likes, posts[i].hashtags);
      if (!this.add(post)) { notValid.push(post); }
    }
    return notValid;
  }

  clear() {
    this._mas.splice(0, this._mas.length);
    return true;
  }
}

const photoPosts = new PhotoPosts();

photoPosts.add(new PhotoPost('1', 'Beautiful cat', '2017-02-23T23:00:00', 'janny_9991', 'images/1', ['janny_9991'], ['cat', 'kitten', 'animals', 'hello']));
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


console.log('get post with id=2 ');
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
console.log('posts after filtering by hashtag "world"');
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
console.log(photoPosts);
