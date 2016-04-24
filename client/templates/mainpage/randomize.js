Template.randomize.events({
  'click .randomize': function(e){
    e.preventDefault();
    if(Meteor.users.find({college: Meteor.user().college}).count() > 1){
      var second_user = Random.choice(Meteor.users.find().fetch());
      while(second_user._id === Meteor.user()._id)
        second_user = Random.choice(Meteor.users.find().fetch());
      while(second_user.college != Meteor.user().college)
        second_user = Random.choice(Meteor.users.find().fetch());
      var chatroom = {
        author: Meteor.user()._id,
        receiver: second_user._id,
        exchanges: 0
      };
      chatroom._id = Chatrooms.insert(chatroom);
      Router.go('chatrooms', chatroom);
    }
    else
      alert("Not enough users in your univerity! Please wait for more users to be registered");
  }
})
