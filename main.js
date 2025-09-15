// console.log("Hello, World!");

// function greet(name) {
//     return `Hello, ${name}!`;

// console.log(greet("Alice"));
// }

// console.log(greet("Bob"));

const mainText = document.getElementById("main-text");
// mainText.innerHTML = "Hello, World!";

class mahasiswa {
    constructor(nama, nim, jurusan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
    }
}

const mhs = new mahasiswa("egan", "123", "Informatika");
mainText.innerText = mhs.nama;
mainText.innnerText = mhs.nama;