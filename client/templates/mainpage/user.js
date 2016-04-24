Template.user.helpers({
  email: function(){
    var schooly = this.college.split(".");
    return (this.name + " (" + schooly[0].toUpperCase()+ ")");
  }
});
