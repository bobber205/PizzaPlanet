console.log("testing");
app.directive("menuInfo", function(){
  return {
    restrict: "E",
    scope: {
      info: "="
    },
    templateUrl: "js/directives/menuInfo.html",
    link: function(scope, element, attrs) {
      
      
    }
  };
});