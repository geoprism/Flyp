Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function(){ return Meteor.subscribe('chatrooms', Meteor.user())},
  waitOn: function(){ return Meteor.subscribe('chats')},
  waitOn: function(){ return Meteor.subscribe('directory')}
});
Router.route('/', {name:'mainpage'});
Router.route('/chatrooms/:_id',{
  name: 'chatrooms',
  data:function() {return Chatrooms.findOne(this.params._id);}
});
Router.route('/register', {name:'signup'});
Router.route('/login',{name:'login'});
Router.route('/frontpage',{name:'frontpage'});

var requireLogin = function(){
  if(! Meteor.user()){
    this.render('frontpage');
  }
  else{
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only:'mainpage'});
Router.onBeforeAction('dataNotFound', {only:'chatrooms'});
