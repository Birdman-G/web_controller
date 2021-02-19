let element_array =document.querySelectorAll(".element");
for (let o of element_array) {
    o.isclicked = false;
    o.addEventListener("click", (e)=> {
        if (o.isclicked === false) {
            o.setAttribute("class", "element-hover");
            o.isclicked = true;
        }
        else {
            o.setAttribute("class", "element");
            o.isclicked = false;
        }
    })
}