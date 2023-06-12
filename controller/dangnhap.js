function dangNhapController($scope,$http){


    var profileArray = [];
    var profile = {};
    $scope.profile = {};

    const url = "http://localhost:3000/profile";


    $scope.onSubmit = function(event){
        event.preventDefault();

        $http
            .get(url)
            .then(function(response){
                profileArray = response.data;
                for(var i = 0; i < profileArray.length; i++){
                    if($scope.profile.emailAdress.match(profileArray[i].emailAdress)){
                        profile = profileArray[i];
                        break;
                    }
                }
                if(profile == null){
                    alert("Email Adress or Password is incorrect")
                }else{
                    if($scope.profile.passWord == profile.passWord){
                        alert("Login Success");
                        window.location.href = "#trangchu"
                    }else{
                        alert("Email Adress or Password is incorrect")
                        return;
                    }   
                }
            })
            .catch(function(error){
                console.log(error);
            })
        
    }


}