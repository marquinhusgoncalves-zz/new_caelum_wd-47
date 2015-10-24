document.querySelector("#mudaLayout").addEventListener("click", function (){

	var mural = document.querySelector(".mural");
	mural.classList.toggle("mural--Linhas");

	if(mural.classList.contains("mural--Linhas")){
		this.textContent = "Blocos";
	}else {
		this.textContent = "Linhas";
	}
});

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

var contador = $(".cartao").length;
$(".novoCartao").submit(function(event){
	var campoConteudo = $(".novoCartao-conteudo");
	var conteudo = campoConteudo.val().trim().replace(/\n/g, "<br>")
											 .replace(/\*\*(.+)\*\*/g, "<b>$1</b>")
											 .replace(/\*(.+)\*/g, "<em>$1</em>");

	if(conteudo) {
		var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
									   .attr("data-ref", contador)
									   .text("Remover")
									   .click(removeCartao);

		var opcoes = $("<div>").addClass("opcoesDoCartao")
							   .append(botaoRemove);

		var conteudoTag = $("<p>").addClass("cartao-conteudo")
								  .append(conteudo);

		$("<div>").attr("id", "cartao_" + contador)
				  .addClass("cartao")
				  .append(opcoes)
				  .append(conteudoTag)
				  .prependTo(".mural");
	}

	campoConteudo.val("");
	event.preventDefault();
});