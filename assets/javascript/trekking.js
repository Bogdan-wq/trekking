if (document.getElementById("men").checked) {
    document.getElementById("stuffMenJS").classList.add("stuff__block_hide");
}

if (document.getElementById("women").checked) {
    document.getElementById("stuffWomenJS").classList.add("stuff__block_hide");
}


if (document.getElementById("children").checked) {
    document.getElementById("stuffChildrenJS").classList.add("stuff__block_hide");
}



function toggleHideOrDisplay(id) {
    document.getElementById(id).classList.toggle("stuff__block_hide");
}
