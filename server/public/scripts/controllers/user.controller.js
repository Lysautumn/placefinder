angular.module('placeApp').controller('UserController',['$mdDialog', '$mdToast', '$location', '$http', function($mdDialog, $mdToast, $location, $http) {
    console.log('User Controller');
    let self = this;

    self.getStuff = () => {
        console.log('inside getStuff function');
        $http({
            method: 'GET',
            url: '/stuff'
        }).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log('There was an error', error); 
        });
    }
}]);
