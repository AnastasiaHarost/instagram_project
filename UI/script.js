// Always store items ordered by date
var posts = (function () { 
    var module = {};
    var photoPosts = [
        {
            id: "1",
            description: "Beautiful cat",
            createdAt: new Date('2017-02-23T23:00:00'),
            author: 'janny_9991',
            photoLink: 'images/1',
            likes: ["janny_9991"],
            hashtags: ["cat", "kitten", "animals", "hello"]
        },
        {
            id: "2",
            description: "Funny animals",
            createdAt: new Date("2016-02-23T23:00:00"),
            author: "alex1",
            photoLink: 'images/2',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "3",
            description: "nothing to add",
            createdAt: new Date("2019-02-20T23:00:00"),
            author: "spupen45",
            photoLink: 'images/3',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "4",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2004-02-23T23:00:00"),
            author: "AnaLiakh",
            photoLink: 'images/4',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat"],
        },
        {
            id: "5",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2013-02-21T23:00:00"),
            author: "janny_9991",
            photoLink: 'images/5',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "6",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2015-02-23T23:00:00"),
            author: "AnaLiakh",
            photoLink: 'images/6',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "7",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2014-02-23T23:00:00"),
            author: "AnaLiakh",
            photoLink: 'images/7',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "8",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2017-02-23T23:00:00"),
            author: "spupen45",
            photoLink: 'images/8',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "9",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "AnaLiakh",
            photoLink: 'images/9',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "10",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2012-02-23T23:00:00"),
            author: "janny_9991",
            photoLink: 'images/10',
            likes: ["janny_9991", "stupen45", "alex1", "AnaLiakh"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "11",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2011-02-23T23:00:00"),
            author: "AnaLiakh",
            photoLink: 'images/11',
            likes: ["vasilisa3", "stupen45"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "12",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2019-02-23T23:00:00"),
            author: "stupen45",
            photoLink: 'images/12',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "13",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2002-02-23T23:00:00"),
            author: "janny_9991",
            photoLink: 'images/13',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "14",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2001-02-23T23:00:00"),
            author: "AnaLiakh",
            photoLink: 'images/14',
            likes: ["janny_9991", "alex1"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "15",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2017-02-23T23:00:00"),
            author: "vasilisa3",
            photoLink: 'images/15',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "16",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2011-02-23T23:00:00"),
            author: "janny_9991",
            photoLink: 'images/16',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat", "kitten", "animals"]
        },
        {
            id: "17",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2010-02-23T23:00:00"),
            author: "AnaLiakh",
            photoLink: 'images/17',
            likes: ["vasilisa3", "stupen45"],
            hashtags: ["annimal", "world"],
        },
        {
            id: "18",
            description: "Cats have 30 teeth and most of us know how sharp they are!",
            createdAt: new Date("2014-02-23T23:01:04"),
            author: "vasilisa3",
            photoLink: 'images/18',
            likes: ["janny_9991", "AnaLiakh", "stupen45"],
            hashtags: ["cat", "kitten", "animals", "day"]
        },
        {
            id: "19",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2013-05-23T23:00:01"),
            author: "AnaLiakh",
            photoLink: 'images/19',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat", "kitten", "animals", "world"]
        },
        {
            id: "20",
            description: "Cats have 30 teeth and most of us know how sharp they are!",
            createdAt: new Date("2005-02-23T23:22:00"),
            author: "stupen45",
            photoLink: 'images/20',
            likes: ["janny_9991", "stupen45", "alex1"],
            hashtags: ["cat", "kitten", "animals"]
        },
    ];
    var defaultFilter = {
        dateFrom: new Date(-8640000000000000),
        dateTo: new Date(8640000000000000),
        author: "",
        hashtags: [],
    };
    module.addPhotoPost = function (post) {
        const expost = module.getPhotoPost(post.id);
        if (!expost && module.validatePhotoPost(post)) {
            photoPosts.push(post);
            photoPosts.sort((a, b) => new Date(b.publDate) - new Date(a.publDate));
            return true;
        }
        else {
            return false;
        }
    }
    module.getPhotoPost = function (id) {
        const post = photoPosts.find((el) => el.id === id);
        return post || false;
    }
    module.removePhotoPost = function (id) {
        const index = photoPosts.findIndex((el) => el.id === id);
        if (index !== -1) {
            photoPosts.splice(index, 1);
            return true;
        }
        else{
            return false;
        }
    }
    module.validatePhotoPost = function (post) {
        return !(typeof (post.id) !== 'string' || typeof (post.description) !== 'string'
            || typeof (post.author) != 'string' || typeof (post.photoLink) !== 'string'
            || !(post.createdAt instanceof Date) || post.description.length >= 200
            || !post.createdAt || !post.author || !post.id || !post.description || !post.photoLink);
    }
    module.editPhotoPost = function (id, edits) {
        var expost = module.getPhotoPost(id);
        if (expost) {
            var isvalidate = module.validatePhotoPost(expost);
            if (isvalidate) {
                Object.keys(edits)
                    .filter((i) => i != "id" && i != "author" && i != "createdAt" && i != "likes")
                    .forEach(
                        (i) => { expost[i] = edits[i]; }
                    );
                return true;
            }
            else return false;
        }
        else return false;

    };
    function commonHashtags(posthashtags, confighashtags) {
        return confighashtags.every(
            (postTag) => posthashtags.indexOf(postTag) !== -1
        );
    }
    module.getPhotoPosts = function (skip = 0, top = 10, filterConfig = defaultFilter) {
        if (typeof skip !== 'number' || typeof top !== 'number' || typeof filterConfig !== 'object') {
            console.log('Incorrect getPhotoPosts params');
            return false;
        }
        filterConfig = Object.assign({}, defaultFilter, filterConfig || {});
        var filterPredicate = a =>
            (a.createdAt >= filterConfig.dateFrom || !filterConfig.dateFrom) &&
            (a.createdAt <= filterConfig.dateTo || !filterConfig.dateTo) &&
            (a.author == filterConfig.author || filterConfig.author === "") &&
            (commonHashtags(a.hashtags, filterConfig.hashtags) || filterConfig.hashtags.length === 0);

        var filtered_mas = photoPosts.filter(filterPredicate).sort(function (a, b) {
            return b.createdAt - a.createdAt;
        }).slice(skip, skip + top);
        return filtered_mas;
    }
    return module;

}());