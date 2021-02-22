let warp = document.querySelector(".warp");
let element_array =document.getElementsByClassName("element");

function create_node() {
    let res = document.createElement("div");

    res.style["flex"] = 1;
    let flag = get_random();
    if (flag < .5) {

    } else {
        res.style["flex-direction"] = "column";
    }
    res.className = "node";
    return res;
}
function create_content_node(content) {
    let res = document.createElement("div");
    res.style["flex"] = 1;
    res.className = "content-node";
    res.id = content;
    return res;
}
function get_random() {
    return Math.random();
}
function get_random_arbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function get_random_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function add_content_node(root, content) {
    if (root.className === "node") {

    }
    // let node_or_content = get_random();
    // if (node_or_content < .5) {
    //     let new_node = create_node();
    //     root.appendChild(new_node);
    //     add_content_node(new_node, content);
    // } else {
    //     let new_node = create_content_node();
    // }
}

function insert_new_node(root, content) {
    
}

function delete_node(root, id) {
}
for (let o of element_array) {
    o.isclicked = false;
    o.beclicked = function() {
        if (o.isclicked) {
            let chil = warp.children;
            let ind = get_random_int(0, chil.length);
            insert_new_node(chil[ind], o.textContent);
        } else {
            delete_node(warp, o.textContent);
        }
    }
    o.addEventListener("click", (e)=> {
        if (o.isclicked === false) {
            o.setAttribute("class", "element-hover");
            o.isclicked = true;
            o.beclicked();
        }
        else {
            o.setAttribute("class", "element-hover-return");
            o.isclicked = false;
            o.beclicked();
        }
    });
    // o.addEventListener("mouseenter", (e)=> {
    //     if (o.isclicked === false) {
    //         o.setAttribute("class", "element-hover");
    //         o.isclicked = true;
    //     }
    //     else{
    //         o.setAttribute("class", "element");
    //         o.isclicked = false;
    //     }
    // });
    o.addEventListener("mouseleave", (e)=> {
        if (o.isclicked === false)
            o.setAttribute("class", "element");
    })
}