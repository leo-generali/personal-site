---
date: "2019-04-26T16:01:43.865Z"
pageTitle: "Sample tutorial post"
type: "tutorial, testing"
published: false
tags:
  - "tutorial"
  - "testing"
footnotes: 
  - This is the sample footnote. Nothing to see here making sure it works as expected.
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 

Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. <sup id="a1">[1](#f1)</sup>

<div class="spoiler">
  <button class="spoiler__reveal">reveal</button>
  <div class="spoiler__text">

  ```jsx
  var UserList = React.createClass({
    getInitialState: function() {
      return {
        users: []
      }
    },

    componentDidMount: function() {
      var _this = this;
      $.get('/path/to/user-api').then(function(response) {
        _this.setState({users: response})
      });
    },

    render: function() {
      return (
        <ul className="user-list">
          {this.state.users.map(function(user) {
            return (
              <li key={user.id}>
                <Link to="{'/users/' + user.id}">{user.name}</Link>
              </li>
            );
          })}
        </ul>
      );
    }
  });
  ```
  </div>
</div>

Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. 
