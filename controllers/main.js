var app = angular.module('FusionApp', ['ngCookies']);
app.controller('HomeController', ['$scope', '$cookies', 'displayproducts', function ($scope, $cookies, displayproducts) {
    displayproducts.success(function (data) {
        $scope.show = data.products;

        //get the product count
        $scope.productCount = $scope.show.length;
        $scope.apiCount;

       //check if 'count' cookie exists. If it does, don't do anything except update
        //and put the new apiCount in. If it does not exist, create the 'count' cookie and set to 0. 
        if (!$cookies.get('count')) { $cookies.put('count', 0); } 
     
        if ($scope.apiCount === null || $scope.apiCount === undefined)
        {
          $scope.apiCount = $cookies.get('count');
          $scope.apiCount++;
          $cookies.put('count', $scope.apiCount);
        }
    });

   
    $scope.range = ['500', '1000', '2000', '3000', '4000'];
    $scope.showRange = '0';
    /*
    http://plnkr.co/edit/lNJNYagMC2rszbSOF95k?p=preview
    $scope.greaterThan = function (prop, val) {
        return function (item) {
            console.log(prop, val);
                return item[prop] > val;
            }
      //if it's bigger than 0 it should be set, in that case, just increment it 
       if ($cookies.get('count') > 0) {
           $cookies.put('count', $cookies.get('count') + 1);
           //otherwise it must not be set so set it's initial value(which will be 1 
       } else {
           //because this is all happening inside of a success function) }
           $cookies.put('count', 1);
        }

        */

    //function to filter products based on price range
    $scope.lesserThan = function (p) {
        // here p will $scope.show
        if (parseInt(p.price, 10) > parseInt($scope.showRange, 10)) {
            return p;
        };
    }
 
   
    //function for sorting products
    $scope.sortProducts = function (colname) {
        $scope.SortColumn = colname;
    };
}]);

