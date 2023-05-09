# Angular Dynamic Form

This is an Angular app that displays a dynamic form based on a JSON file.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the project dependencies.
3. Run `ng serve` to start the development server.
4. Open a web browser and navigate to `http://localhost:4200` to view the app.

## Usage

The app displays a form based on the `form.json` file in the `assets` directory. The JSON file defines the form fields, their labels, types, and whether they are mandatory or not. When the form is submitted, the app logs the form data to the console.

## Enhancements

Given more time, there are several improvements that could be made to this app, including:

- **Styling improvements:** The app's user interface could be improved to make it more visually appealing and easier to use. For example, we could add a header and navigation to make the app look like a web app.
- **Error handling:** The app currently logs the form data to the console when it is submitted, but it does not handle errors or provide any feedback to the user if there are issues with the form submission. We could add form validation to ensure that all required fields are filled out and provide error messages to the user if there are issues.
- **Accessibility:** The app's accessibility could be improved to ensure that it is usable by people with disabilities. We could add ARIA attributes to the form fields to make it easier for users with screen readers to navigate the form.
- **Unit tests:** The app currently does not have any unit tests. We could add unit tests to ensure that the app functions correctly and to catch issues before they are deployed to production.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
