Template.mainpage.helpers({
  directory: function(){
    return Meteor.users.find()
  }
});

Template.mainpage.events({
  'click': function(e){
    e.preventDefault();
    if(Meteor.users.find().count() > 1){
      var randomer = Math.floor((Math.random() * Meteor.users.find().count()) + 1);
      var second_user = Random.choice(Meteor.users.find());

      var chatroom = {
        author: Meteor.user(),
        receiver: second_user,
        title:'test'
      };
      chatroom._id = Chatrooms.insert(chatroom);
      Router.go('chatrooms', chatroom);
    }
    else
      alert("Not enough users! Please wait for more users to be registered");
  }
})
