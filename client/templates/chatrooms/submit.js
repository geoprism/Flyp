Template.submit.events({
  'submit form':function(e){
    e.preventDefault();

    if($(e.target).find('[name=content]').val() != ""){
        if(Chats.find({roomid: this._id}).count() === 0){
          var chat = {
            content: $(e.target).find('[name=content]').val(),
            author: Meteor.user().emails[0].address,
            timestamp: new Date(),
            roomid: this._id
          };
        }
        else if(Chats.findOne({roomid: this._id}, {sort: {timestamp: -1}}).author === Meteor.user().emails[0].address){
          var chat = {
            content: $(e.target).find('[name=content]').val(),
            author: Meteor.user().emails[0].address,
            timestamp: new Date(),
            roomid: this._id
          };
        }
        else{
          var chat = {
            content: $(e.target).find('[name=content]').val(),
            author: Meteor.user().emails[0].address,
            timestamp: new Date(),
            roomid: this._id
          };
          var chatroom = Chatrooms.findOne({_id: this._id});
          var exchanges_num = chatroom.exchanges + 1;
          Chatrooms.update({_id: this._id}, {$set:{exchanges: exchanges_num}});
        }
    }

    chat._id = Chats.insert(chat);

    if(this.receiver == Meteor.user()._id){
      Chatrooms.update({_id: this._id}, {$set:{alert_author: true}});
      Chatrooms.update({_id: this._id}, {$set:{pop_alert_author: true}});
    }
    else{
      Chatrooms.update({_id: this._id}, {$set:{alert_receiver: true}});
      Chatrooms.update({_id: this._id}, {$set:{pop_alert_receiver: true}});
    }
    $('html, body').scrollTop( $(document).height() );
    $(e.target).find('[name=content]').val('');



  }
})
