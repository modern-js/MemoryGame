import React, { Component } from 'react';

class Card extends Component {
  constructor(){
    super();
    this.state = {
      classname : "card"
    }
  }
  render() {
    return (
        <div className="card-container" >
            <div className={this.props.flipState? "card flip": "card"} onClick={this.props.flip.bind(this, this.props.index)}>
                <div className="side">{this.props.index}</div>
                <div className="side back">{this.props.character}</div>
            </div>
        </div>
    );
  }
  
}



export default Card;
