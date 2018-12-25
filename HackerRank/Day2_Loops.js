// Day 2 -Loops

function vowelsAndConsonants(s){
    var vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < s.length; i++) { 
        for (let j = 0; j < vowels.length; j++) { 
            if (s[i] === vowels[j]) { 
                console.log(s[i]);
            }
        }
    }

    var vowels_string = "aeiou";

    for (let i = 0; i < s.length; i++) { 
        if (vowels_string.indexOf(s[i]) == -1) { 
            console.log(s[i]);
        }
        
    }
}

//Day 2 - Loops: This is another Code Solution from the Solutions Provided by the Creator

function vowelsAndConsonants(s) {
    let vowels = '';
    let consan = '';

    for (const letter of s) {
        if (letter == 'a' ||
            letter == 'e' ||
            letter == 'i' ||
            letter == 'o' ||
            letter == 'u' 
         ) {
            vowels += letter;
        }
        else { 
            consan += letter;
        }
    }

    for (let i = 0; i < vowels.length; i++) { 
        console.log(vowels.charAt(i));
    }

    for (let i = 0; i < consan.length; i++) { 
        console.log(consan.charAt(i));
    }
}