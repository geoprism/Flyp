Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function(){ return Meteor.subscribe('chatrooms')}
});

Router.route('/', {name:'mainpage'});
Router.route('/chatrooms/:_id',{
  name: 'chatrooms',
  data:function() {return Chatrooms.findOne(this.params._id);}
});
