const close = document.querySelector(".close");
const imgfirst = document.querySelector("#pageImage");
const modal = document.querySelector(".modal");
const modalImgContainer = document.querySelector(".modalImgContainer");
const modalListContainer = document.querySelector(".modalListContainer");
const img1 = document.querySelector(".one");
const img2 = document.querySelector(".two");
const img3 = document.querySelector(".three");
const img4 = document.querySelector(".four");
let modalImage = document.createElement("img");
let imgName = document.querySelector(".imgName");
imgName.classList.add(".imgName")
const ingredientsTag = document.querySelector(".ingredientsTag");
const instructionTag = document.querySelector(".instructionTag");
modalImgContainer.append(modalImage);
let ingredientsContainer = document.querySelector(".ingredients");
let ingredients = document.createElement("li");
ingredientsContainer.append(ingredients)
let instructionContainer = document.querySelector(".instruction");
let instruction = document.createElement("li");
instructionContainer.append(instruction);


async function myfunction() {
    let res = await fetch("file.json")
    let data = await res.json();
    console.log(data.recipes);

    

    img1.addEventListener("click", function() {
        ingredientsTag.innerHTML = "INGREDIENTS"
        instructionTag.innerHTML = "INSTRUCTION"
        modal.style.display = "block";
        modalImage.classList.add("modalImg")
        modalImage.src = this.src;
        imgName.innerHTML = data[0].name;
        data[0].ingredients.forEach((ingredient)=>{
            const ingredientList = document.createElement('li')
            ingredientList.textContent = ingredient
            ingredientsContainer.append(ingredientList)
            
        })
        data[0].instruction.forEach((instruction)=>{
            const instructionList = document.createElement('li')
            instructionList.textContent = instruction
            instructionContainer.append(instructionList)
            
        })
    });
    
    img2.addEventListener("click", function() {
        ingredientsTag.innerHTML = "INGREDIENTS"
        instructionTag.innerHTML = "INSTRUCTION"
        modal.style.display = "block";
        modalImage.classList.add("modalImg")
        modalImage.src = this.src;
        imgName.innerHTML = data[1].name;
        data[1].ingredients.forEach((ingredient)=>{
            const ingredientList = document.createElement('li')
            ingredientList.textContent = ingredient
            ingredientsContainer.append(ingredientList)
            
        })
        data[1].instruction.forEach((instruction)=>{
            const instructionList = document.createElement('li')
            instructionList.textContent = instruction
            instructionContainer.append(instructionList)
            
        })
    });
    
    img3.addEventListener("click", function() {
        ingredientsTag.innerHTML = "INGREDIENTS"
        instructionTag.innerHTML = "INSTRUCTION"
        modal.style.display = "block";
        modalImage.classList.add("modalImg")
        modalImage.src = this.src;
        imgName.innerHTML = data[2].name;
        data[2].ingredients.forEach((ingredient)=>{
            const ingredientList = document.createElement('li')
            ingredientList.textContent = ingredient
            ingredientsContainer.append(ingredientList)
            
        })
        data[2].instruction.forEach((instruction)=>{
            const instructionList = document.createElement('li')
            instructionList.textContent = instruction
            instructionContainer.append(instructionList)
            
        })

    });
    
    img4.addEventListener("click", function() {
        ingredientsTag.innerHTML = "INGREDIENTS"
        instructionTag.innerHTML = "INSTRUCTION"
        modal.style.display = "block";
        modalImage.classList.add("modalImg")
        modalImage.src = this.src;
        imgName.innerHTML = data[3].name;
        data[3].ingredients.forEach((ingredient)=>{
            const ingredientList = document.createElement('li')
            ingredientList.textContent = ingredient
            ingredientsContainer.append(ingredientList)
            
        })
        data[3].instruction.forEach((instruction)=>{
            const instructionList = document.createElement('li')
            instructionList.textContent = instruction
            instructionContainer.append(instructionList)
            
        })
    });
    
    close.addEventListener("click", () => {
        modal.style.display = "none";
    });
    
    imgfirst.addEventListener("click", function(e) {
        e.preventDefault();
        ingredientsTag.innerHTML = ""
        instructionTag.innerHTML = ""
        ingredients.innerHTML = ''
        instruction.innerHTML = ''
        modal.style.display = "block";
        modalImage.classList.add("modalImg");
        modalImage.src = this.src;
        imgName.innerHTML = this.alt
    });
}
myfunction();

var sliderContainer = document.querySelector('.slider-container');
var sliderTrack = document.querySelector('.slider-track');
var slidingImages = Array.from(document.querySelectorAll('.img'));

// Set the initial position and other variables
var offsetX = 0;
var imageWidth = slidingImages[0].offsetWidth;
var trackWidth = imageWidth * slidingImages.length;

slidingImages.forEach(function(image) {
  var clone = image.cloneNode(true);
  sliderTrack.appendChild(clone);
});

function slideImages() {
  offsetX -= 1; // Adjust the sliding speed as needed

  // Reset the position when the entire track has scrolled
  if (offsetX <= -trackWidth) {
    offsetX = 0;
  }

  sliderTrack.style.transform = 'translateX(' + offsetX + 'px)';

  // Request the next animation frame
  requestAnimationFrame(slideImages);
}

slideImages();