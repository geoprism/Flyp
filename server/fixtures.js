Accounts.onCreateUser(function(options,user){
  user.name = options.name;
  user.college = options.college;
  return user;
});
