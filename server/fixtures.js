Accounts.onCreateUser(function(options,user){
  user.name = options.name
  return user;
});
