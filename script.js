window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if(window.scrollY > 50){

        header.style.background = '#08111c';

    }else{

        header.style.background = 'rgba(10,20,40,.75)';

    }

});