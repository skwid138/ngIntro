console.log('sourced client.js');

// create a new angular module, with no dependencies
var myApp = angular.module('myApp', []);
// the array will hold modules as we add them

myApp.controller('GamesController', function() {
    console.log('NG');
    // store this in a variable (view Model)
    var vm = this; // this is the controller in which it is located

    // adding an array to the vm object to hold games
    vm.allGames = [];

    // fired by ng-click button
    vm.getGame = function( ) {
        console.log('in getGame: ', vm.newGame);
        vm.allGames.push(vm.newGame);
        console.log('allGames ->', vm.allGames);
        
    }; // end getGame
}); // end GamesController
