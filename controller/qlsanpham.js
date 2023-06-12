function qlSanPhamController($scope,$http){
    $scope.allGames = [];

    //url
    const urlGames = "http://localhost:3000/listGames";

    $http.get(urlGames).then(function(response){
        $scope.allGames = response.data;
    }).catch(function(error){
        console.log(error);
    });

    $scope.remove = function(index){
        var id = $scope.allGames[index].id;
        $http.delete(urlGames + "/" + id)
        .then(function(){
            alert("Remove Success!");
        })
        .catch(function(error){
            console.log(error);
        })
    }

    
}