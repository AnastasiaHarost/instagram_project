package bsu.fpmi.instagram;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.util.ArrayList;
import java.util.Arrays;

public class Posts {
    private ArrayList<Post> posts = new ArrayList<>();
    private Gson gson = new Gson();

    public Posts() {
        ArrayList<String> tags = new ArrayList<>(Arrays.asList("tag1", "tag2"));
        ArrayList<String> likes = new ArrayList<>(Arrays.asList("like1", "like2"));
        Post post1 = new Post("1", "desc1", "date1", "auth1", "link1",
                likes, tags);
        Post post2 = new Post("2", "desc2", "date2", "auth2", "link2",
                likes, tags);
        posts.add(post1);
        posts.add(post2);
    }

    public String getPosts() {
        return gson.toJson(posts);
    }

    public void addPost(String JsonPost) {
        Post post = gson.fromJson(JsonPost, new TypeToken<Post>(){}.getType());
        posts.add(post);
    }

    public void editPost(String JsonPost) {
        Post post = gson.fromJson(JsonPost, new TypeToken<Post>(){}.getType());
        for (int i = 0; i < posts.size(); i++) {
            if (posts.get(i).getId().equals(post.getId())) {
                posts.set(i, post);
                return;
            }
        }
    }

    public String getPost(String id) {
        for (int i = 0; i < posts.size(); i++) {
            if (posts.get(i).getId().equals(id)) {
                return gson.toJson(posts.get(i));
            }
        }
        return null;
    }

    public String deletePost(String id) {
        for (int i = 0; i < posts.size(); i++) {
            if (posts.get(i).getId().equals(id)) {
                posts.remove(i);
                return "true";
            }
        }
        return "false";
    }
}