console.log("HeartBridge Loaded Successfully");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.innerHTML = `
    <span class="close">&times;</span>
    <span class="prev">&#10094;</span>
    <img id="lightbox-img">
    <span class="next">&#10095;</span>
`;
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".gallery-item img");

let current = 0;

function showImage(index){
    current = index;
    lightbox.style.display = "flex";
    document.getElementById("lightbox-img").src = images[index].src;
}

images.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        showImage(index);
    });
});

document.querySelector(".close").onclick=()=>{
    lightbox.style.display="none";
};

lightbox.addEventListener("click",(e)=>{
    if(e.target===lightbox){
        lightbox.style.display="none";
    }
});

document.querySelector(".next").onclick=(e)=>{
    e.stopPropagation();
    current=(current+1)%images.length;
    showImage(current);
};

document.querySelector(".prev").onclick=(e)=>{
    e.stopPropagation();
    current=(current-1+images.length)%images.length;
    showImage(current);
};

document.addEventListener("keydown",(e)=>{
    if(lightbox.style.display==="flex"){
        if(e.key==="Escape") lightbox.style.display="none";
        if(e.key==="ArrowRight"){
            current=(current+1)%images.length;
            showImage(current);
        }
        if(e.key==="ArrowLeft"){
            current=(current-1+images.length)%images.length;
            showImage(current);
        }
    }
});
