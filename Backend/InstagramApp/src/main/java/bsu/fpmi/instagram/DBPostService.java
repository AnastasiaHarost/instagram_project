package bsu.fpmi.instagram;

import bsu.fpmi.instagram.common.FilterConfig;
import bsu.fpmi.instagram.common.Post;

import java.sql.*;
import java.util.*;

public class DBPostService implements IPostService {
    private static final String user = "root";
    private static final String password = "12345";
    private static final String URL = "jdbc:mysql://localhost:3306/kyky?useSSL=false";
    private Connection connection = null;

    DBPostService() {
        try {
            connection = DriverManager.getConnection(URL, user, password);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public Post getPost(String id) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM photo_post WHERE USER_ID = ?");
            preparedStatement.setInt(1, Integer.parseInt(id));
            ResultSet resultSet = preparedStatement.executeQuery();

            PreparedStatement preparedStatement1 = connection.prepareStatement("SELECT * FROM user WHERE USER_ID = ?");
            preparedStatement1.setInt(1, Integer.parseInt(id));
            ResultSet resultSet1 = preparedStatement1.executeQuery();

            resultSet.next();
            resultSet1.next();
            String photoLink = resultSet.getString("PHOTO_LINK");
            String ID = Integer.toString(resultSet.getInt("POST_ID"));
            String decsription = resultSet.getString("DECSRIPTION");
            java.sql.Date date = resultSet.getDate("CREATE_DATE");
            String author = resultSet1.getString("NAME");
            return new Post(ID, decsription, date, author, photoLink, new ArrayList<>(), new ArrayList<>());
        } catch (SQLException e) {
            e.printStackTrace();
            return new Post();
        }
    }

    @Override
    public ArrayList<Post> getPage(int skip, int top, FilterConfig filterConfig) {
        return null;
    }

    @Override
    public boolean addPost(Post post) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO `photo_post` VALUES (?,?,?,?,?)");
            preparedStatement.setInt(1, rnd(200,2000));
            preparedStatement.setString(2, post.getDescription());
            preparedStatement.setString(3, post.getCreatedAt().toString());
            preparedStatement.setString(4, post.getPhotoLink());
            preparedStatement.setInt(5, Integer.parseInt(post.getId()));
            preparedStatement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deletePost(String id) {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("DELETE FROM photo_post WHERE POST_ID = ?");
            preparedStatement.setInt(1, Integer.parseInt(id));
            preparedStatement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean editPost(Post newPost) {
        try {
            String postID = newPost.getId();
            PreparedStatement preparedStatement = connection.prepareStatement(
                    "UPDATE photo_post SET DECSRIPTION = ?,PHOTO_LINK = ? " +
                            "WHERE USER_ID = ?");
            preparedStatement.setString(1, newPost.getDescription());
            preparedStatement.setString(2, newPost.getPhotoLink());
            preparedStatement.setInt(3, Integer.parseInt(postID));
            preparedStatement.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
    public static int rnd(int min, int max)
    {
        max -= min;
        return (int) (Math.random() * ++max) + min;
    }
    public static void main(String[] args) {
        DBPostService dbPostService = new DBPostService();
        System.out.println(dbPostService.getPost("123"));
        dbPostService.deletePost("11");
        dbPostService.editPost(new Post("123", "hello", new GregorianCalendar(2001, Calendar.MAY, 18).getTime(), "liakh", "resources/images/cat1.jpg",
                new ArrayList<>(), new ArrayList<>()));
        System.out.println(dbPostService.getPost("123"));

    }
}
