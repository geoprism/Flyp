Template.mainpage.helpers({
  directory: function(){
    return Meteor.users.find()
  },
  chatrooms_list: function(){
    return Chatrooms.find()
},

person: function(){
    return Meteor.user().name;
},

school: function(){
    var schooly = Meteor.user().college.split(".");

    return schooly[0].toUpperCase();
}


});
