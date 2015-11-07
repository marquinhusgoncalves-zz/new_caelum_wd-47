(function() {
	var usuario = "email@exemplo.com.br";

	$.getJSON (
		"https://ceep.herokuapp.com/cartoes/carregar?callback=?",
		{usuario: usuario},
		function(res){
			var cartoes = res.cartoes;
			console.log(cartoes.length + " carregados em " + res.usuario);
			cartoes.forEach(function(cartao) {
				controladorDeCartoes.adicionaCartao(cartao.conteudo);
			});
		}
	);

	$("#sync").click(function() {
		$("#sync").removeClass("botaoSync--sincronizado");
		$("#sync").addClass("botaoSync--esperando");

		var cartoes = [];

		$(".cartao").each(function() {
			var cartao = {};

			cartao.conteudo = $(this).find(".cartao-conteudo").html();
			cartoes.push(cartao);
		})

		var mural = {
			usuario: "email@exemplo.com.br"
			,cartoes: cartoes
		}

		$.ajax({
			url: "https://ceep.herokuapp.com/cartoes/salvar"
			,method: "POST"
			,data: mural
			,success: function(res) {
				$("#sync").addClass("botaoSync--sincronizado");
				console.log(res.quantidade + " cartoes salvos em " + res.usuario);

				var quantidadeRemovidos = controladorDeCartoes.idUltimoCartao() - res.quantidade
				console.log(quantidadeRemovidos + " cartoes removidos")
			}
			,error: function() {
				$("#sync").addClass("botaoSync--deuRuim");
				console.log("Não foi possível salvar o mural");
			}
			,complete: function() {
				$("#sync").removeClass("botaoSync--esperando");
			}
		});
	});
})()