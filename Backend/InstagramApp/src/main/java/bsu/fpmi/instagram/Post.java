package bsu.fpmi.instagram;

import java.util.ArrayList;

public class Post {
    private String id;
    private String description;
    private String create;
    private String author;
    private String photoLink;
    private ArrayList<String> likes;
    private ArrayList<String> hashtags;

    public Post(String id, String description, String create, String author,
                String photoLink, ArrayList<String> likes, ArrayList<String> hashtags) {
        this.id = id;
        this.description = description;
        this.create = create;
        this.author = author;
        this.photoLink = photoLink;
        this.likes = likes;
        this.hashtags = hashtags;
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getCreate() {
        return create;
    }

    public String getAuthor() {
        return author;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public ArrayList<String> getLikes() {
        return likes;
    }

    public ArrayList<String> getHashags() {
        return hashtags;
    }
}