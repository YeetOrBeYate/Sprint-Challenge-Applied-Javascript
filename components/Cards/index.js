// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function CreateArticle(art){
    const card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgHolder = document.createElement('div'),
    img = document.createElement('img'),
    authorName = document.createElement('span');
    //adding classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgHolder.classList.add('img-container');
    //adding content
    headline.innerText = art.headline;
    img.src = art.authorPhoto;
    authorName.innerText = art.authorName;
    //append items
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgHolder);
    author.appendChild(authorName);
    imgHolder.appendChild(img);

    return card;

}

entryArea = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((res)=>{
        let bootstrap = res.data.articles.bootstrap;
        let javascript = res.data.articles.javascript;
        let jquery = res.data.articles.jquery;
        let node = res.data.articles.node;
        let technology = res.data.articles.technology;
        
        let subjectList = [bootstrap,javascript,jquery,node,technology];

        for(let i = 0; i <= (subjectList.length-1); i++){
            subjectList[i].forEach((art)=>{
                entryArea.appendChild(CreateArticle(art));
            })
        }
             
             
    })

