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

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(response => {
//         console.log(response.data.articles);
//         const articles = response.data.articles;
//         const Cards =document.querySelector('.cards-container');
        
//         articles.bootstrap.array.forEach(element => {
//             Cards.appendChild(articleCards(element.headline,element.authorPhoto, element.authorName))
//         });

//     });


axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then((response)=> {
    console.log(response)
    const articles = response.data.articles;
    const Cards = document.querySelector('.cards-container');
    console.log(articles);

    articles.bootstrap.forEach(element =>{
      Cards.appendChild(createCards(element.headline, element.authorPhoto, element.authorName));
    })

    articles.javascript.forEach(element =>{
      Cards.appendChild(createCards(element.headline, element.authorPhoto, element.authorName));
    })

    articles.jquery.forEach(element =>{
      Cards.appendChild(createCards(element.headline, element.authorPhoto, element.authorName));
    })

    articles.node.forEach(element =>{
      Cards.appendChild(createCards(element.headline, element.authorPhoto, element.authorName));
    })

    articles.technology.forEach(element =>{
      Cards.appendChild(createCards(element.headline, element.authorPhoto, element.authorName));
    })
  })
  .catch((err)=>{
    console.log('Put the crackpipe down you methed something up',err)
  })

function createCards(headline, authorImage, authorName){
  const card = document.createElement('div');
  const articleHeadline = document.createElement('div');
  const author = document.createElement('div');
  const imgContain = document.createElement('div');
  const authorImg = document.createElement('img');
  const byAuthor = document.createElement('span');

  card.classList.add("card");
  articleHeadline.classList.add("headline");
  author.classList.add("author");
  imgContain.classList.add("img-container");

  articleHeadline.textContent = headline;
  authorImg.setAttribute('src', authorImage);
  byAuthor.textContent = `By ${authorName}`;

  card.appendChild(articleHeadline);
  card.appendChild(author);
  author.appendChild(imgContain);
  imgContain.appendChild(authorImg);
  author.appendChild(byAuthor);

  return card;
}