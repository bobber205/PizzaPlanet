app.controller('mainController', ["$scope",function($scope) {
  //showing current date for the menu
  $scope.today = new Date();

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
  
  
  $scope.menus = {
    "appetizers": {
      name: "Appetizers",
      items: $scope.appetizers
    },
    "mains": {
      name: "Mains",
      items: $scope.mains
    },
    "extra": {
      name: "Extras",
      items: $scope.extra
    }
  };

}]);
