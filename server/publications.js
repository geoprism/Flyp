Meteor.publish('chatrooms', function(){
  return Chatrooms.find({$or: [{author:this.userId},{receiver:this.userId}]});
});

Meteor.publish('chats', function(chatroom_id){
  return Chats.find({});
});

Meteor.publish('directory', function(){
  return Meteor.users.find({}, {fields:{emails:1, name:1, college:1, partners:1}});
})
