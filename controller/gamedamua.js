function gameDaMuaController($scope,$http){

    $scope.gameAlreadyBuy = [];


    const urlGameAlreadyBuy = "http://localhost:3000/gameAlreadyBuy";



    $http
        .get(urlGameAlreadyBuy)
        .then(function(response) {
            $scope.gameAlreadyBuy = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });


        
}