import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    // we will handle the connect related actioncreators/mapDispatchToProps using the props and pass the component info to store.
    // so this.props - will give that info
    // we use the same for the inflow too that null thing/mapStateToProps.
    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  };

  render() {
    return (
      <div> 
        <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>         
        </div>
        </form>
        <button onClick={this.props.fetchComments}>Fetch Comments</button>
        </div>
      
    );
  }
}

//wire up redux through connect(mapStateToProps,allactioncreators/mapDispatchToProps)
//mapStateToProps - is the inflow from redux state to component
//mapDispatchToProps - is the actions outflow from component to redux state.

//in this case CommentBox doesn't get any state out of our application store, we mark it as null
//whereas since we will access some actions of store to save comments we will have actions creators/mapDispatchToPros

//export default CommentBox;
export default connect(null,actions)(CommentBox);
