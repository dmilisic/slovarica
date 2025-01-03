let LETTERS = {
    'A': 11,
    'B': 1,
    'C': 1,
    'Č': 1,
    'Ć': 1,
    'D': 3,
    'DŽ': 1,
    'Đ': 1,
    'E': 9,
    'F': 1,
    'G': 2,
    'H': 1,
    'I': 10,
    'J': 4,
    'K': 3,
    'L': 2,
    'LJ': 1,
    'M': 3,
    'N': 6,
    'NJ': 1,
    'O': 9,
    'P': 3,
    'R': 5,
    'S': 5,
    'Š': 1,
    'T': 5,
    'U': 4,
    'V': 3,
    'Z': 2,
    'Ž': 1
}

export function generate() {
    var letters = [];
    for (var letter in LETTERS) {
        for (var i = 0; i < LETTERS[letter]; i++) {
            letters.push(letter);
        }
    }

    var sample = [];
    for (var i = 0; i < 16; i++) {
        var index = Math.floor(Math.random() * letters.length);
        sample.push(letters[index]);
        letters.splice(index, 1);
    }

    return sample;
}