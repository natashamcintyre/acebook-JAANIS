    fetch('http://localhost:3000/api/v1/posts')
      .then(response => response.json())
      .then(data => renderPost(data));

    function renderPost(data) {

      var x = document.getElementById('posts');
      data.forEach(function (post) {
        postHTML = `
        <div class="post d-flex flex-row">
          <div class="post-img">
            <img width="50" src="/assets/user-15fbbe4568b83583cb622a4031c60064abd0274ab0039ab8e8161eef78cf4a4e.png" alt="User">
          </div>
          <div class="post-content  d-flex flex-column">
            <div class="d-flex justify-content-between">
              <span id ="username_post">${post.user.username}</span>
              <div id="userOptions">
                <a href="/posts/${post.id}/edit" class="edit"><i class="fas fa-pencil-alt mx-1"></i></a>
                <a href="/posts/${post.id}" rel="nofollow" data-method="delete" class="delete"><i class="fas fa-trash-alt"></i></a>
              </div> 
            </div>
            <div class="post-content  d-flex flex-column">
              <p class="post-text">${post.message}</p>
              <span class="post-date align-self-end">
                  ${post.created_at}</span>
            </div>
          </div>
        </div>`
        x.insertAdjacentHTML('afterend', postHTML);
        optionsPost()
      });
    };

    function optionsPost() {
      var name = document.getElementById("username").innerHTML;
      var namepost = document.getElementById("username_post").innerHTML;
      if (name !== namepost) {
        var linkDel = document.getElementById("userOptions");
        linkDel.remove();
      }
    }