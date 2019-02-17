import React, { Component } from 'react';
import FriendsList from './FriendsList';
import AddForm from './addform';
import './index.css';

class App extends Component {
  state = {
    friends: [
      {id:1,school:'Fgiet',name:'Ankit',age:'21'},
      {id:2,school:'Fgiet',name:'Aakarsh',age:'24'}
    ]
  }

  removeFriend = (id) => {
    //console.log(id);
    const friends = this.state.friends.filter(friends => {
        return friends.id !==id
    });
    this.setState({
          friends: friends
    })
  }

  addFriend = (friend) => {
    friend.id = Math.random();
    let friends = [...this.state.friends,friend];
    this.setState({
      friends: friends
    })
  } 
  
  render() {
    return (
      <React.Fragment>
          <AddForm addFriend={this.addFriend}/>
          <div className="App">
            <h2 style={{textAlign:'center',color:'white'}}>Friend's List</h2>
            <FriendsList friends={this.state.friends} removeFriend={this.removeFriend}/>
          </div>
      </React.Fragment>
    );
  }
}

export default App;
