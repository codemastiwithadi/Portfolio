	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('fa-moon')){
            darkmode.classList.replace('fa-moon','fa-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('fa-sun','fa-moon');
            document.body.classList.remove('active');
        }
    }




    function sendToWhatsapp() {
        const number = "+917384215381";
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert("Please fill in all fields before sending.");
            return;
        }
    
        const url = `https://wa.me/${number}?text=` +
            `Name: ${encodeURIComponent(name)}%0a` +
            `Email: ${encodeURIComponent(email)}%0a` +
            `Message: ${encodeURIComponent(message)}`;
        
        window.open(url, '_blank');
    }
    