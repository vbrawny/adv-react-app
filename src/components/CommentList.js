import React from 'react';
import { connect } from 'react-redux';
import reducers from '../reducers';
export const CommentsList =  (props) => {

  // const renderComments = () =>  (
  //   props.comments.map(comment => (<li key={comment}>{comment}</li>))
  // )
  console.log(props.comments);
  return (
  <div>
    <ul>
    {props.comments.map(comment => (<li key={comment}>{comment}</li>))}
    </ul>
  </div>
  );
};

const mapStateToProps = (state) => {
  return {comments: state.comments}
}

export default connect(mapStateToProps,null)(CommentsList);