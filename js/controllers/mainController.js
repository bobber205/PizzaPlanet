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
  //  mains
  $scope.addMain = function() {
    $scope.addingNewMain = false;
    newMain = {
      price: $scope.newPrice,
      description: $scope.newDescription,
      name: $scope.newName,
      deleted: false
    };
    $scope.mains.unshift(newMain);
    $scope.newName = $scope.newPrice = $scope.newDescription = "";
  };
  $scope.cancelAddMain = function() {
    $scope.addingNewMain = false;
    $scope.newName = $scope.newPrice = $scope.newDescription = "";
  };


  // extra
  $scope.addExtra = function() {
    $scope.addingNewExtra = false;
    newExtra = {
      price: $scope.newPrice,
      description: $scope.newDescription,
      name: $scope.newName,
      deleted: false
    };
    $scope.extra.unshift(newExtra);
    $scope.newName = $scope.newPrice = $scope.newDescription = "";
  };
  $scope.cancelAddExtra = function() {
    $scope.addingNewExtra = false;
    $scope.newName = $scope.newPrice = $scope.newDescription = "";
  };
// seed data
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
      price: 6.95,
      deleted: false
    },
    {
      name: "PEPPERONI",
      description: "Pepperoni, marinara sauce, mozzarella, fresh oregano.",
      price: 7.95,
      deleted: false
    },
    {
      name: "RUSTICA",
      description: "Marinara sauce, kalamata olives, roasted garlic, fresh oregano.",
      price: 8.95,
      deleted: false
    },
  ];
  $scope.extra = [
    {
      name: "BREADSTICKS",
      description: "Served with marinara sauce.",
      price: 4.85,
      deleted: false
    },
    {
      name: "SOUP OF THE DAY",
      description: "Take a chance.",
      price: 4.95,
      deleted: false
    },
    {
      name: "BUFFALO WINGS",
      description: "Feel the power of wings.",
      price: 6.95,
      deleted: false
    },
  ];

}]);
