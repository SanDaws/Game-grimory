
//guardian
export function guardian() {
    const usertokken=localStorage.getItem('usertoken')
    if (usertokken != null) {
        window.location.href='/'
        
    }
}

export function loggedWarde() {
    const aditionButton = document.querySelector('button[type="submit"]')
    aditionButton.addEventListener('click', (event) => {
        const usertokken = localStorage.getItem('usertoken')
        if (usertokken === null) {
            event.preventDefault()
            window.location.href = '/src/pages/auth/login.html'

        }
    })
}