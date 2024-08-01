
document.addEventListener("DOMContentLoaded", () => {

    type();

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

function type()
{
    console.log("type");
    var i = 0;
    var txt = ' the easy way';
    var speed = 234;

    typeWriter();

    function typeWriter() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    }
}