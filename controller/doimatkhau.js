function doiMatKhauController($scope,$http){

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
                if($scope.profile.emailAdress.match(profileArray[i].emailAdress)
                 && $scope.profile.fullName.match(profileArray[i].fullName)){
                    profile = profileArray[i];
                    break;
                }
            }

            if(profile == null){
                alert("Email Adress is incorrect")
            }else{
              if($scope.profile.passWord.match($scope.profile.cpassWord)){
                    profile.passWord = $scope.profile.passWord;

                    $http
                        .put(url + '/' + profile.id,profile)

                    alert('Change password successfully!');
                    window.location.href = "#dangnhap"
              }else{
                alert('Password and cPassword is not the same!');
              }
            }
        })
        .catch(function(error){
            console.log(error);
        })


    }
}