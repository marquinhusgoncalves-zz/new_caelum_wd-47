(function() {
	document.querySelector("#mudaLayout").addEventListener("click", function (){
		var mural = document.querySelector(".mural");
		mural.classList.toggle("mural--Linhas");

		if(mural.classList.contains("mural--Linhas")){
			this.textContent = "Blocos";
		}else {
			this.textContent = "Linhas";
		}
	});
})();