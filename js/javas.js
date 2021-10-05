console.log("khabarein")

// 8e0bb7357af14ef58102ac36f1254139
// https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=8e0bb7357af14ef58102ac36f1254139
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8e0bb7357af14ef58102ac36f1254139


// Tutorial 

let newsaccord = document.getElementById("news-accord");
let sources = 'bbc-news';
let apiKey = '8e0bb7357af14ef58102ac36f1254139';
// create ajax object
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`, true)

let nhtml = "";
xhr.onload = function() {
    if (this.status == 200) {
        let obj = JSON.parse(this.responseText)
        let articles = obj.articles;
        let nhtml = "";
        articles.forEach(function(element, index) {


            let news = `<div class="accordion " id="news-accord">

            <div class="accordion-item acc-box">
                <h2 class="accordion-header " id="heading${index}">
                    <button class="accordion-button  ac-heading" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
              ${element["title"]}
            </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#news-accord">
                <img class="news-image"src="${element["urlToImage"]}">
                <div class="accordion-body">
                   
                        <strong>.${element["content"]}.<a href="${element["url"]}" target="_blank">Read More Here..</a>
                    </div>
                </div>
            </div>`

            nhtml += news;


        })
        newsaccord.innerHTML += nhtml;
    }

}

xhr.send()

// Nav Bar Of Index Page

document.getElementById("home-nav").addEventListener("click", function() {
    document.getElementById("header").style.display = "block";

})
document.getElementById("about-nav").addEventListener("click", function() {
    window.scrollTo(844, 478)
})
document.getElementById("service-nav").addEventListener("click", function() {
    window.scrollTo(844, 978)
})