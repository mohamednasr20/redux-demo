import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUser } from "../actions";
import UserHeader from "./UserHeader";

// class PostList extends Component {
//   componentDidMount() {
//     this.props.fetchPosts();
//   }

//   render() {
//     const postsList = this.props.posts.map((post) => <div>{post.title}</div>);
//     if (this.props.posts[1]) {
//       console.log(this.props.posts[0].title);
//     }

//     return <div>{postsList}</div>;
//   }
// }

const PostList = ({ posts, fetchPostsAndUser }) => {
  useEffect(() => {
    fetchPostsAndUser();
  }, []);

  const postsList = posts.map((post) => {
    return (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <UserHeader userId={post.userId} />
      </div>
    );
  });

  return <div>{postsList}</div>;
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUser })(PostList);
