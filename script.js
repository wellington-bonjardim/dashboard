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

    //AJAX
    $('#competencia').on('change', e => {
        
        /*Após recuperar os values dos options, devemos criar uma requisição para o backend (app.php) e, para isso, utilizaremos o método: 
            $.ajax({
                type: 'GET ou POST', 
                url: 'para quem vamos fazer o request', 
                data: 'se vamos ou nao encaminhar dados', // x-www-form-urlencoded
                dataType: 'json', -> indica que o text/html recebido do backend tem que ser interpretado como um objeto literal json; usar junto com json_encode() do lado do backend
                success: o que vai acontecer se houver sucesso, 
                error: o que vai acontecer se houver erro})
        */
        
        let competencia = $(e.target).val();
        
        $.ajax({
            type: 'GET',
            url: 'app.php',
            data: `competencia=${competencia}`,
            dataType: 'json',//usar junto com json_encode() do lado do backend
            success: dados => {
                $('#numeroVendas').html(dados.numeroVendas),
                $('#totalVendas').html(dados.totalVendas)
            },
            error:  erro => {console.log(erro)}
        })
    })
})