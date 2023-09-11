
// --------------Side Menu Functionality----------

let sidemenu = document.getElementById("sidemenu");
let openmenu = () => {
  sidemenu.style.right = "0";
  }
  let closemenu = () => {
    sidemenu.style.right = "-200px";
    }






// -----------Form functionality------------

let form = document.getElementById('form');
let msg = document.getElementById("msg")

let handleSubmit = (e)=>{
      e.preventDefault()
      msg.innerText='Message successfully sent';
      setTimeout(()=>{
        msg.innerText="";
      },1000)
      setTimeout(()=>{
        form.reset()
      },1000)
      
    }

form.addEventListener('submit', handleSubmit)

    
