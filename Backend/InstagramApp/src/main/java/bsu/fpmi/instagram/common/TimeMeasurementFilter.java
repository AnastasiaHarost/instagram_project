package bsu.fpmi.instagram.common;
import bsu.fpmi.instagram.InMemoryPostService;

import javax.servlet.*;
import javax.servlet.FilterConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class TimeMeasurementFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        long start = System.currentTimeMillis();
        chain.doFilter(request, response);
        long end = System.currentTimeMillis();

        HttpServletRequest httpServletRequest = ((HttpServletRequest) request);
        String requestURI = httpServletRequest.getRequestURI();

        System.out.println(String.format("%s '%s' - done (%d ms)",httpServletRequest.getMethod(),httpServletRequest.getRequestURI(),end - start));
    }

    @Override
    public void destroy() {

    }
}
