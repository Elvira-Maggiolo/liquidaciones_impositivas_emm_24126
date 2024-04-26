/*document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById('idfooter');

    footer.innerHTML = `
        <h2>Pet Shop 24126 Veterinaria y Paseadores - © 2024 - 15-555-5555</h2>
        <img src="IMG/me-gusta.png" alt="facebook">
        <img src="IMG/whatsapp.png" alt="whatsapp">
        <img src="IMG/youtube.png" alt="youtube">
        <img src="IMG/instagram.png" alt="instagram">
    `;
}); */


document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById('idfooter');

    footer.innerHTML = `
    <footer>
    <div>
        <p>Pet Shop 24126 Veterinaria y Paseadores - © 2024 - 15-555-5555</p>
    </div>
            <div class="redsoc">
        <a href="https://www.facebook.com" target="_blank"> <i class="fa-brands fa-facebook-f"
                style="color:#3759F6"></i></a>

        <a href="https://ar.pinterest.com/" target="_blank"> <i class="fa-brands fa-pinterest"
                style="color: #E90028"></i></a>
                
        <a href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram"
                aria-hidden="true" style="color: #ee5143;"></i></a>
                
        <a href="https://www.linkedin.com" target="_blank"><i class="fa fa-linkedin"
                aria-hidden="true" style="color: #236499;"></i></a>
        
        <a href="https://youtube.com" target="_blank"> <i class="fa-brands fa-youtube"
                style="color: #f6001b;"></i></a>

        <a href="https://twitter.com" target="_blank"> <i class="fa-brands fa-x-twitter"
                 style="color: #061d36;"></i> </a>
    </div>
    </footer>`;
});

