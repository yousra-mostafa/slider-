//video 1 2 3 4 5

/////////////get slider items by using Array.from ....ES6 featuresit form an arr of img act like a loop
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
console.table(sliderImages);
// console.log(sliderImages); 

////////////get num of slides
var slidesCount = sliderImages.length;
// console.log(slidesCount);

///////////set current slide index
var currentSlide = 1;

///////////get slide num string element #slide one
var slideNumberElement =document.getElementById("slid-number");

///////////////get previous and next buttons 
var nextButton = document.getElementById("next");

var prevButton = document.getElementById("prev");

/////////////creat the main ul element
var paginationElement = document.createElement('ul');
///////set id on ul

paginationElement.setAttribute('id', 'pagination-ul');

//////creat li based on slides img count
for(var i = 1; i<= slidesCount ; i++){

    //creat li
    var paginationItem = document.createElement('li');

    paginationItem.setAttribute('data-index', i);

    paginationItem.innerText= i;
    // paginationItem.appendChild(document.createTextNode(i));
    // console.log(paginationItem);
    ///////uppend item to the main ul list
    paginationElement.appendChild(paginationItem);
    // console.log(paginationElement);

}

////////////add ul to the page
document.getElementById("indecators").appendChild(paginationElement);

var paginationcreatedUl= document.getElementById("pagination-ul");

/////////////get pagination items by using Array.from ....ES6 featuresit form an arr of img
var paginationBulets = Array.from(document.querySelectorAll('#pagination-ul li'));

//loop through all bullets items
for(var i=0; i < paginationBulets.length ; i++){
    paginationBulets[i].onclick = function (){
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }

}


/////////////trigger the checker function
theChecker();


//////////next slide function
function nextSlide(){
    if(nextButton.classList.contains("disable")){
        //do nothing
        return false;
    }else{
        currentSlide++;
        theChecker();
    }
}
//////////previous slide function
function prevSlide(){
    if(prevButton.classList.contains("disable")){
        //do nothing
        return false;
    }else{
        currentSlide--;
        theChecker();
    }
}

////////////handel click on prev and next button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


//////creat the checker function video4
function theChecker(){
    /////set the slide number 
    slideNumberElement.textContent = 'slide # ' + (currentSlide) + ' of ' +(slidesCount);
    
    //remove all active class befor add the ative one
    removeAllActive();

    ///set active class on current slide 
    sliderImages[currentSlide -1].classList.add('active');

    ///set active class on current pagenation item
    paginationcreatedUl.children[currentSlide-1].classList.add("active");

    ///check if current slide is the first
    if(currentSlide == 1){
        //add disabled class on the previous button

        prevButton.classList.add("disable");
    }else {
        prevButton.classList.remove('disable');
    }


      ///check if current slide is the last
      if(currentSlide == slidesCount){
        //add disabled class on the next button

        nextButton.classList.add("disable");
    }else {
        nextButton.classList.remove('disable');
    }
    

}

///remove all active classes from images and pagination bullets
function removeAllActive(){
    sliderImages.forEach(function(img){
        img.classList.remove("active");//img == sliderImages[i]
    });

    paginationBulets.forEach(function(bullet){
        bullet.classList.remove('active');
    
    });
}
///////////loop throgh paginationBulets



