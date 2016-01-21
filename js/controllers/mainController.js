app.controller('mainController', ["$scope",function($scope) {
  $scope.today = new Date();
  $scope.addAppetizer = function() {
    $scope.addingNewApp = false;
    newappetizer = {
      price: $scope.newPrice,
      description: $scope.newDescription,
      name: $scope.newName,
      deleted: false
    };
    $scope.appetizers.unshift(newappetizer);
    $scope.newName = $scope.newPrice = $scope.newDescription = "";
  };
  $scope.cancelAddAppetizer = function () {
    $scope.addingNewApp = false;
    $scope.newName = $scope.newPrice = $scope.newDescription = "";
  };
  
  $scope.completeEditApp = function() {
    $scope.editApp = false;
     
  };
   
  $scope.deleteEditApp = function() {
    $scope.editApp = false;
     
  };
  $scope.cancelEditApp = function() {
    $scope.editApp = false;
     
  };
  
  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95,
      deleted: false
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95,
      deleted: false
    },
    {
      name: 'BRUSCHETTA',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95,
      deleted: false
    }
  ];
  $scope.mains = [
    {
      name: "MARGHERITA",
      description: "Marinara sauce, mozzarella, fresh basil.",
      price: 6.95
    },
    {
      name: "PEPPERONI",
      description: "Pepperoni, marinara sauce, mozzarella, fresh oregano.",
      price: 7.95
    },
    {
      name: "RUSTICA",
      description: "Marinara sauce, kalamata olives, roasted garlic, fresh oregano.",
      price: 8.95
    },
  ];
  $scope.extra = [
    {
      name: "BREADSTICKS",
      description: "Served with marinara sauce.",
      price: 4.85
    },
    {
      name: "SOUP OF THE DAY",
      description: "Take a chance.",
      price: 4.95
    },
    {
      name: "BUFFALO WINGS",
      description: "Feel the power of wings.",
      price: 6.95
    },
  ];

}]);
