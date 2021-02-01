'use strict'

console.log(`in the posts.js`)
const e = React.createElement;

class Post extends React.Component {
  render() {
    return <h1>hello take 2</h1>;
    // <h1>Hello, {this.props.name}</h1>
  }
}

const domContainer = document.getElementById('react-posts');
ReactDOM.render(<Post />, domContainer);

// export default Post
// 'use strict';
// console.log(`in the like_button.js file`)
// const e = React.createElement;
//
// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }
//
//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }
//
//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }
