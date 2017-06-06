.directive('customLoader', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      size: '@', // s (small), m (medium), b (big)
      id: '@' // used to set a unique identification. Then, you can use multiple loading in the same page
    },
    template: '<span class="custom-loader loading">Carregando...</span>',
    link: function($scope, $element, $attrs) {
      $element.attr('id', 'loadingContent_' + $scope.id)
              .addClass($scope.size)
              .hide();

      $scope.$on('customLoaderVar', function(event, idLoader) {
        if ($element[0].id == 'loadingContent_' + idLoader) {
          $element.show();
        } else {
          $element.hide();
        }
      })
    }
  }
});
