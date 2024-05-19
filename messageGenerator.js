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
