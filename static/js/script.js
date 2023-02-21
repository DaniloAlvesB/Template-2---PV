//Mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    initial_image.innerHTML = `
        <img src="static/images/batom_inicio.jpg" alt="Mulher com batom" style="height: 100vh; width: auto; transform: translate(-150vw);">
    `
}

function select_image_src(src, title){
    img_dest.innerHTML = `
        <img id="img_anima" class="img-fluid" src="/${src}">
    `
    batom_title_base.innerHTML = `
        <h5 id="batom_title">${title}</h5>
    `
}

