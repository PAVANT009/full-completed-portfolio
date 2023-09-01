function scrollToElement(elementSelector, instance = 0){
    //Select all element that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    //Check if there are element matching the selector and if the required instance exists
    if(elements.length > instance){
        //scroll to the specific instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' })
    }
}


const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");


link1.addEventListener('click' , () =>{
    scrollToElement('.header');
});
link2.addEventListener('click' , () =>{
    //Scroll to the second element with header class
    scrollToElement('.header' , 1);
});
link3.addEventListener('click' , () =>{
    scrollToElement('.column');
});