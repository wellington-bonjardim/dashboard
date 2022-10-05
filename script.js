$(document).ready(() => {
	
    $('#documentacao').on('click', () => {
        $('#pagina').load('documentacao.html')

        /* 
            A ação LOAD pode ser executada através do GET:
        $.get('documentacao.html', data => {
            $('#pagina').html(data)
        }) */

        /* 
            A ação acima pode ser executada através do POST:
        $.post('documentacao.html', data => {
            $('#pagina').html(data)
        }) 
        */
        
    })

    $('#suporte').on('click', () => {
        $('#pagina').load('suporte.html')

        /* 
            A ação LOAD pode ser executada através do GET:
        $.get('suporte.html', data => {
            $('#pagina').html(data)
        }) 
        */

        /* 
            A ação acima pode ser executada através do POST: 
        $.post('suporte.html', data => {
            $('#pagina').html(data)
        })
        */
        
    })
})