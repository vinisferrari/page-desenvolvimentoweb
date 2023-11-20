function exibirFooter() {

    const nome = "Vinícius Ferrari Silva";
    var redesSociais = {
        twitter: "@vinisferrari",
        facebook: "@vinisferrari",
        instagram: "@vinisferrari",
        linkedin: "@vinisferrari",
    };
    const sexo = "Masculino";
    var polo = "Campinas/SP";
    var ano_corrente = "2023"

    document.write("<p>" + nome + "</p>");
    document.write("<p>Sexo: " + sexo + "</p>");
    document.write("<p>Ano - " + ano_corrente + "</p>");
    document.write("<ul>");
    for (var rede in redesSociais) {
        document.write("<li>" + rede + ": " + redesSociais[rede] + "</li>");
    }
    document.write("</ul>");
    document.write("<p>Localização - polo: " + polo + "</p>");
}

//mostrando caixa de dialogo ao carregá-la pelo navegador
function MostrarSaudacao(){

    var data_atual = new Date();
    var hora_atual = data_atual.getHours();
    
    // pegando a hora atual e definindo o cumprimento
    if (hora_atual >= 0 && hora_atual < 12){
        var saudacao = "Bom dia!";
    } else if (hora_atual >= 12 && hora_atual < 18){
        var saudacao = "Boa tarde!";
    } else {
        var saudacao = "Boa noite!";
    }

    //pegando o dia da semana
    var dias_da_semana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    var dia_atual = dias_da_semana[data_atual.getDay()];

    //mostrando mensagem na tela
    alert(saudacao + " Hoje é " + dia_atual + "\nSou o Vinícius Ferrari Silva\n" + "Campinas/ADS - Mackenzie");

}
