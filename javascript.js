const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please provide a valid height: ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please provide a valid weight: ${weight}`;
    } else {
        const bmi = (weight / (height / 100) ** 2).toFixed(2);

        // Show result
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

        // Remove any previous weight guide result
        const previousWeightGuideResult = document.querySelector('#weight-guide-result');
        if (previousWeightGuideResult) {
            previousWeightGuideResult.remove();
        }

        // Create and append the weight guide result
        const weightGuideDiv = document.createElement('div');
        weightGuideDiv.id = 'weight-guide-result';

        if (bmi < 18.6) {
            weightGuideDiv.innerHTML = `<span>Under Weight</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            weightGuideDiv.innerHTML = `<span>Normal Weight</span>`;
        } else {
            weightGuideDiv.innerHTML = `<span>Over Weight</span>`;
        }

        results.appendChild(weightGuideDiv);
    }
});
