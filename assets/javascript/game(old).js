alert("test");

var got = {
    words: ["ned stark", "daenarys targaryen", "jamie lannister", "the hound", "the mountain", "the queen of thorns", "the wall", "white walkers", "ramsay bolton", "bobby b", "joffrey baratheon"],
    chosenWord: "",
    underline: "",
    wordlength: "",
    wins: 0,
    losses: 0,
    wrongAnswers: 0,
    rightAnswers: 0,
    guessesLeft: 5,
    startup: function () {
        wrongAnswers = 0;
        rightAnswers = 0;
        guessesLeft = 5;
        got.rng();
        got.wordlength();
        got.underscore();
        console.log(rngvalue);
        console.log(wordlengthV);
        console.log(chosenWord + " " + got.underline);
        console.log(got.wins);
        console.log(got.losses);
        console.log(got.guessesLeft);
    },
    rng: function () {
        rngvalue = (Math.floor(Math.random() * this.words.length));
        chosenWord = this.words[rngvalue];
    },
    wordlength: function () {
        wordlengthV = this.words[rngvalue].length;
    },
    underscore: function () {

        for (i = 0; i < wordlengthV; i++) {
            if (chosenWord.charAt(i) === " ") {
                got.underline = (got.underline + " ");
            }
            else {
                got.underline = (got.underline + "_");
            }
        }
    }

    }

got.startup();
// got.rng();
// got.wordlength();
// got.underscore();
// // console.log(got.underline + " spaces");
// console.log(chosenWord + " test " + wordlengthV);

// document.onkeyup = function (e) {
//     key = e.key;
//     wronganswers=[]
//     c=0;
//    for(i=0; i<wordlengthV;i++) {
//     if (key!==chosenWord.charAt(i)) {
//         c++;
//     }
//     else if (c=wordlengthV) {
//         wronganswers.push(key);
//     }
//     else {
//         console.log("correct");
//     }
//    }
//    console.log(wronganswers);
// }

    // answer = ""
    // for (var i = 0; i < wordlengthV; i++) {
    //     if (key === (chosenWord.charAt(i)) && (answer.charAt(i)).value.match(letterNumber)) {
    //         console.log("match, not already used")
    //     }
    //     else{

    //     }
    //     console.log(key)
    // }





