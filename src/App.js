import "./styles.css";
import React, { Component } from "react";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasLiked: false, hasDisliked: false, like: 100 };
  }
  handleLike = () => {
    if (!this.state.hasDisliked) {
      this.setState({
        hasLiked: !this.state.hasLiked
      });
    } else {
      this.setState({
        hasLiked: true,
        hasDisliked: false
      });
    }
  };

  handleDislike = () => {
    if (!this.state.hasLiked) {
      this.setState({
        hasDisliked: !this.state.hasDisliked
      });
    } else {
      this.setState({
        hasLiked: false,
        hasDisliked: true
      });
    }
  };

  render() {
    const { hasLiked } = this.state;
    const classLikeButton = `like-button ${hasLiked ? "liked" : ""}`;
    return (
      <>
        <div>
          <button className={classLikeButton} onClick={this.handleLike}>
            Like |
            <span className="likes-counter">
              {this.state.hasLiked ? this.state.like + 1 : this.state.like}
            </span>
          </button>
        </div>
        <style>{`
       .like-button {
           font-size: 1rem;
           padding: 5px 10px;
           color:  #585858;
       }
      .liked {
           font-weight: bold;
           color: #1565c0;
      }
   `}</style>
      </>
    );
  }
}

export default LikeButton;
