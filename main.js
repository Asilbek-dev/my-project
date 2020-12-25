function foo() {
    var a = document.getElementById("on");
    var b = document.getElementById("off");
    a.style.backgroundColor = "#ffffff";
    b.style.backgroundColor = "#032541";
}
function onn() {
    var a = document.getElementById("on");
    var b = document.getElementById("off");
    b.style.backgroundColor = "#ffffff";
    a.style.backgroundColor = "#032541";
}
function threeDot() {
    var x = document.getElementById("box");
    var y = document.getElementById("box2");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}
