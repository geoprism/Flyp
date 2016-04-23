Meteor.publish('chatrooms', function(){
  return Chatrooms.find();
});

Meteor.publish('chats', function(){
  return Chats.find();
});
