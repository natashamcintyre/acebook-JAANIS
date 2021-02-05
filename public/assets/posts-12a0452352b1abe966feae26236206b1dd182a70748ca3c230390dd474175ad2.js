 document.onload = getAllPosts();

 function getAllPosts() {
   fetch('https://acebook-jaanis-2.herokuapp.com/api/v1/posts', {
     
   })
     .then(response => response.json())
     .then(data => renderPost(data));
 }


 function getPostData(message, callback) {
   fetch('https://acebook-jaanis-2.herokuapp.com/api/v1/posts', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         "message": `${message}`

       })

     })
     .then(function () {
       getAllPosts()
     })
 }

 document.getElementById('send-button').addEventListener("click", function (event) {
   event.preventDefault()
   var message = document.getElementById('postBox').value
   getPostData(message, getAllPosts)

 })

 //   function renderPost(data){
 //     var x  = document.getElementById('posts');
 //     data.forEach(function(post){
 //       postHTML = ` <div class="post d-flex flex-row">
 //       <div class="post-img">
 //         <img width="50" src="/assets/user-15fbbe4568b83583cb622a4031c60064abd0274ab0039ab8e8161eef78cf4a4e.png" alt="User">
 //       </div>
 //       <div class="post-content  d-flex flex-column">
 //         <p class="post-text">${post.message}</p>
 //         <span class="post-date align-self-end">Posted by <span class="username"> ${post.user.username} </span> at
 //              ${post.created_at} </span>
 //           <div id="like-button"> </div>
 //       </div>
 //     </div>`
 //     x.insertAdjacentHTML('afterend', postHTML); 
 //     renderLikeButton();
 //     });
 // };



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
            </div>
            <div class="post-content d-flex flex-row sharing">
                <span id="like-button"></span>
                <a rel="noopener" href="https://twitter.com/intent/tweet?text=${post.user.username}+posted+this:+*${post.message}*+%20%40acebookJAANIS%20https://acebook-jaanis.herokuapp.com%2F%20&original_referer=https://clicktotweet.com&related=clicktotweet" title="Share on Twitter" target="_blank" class="share"><i class="fab fa-twitter"></i></a>
                <a rel="noopener" href="https://www.facebook.com/sharer.php?u=https://acebook-jaanis.herokuapp.com/posts/${post.id}" title="Share on Facebok" target="_blank" class="share"><i class="fab fa-facebook-square" ></i></a>
                <a rel="noopener" href="https://api.whatsapp.com/send?text=${post.user.username}+posted+this:+*${post.message}*+on+https://acebook-jaanis.herokuapp.com/" title="Share on Whatsapp" target="_blank" class="share"><i class="fab fa-whatsapp"></i></a>
                <span class="post-date align-self-end ml-5">${post.created_at}</span>
              </div>
          </div>
        </div>`
     x.insertAdjacentHTML('afterend', postHTML);
     renderLikeButton();
     optionsPost()
   });
 };

 function renderLikeButton() {
   const e = React.createElement;

   class LikeButton extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
         liked: false
       };
     }

     render() {
       return e(
         'button', {
           onClick: () => this.setState({
             liked: !this.state.liked
           })
         },

         this.state.liked ? 'Unlike' : 'Like'
       );
     }
   }
   const domContainer = document.querySelector('#like-button');
   ReactDOM.render(e(LikeButton), domContainer);
 }

 function optionsPost() {
   var name = document.getElementById("username").innerHTML;
   var namepost = document.getElementById("username_post").innerHTML;
   if (name !== namepost) {
     var linkDel = document.getElementById("userOptions");
     linkDel.remove();
   }
 }
;
