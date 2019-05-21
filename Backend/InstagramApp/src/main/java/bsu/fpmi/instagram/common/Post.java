package bsu.fpmi.instagram.common;

import java.util.ArrayList;
import java.util.Date;

public class Post {
    private int id;
    private String description;
    private Date create;
    private String author;
    private String photoLink;
    private ArrayList<String> likes;
    private ArrayList<String> hashtags;

    public Post(int id, String description, Date create, String author,
                String photoLink, ArrayList<String> likes, ArrayList<String> tags) {
        this.id = id;
        this.description = description;
        this.create = create;
        this.author = author;
        this.photoLink = photoLink;
        this.likes = likes;
        this.hashtags = tags;
    }

    public int getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Date getCreatedAt() {
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

    public ArrayList<String> getTags() {
        return hashtags;
    }
}