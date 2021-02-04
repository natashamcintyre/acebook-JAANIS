    fetch('http://localhost:3000/api/v1/posts')
      .then(response => response.json())
      .then(data => renderPost(data));
   
    function renderPost(data){
      var x  = document.getElementById('posts');
      data.forEach(function(post){
        postHTML = ` <div class="post d-flex flex-row">
        <div class="post-img">
          <img width="50" src="/assets/user-15fbbe4568b83583cb622a4031c60064abd0274ab0039ab8e8161eef78cf4a4e.png" alt="User">
        </div>
        <div class="post-content  d-flex flex-column">
          <p class="post-text">${post.message}</p>
          <span class="post-date align-self-end">Posted by <span class="username"> ${post.user.username} </span> at
               ${post.created_at} </span>
            <div id="like-button"> </div>
        </div>
      </div>`
      x.insertAdjacentHTML('afterend', postHTML); 
      renderLikeButton();
      });
  };

  function renderLikeButton() {
    const e = React.createElement;

    class LikeButton extends React.Component {
      constructor(props) {
        super(props);
        this.state = { liked: false };
      }

      render() {
        if (this.state.liked) {
          return 'You liked this.';
        }

        return e(
          'button',
          { onClick: () => this.setState({ liked: true }) },
          'Like'
        );
      }
    }
    const domContainer = document.querySelector('#like-button');
    ReactDOM.render(e(LikeButton), domContainer);
  }
