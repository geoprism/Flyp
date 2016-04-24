Template.signup.events({
  'submit form': function(e){
    e.preventDefault();
    console.log(typeof $(e.target).find('[name=password]').val());
    Accounts.createUser({
      name: $(e.target).find('[name=name]').val(),
      email:$(e.target).find('[name=emailAddress]').val(),
      password:$(e.target).find('[name=password]').val() }, (error)=>{
      if(error){
        alert(error.reason, 'danger');
      }
      else
        Router.go('/');
      });
    }
});
