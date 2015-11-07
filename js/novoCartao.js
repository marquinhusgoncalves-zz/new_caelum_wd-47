(function() {
	$(".novoCartao").submit(function(event){
		var campoConteudo = $(".novoCartao-conteudo");
		var conteudo = campoConteudo.val().trim().replace(/\n/g, "<br>")
		.replace(/\*\*(.+)\*\*/g, "<b>$1</b>")
		.replace(/\*(.+)\*/g, "<em>$1</em>");

		if(conteudo) {
			controladorDeCartoes.adicionaCartao(conteudo);
		}
		campoConteudo.val("");
		event.preventDefault();
	});
})();