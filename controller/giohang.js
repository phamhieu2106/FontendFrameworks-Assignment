function gioHangController($scope,$http){

    $scope.gameAlreadyBuy = [];
    $scope.tong = 0;


    var idCart = [];

    //url
    const URL = "http://localhost:3000/cart";
    const urlBuyed = "http://localhost:3000/gameAlreadyBuy";

    //Get Games
    $http.get(URL).then(function(respone){
        $scope.gameAlreadyBuy = respone.data;
        for(var i = 0; i < $scope.gameAlreadyBuy.length; i++){
            $scope.tong += 50;
            idCart.push($scope.gameAlreadyBuy);
        }
    }).catch(function(error){
        console.log("Error: " + error);
    })


    //add to game buyed
    $scope.buy = function (){
        if($scope.gameAlreadyBuy.length <= 0){
            alert("Don't Have Any Game In Your Cart To Buy!");
        }else{

            for(var i = 0; i < $scope.gameAlreadyBuy.length; i++){
                $http
                    .post(urlBuyed,$scope.gameAlreadyBuy[i]);
            }
            for(var i = 0; i < $scope.gameAlreadyBuy.length; i++){
                $http
                    .delete(URL + "/" + $scope.gameAlreadyBuy[i].id);
            }

            $scope.tong = 0;

            $http.get(URL).then(function(respone){
                $scope.gameAlreadyBuy = respone.data;
                for(var i = 0; i < $scope.gameAlreadyBuy.length; i++){
                    $scope.tong += 50;
                    idCart.push($scope.gameAlreadyBuy);
                }
            }).catch(function(error){
                console.log("Error: " + error);
            })

            alert("Buy completed!");
        }
    }


    $scope.remove = function(index){
        

        let id = $scope.gameAlreadyBuy[index].id

        $http
            .delete(URL + '/' + id)
            .then(function(){
            })
            .catch(function(error){
                console.log(error);
            });

    }
}