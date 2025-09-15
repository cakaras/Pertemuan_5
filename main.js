// console.log("Hello, World!");

// function greet(name) {
//     return `Hello, ${name}!`;

// console.log(greet("Alice"));
// }

// console.log(greet("Bob"));
// mainText.innerHTML = "Hello, World!";

class bank {
    constructor(nama, saldo) {
        this.nama = nama;
        this.saldo = saldo;
    }
    deposit(jumlah_setoran) {
        this.saldo += jumlah_setoran;
        return this.saldo;
    }
    tarik(jumlah_penarikan) {
        if (jumlah_penarikan > this.saldo) {
            alert("Saldo tidak cukup");
        } else {
            this.saldo -= jumlah_penarikan;
        }
        return this.saldo;
    }
    cek_saldo() {
        return `nama: ${this.nama}  saldo: ${this.saldo}`;
    }
}
// import mahasiswa from "./mhs.js";
const mainText = document.getElementById("main-text");

const mhs = new bank("akbar", 1000);
mhs.tarik(500);

mainText.innerText = mhs.cek_saldo();