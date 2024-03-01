// Convert roman number to decimal and vice versa

function convertToDecimal(romans) {
    let romanConversions = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < romans.length; i = i + 1) {
        let romanChar = romans[i];
        let nextChar = romans[i + 1];
        if (romanConversions[romanChar] < romanConversions[nextChar]) {
            result = result - romanConversions[romanChar];
        } else {
            result = result + romanConversions[romanChar];
        }
    }
    return result;
}

console.log(['III', 'IV', 'V', 'X', 'XIX', 'XXIV', 'XLIX', 'LVIII', 'LXXXVIII', 'LXXXIX', 'XCIV', 'C', 'DCCCXC', 'CM'].map(a => convertToDecimal(a)));
// [ 3, 4, 5, 10, 19, 24, 49, 58, 88, 89, 94, 100, 890, 900 ]

function convertToRoman(decimals) {
    let result = '';
    while (decimals > 0) {
        if (decimals >= 1000) {
            result = result + 'M';
            decimals = decimals - 1000;
        } else if (decimals >= 900) {
            result = result + 'CM';
            decimals = decimals - 900;
        } else if (decimals >= 500) {
            result = result + 'D';
            decimals = decimals - 500;
        } else if (decimals >= 400) {
            result = result + 'CD';
            decimals = decimals - 400;
        } else if (decimals >= 100) {
            result = result + 'C';
            decimals = decimals - 100;
        } else if (decimals >= 90) {
            result = result + 'XC';
            decimals = decimals - 90;
        } else if (decimals >= 50) {
            result = result + 'L';
            decimals = decimals - 50;
        } else if (decimals >= 40) {
            result = result + 'XL';
            decimals = decimals - 40;
        } else if (decimals >= 10) {
            result = result + 'X';
            decimals = decimals - 10;
        } else if (decimals >= 9) {
            result = result + 'IX';
            decimals = decimals - 9;
        } else if (decimals >= 5) {
            result = result + 'V';
            decimals = decimals - 5;
        } else if (decimals >= 4) {
            result = result + 'IV';
            decimals = decimals - 4;
        } else if (decimals >= 1) {
            result = result + 'I';
            decimals = decimals - 1;
        }
    }
    return result;
}

console.log([ 3, 4, 5, 10, 19, 24, 49, 58, 88, 89, 94, 100, 890, 900 ].map(a => convertToRoman(a)));
// [ 'III', 'IV', 'V', 'X', 'XIX', 'XXIV', 'XLIX', 'LVIII', 'LXXXVIII', 'LXXXIX', 'XCIV', 'C', 'DCCCXC', 'CM' ]
