Template.submit.events({
  'submit form':function(e){
    e.preventDefault();

    $(document).ready(function () {
    $('input[type=text], input[type=password]').attr('autocomplete', 'off');
    });

    var chat = {
      content: $(e.target).find('[name=content]').val(),
      author: Meteor.user().emails[0].address,
      timestamp: new Date()
    };



    chat._id = Chats.insert(chat);
    $('html, body').scrollTop( $(document).height() );
    $(e.target).find('[name=content]').val('');

  }
})
