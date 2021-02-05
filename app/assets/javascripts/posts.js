 document.onload = getAllPosts();

 function getAllPosts() {
   fetch('https://cors-anywhere.herokuapp.com/https://acebook-jaanis-2.herokuapp.com/api/v1/posts')
     .then(response => response.json())
     .then(data => renderPost(data));
 }


 function getPostData(message, callback) {
   fetch('https://cors-anywhere.herokuapp.com/https://acebook-jaanis-2.herokuapp.com/api/v1/posts', {
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

 function renderPost(data) {
   let postsDiv = document.getElementById('posts');
   postsDiv.innerHTML = "";
   data.forEach(function (post, index) {
     let postDiv = document.createElement('div');
     postDiv.className = "post d-flex flex-row";
     renderImage(post, postDiv);
     renderPostContent(post, postDiv, index);
     postsDiv.appendChild(postDiv);
     renderLikeButton(index);
     optionsPost(index);
   })
 }

 function renderImage(post, postDiv) {
   let imageDiv = document.createElement('div');
   imageDiv.className = "post-img";
   imageDiv.innerHTML = `<img width="50" src="/assets/user-15fbbe4568b83583cb622a4031c60064abd0274ab0039ab8e8161eef78cf4a4e.png" alt="User">`
   postDiv.appendChild(imageDiv);
 }

 function renderPostContent(post, postDiv, index) {
   let contentDiv = document.createElement('div');
   contentDiv.className = "post-content  d-flex flex-column";
   contentDiv.innerHTML =
    `<div class="d-flex justify-content-between">
      <span class="user-post" id ="username_post">${post.user.username}</span>
      <div id="userOptions${index}">
        <a href="/posts/${post.id}/edit" class="edit"><i class="fas fa-pencil-alt mx-1"></i></a>
        <a href="/posts/${post.id}" rel="nofollow" data-method="delete" class="delete"><i class="fas fa-trash-alt"></i></a>
      </div>
    </div>
    <div class="post-content  d-flex flex-column">
      <p class="post-text">${post.message}</p>
    </div>
    <div class="post-content d-flex flex-row sharing">
      <span class='like-button' id="like-button-${index}"></span>
      <a rel="noopener" href="https://twitter.com/intent/tweet?text=${post.user.username}+posted+this:+*${post.message}*+%20%40acebookJAANIS%20https://acebook-jaanis.herokuapp.com%2F%20&original_referer=https://clicktotweet.com&related=clicktotweet" title="Share on Twitter" target="_blank" class="share"><i class="fab fa-twitter"></i></a>
      <a rel="noopener" href="https://www.facebook.com/sharer.php?u=https://acebook-jaanis.herokuapp.com/posts/${post.id}" title="Share on Facebok" target="_blank" class="share"><i class="fab fa-facebook-square" ></i></a>
      <a rel="noopener" href="https://api.whatsapp.com/send?text=${post.user.username}+posted+this:+*${post.message}*+on+https://acebook-jaanis.herokuapp.com/" title="Share on Whatsapp" target="_blank" class="share"><i class="fab fa-whatsapp"></i></a>
      <span class="post-date align-self-end ml-5">${post.created_at}</span>
    </div>`;
    postDiv.appendChild(contentDiv);
 }

 function renderLikeButton(index) {
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
   const domContainer = document.querySelector(`#like-button-${index}`);
   ReactDOM.render(e(LikeButton), domContainer);
 }

 function optionsPost(index) {
   var name = document.getElementById("username").innerHTML;
   console.log(`Name from id=username is ${name}`)
   var namepost = document.getElementsByClassName("user-post")[index].innerHTML;
   console.log(`Namepost from classname user-post at index ${index} is ${namepost}`)
   console.log(`Is ${name} different from ${namepost}? ${name !== namepost}`)
   if (name !== namepost) {
     console.log(`I HAVE DECIDED THAT THE NAMES ARE DIFFERENT SO I AM IN THE IF!`)
     var linkDel = document.getElementById(`userOptions${index}`);
     linkDel.remove();
   }
 }
