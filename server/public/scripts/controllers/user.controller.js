angular.module('placeApp').controller('UserController',['$mdDialog', '$mdToast', '$location', '$http', function($mdDialog, $mdToast, $location, $http) {
    console.log('User Controller');
    let self = this;

    // Options available from Foursquare API
    self.searchOptions = ['food', 'drinks', 'coffee', 'shops', 'art', 'outdoors', 'sights', 'trending'];

    self.searchResults = [];

    self.search = () => {
        $http.get('/apiRoute', {
            params: {
                section: self.userOption
            }
        }).then(function(response) {
            self.searchResults = response.data.response.groups[0].items;  
        }).catch(function(error) {
            console.log('There was an error', error);
        });
    }
}]);
