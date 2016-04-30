Template.chatrooms.helpers({
  chatlist: function(){
    return Chats.find({roomid : this._id});
  },
  roomname: function(){
    if(Meteor.user()){
      if(this.author === Meteor.user()._id){
        var curr_user = Meteor.users.findOne(this.receiver);
        return curr_user && curr_user.name;
      }
      else {
        var curr_user = Meteor.users.findOne(this.author);
        return curr_user && curr_user.name;
      }
    }
    else{
      Router.go("/");
    }
  },

  flypped: function(){
    return this.exchanges >= 5;
  }
});

Template.chatrooms.events({
  'click, focus, blur':function(){
    if(this.author === Meteor.user()._id){
      Chatrooms.update({_id: this._id}, {$set:{alert_author: false}});
      Chatrooms.update({_id: this._id}, {$set:{pop_alert_author: false}});
    }
    else{
      Chatrooms.update({_id: this._id}, {$set:{alert_receiver: false}});
      Chatrooms.update({_id: this._id}, {$set:{pop_alert_receiver: false}});
    }
  }
});
