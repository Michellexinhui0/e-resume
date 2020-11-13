
function Submit(){
      // Find the element
   		x=document.getElementById("demo");
       //Option 1: Change the style attribute directly
		x.style.display="block";
    alert("Thank you for showing your interest to know me better! I will get in touch with you real soon!");
      //Option 2: Change the class
  x.className="opened";
	}

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Welcome to my E-Resume!") {
      x.innerHTML = "Glad that you are here :)";
    } 
    else if (x.innerHTML ===  "Glad that you are here :)") {
      x.innerHTML = "Thank you for taking out your precious time to take a look at my E-Resume. Appreciate it a lot!";
    } 
    else {
      x.innerHTML = "Let's start looking through my E-Resume by clicking the [About Me] Button below!";
    }
  }

  var i = 0;
  var txt = 'Hello I am Michelle Ling Xin Hui. I am 19 years old. I am currently pursuing a Diploma in Information Technology at Taylors University. I am looking for opportunities in UI/UX design, Website Development, Information System Management, Digital Marketing, and Software Management.';
  var speed = 50;
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  

  




  
