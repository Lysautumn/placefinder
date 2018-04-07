
angular.module('placeApp').controller('UserController',['$mdDialog', '$mdToast', '$location', '$http', function($mdDialog, $mdToast, $location, $http) {
    console.log('User Controller');
    let self = this;

    class Place {
        constructor(name, address) {
            this.name = name;
            this.address = address;
        }
    }

    self.formatPlaces = Place.formatPlaces;
    // Options available from Foursquare API
    self.searchOptions = ['food', 'drinks', 'coffee', 'shops', 'art', 'outdoors', 'sights', 'trending'];

    self.searchResults = [];

    self.search = () => {
        $http.get('/apiRoute', {
            params: {
                section: self.userOption
            }
        }).then(function(response) {
            let responseArray = response.data.response.groups[0].items;
            for(let i = 0; i < responseArray.length; i++) {
                self.searchResults.push(new Place(responseArray[i].venue.name, responseArray[i].venue.location.address));
            }    
        }).catch(function(error) {
            console.log('There was an error', error);
        });
    }
}]);
