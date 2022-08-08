(function () {

    document.getElementById('convert').addEventListener('submit', function (event) {
        event.preventDefault();

        var Miles = parseFloat(document.getElementById('distance').value);
        var ans = document.getElementById("answer");

        if (Miles) {

            var conversion = (Miles * 1.60934).toFixed(3)
            ans.innerHTML = `<h2>${Miles} miles converts to ${conversion} Kilometers</h2>`;
        } else {
            ans.innerHTML = `<h2>Please provide a number</h2>`;
        }

    });



})();