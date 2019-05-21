package bsu.fpmi.instagram.RestServices;
import bsu.fpmi.instagram.InMemoryPostService;
import bsu.fpmi.instagram.common.FilterConfig;
import bsu.fpmi.instagram.common.Post;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PostRest extends HttpServlet {
    private InMemoryPostService service;
    private Gson gson;

    @Override
    public void init() throws ServletException {
        super.init();
        service = new InMemoryPostService();
        gson = new Gson();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        String id = req.getParameter("id");
        resp.getWriter().println(gson.toJson(service.getPost(id)));
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String JSONPost = req.getReader().readLine();
        service.addPost(gson.fromJson(JSONPost, new TypeToken<Post>(){}.getType()));
        resp.getWriter().println(gson.toJson(service.getPage(0,10, new FilterConfig())));
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String JSONPost = req.getReader().readLine();
        service.editPost(gson.fromJson(JSONPost, new TypeToken<Post>(){}.getType()));
        resp.getWriter().println(gson.toJson(service.getPage(0,10,new FilterConfig())));
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        resp.getWriter().println("Collection before delete post :\n" + gson.toJson(service.getPage(0, 10, new FilterConfig())));
        service.deletePost(id);
        resp.getWriter().println("Collection after delete post :\n" + gson.toJson(service.getPage(0, 10, new FilterConfig())));
    }
}
