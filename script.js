
const menuPhone = () => {
    document.querySelector('nav div').classList.toggle('active')
    document.querySelector('.menu-phone').classList.toggle('active')
    document.body.classList.toggle('noscroll-menu');
}

document.querySelector('nav div').addEventListener('click', menuPhone)
document.querySelectorAll('.menu-phone').forEach(li => li.addEventListener('click', menuPhone))


const scroll = () =>{
    const navHeight = document.querySelector('nav').clientHeight

    window.scrollTo({
        top: document.querySelector('main').offsetTop - navHeight,
        left:0,
        behavior:'smooth'
    })

}

document.querySelector('.img-container').addEventListener('click', scroll)


const windowOnload = () =>{
    document.querySelector('.background').classList.add('active')
    document.querySelector('.text-container').classList.add('active')
    document.querySelector('nav').classList.add('active')
    document.querySelector('.img-container').classList.add('active')
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


window.onload = windowOnload


const showElements = () => {
    const scrollY = window.scrollY + window.innerHeight
    const elements = document.querySelectorAll('main .flex-container div')
    
    elements.forEach(element => {
        const offset = element.offsetTop + ((10/100) * window.innerHeight)
        if(scrollY >= offset) {
           element.classList.add('active')
        }
    })
}

window.addEventListener('scroll', showElements)