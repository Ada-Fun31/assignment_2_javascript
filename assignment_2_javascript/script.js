// console.log(document);
// console.log(document.getElementsByClassName('paragraph'));
// console.log(document.getElementsByTagName('h1')); 
// tag is whats within <>

// "click" event listener 
let bgColors = ["#f0efdd", "#f0dde2","#ddf0ea", "#dde0f0","#f0e0dd"];
let times = 0;

// 1. identify and select the button
let button;
button = document.getElementById('button');
console.log(button);

// 2. listen to event "click"
// 3. change the body color
button.addEventListener("click", function(){
   
    console.log(times);
    document.body.style.backgroundColor = bgColors[times];
    times++;
    if (times >= bgColors.length){
        times = 0;
    }
})

// "mouseover" event listener - text
let paragraph,paragraph2,paragraph3;

// identify and select the paragraphy
paragraph = document.getElementById('list');
paragraph2 = document.getElementById('list2');
paragraph3 = document.getElementById('list3');

// 1
paragraph.addEventListener("mouseover", function(){
    console.log("mouseover");
    paragraph.style.fontSize = "125%" ; 
    paragraph.style.letterSpacing = "5px";
})
paragraph.addEventListener("mouseout", function(){
    console.log("mouseover");
    paragraph.style.fontSize = "100%" ; 
    paragraph.style.letterSpacing = "1px";
})

// 2 
paragraph2.addEventListener("mouseover", function(){
    console.log("mouseover");
    paragraph2.style.fontSize = "125%" ; 
    paragraph2.style.letterSpacing = "5px";
})
paragraph2.addEventListener("mouseout", function(){
    console.log("mouseover");
    paragraph2.style.fontSize = "100%" ; 
    paragraph2.style.letterSpacing = "1px";
})

// 3 
paragraph3.addEventListener("mouseover", function(){
    console.log("mouseover");
    paragraph3.style.fontSize = "125%" ; 
    paragraph3.style.letterSpacing = "5px";
})
paragraph3.addEventListener("mouseout", function(){
    console.log("mouseover");
    paragraph3.style.fontSize = "100%" ; 
    paragraph3.style.letterSpacing = "1px";
})



// "mouseover" event listener - button
//1. mouseove the button, change its background color to salmon
button.addEventListener("mouseover",function(){
    console.log("over!!");
     button.style.backgroundColor = 'salmon';
});

//2. mouseout the button, change background color to default
button.addEventListener("mouseout",function(){
    console.log("out!!");
     button.style.backgroundColor = '#EFEFEF';
});



// "scroll" event listener 
window.addEventListener('scroll',function(){
    console.log(this.scrollY); // give back with value of how much scrolled
    document.body.style.backgroundColor = "hsl("+window.scrollY%360+",50%, 50%)";
    // hsl: hue(0-360), saturation(%), brightness(%)
})
















// // manipulate html through "createElement" function
// // 1. grab a reference to <element of chosen> , can be section,body etc.
// const sect = document.querySelector('section');

// // 2.  create a new paragraph
// const para = document.createElement('p');
// para.textContent = 'We hope you enjoyed the ride.';

// // 3. append the new paragraph
// sect.appendChild(para); // add the text content into element "para"

// //  4. add a "text node" to the "paragraph"
// const text = document.createTextNode(' — the premier source for web development knowledge.');

// const linkPara = document.querySelector('p');
// linkPara.appendChild(text);

