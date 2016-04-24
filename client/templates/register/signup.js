var list_colleges = ['uci.edu', 'ucsd.edu', 'ucr.edu', 'ucla.edu', 'ucsb.edu', 'ucsc.edu'];
Template.signup.events({
  'submit form': function(e){
    e.preventDefault();
    var emailaddlist = $(e.target).find('[name=emailAddress]').val().split("@");
    if(emailaddlist.length<=1){
      alert('That is not a valid email address!');
      console.log('test1');
    }

    else if(emailaddlist.length>2){
      console.log('test2');
      alert('That is not a valid email address!');
    }
    else{
      console.log('test3');
      console.log(list_colleges.indexOf(emailaddlist[1].toLowerCase()));
      if(list_colleges.indexOf(emailaddlist[1].toLowerCase()) > -1){
        console.log('test4');
        Accounts.createUser({
          name: $(e.target).find('[name=name]').val(),
          email:$(e.target).find('[name=emailAddress]').val(),
          college: emailaddlist[1],
          password:$(e.target).find('[name=password]').val() }, (error)=>{
          if(error){
            console.log('test5');
            alert(error.reason, 'danger');
          }
          else{
            console.log('test6');
            console.log('test7');
            Router.go('/');
          }
        });
      }
      else{
        console.log('test10');
        alert('That is not a valid UC Email address!', 'danger');
      }
    }
  }
});
