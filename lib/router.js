Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
  //waitOn: function(){ return Meteor.subscribe('chatrooms', Meteor.user())},
  //waitOn: function(){ return Meteor.subscribe('chats')}
});
Router.route('/', {name:'mainpage'});
Router.route('/chatrooms/:_id',{
  name: 'chatrooms',
  data:function() {return Chatrooms.findOne(this.params._id);}
});
var requireLogin = function(){
  if(! Meteor.user()){
    this.render('notlogged');
  }
  else{
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only:'mainpage'});
