angular.module('placeApp').controller('UserController',['$mdDialog', '$mdToast', '$location', '$http', function($mdDialog, $mdToast, $location, $http) {
    console.log('User Controller');
    let self = this;

    self.searchClick = false;

    self.searchOptions = ['food', 'drinks', 'coffee', 'shops', 'art', 'outdoors', 'sights', 'trending'];

    self.searchResults = [];

    self.search = () => {
        console.log('inside getStuff function');

        self.fixedOption = self.userOption.replace(' ', '+');

        console.log('this is the query object', self.fixedOption);
        
        $http.get('/apiRoute', {
            params: {
                section: self.fixedOption
            }
        }).then(function(response) {
            self.searchResults = response.data.response.groups[0].items;
            console.log('This is the results', self.searchResults);
            
        }).catch(function(error) {
            console.log('There was an error', error);
            self.searchClick = true;
        });
    }
}]);
