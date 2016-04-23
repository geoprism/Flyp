Template.chatrooms.helpers({
  chatlist: function(){
    return Chats.find({roomid : this._id});
  }
});
