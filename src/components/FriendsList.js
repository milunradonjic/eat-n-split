import Friend from "./Friend";

export default function FriendsList({ friends, selectedFriend, onSelectFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} onSelectFriend={onSelectFriend} />
      ))}
    </ul>
  )
}