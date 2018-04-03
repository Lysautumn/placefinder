angular.module('placeApp').controller('AuthController',['$mdDialog', '$mdToast', '$location', '$scope', function($mdDialog, $mdToast, $location, $scope) {
    console.log('Auth Controller');
    let self = this;
    let auth = firebase.auth();

    self.move = () => {
       $location.path('/register');
    }

    self.back = () => {
        $location.path('/');
    }

    self.registerUser = (email, password) => {
        console.log('button to register user clicked');

        auth.createUserWithEmailAndPassword(email, password)
            .then(function(firebaseUser) {
                $location.path('/userView');
                // Solution to $location not changing the path
                // Found in this thread: https://stackoverflow.com/questions/11784656/angularjs-location-not-changing-the-path
                $scope.$apply();
            }).catch(function(error) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('Oops!')
                        .textContent(error.message)
                        .ariaLabel('Password Error Dialog')
                        .ok('Ok')
                );
        });
    }

    self.login = () => {
        
        let loginEmail = self.loginEmail;
        let loginPassword = self.loginPassword;

        auth.signInWithEmailAndPassword(loginEmail, loginPassword)
            .then(function(firebaseUser) {
                $location.path('/userView')
                $scope.$apply();
            })
            .catch(function(error) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('Oops!')
                        .textContent(error.message)
                        .ariaLabel('Password Error Dialog')
                        .ok('Ok')
                );
            });
            
    }

    self.logout = () => {
        auth.signOut()
            .then(function() {
                self.user = '';
                $location.path('/');
                $scope.$apply();
                $mdToast.show(
                    $mdToast.simple()
                      .textContent('Successfully Logged Out')
                      .position('bottom')
                      .hideDelay(3000)
                  );
                
            })
            .catch(function(error) {
                $mdDialog.show(
                    $mdDialog.alert()
                      .parent(angular.element(document.querySelector('#popupContainer')))
                      .clickOutsideToClose(true)
                      .title('Error')
                      .textContent('There was a problem logging out, please try again')
                      .ariaLabel('Logout Error Dialog')
                      .ok('Ok')
                );
            })

    }
}]);
