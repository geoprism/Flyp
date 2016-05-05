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
  layoutTemplate: 'direct_layout',
  data:function() {return Chatrooms.findOne(this.params._id);}
});
Router.route('/register', {
  name:'signup',
  layoutTemplate: 'direct_layout'
});
Router.route('/login',{
  name:'login',
  layoutTemplate: 'direct_layout'
});
Router.route('/frontpage',{
  name:'frontpage',
  layoutTemplate: 'direct_layout'
});

var requireLogin = function(){
  if(! Meteor.user()){
    Router.go('/frontpage');
  }
  else{
    this.next();
  }
}

var noLogin = function(){
  if(Meteor.user()){
    Router.go('/');
  }
  else{
    this.next();
  }
}


Router.onBeforeAction(noLogin, {only:['signup','login','frontpage']});
Router.onBeforeAction(requireLogin, {only:['mainpage',"chatrooms"]});
Router.onBeforeAction('dataNotFound', {only:'chatrooms'});
