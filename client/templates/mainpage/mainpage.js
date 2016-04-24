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
    return Meteor.user().college;
}


});
