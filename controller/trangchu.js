function trangChuController($scope,$http){

    const urlCart = "http://localhost:3000/cart";
    const urlListGame = "http://localhost:3000/listGames"

    $http
    .get(urlCart)
    .then(function (response){
        $scope.cart_ammout = response.data.length;
    })
    .catch(function (error){
        console.log(error);
    })

    var game = {};

    $scope.buyNow = function (index) {
        var id = index;

        $http
        .get(urlListGame + '/' + id)
        .then(function (response){
            game = response.data;
            $http.post(urlCart,game);
        })
        .catch(function(error){
            console.log(error);
            alert("Buy Now Failure")
        })

    }

    $scope.addToCart = function(id){
        $http
        .get(urlListGame + '/' + id)
        .then(function (response){
            game = response.data;
            $http.post(urlCart,game);
        })
        .catch(function(error){
            console.log(error);
           alert("Game Already In Your Cart!");
        })
    }

}