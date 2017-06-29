import React, {Component} from 'react';
import $ from 'jquery';

class Chatbar extends Component {

  constructor(props) {
    super(props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }


  handleUsernameChange(e) {
    if (e.keyCode === 13) { // if Enter is pressed"
      let userName = e.target.value || "Anonymous"; //get user name OR if empty, set it to "Anonymous"

      this.props.onUserChange(userName)

    }
  }

  handleMessageChange(e) {

    if (e.keyCode === 13) { // if Enter is pressed

      let messageContent = e.target.value;

      //message action
      this.props.onMessage({
        content: messageContent
      })

      //this.props.onUserChange

      $(this).val(''); //set input to empty afterwards
    }
  }



  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={''} onKeyUp={this.handleUsernameChange}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" defaultValue={''}  onKeyUp={this.handleMessageChange}/>
      </footer>
    );
  }

}

export default Chatbar;
