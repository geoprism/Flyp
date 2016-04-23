Template.rooms.helpers({
  partner: function(){
    if(this.receiver == Meteor.user()._id)
      return Meteor.users.findOne(this.author).emails[0].address;
    else
      return Meteor.users.findOne(this.receiver).emails[0].address;
  }
});
