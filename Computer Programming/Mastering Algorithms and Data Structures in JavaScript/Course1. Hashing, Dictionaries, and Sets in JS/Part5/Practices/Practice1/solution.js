// const text = "Cosmo,is,an,incredible,technical,companion,with,very,strong,skills,in,Algorithms,and,Data,Structures,and,a,great,teacher,for,technical,interviews.";
// const wordCount = new Map();
// const words = text.split(",");

// // TODO: iterate through words and count frequencies;

// console.log(wordCount);

const text = "Cosmo,is,an,incredible,technical,companion,with,very,strong,skills,in,Algorithms,and,Data,Structures,and,a,great,teacher,for,technical,interviews.";
const wordCount = new Map();
const words = text.split(",");

// TODO: iterate through words and count frequencies;
for (const word of words) {
    if (wordCount.has(word)) {
        wordCount.set(word, wordCount.get(word) + 1);
    } else {
        wordCount.set(word, 1);
    }
}

console.log(wordCount);