Template.submit.events({
  'submit form':function(e){
    e.preventDefault();

    var chat = {
      content: $(e.target).find('[name=content]').val(),
      author: Meteor.user().emails[0].address,
      timestamp: new Date(),
      roomid: this._id
    };



    chat._id = Chats.insert(chat);
    $('html, body').scrollTop( $(document).height() );
    $(e.target).find('[name=content]').val('');

  }
})
