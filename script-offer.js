const menuPhone = () => {
    document.querySelector('nav div').classList.toggle('active')
    document.querySelector('.menu-phone').classList.toggle('active')
    document.body.classList.toggle('noscroll-menu');
}

document.querySelector('nav div').addEventListener('click', menuPhone)
document.querySelectorAll('.menu-phone').forEach(li => li.addEventListener('click', menuPhone))

const windowOnload = () =>{
    document.querySelector('nav').classList.add('active')
    document.querySelector('.welcometext').classList.add('active')
    document.querySelectorAll('h2').forEach(h2 => h2.classList.add('active'))
}

const showOffer = () => {
    const scrollY = window.scrollY + window.innerHeight
    const offers = document.querySelectorAll('.offer-part')

    offers.forEach(offer => {
        const offset = offer.offsetTop + ((5/100) * window.innerHeight)
        if(scrollY >= offset) {
            offer.classList.add('active')
        }
    })
}

window.onload = () => {
    showOffer()
    windowOnload()
}

window.addEventListener('scroll', showOffer)


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


const showOffers = () => {
    const focusOffer = () => {
        document.body.focus()
    }

    document.body.addEventListener('scroll', focusOffer)
    
    const showOffer = e =>{
        let title = ""
        let textContent= ""
        
        if(e.target.getAttribute("data-name") == "1"){
            title="Kompleksowa obsługa ślubu i wesela"
            textContent=`Jesteście zaręczeni i myślicie o rozpoczęciu przygotowań do ślubu? Nie chcecie się borykać
            z problemami i skomplikowanymi zadaniami, które wydają się mnożyć, im bliżej Tego dnia?
            Organizacja ślubu i wesela to wymagający proces złożony z wielu elementów, które w dodatku
            trzeba ze sobą zsynchronizować, co pochłania mnóstwo czasu i energii.
            Jeśli na powyższe pytania odpowiedzieliście „tak”, to nie pozostało Wam nic innego, jak powierzyć
            ją osobie, która zdejmie z Was cały ciężar przedślubnych obowiązków.
            Zapraszam na spotkanie osobiście lub online: wybór należy do Was. Pierwsze spotkanie jest
            niezobowiązujące. Poznajemy się, opowiecie mi o sobie i o tym, jak wyobrażacie sobie Wasz
            wymarzony dzień. Ja natomiast przybliżam Wam swoją rolę i wyjaśniam, na czym miałaby
            polegać nasza współpraca. Po spotkaniu pozostawiam Wam czas na przemyślenie i wysyłam drogą
            elektroniczną ofertę obejmującą zakres moich obowiązków: szczegółową listę oraz planowany
            wstępny budżet. Na tym
            etapie przychodzi czas na deklarację, czy zamierzacie powierzyć mi
            przygotowanie Waszego ślubu i wesela.`
        }
        else if(e.target.getAttribute("data-name") == "2"){
            title="Częściowa organizacja"
            textContent=`Rozpoczęliście organizację ślubu? Nagle zabrakło Wam pomysłów, zapału lub po prostu
            zdaliście sobie sprawę, że sami nie podołacie tylu zadaniom? Szukacie kogoś, kto pomoże Wam w
            dalszym procesie przygotowań, spojrzy na Waszą wizję i udoskonali to, z czym nie do końca
            dajecie sobie radę? Rozwiąże napotkane problemy i rozwieje wątpliwości? Jesteście w
            odpowiednim miejscu i u odpowiedniej osoby. To Wy wskazujecie aspekty, w których potrzebujecie
            mojego wsparcia, a ja robię, co w mojej mocy, aby sprostać Waszym wymaganiom.
            Opracuję harmonogram przygotowań, upewniając się, że wszystko jest gotowe. Sporządzę
            scenariusz dnia ślubu, byście mogli spokojnie celebrować ten wyjątkowy czas. Przejmę opiekę nad
            organizacją uroczystości, a Wy możecie zacząć się relaksować i z radością wyczekiwać tego
            wymarzonego dnia. Gdy ten już nastanie, od rana zajmę się koordynacją ślubu i wesela, zadbam
            również o kontakt z podwykonawcami, pilnując, by nic Wam nie zakłócało pięknych chwil
            spędzanych w gronie najbliższych. Będę czuwać, aby wszystko przebiegło dokładnie tak, jak sobie
            wymarzyliście.`
        }
        else if(e.target.getAttribute("data-name") == "3"){
            title="Koordynacja ślubu i wesela"
            textContent=`Koordynacja ślubu i wesela to najważniejszy moment, ponieważ stanowi podsumowanie
            wszystkich przygotowań. To właśnie tego dnia należy najmocniej trzymać rękę na pulsie. Przez całą
            organizację przeszliście sami, ale tę wyjątkową uroczystość chcecie powierzyć profesjonaliście, by
            nic nie wymknęło się spod kontroli? Ze mną poczujecie się zaopiekowani. Będę nadzorowała
            przebieg nad ceremonią i uroczystością, zajmę się kontaktem z podwykonawcami i dopilnuję, by
            Wasze ustalenia zostały wykonane zgodnie z umową, a wszystko po to, by nic nieprzewidzianego
            nie zakłócało waszego spokoju i abyście mogli się cieszyć chwilami spędzonymi z bliskimi.
            Dopilnuje każdego szczegółu zgodnie ze scenariuszem, a gdy pojawi się problem, nawet tego nie
            zauważycie. Zadbam o to, by Wasz najważniejszy dzień w życiu był również tym najpiękniejszym.
            Razem stworzymy piękne wspomnienia.`
        }
        
        else if(e.target.getAttribute("data-name") == "4"){
            title="Organizacja eventów oraz imprez okolicznościowych."
            textContent=`Poza organizacją ślubów zajmuję się również eventami i imprezami okolicznościowymi,
            takimi jak: chrzciny, komunie, zaręczyny,
            babyshower, wieczory panieńskie i inne.
            Każde takie wydarzenie jest ważne i niejednokrotnie zapada w pamięć do końca życia. Jeżeli
            chcecie czuć się w tym dniu komfortowo, możecie powierzyć przygotowanie całego
            przedsięwzięcia profesjonaliście, który pomoże wybrać odpowiednie miejsce, catering, zadba o
            dekorację, atrakcję czy oprawę muzyczną, dopilnuje również tego, by wszystko przebiegło zgodnie
            z planem. Moja wizja danej uroczystości powstaje po rozmowie z Wami. Biorę pod uwagę budżet i
            Wasze oczekiwania, dbając o najmniejsze detale.`
        }
        

        const offer = `<section class="showoffer">
        <span></span>
        <h2>${title}</h2>
        <p>${textContent}</p>
        </section>`

        const createOffer = document.createElement("section")
        createOffer.classList.add("showoffer-container")
        document.body.prepend(createOffer)
        setTimeout(() => createOffer.classList.add("active"))
        createOffer.innerHTML = offer
        document.body.classList.add('noscroll')        
        

        const removeOffer = () =>{
            document.body.classList.remove('noscroll')     
            createOffer.classList.remove("active")
            setTimeout(() => createOffer.remove(),500)
        }
    
        document.querySelector(".showoffer span").addEventListener("click", removeOffer)

        const hideArrow = () => {
            const element = document.querySelector(".showoffer") 
            element.classList.add("active")
            if(element.scrollHeight == element.clientHeight) element.classList.add("active")
            else if(element.scrollTop > 0) element.classList.add("active")
            else element.classList.remove("active")
        }
        
        document.querySelector(".showoffer").addEventListener("scroll", hideArrow)
        window.addEventListener("resize", hideArrow)
        hideArrow()
}
    document.querySelectorAll(".showtext").forEach(element => element.addEventListener("click", showOffer))
}

showOffers()






 