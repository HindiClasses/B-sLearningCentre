
document.addEventListener("DOMContentLoaded", () => {

    const aboutLink = document.querySelector("#about");
    
    aboutLink.addEventListener("click", () => { 
        const target = document.querySelector("#about-heading");
        scrollTo(target, 550);

    });


    const contactLink = document.querySelector("#contact");

    contactLink.addEventListener("click", () => { 
        const target = document.querySelector("#contact-page");
        scrollTo(target, 0);

    });

    const comment1_btn = document.getElementById("1");
    const comment2_btn = document.getElementById("2");
    const comment3_btn = document.getElementById("3");
    
    comment1_btn.addEventListener("click", () => 
    {
        if (comment1_btn.innerText == "See More")
            {
                see_more("commentText1", comment1_btn);
            }
        
            else
            {
                see_less("commentText1", comment1_btn);
            }
    });

    comment2_btn.addEventListener("click", () => 
        {
            if (comment2_btn.innerText == "See More")
                {
                    see_more("commentText2", comment2_btn);
                }
            
                else
                {
                    see_less("commentText2", comment2_btn);
                }
        });

    comment3_btn.addEventListener("click", () => 
        {
            if (comment3_btn.innerText == "See More")
                {
                    see_more("commentText3", comment3_btn);
                }
            
                else
                {
                    see_less("commentText3", comment3_btn);
                }
        });
    
    
    // Example Videos
    
    const slides = document.querySelectorAll(".slider video");
    let slideIndex = 0;
    let intervalId = null;

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);

    initSlider();

    function initSlider()
    {
        if (slides.length > 0)
        {
            slides[slideIndex].classList.add("displaySlide");
            // intervalId = setInterval(nextSlide, 5000);
        }
    }

    function showSlide(index)
    {
        if (index >= slides.length) {
            slideIndex = 0;
        }
        else if (index < 0) {
            slideIndex = slides.length - 1;
        }

        slides.forEach(slide => {
            slide.classList.remove("displaySlide");
        });
        slides[slideIndex].classList.add("displaySlide")
    }

    function prevSlide()
    {
        slideIndex--;
        showSlide(slideIndex);
    }

    function nextSlide()
    {
        slideIndex++;
        showSlide(slideIndex);
    }

});



function scrollTo(element, offset) {
    console.log("Function is called")
    const interval = setInterval(()=>
    {
        window.scrollBy(0, 15);
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom + offset<= window.innerHeight)
        {
            clearInterval(interval);
        }
    }, 2);

}

function see_more(commentId, commentBtn)
{
    const element = document.getElementById(commentId);
    element.style.display = "block";

    commentBtn.innerText = "See Less";
    
}

function see_less(commentId, commentBtn)
{
    const element = document.getElementById(commentId);
    element.style.display = "-webkit-box";

    commentBtn.innerText = "See More";
    
}

