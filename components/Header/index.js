// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


const headers = document.querySelector('.header-container');

function Header() {
    const headerinfo = document.createElement('div');
    const span1 = document.createElement('span');
    const titleh1 = document.createElement('h1');
    const span2 = document.createElement('span');


    headerinfo.appendChild(span1);
    headerinfo.appendChild(titleh1);
    headerinfo.appendChild(span2);
    


    headerinfo.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');


    span1.innerText ='SMARCH 28, 2019';
    titleh1.innerText ='Lambda Times';
    span2.innerText ='98°';

    return headerinfo;

    
}

 headers.appendChild(Header());




