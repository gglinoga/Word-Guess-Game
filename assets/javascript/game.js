var got = {
    //Variables -------------------------
    words: ["stark", "baratheon", "daenarys", "lannister", "tyrell", "joffrey"],
    chosenWord: "",
    underline: [],
    wordletter: [],
    wrongletter: [],
    blanks: 0,
    wins: 0,
    losses: 0,
    wrongAnswers: 0,
    rightAnswers: 0,
    guessesleft: 7,
    letter: "",

    //Startup conditions -----------------------
    startup: function () {
        this.chosenWord = this.words[Math.floor(Math.random() * this.words.length)];
        this.wordletter = this.chosenWord.split("");
        this.blanks = this.wordletter.length;
        this.wrongAnswers = 0;
        this.rightAnswers = 0;
        this.guessesleft = 7;
        this.wrongletter = [];
        this.underline = [];

        for (i = 0; i < this.blanks; i++) {
            this.underline.push("_");
        }

        document.getElementById("guessWord").innerHTML = this.underline.join(" ");
        document.getElementById("guessesLeft").innerHTML = this.guessesleft;
        document.getElementById("wins").innerHTML = this.wins;
        document.getElementById("losses").innerHTML = this.losses;
        document.getElementById("lettersGuessed").innerHTML = this.wrongletter;

        console.log(this.chosenWord)
    },

    //Functions ---------------------------------
    verify: function (letter) {
        var LetterCheck = false
        var letters = /[a-z]/;
        for (i = 0; i < this.blanks; i++) {
            if (this.chosenWord[i] == letter) {
                LetterCheck = true;
            }
        }

        if (LetterCheck) {
            for (i = 0; i < this.blanks; i++) {
                if (this.chosenWord[i] == letter) {
                    this.underline[i] = letter;
                    document.getElementById("guessWord").innerHTML = this.underline.join(" ");
                }
            }
        }
        else {
            this.wrongletter.push(letter);
            this.guessesleft--;
            document.getElementById("lettersGuessed").innerHTML = this.wrongletter.join(" ");
            document.getElementById("guessesLeft").innerHTML = this.guessesleft;
        }
    },

    roundover: function () {

        if (this.wordletter.toString() === this.underline.toString()) {
            this.wins++;
            alert("You win!")
            document.getElementById("wins").innerHTML = this.wins;
            got.startup();
        }
        else if (this.guessesleft === 0) {
            this.losses++;
            alert("You lose!")
            document.getElementById("losses").innerHTML = this.losses;
            got.startup();
        }
    }
}
//-----------------start--------------
got.startup()

document.onkeyup = function (e) {
    var letter = e.key;
    got.verify(letter);
    got.roundover();
}
