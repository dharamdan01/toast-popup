const showToastBtn = document.querySelector(".show-toast");
const horizontalPosition = document.querySelector("#horizontal-position");
const verticalPosition = document.querySelector("#vertical-position");
const toastMessage = document.querySelector("#toast-message");
const toastsContainer = document.querySelector(".toasts-container");
const toastType = document.querySelector("#toast-type");
const durationInput = document.querySelector("#duration");




showToastBtn.addEventListener('click', () => {

    if(horizontalPosition.value === "right")
    {
        toastsContainer.classList.add("right");
    }
    else
    {
        toastsContainer.classList.remove("right");
    }

    if(verticalPosition.value === "bottom")
    {
        toastsContainer.classList.add("bottom");
    }
    else
    {
        toastsContainer.classList.remove("bottom");
    }

    const newToast = document.createElement("div");
    newToast.classList.add("toast");
    newToast.innerText = ` ${toastMessage.value} `;
    newToast.classList.add(toastType.value);
    const closeIcon = document.createElement("span");
    closeIcon.innerText = " X";
    newToast.append(closeIcon);
    function removeToast()
    {
        if(toastsContainer.classList.contains("right"))
        {
            newToast.classList.add("go-right");
        }
        else newToast.classList.add("go-left");
        setTimeout(() => {
        newToast.remove();
        }, 100);
    }
    closeIcon.addEventListener("click", () => {
        // newToast.remove(); // method in dom to remove element.
        removeToast();
    });

     setTimeout(() => {
            removeToast();
        }, parseInt(durationInput.value) * 1000);
    
        
    toastsContainer.append(newToast);
    console.log(horizontalPosition.value);
    console.log(verticalPosition.value);
    

});