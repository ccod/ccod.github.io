if (document.body.clientWidth > 576) {
    particlesJS.load('particles-js', 'js/particlesjs-config.json', () => console.log('classback - particles loaded'))
    $('[data-toggle="tooltip"]').tooltip()
}
new ClipboardJS('.btn')
