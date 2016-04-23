Template.randomize.events({
  'click': function(e){
    e.preventDefault();
    if(Meteor.users.find().count() > 1){
      var second_user = Random.choice(Meteor.users.find().fetch());
      while(second_user._id === Meteor.user()._id)
        second_user = Random.choice(Meteor.users.find().fetch());
      var chatroom = {
        author: Meteor.user()._id,
        receiver: second_user._id,
        title:'test'
      };
      chatroom._id = Chatrooms.insert(chatroom);
      Router.go('chatrooms', chatroom);
    }
    else
      alert("Not enough users! Please wait for more users to be registered");
  }
})
