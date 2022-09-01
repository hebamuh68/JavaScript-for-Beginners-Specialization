(function(){


var detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    var destName = event.target.elements['name'].value;
    var destLocation = event.target.elements['location'].value;
    var destPhoto = event.target.elements['photo'].value;
    var destDesc = event.target.elements['description'].value;

    // remove all user content after grapping its values
    for (var i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
    }


    var destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

    var wishListContainer = document.getElementById('destination_container');

    if (wishListContainer.children.length === 0) {
        document.getElementById('title').innerHTML = "My Wish List";
    }

    document.querySelector('#destination_container').appendChild(destCard);
}


function createDestinationCard(name, location, photoURL, description) {

    var card = document.createElement('div');
    card.className = 'card';

    //IMAGE (NOt required)
    var img = document.createElement('img');
    img.setAttribute('alt', name);

    var constantPhotoUrl = 'images/signpost.jpg';

    if (photoURL.length === 0) {
        img.setAttribute('src', constantPhotoUrl);
    } 
    else {
        img.setAttribute('src', photoURL);
    }

    card.appendChild(img); //<===========================APPEND=========================

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    //TITLE
    var cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle); //<==================APPEND=======================

    //LOCATION
    var cardSubtitle = document.createElement('h4');
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle); //<===============APPEND=====================

    //DESCRIPTION (NOt required)
    if (description.length !== 0) {
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = description;
        cardBody.appendChild(cardText); //<===============APPEND======================
    }

    //REMPVE BUTTON
    var cardDelteBtn = document.createElement('button');
    cardDelteBtn.innerText = 'Remove';

    cardDelteBtn.addEventListener('click', removeDestination);
    cardBody.appendChild(cardDelteBtn); //<=======================APPEND==============


    // APPEND TO THE MAIN CARD
    card.appendChild(cardBody);
    return card;

}

function removeDestination(event) {
    var card = event.target.parentElement.parentElement;
    card.remove();
}

})();
