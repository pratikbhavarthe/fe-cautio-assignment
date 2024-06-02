export const generateRandomNumbers = () => {
    // Create an array containing numbers from 1 to 100
    const arr = Array.from({ length: 100 }, (_, index) => index + 1);
    // Shuffle the array to randomize the order
    return shuffle([...arr]);
};

// Function to shuffle an array
const shuffle = (arr: number[]) => {
    // Create a copy of the original array to avoid mutation
    const shuffledArray = [...arr];

    // Perform Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at index i and j
        [shuffledArray[j], shuffledArray[i]] = [shuffledArray[i], shuffledArray[j]];
    }

    // Return the shuffled array
    return shuffledArray;
};
