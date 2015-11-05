       var pointsArray = document.getElementsByClassName('point');

           // Function now accepts point param instead of index param, style methods called on point instead of points[index]
           // Previous code worked properly, but this solution code is better written
           var revealPoint = function revealPoint(point) {
             point.style.opacity = 1;
             point.style.transform = "scaleX(1) translateY(0)";
             point.style.msTransform = "scaleX(1) translateY(0)";
             point.style.WebkitTransform = "scaleX(1) translateY(0)";
           };

           var animatePoints = function(points) { 

           // for (var i = 0; i < points.length; i++){
           //   revealPoint(i);
           // }
           
           forEach(points, revealPoint);

        }


        window.onload = function() {

          if (window.innerHeight > 950) {
             animatePoints(pointsArray);
           }

          var sellingPoints = document.getElementsByClassName('selling-points')[0];
          var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

          window.addEventListener('scroll', function(event) {
            if (document.body.scrollTop >= scrollDistance) {
              animatePoints(pointsArray);   
            }
          });
        }