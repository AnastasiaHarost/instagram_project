package bsu.fpmi.instagram;

import bsu.fpmi.instagram.common.FilterConfig;
import bsu.fpmi.instagram.common.Post;
import java.util.*;
import java.util.stream.Collectors;

public class InMemoryPostService implements IPostService {

    private ArrayList<Post> posts;

    public InMemoryPostService() {
        posts = new ArrayList<>();
        ArrayList<String> tags = new ArrayList<>(Arrays.asList("tag1", "tag2"));
        ArrayList<String> likes = new ArrayList<>(Arrays.asList("like1", "like2"));
        Post post1 = new Post(1, "desc1", new GregorianCalendar(2014, Calendar.FEBRUARY, 11).getTime(), "author1", "link1",
                likes, tags);
        Post post2 = new Post(2, "desc2",new GregorianCalendar(2019, Calendar.FEBRUARY, 11).getTime(), "author2", "link2",
                likes, tags);
        Post post3 = new Post(3, "desc3", new GregorianCalendar(2016, Calendar.FEBRUARY, 11).getTime(), "author3", "link3",
                likes, tags);
        posts.add(post1);
        posts.add(post2);
        posts.add(post3);
    }

    @Override
    public Post getPost(int id) {
        for (int i = 0; i < posts.size(); i++) {
            if (posts.get(i).getId() == id) {
                return posts.get(i);
            }
        }
        return null;
    }

    static int boolToInt(boolean b) {
        return Boolean.compare(b, false);
    }

    @Override
    public ArrayList<Post> getPage(int skip, int top, FilterConfig filterConfig) {//TODO: need some fixes
        ArrayList<Post> returnValue;
        returnValue = posts.stream().filter(post -> (post.getCreatedAt().after(filterConfig.getDateFrom())
                || filterConfig.getDateFrom().equals(new GregorianCalendar(1963, Calendar.FEBRUARY, 11).getTime()))//matches default state filterConfig
                && (post.getCreatedAt().before(filterConfig.getDateTo()) || filterConfig.getDateTo().equals(new GregorianCalendar(2019, Calendar.MAY, 1).getTime()))
                && (post.getAuthor().equals(filterConfig.getAuthor())) || filterConfig.getAuthor().equals(""))
                .collect(Collectors
                .toCollection(ArrayList::new));
        returnValue.sort((a,b) -> boolToInt(a.getCreatedAt().after(filterConfig.getDateFrom())));//TODO
        return returnValue;
    }

    @Override
    public boolean addPost(Post post) {
        return posts.add(post) ? true : false;
    }

    @Override
    public boolean deletePost(int id) {
        for (int i = 0; i < posts.size(); i++) {
            if (posts.get(i).getId() == id) {
                posts.remove(i);
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean editPost(Post newPost) {
        for (int i = 0; i < posts.size(); i++) {
            if (posts.get(i).getId() == newPost.getId()) {
                posts.set(i, newPost);
                return true;
            }
        }
        return false;
    }
}