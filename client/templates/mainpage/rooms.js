Template.rooms.helpers({
  partner: function(){
    if(this.receiver == Meteor.user()._id)
      if(this.exchanges >=5 )
        return Meteor.users.findOne(this.author).name;
      else {
        return 'Classmate';
      }
    else
      if(this.exchanges >=5 )
        return Meteor.users.findOne(this.receiver).name;
      else {
        return 'Classmate';
      }
  }
});
