import Swal from 'sweetalert2'


export function succesregister(nick) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Welcome to Game Grimory ${nick.value}`,
        showConfirmButton: false,
        timer: 1500
      });
    
}