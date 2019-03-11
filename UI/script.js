var posts = (function(){
    var module = {};
    var photoPosts = [
        {
          id: "1",
          description: "Beautiful cat",
          createdAt: new Date('2017-02-23T23:00:00'),
          author: 'janny_9991',
          photoLink: 'images/1',
          likes: ["janny_9991"],
          hashtags: ["cat","kitten","animals","hello"]
         },
         {
            id: "2",
            description: "Funny animals",
            createdAt: new Date("2016-02-23T23:00:00"),
            author: "alex1",
            photoLink: 'images/2',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat","kitten","animals"]
        },
        {
            id: "3",
            description: "nothing to add",
            createdAt: new Date("2019-02-20T23:00:00"),
            author: "spupen45",
            photoLink: 'images/3',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat","kitten","animals"]
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
            hashtags: ["cat","kitten","animals"]
        },
        {
            id: "6",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2015-02-23T23:00:00"),
            author: "AnaLiakh",
            photoLink: 'images/6',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat","kitten","animals"]
        },
        {
            id: "7",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2014-02-23T23:00:00"),
            author: "AnaLiakh",
            photoLink: 'images/7',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat","kitten","animals"]
        },
        {
            id: "8",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2017-02-23T23:00:00"),
            author: "spupen45",
            photoLink: 'images/8',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat","kitten","animals"]
        },
        {
            id: "9",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "AnaLiakh",
            photoLink: 'images/9',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat","kitten","animals"]
        },
        {
            id: "10",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2012-02-23T23:00:00"),
            author: "janny_9991",
            photoLink: 'images/10',
            likes: ["janny_9991", "stupen45","alex1","AnaLiakh"],
            hashtags: ["cat","kitten","animals"]
        },
        {
            id: "11",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2011-02-23T23:00:00"),
            author: "AnaLiakh",
            photoLink: 'images/11',
            likes: ["vasilisa3", "stupen45"],
            hashtags: ["cat","kitten","animals"]
        },
        {
            id: "12",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2019-02-23T23:00:00"),
            author: "stupen45",
            photoLink: 'images/12',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat","kitten","animals"]
        },
        {
            id: "13",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2002-02-23T23:00:00"),
            author: "janny_9991",
            photoLink: 'images/13',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat","kitten","animals"]
        },
        {
            id: "14",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2001-02-23T23:00:00"),
            author: "AnaLiakh",
            photoLink: 'images/14',
            likes: ["janny_9991", "alex1"],
            hashtags: ["cat","kitten","animals"]
        },
        {
            id: "15",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2017-02-23T23:00:00"),
            author: "vasilisa3",
            photoLink: 'images/15',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat","kitten","animals"]
        },
        {
            id: "16",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2011-02-23T23:00:00"),
            author: "janny_9991",
            photoLink: 'images/16',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat","kitten","animals"]
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
            likes: ["janny_9991","AnaLiakh", "stupen45"],
            hashtags: ["cat","kitten","animals","day"]
        },
        {
            id: "19",
            description: "Cats have 30 teeth (dogs have 42) and most of us know how sharp they are!",
            createdAt: new Date("2013-05-23T23:00:01"),
            author: "AnaLiakh",
            photoLink: 'images/19',
            likes: ["janny_9991", "stupen45"],
            hashtags: ["cat","kitten","animals","world"]
        },
        {
            id: "20",
            description: "Cats have 30 teeth and most of us know how sharp they are!",
            createdAt: new Date("2005-02-23T23:22:00"),
            author: "stupen45",
            photoLink: 'images/20',
            likes: ["janny_9991", "stupen45","alex1"],
            hashtags: ["cat","kitten","animals"]
        } ,  
      ];
      var defaultFilter = {
        dateFrom: new Date(-8640000000000000),
        dateTo: new Date(8640000000000000),
        author: "",
        hashtags: [],
    };
    module.addPhotoPost = function (post) {
        if ((!(photoPosts.find((el) => el.id === post.id)))&&module.validatePhotoPost(post)===true){
            photoPosts.push(post);
            photoPosts.sort((a, b) => new Date(b.publDate) - new Date(a.publDate));
            console.log("added");
            return true;
        }
        else {
            console.log("no");
            return false;
        }
    }
    module.getPhotoPost=function(_id){
        if (photoPosts.find((el) => el.id === _id)){
            console.log("ee");
            return photoPosts.find((el) => el.id === _id);
        }
        else {
            console.log("no");
        }
    }
    module.removePhotoPost=function(_id){
        if (photoPosts.find((el) => el.id === _id)){
            photoPosts.splice(photoPosts.findIndex((el) => el.id === _id),1);
        }
        else {
            console.log("no such el");
        }
    }
    module.validatePhotoPost=function(post){
        if (typeof(post.id)!=='string'||typeof(post.description)!=='string'
        ||typeof(post.author)!='string'||typeof(post.photoLink)!=='string'
        ||!(post.createdAt instanceof Date)||post.description.length >= 200
        ||!post.createdAt||!post.author||!post.id||!post.description||!post.photoLink){
            return false;
        }
        else {
            return true;
        }
    }
    module.editPhotoPost = function (_id, edits) {
        if (photoPosts.find((el) => el.id === _id)){
            var post=photoPosts.find((el) => el.id === _id);
        }
        else {
            console.log("no such id");
            return false;
        }
        var post_copy = Object.assign({},post);
        module.removePhotoPost(post.id);
        for (var i in edits) {
            if (i != "id" && i != "author" && i != "createdAt" && i != "likes") {
                post[i] = edits[i];
            }
        }
        if (module.validatePhotoPost(post)===true){
            module.addPhotoPost(post);
            console.log("changed");
        }
        else {
            module.addPhotoPost(post_copy);
            console.log("invalid changes");
        }
    };
    function commonHashtags(posthashtags, confighashtags) {
        var count=0;
        for (var i = 0; i < posthashtags.length; i++) {
            for (var j = 0; j < confighashtags.length; j++) {
                if ( confighashtags[j] == posthashtags[i]) {
                    count++;
                    
                }
            }
        }
        if (count!=0&&count==confighashtags.length){
            return true;
        }
        return false;
    }
    module.getPhotoPosts=function(skip=0, top=10, filterConfig=defaultFilter){
        if (typeof skip !== 'number' || typeof top !== 'number' || typeof filterConfig !== 'object') {
            console.log('Incorrect getPhotoPosts params');
            return false;
          }
        if(filterConfig !== defaultFilter){
            if(!filterConfig.author){
                filterConfig.author = defaultFilter.author;
            }
            if(!filterConfig.dateFrom){
                filterConfig.dateFrom = defaultFilter.dateFrom;
            }
            if(!filterConfig.dateTo){
                filterConfig.dateTo = defaultFilter.dateTo;
            }
            if(!filterConfig.hashtags){
                filterConfig.hashtags = defaultFilter.hashtags;
            }
        }
        var filtered_mas=photoPosts.filter(a =>
            (a.createdAt >= filterConfig.dateFrom||!filterConfig.dateFrom) &&
            (a.createdAt <= filterConfig.dateTo||!filterConfig.dateTo) &&
            (a.author == filterConfig.author || filterConfig.author === "")&&
            (commonHashtags(a.hashtags, filterConfig.hashtags) || filterConfig.hashtags.length === 0)
            ).sort(function (a, b) {
            return b.createdAt- a.createdAt;
        }).slice(skip,skip+top);
        return filtered_mas;
    }
    return module;

}());