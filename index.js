function iniciaModal(modalId)
{
    if(localStorage.closeModal !=modalId) 
    {
        const modal = document.getElementById(modalId);
    
        // caso clicar para não mostrar erro 
        if(modal) 
        {
            modal.classList.add('show');
            modal.addEventListener('click', (e) => {
        
                if(e.target.id == modalId || e.target.className == 'close') 
                {
                    modal.classList.remove('show');

                    //armazenar no localstore
                    localStorage.closeModal = modalId;
                }
            }); 
        }
    }
}
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => iniciaModal('modal-promocao'));



