#### Installation
1. Install [NodeJS](https://nodejs.org/en/download/)(v10+), gloablly. This will also install `npm`.
2. Navigate to root folder and run `npm install`

#### Local Server
1. Run `npm run start` to start a local server on localhost:8080 to view the application

#### Take-home technical test. Create a web form that when submitted, loads a "Thank You" page showing the values of the form.
- Fields: Name, Email, Address, City, State, Zip
- Make the form layout responsive for mobile layouts and desktop layouts
- Keep form accessibility in mind
- on form submit, render a json object of the form data to the console
- Bonus: validate the email is proper email and other basic validations on fields before submitting.
- Bonus: auto-populate the city based on zip code using an external API
- Bonus: XSS protection on the Thank You page values