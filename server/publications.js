Meteor.publish('chatrooms', function(author){
  return Chatrooms.find({author:author});
});

Meteor.publish('chats', function(chatroom_id){
  return Chats.find({chatroom_id:chatroom_id});
});

Meteor.publish('directory', function(){
  return Meteor.users.find({}, {fields:{emails:1, profile:1}});
})
