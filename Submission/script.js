// Write a getName function
/*Input: John Lennon
Output: John Lennon
*/
let rememberedName;
const getName = (name) => {
    if (rememberedName === undefined) {
        rememberedName = name;
    }
    return rememberedName;
    
};

/**
 * NOTE! Do not delete the JavaScript below
 * It's used to make the form work, and to run autograder tests
 */
export { getName };
