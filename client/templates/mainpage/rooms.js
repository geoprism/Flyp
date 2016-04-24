Template.rooms.helpers({
  partner: function(){
    if(this.receiver == Meteor.user()._id)
      if(this.exchanges >=5 )
        return Meteor.users.findOne(this.author).name + "("+ this._id +')';
      else {
        return 'Classmate ('+ this._id +')';
      }
    else
      if(this.exchanges >=5 )
        return Meteor.users.findOne(this.receiver).name + "("+ this._id +')';
      else {
        return 'Classmate ('+ this._id +')';
      }
  }
});
