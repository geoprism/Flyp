Template.chatrooms.helpers({
  chatlist: function(){
    return Chats.find({roomid : this._id});
  },
  roomname: function(){
    if(this.author === Meteor.user()._id){
      return Meteor.users.findOne(this.receiver).name;
    }
    else {
      return Meteor.users.findOne(this.author).name;
    }
  },

  flypped: function(){
    return this.exchanges >= 5;
  }
});

Template.chatrooms.events({
  'click, focus, blur':function(){
    console.log('clicked event');
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
