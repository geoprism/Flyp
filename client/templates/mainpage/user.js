Template.user.helpers({
  email: function(){
    return (this.name + " (" + this._id + " " + this.college+ ")");
  }
});
