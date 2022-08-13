(function () {

    document.addEventListener('keydown', function (event) {
        var charStr = event.key

        if (charStr == 'K' || charStr == null) {

            var title = document.getElementById("title");
            title.innerHTML = `Miles to Kilometers Converter`;

            document.getElementById('convert').addEventListener('submit', function (event) {
                event.preventDefault();

                var Miles = parseFloat(document.getElementById('distance').value);
                var ans = document.getElementById("answer");

                if (Miles) {
                    var conversion = (Miles * 1.60934).toFixed(3)
                    ans.innerHTML = `<h2>${Miles} Miles converts to ${conversion} Kilometers</h2>`;
                } 
                else {
                    ans.innerHTML = `<h2>Please provide a number</h2>`;
                }

            });

        } else if (charStr == 'M') {

            var title = document.getElementById("title");
            title.innerHTML = `Kilometers to Miles Converter`;

            document.getElementById('convert').addEventListener('submit', function (event) {
                event.preventDefault();

                var KM = parseFloat(document.getElementById('distance').value);
                var ans = document.getElementById("answer");

                if (KM) {
                    var conversion = (KM / 1.60934).toFixed(3)
                    ans.innerHTML = `<h2>${KM} Kilometers converts to ${conversion} miles</h2>`;
                } 
                else {
                    ans.innerHTML = `<h2>Please provide a number</h2>`;
                }

            });

        }

    });


})();