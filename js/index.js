let alas = document.getElementById('alas');
let tinggi = document.getElementById('tinggi');

let sisiA = document.getElementById('sisiA');
let sisiB = document.getElementById('sisiB');
let sisiC = document.getElementById('sisiC');

let sisiAB = document.getElementById('sisiAB');
let sisiBC = document.getElementById('sisiBC');

let pattern = /^[0-9-.-]+$/;



//Segitiga

function hitung(){
	let a = alas.value
	let t = tinggi.value
	let l = 0.5 * a * t

	if(a.match(pattern) && t.match(pattern)){
	luas.innerHTML = 
	`L = 1/2 a x t <br><br>
	L = 1/2 x ${a} x ${t} <br><br>
	L = ${l}`; return true;
	}else{
		luas.innerHTML = "Mohon masukkan angka (Gunakan tanda koma (,) Untuk bilangan desimal)"; return false;
	}
}

function reset(){
	document.form.alas.value = "";
	document.form.tinggi.value = "";
	document.getElementById("luas").innerHTML = ``;
	
}

function hitung2(){
	let sA = sisiA.value
	let sB = sisiB.value
	let sC = sisiC.value
	let k = parseFloat(sA) + parseFloat(sB) + parseFloat(sC)


	if(sA&&sB&&sC.match(pattern)){
	keliling.innerHTML = 
	`K = S1 + S2 + S3 <br><br>
	K = ${sA} + ${sB} + ${sC} <br><br>
	K = ${k}`; return true;	
	}else{
		keliling.innerHTML = "Mohon masukkan angka (Gunakan tanda koma (,) Untuk bilangan desimal)"; return false;
	
	}
	
}

function reset2(){
	document.form2.sisiA.value = "";
	document.form2.sisiB.value = "";
	document.form2.sisiC.value = "";
	document.getElementById("keliling").innerHTML = ``;
	
}


//Jajargenjang
function hitung3(){
	let a = alas.value
	let t = tinggi.value
	let l = a*t

	if(a.match(pattern) && t.match(pattern)){
	luas.innerHTML = 
	`L = a x t <br><br>
	L = ${a} x ${t} <br><br>
	L = ${l}`
	}else{
		luas.innerHTML = "Mohon masukkan angka (Gunakan tanda koma (,) Untuk bilangan desimal)"; return false;
	}
	
}

function reset3(){
	document.form.alas.value = "";
	document.form.tinggi.value = "";
	document.getElementById("luas").innerHTML = ``;
	
}

function hitung4(){
	let sAB = sisiAB.value
	let sBC = sisiBC.value
	let k = 2*(parseFloat(sAB) + parseFloat(sBC))

	if(sAB.match(pattern) && sBC.match(pattern)){
	keliling.innerHTML = 
	`K = 2 x (Sisi AB + Sisi BC) <br><br>
	K = 2 x (${sAB} + ${sBC})<br><br>
	K = ${k}`
	}else{
		keliling.innerHTML = "Mohon masukkan angka (Gunakan tanda koma (,) Untuk bilangan desimal)"; return false;
	}

	
}

function reset4(){
	document.form2.sisiAB.value = "";
	document.form2.sisiBC.value = "";
	document.getElementById("keliling").innerHTML = ``;
	
}
