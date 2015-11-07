var controladorDeCartoes = (function() {
	function removeCartao() {
		var cartao = document.querySelector("#cartao_" + this.dataset.ref);
		cartao.classList.add("cartao--some");

		setTimeout(function() {
			cartao.remove();
		},400);
	}

	// var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
	// for (var i = 0; i < botoes.length; i++) {
	// 	botoes[i].addEventListener("click", removeCartao);
	// };

	function decideTipoCartao(conteudo) {
		var quebras = conteudo.split("<br>").length;
		var totalDeLetras = conteudo.replace(/<br>/g," ").length;

		var ultimoValor = conteudo.replace(/<br>/g, " ")
		.split(" ")
		.reduce(function(ultimaPalavra, palavraAtual) {
			if (palavraAtual > ultimaPalavra) {
				ultimaPalavra = palavraAtual;
			} return ultimaPalavra;
		}, " ")

	//Substituição do .forEach por .reduce		  		
	//.forEach(function(palavra) {
	//	if(palavra.length > ultimoValor.length) {
	//		ultimoValor = palavra;
	//	}
	//});

	var tamMaior = ultimoValor.length;
	//no mínimo, todo cartão tem o texto pequeno
	var tipoCartao = "cartao--textoPequeno";

		if (tamMaior < 9 && quebras < 5 && totalDeLetras < 55) {
			tipoCartao = "cartao--textoGrande";
		} else if (tamMaior < 12 && quebras < 6 && totalDeLetras < 75) {
			tipoCartao = "cartao--textoMedio";
		}
		return tipoCartao;
	}

	var contador = $(".cartao").length;

	function adicionaCartao(conteudo, cor) {

		contador ++;
		var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
									   .attr("data-ref", contador)
									   .text("Remover")
									   .click(removeCartao);

		var opcoes = $("<div>").addClass("opcoesDoCartao")
							   .append(botaoRemove);

		var tipoCartao = decideTipoCartao(conteudo);

		var conteudoTag = $("<p>").addClass("cartao-conteudo")
								  .append(conteudo);

		$("<div>").attr("id","cartao_" + contador)
				  .addClass("cartao")
				  .addClass(tipoCartao)
				  .append(opcoes)
				  .append(conteudoTag)
				  .css("background-color", cor)
				  .prependTo(".mural");
	}
	return {
		adicionaCartao: adicionaCartao
		,idUltimoCartao: function() {
			return contador;
		}
	}
})();