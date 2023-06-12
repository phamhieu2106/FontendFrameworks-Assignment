function taoTaiKhoanController($scope,$http){

    $scope.profile = {};


    const url = "http://localhost:3000/profile";


    $scope.onSubmit = function(event){
        event.preventDefault();

        if($scope.profile.emailAdress.match($scope.profile.cemailAdress)){
            $http
            .post(url,$scope.profile)
            .then(function(){
                alert("Success!");
                window.location.href = "#dangnhap"
            })
            .catch(function(error){
                alert("Error!");
            })
        }else{
            alert("Email and cEmail is not the same!");
        }
    }
}