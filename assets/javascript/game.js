var got = {
    words: ["ned stark", "daenarys targaryen", "jamie lannister", "the hound", "the mountain", "the queen of thorns", "the wall", "white walkers", "ramsay bolton", "bobby b", "joffrey baratheon"],

    rng: function () {
        rngvalue = (Math.floor(Math.random() * this.words.length));
        chosenWord = this.words[rngvalue];
    },
    wordlength: function () {
        wordlengthV = this.words[rngvalue].length;
    },
    underscore: function () {
        var underscore = {};
        for (i = 0; i < wordlengthV; i++) {
            underscore.push("_");
               return underscore;
        }
    }
}
// testprint: function() {
//     console.log("testprint" + this.words[this.rng()]);
// }



got.rng();
got.wordlength();
got.underscore();
console.log(got.underscore())
// console.log(chosenWord, wordlengthV);

// document.onkeyup = function (e) {
//     key = e.key
//     for (var i = 0; i < got.rng(); i++) {
//         var letter = (got.words[got.rng].charAt(i));
//         if (key === letter) {
//             console.log("Correct");
//         }
//         else {
//             console.log("Incorrect");
//         }
//     }

// }
