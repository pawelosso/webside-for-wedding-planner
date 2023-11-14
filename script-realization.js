const menuPhone = () => {
    document.querySelector('nav div').classList.toggle('active')
    document.querySelector('.menu-phone').classList.toggle('active')
    document.body.classList.toggle('noscroll-menu');
}

document.querySelector('nav div').addEventListener('click', menuPhone)
document.querySelectorAll('.menu-phone').forEach(li => li.addEventListener('click', menuPhone))

const windowOnload = () =>{
    document.querySelector('nav').classList.add('active')
    document.querySelector('.realization .flex-container').classList.add('active')
}

window.onload = () => {
    windowOnload()
}


const contact = () =>{
    const contact = `
    <section class="contact">
        <span></span>
        <p class="title">Skontaktuj się ze mną</p>
        <img src="images/jola-sesja-wizerunkowa-159.jpg" alt="photo">
        <p>napisz do mnie</p>
        <p>j.zielinska@razemlepiej.com.pl</p>
        <div class="socials">
            <a href="https://www.facebook.com/profile.php?id=100088345021416"><img src="images/facebook.png" alt="photo"></a>
            <a href="https://www.instagram.com/weddingplannerjolantaz/"><img src="images/instagram.png" alt="photo"></a>
        </div>
    </section>
`
    const createContact = document.createElement("section")
    document.body.prepend(createContact)
    createContact.classList.add("contact-container")
    setTimeout(()=>createContact.classList.add("active"))
    createContact.innerHTML = contact
    document.body.classList.add("noscroll");

    const hidemessege = () => {
        createContact.classList.remove("active")
        document.body.classList.remove("noscroll");
        setTimeout(()=> createContact.remove(),500)
    }

    document.querySelector('.contact span').addEventListener('click', hidemessege)
}

document.querySelectorAll('.contactBtn').forEach(contactBtn => contactBtn.addEventListener('click', contact))
