Meteor.publish('chatrooms', function(author){
  return Chatrooms.find({});
});

Meteor.publish('chats', function(chatroom_id){
  return Chats.find({});
});

Meteor.publish('directory', function(){
  return Meteor.users.find({}, {fields:{emails:1, profile:1}});
})
