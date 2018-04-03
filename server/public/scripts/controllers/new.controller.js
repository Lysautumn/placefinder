angular
    .module('placeApp')
    .controller('NewController', function($firebaseObject) {
        let self = this;

        const rootRef = firebase.database().ref().child('angular');
        const ref = rootRef.child('object');

        self.object = $firebaseObject(ref);
        console.log('object', self.object);
        


    });