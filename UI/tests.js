var addValid = {
    id: "30",
    description: "lalala",
    createdAt: new Date("2018-02-23T23:00:00"),
    author: "janny_9991",
    photoLink: "img/cat29",
    likes: [],
    hashtags: [],
};
var addBad1 = {
    id: "30",
    description: 2,
    createdAt: new Date("2018-02-23T23:00:00"),
    author: "janny_9991",
    photoLink: "img/cat29",
    likes: [],
    hashtags: [],
};
var addBad2 = {
    id: "1",
    description: 2,
    createdAt: new Date("2018-02-23T23:00:00"),
    author: "janny_9991",
    photoLink: "img/cat29",
    likes: [],
    hashtags: [],
};
var editDood={
    description: "blablabla",
    hashtags:["cats","cat_lover"]
}
var editBad={
    description: 2,
    hashtags:["CAT","cat_lover"]
}
var filterData = {
    dateFrom: new Date("2004-10-23T10:00:00"),
    dateTo: new Date("2018-02-23T23:00:00"),
    authorName: "",
    hashtags: [],
};
var filterAuthor = {
    dateFrom: new Date(-8640000000000000),
    dateTo: new Date(8640000000000000),
    authorName: "janny_9991",
    hashtags: [],
};
var filterAuthorDate = {
    dateFrom: new Date("2011-10-23T10:00:00"),
    dateTo: new Date("2018-02-23T23:00:00"),
    authorName: "AnaLiakh",
    hashtags: [],
};
var filterHash = {
    dateFrom: new Date(-8640000000000000),
    dateTo: new Date(8640000000000000),
    authorName: "",
    hashtags: ["world","cat"],
};
function test() {
    console.log("Add and validation----------------");
    console.log(posts.getPhotoPosts(0,20));
    posts.addPhotoPost(addValid);
    console.log(posts.getPhotoPosts(0,21));
    posts.addPhotoPost(addBad1);
    console.log(posts.getPhotoPosts(0,22));
    posts.addPhotoPost(addBad2);
    console.log(posts.getPhotoPosts(0,23));
    console.log("getPhotoPost----------------");
    console.log(posts.getPhotoPost("1"));
    console.log(posts.getPhotoPost("40"));  //no such id
    console.log("Remove----------------");
    posts.removePhotoPost("45");  //no such id
    console.log(posts.getPhotoPosts(0,21));
    posts.removePhotoPost("5");
    console.log(posts.getPhotoPosts(0,21));
    console.log("Edit----------------");
    posts.editPhotoPost("2",editDood);
    console.log(posts.getPhotoPosts(0,21));
    posts.editPhotoPost("42",editDood);
    console.log(posts.getPhotoPosts(0,21));
    posts.editPhotoPost("2",editBad);
    console.log(posts.getPhotoPosts(0,21));
    console.log("Filtration----------------");
    console.log(posts.getPhotoPosts());  
    console.log(posts.getPhotoPosts(7,10));
    console.log(posts.getPhotoPosts(7,10,filterData));
    console.log(posts.getPhotoPosts(0,4,filterAuthor));
    console.log(posts.getPhotoPosts(0,4,filterAuthorDate));
    //console.log(posts.getPhotoPosts(0,10,filterHash));


    //console.log(posts.getPhotoPosts(0,10,{author: "janny_9991"}));

    
    
}
test();