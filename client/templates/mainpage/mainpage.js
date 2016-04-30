Template.mainpage.helpers({
  directory: function(){
    return Meteor.users.find()
  },
  chatrooms_list: function(){
    return Chatrooms.find()
},

person: function(){
  if(Meteor.user())
    return Meteor.user().name;
},

school: function(){
  if(Meteor.user()){
    var schooly = Meteor.user().college.split(".");
    return schooly[0].toUpperCase();
  }
}


});
