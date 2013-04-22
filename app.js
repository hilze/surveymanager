<!DOCTYPE html>
<html>
  <head>
    <title>Survey Manager: <%=item.name%></title>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <a href="/"><h1>Survey Manager</h1></a>
    <dl>
      <dt>User name</dt>
      <dd><%=item.uname%></dd>
      <% if (item.description) { %>
      <dt>Description</dt>
      <dd><%=item.description%></dd>
      <% } %>
      <dt>Respondents</dt>
      
      <dd>
        <% if (related_items.length > 0) { %>
        <ul>
          <% related_items.forEach(function(related_item) { %>
          <li>
            <a href="/respondents/<%=related_item._id%>">
              <%=related_item.rname%>
            </a>
          </li>
          <% }); %>
        </ul>
        <% } else { %>
        No respondents have been added to this party.
        <% } %>
      </dd>
    </dl>
    <div class="control">
      <h2>Add a new respondent</h2>
      <form id="create-respondent" method="post" action="/respondents/">
        <input type="hidden" name="item[user]" value="<%=item._id%>">
        <!-- The line above links the candidate to be created to this party. -->
        <label>Respondent name: 
          <input name="item[rname]" type="text" required
                   placeholder="Ron Paul">
        </label>
        <label>Candidate image URL:
          <input name="item[image]" type="url" size="80"
                   placeholder="http://www.ronpaul2012.com/wp-content/themes/ronpaul/images/bg-header.jpg">
        </label>
        <button>Add</button>
      </form>
    </div>
  </body>
</html>