function message(){
    alert("Me gusta");
};

function login(element){
    if (element.innerText == "login"){
        element.innerText = "logout";
    } else {
        element.innerText = "login";
    }
};

function hide(el){
    el.remove();
}