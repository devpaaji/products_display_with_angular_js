app.factory('displayproducts', ['$http', function ($http) {
    return $http.get('https://hackerearth.0x10.info/api/fashion?type=json&query=list_products')
              .success(function (data) {
                  return data;
              })
              .error(function (err) {
                  return err;
              });
}]);

