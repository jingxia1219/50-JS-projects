const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click',()=>{
    if(currentActive < circles.length) currentActive++;
    update()
    // console.log(currentActive);
})

prev.addEventListener('click',()=>{
    if(currentActive > 1) currentActive--;
    update()
})

function update(){
    circles.forEach( (el,idx)=>{
        if(idx < currentActive) {
            el.classList.add('active');
        }else {
            el.classList.remove('active')
        }
    })

    progress.style.width = (currentActive-1)/(circles.length-1)*100+'%';
    console.log((currentActive-1)/circles.length*100+'%')

    if(currentActive === 1){
        prev.disabled = true
    } else if(currentActive === circles.length){
        next.disabled = true
     } else{
         prev.disabled = false;
         next.disabled = false;
     }
}

