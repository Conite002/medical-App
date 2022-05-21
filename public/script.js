document.querySelector('.small3').addEventListener('click', () => {
    gsap.to('.circle', {
        rotate : '50deg',
        duration: .5
    })
    gsap.to('.small2',  {
        scale: 1,
        backgroundColor: 'transparent',
        duration: .5
    })
    gsap.to('.small3',{
        scale: 8,
        backgroundColor: '#1c1c1c',
        rotate: '-50deg',
        duration: .5
    })
})