import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import com.google.gson.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ThirdServlet extends HttpServlet {

    class SimpleResponse {
        private int status;
        public SimpleResponse(int status) {
            this.status = status;
        }

        public int getStatus() {
            return status;
        }

        public void setStatus(int status) {
            this.status = status;
        }
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Gson gson = new Gson();

        response.getWriter().println(gson.toJson(new SimpleResponse(response.getStatus())));
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}