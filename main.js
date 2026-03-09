(function () {
    var message = 'Hello World';
    console.log(message);
    var emailCheck = "Bassant";
    var passwordCheck = "123";
    var trial = 2;
    var score = 0;
    var email = prompt('Enter your email:') || '';
    console.log("Your email is: ".concat(email));
    var password = prompt('Enter your password:') || '';
    console.log("Your password is: ".concat(password));
    for (var i = 0; i < trial; i++) {
        if (email === emailCheck && password === passwordCheck) {
            console.log('Login successful!');
            break;
        }
        else {
            console.log('Invalid email or password. Please try again.');
            email = prompt('Enter your email:') || '';
            password = prompt('Enter your password:') || '';
            trial--;
        }
    }
    if (trial === 0) {
        alert('You have exceeded the maximum number of login attempts. Please try again later.');
    }
    else {
        for (var i = 0; i < 4; i++) {
            var num1 = Math.floor(Math.random() * 100) + 1;
            var num2 = Math.floor(Math.random() * 100) + 1;
            var operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
            var answer = 0;
            var userInput = parseInt(prompt("What is ".concat(num1, " ").concat(operator, " ").concat(num2, "?")) || '0');
            switch (operator) {
                case '+':
                    answer = num1 + num2;
                    break;
                case '-':
                    answer = num1 - num2;
                    break;
                case '*':
                    answer = num1 * num2;
                    break;
                case '/':
                    answer = num1 / num2;
                    break;
            }
            if (userInput === answer) {
                console.log('Correct!');
                score++;
            }
        }
        prompt("Your score is: ".concat(score));
    }
})();
