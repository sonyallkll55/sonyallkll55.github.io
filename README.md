# sonyallkll55.github.io
<!doctype html>
<html>
    <head>
        <script>
            function greet()
            {
                alert("hello" + document.querySelector("#name").value)
            }
         </script>
    </head>
    <body>
        <form onsubmit="greet(); return false;">
            <input type="text" placeholder="Name" id="name">
            <inpt>
