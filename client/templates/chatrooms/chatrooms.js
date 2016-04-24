Template.chatrooms.helpers({
  chatlist: function(){
    return Chats.find({roomid : this._id});
  },
  roomname: function(){
    if(this.author === Meteor.user()._id){
      return Meteor.users.findOne(this.receiver).emails[0].address;
    }
    else {
      return Meteor.users.findOne(this.author).emails[0].address;
    }
  },

  flypped: function(){
    return this.exchanges >= 5;
  }
});
