
const cars = ["Mercedes-benz", "BMW","AUDI","TOYOTA","HONDA"]
for(let i = 0; i <cars.length; i++){
    console.log(cars[i])
}



const numbers =  [ 15,53,22,198,10,28,16,70,33,951 ]

 for(let i=0; i < numbers.length; i ++) {
   if(numbers[i] / 2 == 0){
    console.log("ლუწები", number[i])
}
 else{
    console.log("კენტები", numbers[i])
}

 }





    function display(x,func){
    let message = func(x)
        document.write(message)
}

    function trousers(price){
        if(price>50)
        return "მაღალი ფასი"
        else if (price < 50 && price > 20)
        return "საშუალო ფასი"
        else(price > 20)
        return "დაბალი ფასი"
}

        display(60, trousers)











const cavea = {
    languages: ["ინგლისურად", "ქართულად", "რუსულად"],

   movies: [
    {film:"კოკაინის დათვი", imdb  : "imdb 6.5"},
    {film:"დაკარგული", imdb : "imdb 7.3"},
    {film:"სახიფათო რეისი", imdb :"imdb 6.9"},
    {film:"ავატარი: წყლის გზა", imdb : "imdb 7.8"},
   ]
}
    document.write("<h2>კინოთეატრი კავეა</h2> ")
    document.write("<h3>ფილმები გახმოვანებულია</h3>")

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