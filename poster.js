import React from "react";
import { connect } from "react-redux";
function Poster(props) {
  console.log(props);

  let posty = props.posts;
  let postlist = posty.length ? (
    posty.map(post => {
      return (
        <div key={post.id}>
          <h4> {post.title} </h4>
          <h6> {post.body} </h6>
        </div>
      );
    })
  ) : (
    <div>No posts yet </div>
  );

  return (
    <div>
      <button
        onClick={() => {
          let temppost = JSON.parse(JSON.stringify(posty[0]));
          temppost.id = Math.random();
          temppost.title = Math.random();
          props.dispatch({ type: "add", post: temppost });
        }}
      >
        Envoke dispatch
      </button>
      Hello world, there should appear some posts.:
      {postlist}
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(mapStatetoProps)(Poster);
