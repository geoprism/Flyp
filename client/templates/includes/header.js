Template.header.onRendered(function(){
  $(".button-collapse").sideNav();
  $(".sidenav-button").click(function(){
    $(".button-collapse").sideNav("hide");
  });
});
