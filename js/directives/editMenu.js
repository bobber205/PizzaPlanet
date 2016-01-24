console.log("testing");
app.directive("editMenu", function(){
  return {
    restrict: "E",
    scope: {
      info: "="
    },
    templateUrl: "js/directives/editMenu.html",
    link: function(scope, element, attrs) {
      
      
    }
  };
});