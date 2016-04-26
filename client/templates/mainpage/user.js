Template.user.helpers({
  name: function(){
    var schooly = this.college.split(".");
    return (this.name + " (" + schooly[0].toUpperCase()+ ")");
  }
});
