(() => {
  let message: string = 'Hello World';
  console.log(message);

  let emailCheck: string = "Bassant";
  let passwordCheck: string = "123";
  let trial: number = 2;
  let score: number = 0;

  let email: string = prompt('Enter your email:') || '';
  console.log(`Your email is: ${email}`);

  let password: string = prompt('Enter your password:') || '';
  console.log(`Your password is: ${password}`);

  for (let i: number = 0; i < trial; i++) {
    if (email === emailCheck && password === passwordCheck) {
      console.log('Login successful!');
      
      break;
    } else {
      console.log('Invalid email or password. Please try again.');
      email = prompt('Enter your email:') || '';
      password = prompt('Enter your password:') || '';
      trial--;
    }
  }
  if (trial === 0) {
   alert('You have exceeded the maximum number of login attempts. Please try again later.')
    ;
  }
  else {
    for (let i: number = 0; i < 4; i++) {
        let num1:number= Math.floor(Math.random() * 100) + 1;
        let num2:number= Math.floor(Math.random() * 100) + 1;
        let operator:string = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
        let answer:number = 0;
         let userInput: number = parseInt(prompt(`What is ${num1} ${operator} ${num2}?`) || '0');
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
    prompt(`Your score is: ${score}`); 
  }
})();