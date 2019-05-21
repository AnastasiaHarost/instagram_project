package bsu.fpmi.instagram.common;

import java.util.ArrayList;
import java.util.Date;

public class Post {
    private String id;
    private String description;
    private Date createdAt;
    private String author;
    private String photoLink;
    private ArrayList<String> likes;
    private ArrayList<String> hashtags;

    public Post(String id, String description, Date createdAt, String author,
                String photoLink, ArrayList<String> likes, ArrayList<String> tags) {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.author = author;
        this.photoLink = photoLink;
        this.likes = likes;
        this.hashtags = tags;
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Date getCreatedAt() {
        return createdAt;
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

    public ArrayList<String> getHashtags() {
        return hashtags;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public void setLikes(ArrayList<String> likes) {
        this.likes = likes;
    }

    public void setHashtags(ArrayList<String> hashtags) {
        this.hashtags = hashtags;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", createdAt=" + createdAt +
                ", author='" + author + '\'' +
                ", photoLink='" + photoLink + '\'' +
                ", likes=" + likes +
                ", hashtags=" + hashtags +
                '}';
    }
}