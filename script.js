const cavea = {
    languages: ["ინგლისური", "ქართული", "რუსული"],

   movies: [
    {film:"კოკაინის დათვი", imdb  : 6.5},
    {film:"დაკარგული", imdb : 7.3},
    {film:"სახიფათო რეისი", imdb :6.9},
    {film:"ავატარი: წყლის გზა", imdb : 7.8},
   ]
}
    document.write("<h2>კინოთეატრი კავეა</h2> ")

    for ( let i = 0; i <cavea.languages.length; i ++) {
        document.write(cavea.languages[i] + "<br>")
    }

    document.write("<h2>ფილმები</h2> ")
    
    for ( let i = 0; i <cavea.movies.length; i ++) {
        document.write(cavea.movies[i].film + "<br>")
    }
    for ( let i = 0; i <cavea.movies.length; i ++) {
        document.write(cavea.movies[i].imdb + "<br>")
    }