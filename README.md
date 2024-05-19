# Mental Health Message Generator

## Description
The Mental Health Message Generator is a simple JavaScript program that generates random, supportive, and uplifting messages focused on mental health. Each message is constructed from three different pieces of data to create a unique and encouraging statement every time the program is run.

## Features
- Randomly generates a positive affirmation, supportive action, and positive outcome.
- Provides encouragement and support to promote positive mental health.
- Easy to run locally using Node.js.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) must be installed on your computer.
- [Git](https://git-scm.com/) for version control (optional but recommended).

### Steps
1. Clone the repository or create a new directory:
    ```bash
    git clone <repository-url>
    cd mental-health-message-generator
    ```

2. Initialize a Node.js project (if not already done):
    ```bash
    npm init -y
    ```

3. Create the JavaScript file `messageGenerator.js` and add the following content:

    ```javascript
    // messageGenerator.js

    // Data arrays
    const positiveAffirmations = [
        "You are strong",
        "You are capable",
        "You are loved",
        "You are resilient",
        "You are important"
    ];

    const supportiveActions = [
        "take a deep breath",
        "reach out for support",
        "practice self-care",
        "embrace your emotions",
        "give yourself credit"
    ];

    const positiveOutcomes = [
        "and feel the peace within.",
        "and know you are not alone.",
        "and nurture your mind and body.",
        "and let them guide you.",
        "and recognize your achievements."
    ];

    // Function to get a random element from an array
    function getRandomElement(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    // Function to generate a random mental health message
    function generateMessage() {
        const affirmation = getRandomElement(positiveAffirmations);
        const action = getRandomElement(supportiveActions);
        const outcome = getRandomElement(positiveOutcomes);
        
        return `${affirmation}, ${action}, ${outcome}`;
    }

    // Generate and log a random mental health message
    console.log(generateMessage());
    ```

## Usage

1. Navigate to the project directory:
    ```bash
    cd mental-health-message-generator
    ```

2. Run the message generator:
    ```bash
    node messageGenerator.js
    ```

Every time you run the program, it will output a new, randomized mental health message. For example:
- "You are capable, embrace your emotions, and let them guide you."
- "You are loved, practice self-care, and nurture your mind and body."

## Version Control

To keep track of your changes and collaborate with others, use Git for version control.

1. Initialize a Git repository:
    ```bash
    git init
    ```

2. Stage and commit your changes:
    ```bash
    git add .
    git commit -m "Initial commit of mental health message generator program"
    ```

3. (Optional) Push to a remote repository:
    - Create a repository on GitHub or another Git hosting service.
    - Add the remote repository and push your changes:
    ```bash
    git remote add origin <repository-url>
    git push -u origin main
    ```

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit pull requests. Any additions to the list of positive affirmations, supportive actions, or positive outcomes are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
