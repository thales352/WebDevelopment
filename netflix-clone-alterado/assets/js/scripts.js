$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

document.addEventListener('click', e=>{
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest('[data-dropdown]')!=null) return
    /* Lembrar-me: Função que verifica se o elemento clicado 
    não é um elemento menu, e retorna nada de não for. */
    let currentDropdown
    if (isDropdownButton){
        currentDropdown= e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
        /* Lembrar-me: Se for um menu esse if vai espandir ele */
    }
     

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown=>{
        if(dropdown===currentDropdown) return
        dropdown.classList.remove('active')
        /* Lembrar-me: Um menu abre, outro fecha */
    })
})
/* Assisti a um video do webdevsimplified para fazer isso, ainda vou terminar 
o meu primeiro bootcamp (Take a Blip-Web Developer,DIO-Digital innovation One)
mas já aprendi muita coisa com esse código, Técnicas avançadas e um novo jeito 
de pensar em eventos no css com javascript.
Se antes eu pensava em criar eventos especificos para cada clique agora eu vejo
javascript como manipulação de classes e o resto o css faz. */