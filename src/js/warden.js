
//guardian
export function guardian() {
    const usertokken=localStorage.getItem('usertoken')
    if (usertokken != null) {
        window.location.href='/'
        
    }


}

