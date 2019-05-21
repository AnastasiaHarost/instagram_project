package bsu.fpmi.instagram;

import bsu.fpmi.instagram.common.FilterConfig;
import bsu.fpmi.instagram.common.Post;
import java.util.ArrayList;

public interface IPostService {
    Post getPost(int id);
    ArrayList<Post> getPage(int skip, int top, FilterConfig filterConfig);
    boolean addPost(Post post);
    boolean deletePost(int id);
    boolean editPost(Post newPost);

}
