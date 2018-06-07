function rollDice() {
    const val = document.querySelector('#sides').value;
    // console.log('value is', val);

    if(val === '') {
        alert('Please enter a number of sides!');
    } else if(isNaN(val) || val <= 0) {
        alert('Please enter a valid number of sides!');
    } else {
        const random = generateRandom(val);
        // console.log('random is', random);
        document.querySelector('#dice').textContent = random;
    }
}

const generateRandom = num => Math.ceil(Math.random()*num);