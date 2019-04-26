<%--
  Created by IntelliJ IDEA.
  User: Lenovo
  Date: 23.04.2019
  Time: 11:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<p>
    <%
        RequestDispatcher dispatcher = request.getRequestDispatcher("/firstJsp.jsp");
        dispatcher.forward(request, response);
    %>
</p>
</body>
</html>