Accounts.onCreateUser(function(options,user){
  user.name = options.name;
  user.college = options.college;
  user.partners = options.partners;
  return user;
});
