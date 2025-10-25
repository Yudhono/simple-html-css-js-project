function hitung(){
    // step 1: ambil inputan dari user
    const input1 = document.getElementById("input_number_1").value;
    const input2 = document.getElementById("input_number_2").value;

    // step 2: hitung inputan user
    const hasil = parseFloat(input1) + parseFloat(input2);

    // step 3: tampilkan hasil perhitungan
    document.getElementById("result").innerHTML = hasil;
}