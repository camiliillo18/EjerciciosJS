console.clear()

function palindrome(text) {
    if(typeof text === 'string') {
        const accents = 'áéíóú';
        const vowels = 'aeiou';
        let formattedText = text.toLowerCase().replaceAll(' ','');

        for (let i=0;i < accents.length;i++) {
            formattedText = text.replaceAll(accents.charAt(i), vowels.charAt(i))
        }

        for (let i=0;i < formattedText.length;i++) {
            const firstIndex = i;
            const lastIndex = formattedText.length - i - 1;

            if(firstIndex >= lastIndex) {
                return true;
            }

            if (formattedText.charAt(firstIndex) !== formattedText.charAt(lastIndex)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
console.log(palindrome("Dabale arroz a la zorra el abad"))