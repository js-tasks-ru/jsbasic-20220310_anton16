function makeFriendsList(friends) {
  let friendList = document.createElement('ul');
  friendList.innerHTML = friends.map(friend => `<li>${friend.firstName} ${friend.lastName}</li>`).join('\n');
  return friendList;
}
