
<script>
    var dataTerminoPromocao = new Date('2024/06/28 23:08:00').getTime();
    var intervalo = setInterval(atualizarContador, 1000);

    function atualizarContador() {
        var agora = new Date().getTime();
        var diferenca = dataTerminoPromocao - agora;

        if (diferenca > 0) {
            // Calcula o tempo restante
            var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            // Exibe o contador regressivo
            document.getElementById("dias").innerHTML = dias + "d ";
            document.getElementById("horas").innerHTML = horas + "h ";
            document.getElementById("minutos").innerHTML = minutos + "m ";
            document.getElementById("segundos").innerHTML = segundos + "s";

            
            document.getElementById("post").innerHTML = "[giaban]R$100[/giaban][giacu]R$200[/giacu]";
        
            document.getElementById("msgpromo").innerHTML = '<i class="fa fa-bell" aria-hidden="true"></i> Promoção';

     
        } else {
            // Mostra o preço normal após o término da promoção
            document.getElementById("post").innerHTML = "[giaban]R$200[/giaban]";
            
         

            // Desativa o contador e exibe a mensagem de promoção encerrada
            clearInterval(intervalo);
            document.getElementById("contador").classList.add("disabled");
            document.getElementById("msg").style.display = "block";
        }
    }

    // Chamando a função de atualizar o contador imediatamente após o carregamento da página
    window.onload = atualizarContador;
</script>

