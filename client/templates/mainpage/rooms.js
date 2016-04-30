Template.rooms.events({
  'click':function(){
    if(this.receiver == Meteor.user()._id){
      Chatrooms.update({_id: this._id}, {$set:{alert_receiver: false}});
    }
    else{
      Chatrooms.update({_id: this._id}, {$set:{alert_author: false}});
    }
  }
})

Template.rooms.helpers({
  partner: function(){
    if(this.receiver == Meteor.user()._id)
      if(this.exchanges >=5 )
        return Meteor.users.findOne(this.author).name;
      else {
        return '(exchange '+(5-this.exchanges).toString() + ' messages to reveal)';
      }
    else
      if(this.exchanges >=5 )
        return Meteor.users.findOne(this.receiver).name;
      else {
        return '(exchange '+(5-this.exchanges).toString() + ' messages to reveal)';
      }
  },

  alert: function(){
    if(this.receiver == Meteor.user()._id){
      if(this.pop_alert_receiver){
        //sAlert.warning('New message! from ' + Meteor.users.findOne({_id:this.author}).name);
        if(this.exchanges >=5)
          sAlert.warning(Meteor.users.findOne({_id:this.author}).name+': '+Chats.findOne({roomid: this._id}, {sort: {timestamp: -1, limit: 1}}).content);
        else{
          sAlert.warning("Anonymous"+': '+Chats.findOne({roomid: this._id}, {sort: {timestamp: -1, limit: 1}}).content);
        }
        Chatrooms.update({_id: this._id}, {$set:{pop_alert_receiver: false}});
      }
      if(this.alert_receiver){
        return "New Message!";
      }
      else{
        return "";
      }
    }
    else {
      if(this.pop_alert_author){
        if(this.exchanges >= 5)
          sAlert.warning(Meteor.users.findOne({_id:this.receiver}).name+': '+Chats.findOne({roomid: this._id}, {sort: {timestamp: -1, limit: 1}}).content);
        else {
          sAlert.warning("Anonymous"+': '+Chats.findOne({roomid: this._id}, {sort: {timestamp: -1, limit: 1}}).content);
        }
        Chatrooms.update({_id: this._id}, {$set:{pop_alert_author: false}});
      }
      if(this.alert_author){
        return "New Message!";
      }
      else{
        return "";
      }
    }
  }
});
