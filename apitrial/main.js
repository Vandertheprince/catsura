const catImg = document.getElementById('catImage');
const loaCAT = document.getElementById('learn-more');

const URL_CAT = 'https://random.dog/woof.json';

const loaCATimages = () => {
    fetch(URL_CAT)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.blob();
        })
        .then(blob => {
            const imageURL = URL.createObjectURL(blob);
            console.log(imageURL);
            catImg.src = imageURL;
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
        });
};

// Adding event listener for button click
loaCAT.addEventListener('click', loaCATimages);
