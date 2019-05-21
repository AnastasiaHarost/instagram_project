package bsu.fpmi.instagram.RestServices;

import bsu.fpmi.instagram.InMemoryPostService;
import bsu.fpmi.instagram.common.FilterConfig;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class PostListRest extends HttpServlet {
    private InMemoryPostService service;
    private Gson gson;

    @Override
    public void init() throws ServletException {
        super.init();
        service = new InMemoryPostService();
        gson = new Gson();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().write(gson.toJson(service.getPage(0,10,new FilterConfig())));
    }
}
