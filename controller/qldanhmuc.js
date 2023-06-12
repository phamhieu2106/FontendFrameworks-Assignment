function qlDanhMucController($scope,$http){

    $scope.allCategories = [];

    const urlCategories = "http://localhost:3000/categoryGames";


    $http
    .get(urlCategories)
    .then(function(response){
        $scope.allCategories = response.data;
    })
    .catch(function(error){
        console.log(error);
    })

    $scope.remove = function(index){
        var id = $scope.allCategories[index].id;

        $http
        .delete(urlCategories + '/' + id)
        .then(function(){
            alert("Removed Successfully!");
        })
        .catch(function(error){
            alert(error.message);
        })
    }

}