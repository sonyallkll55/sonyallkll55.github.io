function great ()
            {
                alert ("i like " + document. querySelector("#dish").value);
            }
document.addEventListener('DOMContentLoaded', function(){
    let body = document.querySelector("body");
    document.querySelector("#pink").addEventListener('click', function(){ body.style.backgroundColor="#eabfffdf";});
    document.querySelector("#blue").addEventListener('click', function(){ body.style.backgroundColor="#bfd5ffdf";});
    document.querySelector("#white").addEventListener('click', function(){ body.style.backgroundColor="#ffffff";})
})
