angular.module('timeApp')
  .directive('showTime', function() {
    return {
      restrict: 'E',
      template: '<div> The current Time is: {{time}}</div>',
      scope: {
        fabColor: '@color'
      },
      link: function(scope, element, attrs) {

        var currentTime = new Date();
        scope.time = currentTime.toString();
        element.css({
          color: scope.fabColor
        });

      }
    }
  });
