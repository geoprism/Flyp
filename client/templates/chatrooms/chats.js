Template.chats.helpers({
  time: function(){
      return moment(this.timestamp).format('h:mm a');
  },
  yours: function(){
    curr_user = Meteor.user();
    return curr_user && this.author === curr_user.emails[0].address;
  }
});
