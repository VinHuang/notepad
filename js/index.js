    angular.module("myNoteApp", []).controller('myNoteCtrl', ['$scope', function($scope) {
      $scope.message = "";
      $scope.left = function() {
        $scope.leftWords = 100 - $scope.message.length;
        return $scope.leftWords;
      };
      $scope.save = function() {
        alert("Note Saved");
      };
      $scope.clear = function() {
        $scope.message = "";
      };

    }]);