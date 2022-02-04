
import './App.css';
import Profile from './components/Profile/profile'
import user from './components/Profile/user.json'
import data from './components/Statistics/data.json'
import transactions from './components/Transactions/transactions.json'
import friends from './components/FriendsList/friends.json'
import Statistics from './components/Statistics/statistics';
import FriendsList from './components/FriendsList/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';
 


export default function App() {
  return <div>
    <Profile 
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar = {user.avatar}
  stats = {user.stats}
    />


  <Statistics title = "Upload stats" stats = {data} />
  <Statistics stats={data} />

  <FriendsList friends = {friends}/>
   
   <TransactionHistory  items = {transactions}/>
  </div>
}

 