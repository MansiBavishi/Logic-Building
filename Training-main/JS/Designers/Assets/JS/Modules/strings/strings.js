// String

    // Take input of a String and Converrt Uppercase to Lowercase and vise-verse.

    // Take input of a String and print reverse of a string.

    // Take input of a String and Count frequency of each character.

    // Take input of a Two Strings and check weather second String is a substring of first String or not.


let something = 5;
class Strings
{
    // 48 - 57 0-9
    // 97 - 122 a-z
    // 65 - 90 A-Z
    // Take input of a String and count number of Vowel, Constant, Digit or Other Character.
    counter()
    {
        let string = 'Abc@$123EioU';
        let vowels = 0, constant = 0, digit = 0, other = 0;
        

        for(let each_char of string.toLowerCase())
        {
            let charCode = each_char.charCodeAt();
            if (charCode >= 97 && charCode <= 122)
            {
                if( each_char == 'a' || each_char == 'e' || each_char == 'i' || each_char == 'o' || each_char == 'u')
                {
                    vowels++;
                }
                constant++;
            }
            else if(charCode >= 48 && charCode <= 57)
                digit++;
            else
                other++;
        }
        console.log(`There are ${vowels} vowels in the string.`);
        console.log(`There are ${constant} constant in the string.`);
        console.log(`There are ${digit} digit in the string.`);
        console.log(`There are ${other} other Characters in the string.`);

    }
}

export { Strings };