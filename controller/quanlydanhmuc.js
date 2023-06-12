function quanLyDanhMucController($scope,$routeParams,$http){

    const urlCategories = "http://localhost:3000/categoryGames";


    var id = -1;

    console.log($routeParams.index);
    if($routeParams.index > 0){
        id = $routeParams.index;
    }

    if(id > 0){
        $http
        .get(urlCategories + '/' + id)
        .then(function(response){
            $scope.category = response.data;
        })
        .catch(function(error){
            console.log(error);
            alert(console.log);
        })
    }

    $scope.onSubmit = function(event){
        event.preventDefault();
        if(id == -1){
            $http
            .post(urlCategories,$scope.category)
            .then(function(){
                alert("Add Successfully!");
            })
            .catch(function(error){
                console.log(error);
                alert("Add Failure!");
            })
        }else{
            $http
            .put(urlCategories + "/" + id,$scope.category)
            .then(function(){
                alert("Update Successfully!");
                id = -1;
                window.location.href = "#qldanhmuc"
            })
            .catch(function(error){
                console.log(error);
                alert("Update Failure!");
            })
        }
    }
    
}