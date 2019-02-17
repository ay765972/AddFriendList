import React from 'react'
import './index.css';

const FriendsList = ({friends,removeFriend}) => {

    const friendslist = friends.length ? (
        friends.map(friends => {
            return(
                <div className="list-items" 
                key={friends.id} 
                onClick={() => {removeFriend(friends.id)}}>
                    <ul>
                        <li>
                            <span>Name: {friends.name}</span>
                            <span>Age:{friends.age}</span>
                            <span>School: {friends.school}</span>
                        </li>
                    </ul>
                </div>
            )
        }) 
    ) : (<div className="list-items">
        <ul>
                    <li>
                        <span>😭!! Ohh Sorry ,You don't have any friends in the list😥</span>
                    </li>
                </ul>
    </div>
    )
    return(
        <div className="">
             {friendslist}
        </div>
    )
}

export default FriendsList;