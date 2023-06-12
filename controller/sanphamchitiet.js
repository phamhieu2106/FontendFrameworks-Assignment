function sanPhamChiTietController($scope,$http,$routeParams){

    $scope.sanpham = {};

    const url = "http://localhost:3000/listGames";


    $http
        .get(url + "/" + $routeParams.id)
        .then(function(response){
            $scope.sanpham = response.data;
        })
        .catch(function(error){
            console.log(error);
        })
}