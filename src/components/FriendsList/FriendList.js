import FriendsListItem from "./FriendsListItem"
import PropTypes from 'prop-types'
import s from './FriendList.module.css'

export default function FriendsList({friends}) {
    return <ul  className={s.list}>
     {friends.map(friend =>(
         
        <FriendsListItem 
        key = {friend.id}
        avatar = {friend.avatar}
        name ={friend.name}
        isOnline = {friend.isOnline}
        
        /> 
     ))}
  </ul>
}

FriendsList.propTypes ={
   friends : PropTypes.array
}