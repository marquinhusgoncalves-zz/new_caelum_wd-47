function mudaNoClick(){

	var btn = this;
	if(btn.textContent == "Linhas"){
		btn.textContent = "Colunas";
	}else {
		btn.textContent = "Linhas";
	}

	var mural = document.querySelector(".mural");
	mural.classList.toggle("mural--Linhas");
}

document.querySelector("#mudaLayout").addEventListener("click", mudaNoClick);