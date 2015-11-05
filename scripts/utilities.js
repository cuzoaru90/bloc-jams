
        // revealPoints uses point param instead of index param, so callback(i) has changed to callback(elements[i])
        function forEach(elements, callback){  

            for (var i = 0; i < elements.length; i++){
              callback(elements[i]);
            }

        }