Template.randomize.events({
  'click .randomize': function(e){
    e.preventDefault();
    var current_partners =[];
    var authored_chatrooms = Chatrooms.find({author:Meteor.user()._id}).fetch();
    var received_chatrooms = Chatrooms.find({receiver:Meteor.user()._id}).fetch();
    var all_current_chatrooms = authored_chatrooms.concat(received_chatrooms);
    var all_current_partners = [];
    for(i=0; i<authored_chatrooms.length; i++){
      all_current_partners.push(authored_chatrooms[i].receiver);
    }
    for(i=0; i<received_chatrooms.length; i++){
      all_current_partners.push(received_chatrooms[i].receiver);
    }
    all_current_partners = _.uniq(all_current_partners);
    if(Meteor.users.find({college: Meteor.user().college}).count() - all_current_chatrooms.length > 1){
      var second_user = Random.choice(Meteor.users.find().fetch());
      while(second_user._id === Meteor.user()._id || second_user.college != Meteor.user().college || all_current_partners.indexOf(second_user._id) > -1)
        second_user = Random.choice(Meteor.users.find().fetch());
      var chatroom = {
        author: Meteor.user()._id,
        receiver: second_user._id,
        exchanges: 0,
        alert_author: false,
        alert_receiver:false,
        pop_alert_author: false,
        pop_alert_receiver: false
      };
      chatroom._id = Chatrooms.insert(chatroom);
      Router.go('chatrooms', chatroom);
    }
    else
      alert("Not enough users in your univerity! Please wait for more users to be registered");
  }
})
