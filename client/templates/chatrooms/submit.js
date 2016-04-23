Template.submit.events({
  'submit form':function(e){
    e.preventDefault();

    var chat = {
      content: $(e.target).find('[name=content]').val(),
      //roomid:
      author: Meteor.user().emails[0].address
    };

    chat._id = Chats.insert(chat);
  }
})
