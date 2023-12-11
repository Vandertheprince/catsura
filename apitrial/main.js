const catImg = document.getElementById('catImage');
const loaCAT = document.getElementById('learn-more');

const URL_CAT = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_aVLTVFxpeWZda0Xxs5fxwCZybDCzz7JDGkSm6Xn8FXVsaK022oSaYxiSDbF4ZspS';

const loaCATimages = () => {
    fetch(URL_CAT)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const catData = data[0]; // The response is an array, we take the first item
            const imageURL = catData.url;
            console.log(imageURL);
            catImg.src = imageURL;
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
        });
};

// Adding event listener for button click
loaCAT.addEventListener('click', loaCATimages);
