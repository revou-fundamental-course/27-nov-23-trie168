
function hitungLuasSegitiga() {
    let alas = parseFloat(document.getElementById("alas-s").value);
	let tinggi = parseFloat(document.getElementById("tinggi-s").value);
	let luas = 0.5 * alas * tinggi;
	document.getElementById("luas-s").value = luas;
}


function hitungKelilingSegitiga() {
    let sisiA = parseFloat(document.getElementById("sisi-a").value);
    let sisiB = parseFloat(document.getElementById("sisi-b").value);
    let sisiC = parseFloat(document.getElementById("sisi-c").value);
    let keliling = sisiA * sisiB * sisiC;
    document.getElementById("keliling-s").value = keliling;
}

function resetForm() {
    document.getElementById("alas-s").value = "";
    document.getElementById("tinggi-s").value = "";
    document.getElementById("luas-s").value = "";
    document.getElementById("sisi-a").value = "";
    document.getElementById("sisi-b").value = "";
    document.getElementById("sisi-c").value = "";
    document.getElementById("keliling-s").value = "";
}