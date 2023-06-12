function quanLySanPhamController($scope,$http,$routeParams){

    $scope.categoryGames = [];



    const urlAPI ="http://localhost:3000/categoryGames";
    const urlGame = "http://localhost:3000/listGames"
    const urlGameAdd = "http://localhost:3000/GameAdd"

    
    var id = -1;

    if($routeParams.index > 0){
        id = $routeParams.index;
    }

    if( id > 0){
        $http.get(urlGame + "/" + id)
        .then(function(response){
            $scope.game = response.data; 
        })
        .catch(function(error){
            console(error.message);
        })
    }


    $http.get(urlAPI).then(function(response){
        $scope.categoryGames = response.data;
        $scope.newCategoryGames = response.data.id;
    }).catch(function(error){
        console.log(error);
    });

    const game = {
        id: 0,
        urlGame : "",
        name: "",
        price: "50$",
        description: ""
    }


    $scope.game = game;


    $scope.onSubmit = function(event){
        event.preventDefault();
        if(id == -1){
            console.log($scope.game);
            console.log($scope.game);
            $http.post(urlGame,$scope.game)
            .then(function(){
                alert("Add Sucessful!");
            })
            .catch(function(error){
                console.log(error);
                alert("Add Failure")
            })
            $http.post(urlGameAdd,$scope.game)
        }else{
            $http.put(urlGame + "/" + id, $scope.game)
            .then(function(){
                id = -1;
                alert("Update Success!");
                window.location.href = "#qlsanpham"
            })
            .catch(function(error){
                alert("Update Failed!");
            })
        }
    }



}