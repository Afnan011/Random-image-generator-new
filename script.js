console.log("visible");

function randImg(params) {

  let img = document.getElementById("getimg");
  let name = document.getElementById("nameid").value;

  if (name == "" || name == " ") {
    alert("Enter your name");
    img.src = "https://joeschmoe.io/api/v1/$%7Bname%7D ";
  } else {
    img.src = `https://joeschmoe.io/api/v1/male/${name}`;
    document.getElementById("title").innerHTML = `Hi, ${name}`;

    
  }
}
