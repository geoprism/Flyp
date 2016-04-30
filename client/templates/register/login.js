Template.login.events({
  'submit form': function(e){
    e.preventDefault();
    var email = $(e.target).find('[name=emailAddress]').val();
    var password = $(e.target).find('[name=password]').val();
    Meteor.loginWithPassword(email, password, function(error){
      if(Meteor.user()){
        Router.go('/');
      }
      else{
        alert(error.reason);
      }
    });
  }
});

Template.login.onRendered(function(){
  $('.back-button').click(function(){
    Router.go('/');
  })
});
