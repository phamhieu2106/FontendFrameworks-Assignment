var myPage = angular.module("myPage", ["ngRoute"]);

//controller
myPage.controller("sanPhamController", function($scope,$http){
    $scope.categoryGames = [];
    $scope.allGameArrays = [];
    $scope.navLinkIndex = [];
    
    var gameAdd = [];
    //

    //urlAPI
    const urlCart = "http://localhost:3000/cart";
    const urlGameAdd = "http://localhost:3000/GameAdd";
    const urlAPI ="http://localhost:3000/categoryGames";
    const urlGameAPI = "http://localhost:3000/listGames";

    //cart ammout
    $http
    .get(urlCart)
    .then(function (response){
        $scope.cart_ammout = response.data.length;
    })
    .catch(function (error){
        console.log(error);
    })

    //getAPI category
    $http.get(urlAPI).then(function(response){
        $scope.categoryGames = response.data;
        $scope.newCategoryGames = response.data.id;
    }).catch(function(error){
        console.log(error);
    });
    //getAPI games
    $http.get(urlGameAPI).then(function(response){
        $scope.allGameArrays = response.data;
    }).catch(function(error){
        console.log(error);
    });
    //getAPI games from the sever index when clicked
    $scope.navLink = function(id){
        const newURL = "http://localhost:3000" + "/" + id;
        if(id < 5){
            $http
            .get(newURL)
            .then(function(response){
                $scope.idCategores = response.data;
            }).catch(function(error){
                console.log(error);
            });
        }else{
            $http
            .get(urlGameAdd)
            .then(function(response){
                for(let i = 0; i < response.data.length; i++){
                    if(response.data[i].category == id){
                        gameAdd.push(response.data[i]);
                        $scope.idCategores = gameAdd;
                    }
                }
            })
            .catch(function(error){
                console.log(error);
            });
        }
    }

    //click buy now
    $scope.buyNow = function (id) {

        $http
        .get(urlGameAPI + '/' + id)
        .then(function (response){
            game = response.data;
            $http.post(urlCart,game);
        })
        .catch(function(error){
            alert("You Already Have a Game In Your Cart!");
            console.log(error);
        })
    }

    $scope.addToCart = function(id){
        $http
        .get(urlGameAPI + '/' + id)
        .then(function (response){
            game = response.data;
            $http.post(urlCart,game);
        })
        .catch(function(error){
            console.log(error);
            alert("Add To Cart Failure")
        })
    }

});


//dangnhap dang ky taotaikhoan
myPage.controller("dangNhapController",dangNhapController);
myPage.controller("doiMatKhauController",doiMatKhauController);
myPage.controller("taoTaiKhoanController",taoTaiKhoanController);
//trangchu
myPage.controller("trangChuController",trangChuController);

//giohang controller
myPage.controller("gioHangController",gioHangController);

myPage.controller("gameDaMuaController",gameDaMuaController);

myPage.controller("qlSanPhamController",qlSanPhamController);
myPage.controller("qlDanhMucController",qlDanhMucController);

//quanlysanpham quanlydanhmuc controller
myPage.controller("quanLySanPhamController",quanLySanPhamController);
myPage.controller("quanLyDanhMucController",quanLyDanhMucController);

//chitietsanpham
myPage.controller("sanPhamChiTietController",sanPhamChiTietController);


//

//config
myPage.config(function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/trangchu",{
        templateUrl: "./pages/trangchu.html",
        controller : "trangChuController"
    })
    .when("/gioithieu",{
        templateUrl: "./pages/gioithieu.html"
    })
    .when("/dangnhap",{
        templateUrl: "./pages/dangnhap.html",
        controller: "dangNhapController"
    })
    .when("/dangky",{
        templateUrl: "./pages/taotaikhoan.html",
        controller: "taoTaiKhoanController"
    })
    .when("/doimatkhau",{
        templateUrl: "./pages/doimatkhau.html",
        controller: "doiMatKhauController"
    })
    .when("/giohang",{
        templateUrl: "./pages/giohang.html",
        controller: "gioHangController"
    })
    .when("/sanpham",{
        templateUrl: "./pages/sanpham.html"
    })
    .when("/gamedamua",{
        templateUrl: "./pages/gamedamua.html",
        controller: "gameDaMuaController"
    })
    .when("/qlsanpham",{
        templateUrl: "./pages/qlsanpham.html",
        controller: "qlSanPhamController",
    })
    .when("/qlsanpham/quanlysanpham",{
        templateUrl : "./pages/quanlysanpham.html",
        controller: "quanLySanPhamController"
    })
    .when("/qlsanpham/quanlysanpham/:index",{
        templateUrl : "./pages/quanlysanpham.html",
        controller: "quanLySanPhamController"
    })
    .when("/qlsanpham/quanlysanpham/chitiet/:id",{
        templateUrl : "./pages/sanphamchitiet.html",
        controller: "sanPhamChiTietController"
    })
    .when("/qldanhmuc",{
        templateUrl: "./pages/qldanhmuc.html",
        controller: "qlDanhMucController"
    })
    .when("/qldanhmuc/quanlydanhmuc",{
        templateUrl: "./pages/quanlydanhmuc.html",
        controller: "quanLyDanhMucController"
    })
    .when("/qldanhmuc/quanlydanhmuc/:index",{
        templateUrl: "./pages/quanlydanhmuc.html",
        controller: "quanLyDanhMucController"
    })
    .otherwise({
        redirectTo: "/dangnhap"
    })
})