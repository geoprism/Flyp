Template.rooms.helpers({
  partner: function(){
    if(this.receiver == Meteor.user()._id)
      if(this.exchanges >=5 )
        return Meteor.users.findOne(this.author).emails[0].address;
      else {
        return 'Classmate';
      }
    else
      if(this.exchanges >=5 )
        return Meteor.users.findOne(this.receiver).emails[0].address;
      else {
        return 'Classmate';
      }
  }
});
