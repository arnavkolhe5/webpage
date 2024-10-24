let totalCalories = 0;

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can enhance this)
    if (username === '' || password === '') {
        alert('Both fields must be filled out');
        return false; // Prevent form submission
    }

    // Simulate successful login (you might want to implement actual authentication)
    alert('Login successful!');
    window.location.href = "food.html"; // Redirect to the food selection page
    return false; // Prevent default form submission
}

function calculateCalories() {
    const food = document.getElementById('food').value;
    let calories = 0;

    // Assign calorie values based on food selection
    switch (food) {
        case 'roti':
            calories = 100;
            break;
        case 'paneer':
            calories = 250;
            break;
        case 'dal':
            calories = 150;
            break;
        case 'rice':
            calories = 130;
            break;
        case 'vegetable':
            calories = 80;
            break;
        case 'curd':
            calories = 100;
            break;
        case 'salad':
            calories = 50;
            break;
        case 'sweet':
            calories = 200;
            break;
        case 'chicken_curry':
            calories = 300;
            break;
        case 'mutton_curry':
            calories = 400;
            break;
        case 'fish_fry':
            calories = 250;
            break;
        case 'biryani':
            calories = 500;
            break;
        case 'pizza':
            calories = 285; // per slice
            break;
        case 'burger':
            calories = 500;
            break;
        case 'fries':
            calories = 365;
            break;
        case 'pasta':
            calories = 200;
            break;
        case 'samosa':
            calories = 150;
            break;
        default:
            break;
    }

    // Add the food item to the list
    const foodList = document.getElementById('foodList');
    const listItem = document.createElement('li');
    listItem.textContent = `${food}: ${calories} calories`;
    foodList.appendChild(listItem);

    // Update total calories
    totalCalories += calories;
    document.getElementById('totalCalories').textContent = totalCalories;

    // Reset form
    document.getElementById('foodForm').reset();
    return false; // Prevent default form submission
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    // Calculate BMI
    if (weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height");
        return false;
    }

    const bmi = (weight / (height * height)).toFixed(2); // BMI formula
    document.getElementById('bmiResult').textContent = bmi;

    // Reset form
    document.getElementById('bmiForm').reset();
    return false; // Prevent default form submission
}
