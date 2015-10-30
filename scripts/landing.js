       var animatePoints = function() {
         var points = document.getElementsByClassName('point');
           
           function revealPoint(point) {
             point.style.opacity = 1;
             point.style.transform = "scaleX(1) translateY(0)";
             point.style.msTransform = "scaleX(1) translateY(0)";
             point.style.WebkitTransform = "scaleX(1) translateY(0)";
           };

           for (var index in points){
             revealPoint(points[index]);
           }

        }