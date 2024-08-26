document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("text-input");
    const checkButton = document.getElementById("check-btn");
    const result = document.getElementById("result");

    checkButton.addEventListener("click", () => {
        const inputText = textInput.value;
        const lowerCaseText = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");
        if (inputText.trim() === "") {
            alert("Please input a value");
            return;
        }
        const isPalindrome = lowerCaseText === [...lowerCaseText].reverse().join("");
        if (inputText.length === 1) {
            result.innerText = `${inputText} is a palindrome`;
        } else if (isPalindrome) {
            result.innerText = `${inputText} is a palindrome`;
        } else {
            result.innerText = `${inputText} is not a palindrome`;
        }
    });
});
