// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

    function printBanner (displayedText) {
        var m = `* ${displayedText} *`; // m is an abbreviation for middle, i.e. middle row of banner. the banner has to be surrounded by * 
        var n = m.length; // this will allow me to obtain the length of the entire row including the astericks and spaces
        for (i = 0; i < n; i++){
                process.stdout.write("*")
        }
            console.log();
        console.log(m)
        for (i = 0; i < n; i++){
                process.stdout.write("*")
        }
            console.log()
        }
        
        printBanner("Welcome to DigitalCrafts")