import PropTypes from 'prop-types'
import s from './FriendList.module.css'


export default function FriendsListItem({avatar, name, isOnline}) {
   return <li className={s.item}>
  <span className = {s[isOnline]}>{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className={s.name}>{name}</p>
</li>
}

FriendsListItem.propTypes ={
  avatar : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  isOnline : PropTypes.bool.isRequired,
}