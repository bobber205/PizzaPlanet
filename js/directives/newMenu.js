console.log("testing");
app.directive("newMenu", function(){
  return {
    restrict: "E",
    scope: {
      menu: "="
    },
    templateUrl: "js/directives/newMenu.html",
    link: function(scope, element, attrs) {
      console.log("testing directive");
      scope.addNew = function() {
        scope.addingNew = false;
        newMenu = {
          price: scope.newPrice,
          description: scope.newDescription,
          name: scope.newName,
          deleted: false
        };
        scope.menu.items.unshift(newMenu);
        scope.newName = scope.newPrice = scope.newDescription = "";
      };
      scope.cancelAddNew = function() {
        scope.addingNew = false;
      };
      
    }
  };
});