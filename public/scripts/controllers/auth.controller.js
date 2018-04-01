angular.module('placeApp').controller('AuthController',['$mdDialog', '$mdToast', function($mdDialog, $mdToast) {
    console.log('Auth Controller');
    let self = this;
    let auth = firebase.auth();

    self.move = () => {
        window.location = '/register';
    }

    self.back = () => {
        window.location = '/';
    }

    self.registerUser = (email, password) => {
        console.log('button to register user clicked');

        auth.createUserWithEmailAndPassword(email, password)
            .then(function(firebaseUser) {
                console.log('user', firebaseUser);
                window.location = '/userView';
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
        console.log('login button clicked');
        
        let loginEmail = self.loginEmail;
        let loginPassword = self.loginPassword;

        auth.signInWithEmailAndPassword(loginEmail, loginPassword)
            .then(function(firebaseUser) {
                console.log('successful');
                window.location = '/userView';
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

    self.logout = () => {
        auth.signOut()
            .then(function() {
                console.log('successfully logged out');
                self.user = '';
                window.location('index.html');
                $mdToast.show(
                    $mdToast.simple()
                      .textContent('Successfully Logged Out')
                      .position('bottom')
                      .hideDelay(3000)
                  );
                
            })
            .catch(function(error) {
                console.log('Error signing out', error);
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
