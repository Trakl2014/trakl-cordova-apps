(function() {
    'use strict';
    var onsenApp = angular.module('myApp', ['onsen.directives']);
    onsenApp.controller('dataCtrl', function($scope, $http) {
        $scope.data = 'datasadsa';
        $scope.sampleResponse = {
            "userId": "24",
            "journeyRef": "tamaki",
            "travelTime": "34",
            "isImproving": false
        }
        $scope.trafficData = [];
        console.log($scope.data)
        $scope.handleDataLoaded = function(data, status) {
            $scope.fields = data.fields;
            console.log('handle', $scope.fields, data)
        }
        $scope.fetch = function() {
            $http.get('trakl.herokuapp.com/api/travel-time').success($scope.handleDataLoaded);
            // $http({
            //     method: 'GET',
            //     url: 'javascripts/fieldDemoData2.json'
            // }).
            // success($scope.handleDataLoaded).
            // error(function(data, status, headers, config) {
            //     // called asynchronously if an error occurs
            //     // or server returns response with an error status.
            //     alert('status')
            // });
        }
        $scope.fetch();
    })
})();