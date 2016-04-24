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
