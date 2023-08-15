// Dapatkan elemen-elemen dari dokumen HTML
const choices = document.querySelectorAll(".choices");
const computerScore = document.getElementById("computer_score");
const userScore = document.getElementById("user_score");
const userChoice = document.getElementById("user_choice");
const compChoice = document.getElementById("comp_choice");
const result = document.getElementById("result");

// Dapatkan elemen audio dari dokumen HTML
const backsound = document.querySelector("#backsound");
const startSound = document.querySelector("#start_sound");
const suitSound = document.querySelector("#suit_sound");
const winSound = document.querySelector("#win_sound");
const loseSound = document.querySelector("#lose_sound");

// Tetapkan nilai awal dari variabel-variabel
let compScore = 0; // Skor komputer
let usrScore = 0; // Skor Anda
let compInput; // Pilihan komputer
let usrInput; // Pilihan Anda

// Tentukan fungsi untuk memeriksa pemenang
function checker(input) {
    // Tetapkan pilihan Anda berdasarkan input
    usrInput = input;
    // Tampilkan pilihan Anda di layar
    userChoice.innerHTML = "Anda memilih: " + usrInput;
    // Tentukan pilihan komputer secara acak
    const options = ["gajah", "orang", "semut"];
    compInput = options[Math.floor(Math.random() * 3)];
    // Tampilkan pilihan komputer di layar
    compChoice.innerHTML = "Komputer memilih: " + compInput;
    // Bandingkan pilihan Anda dan pilihan komputer
    if (usrInput == compInput) {
        // Jika pilihan sama, maka hasilnya seri
        result.innerHTML = "Hasil: Seri!";
        // Putar sound effect sesuai dengan hasil
        suitSound.play();
    } else if (usrInput == "gajah" && compInput == "orang") {
        // Jika Anda memilih gajah dan komputer memilih orang, maka Anda menang
        result.innerHTML = "Hasil: Anda menang!";
        // Tambahkan skor Anda dengan satu
        usrScore++;
        // Tampilkan skor Anda di layar
        userScore.innerHTML = usrScore;
        // Putar sound effect sesuai dengan hasil
        winSound.play();
    } else if (usrInput == "orang" && compInput == "semut") {
        // Jika Anda memilih orang dan komputer memilih semut, maka Anda menang
        result.innerHTML = "Hasil: Anda menang!";
        // Tambahkan skor Anda dengan satu
        usrScore++;
        // Tampilkan skor Anda di layar
        userScore.innerHTML = usrScore;
        // Putar sound effect sesuai dengan hasil
        winSound.play();
    } else if (usrInput == "semut" && compInput == "gajah") {
        // Jika Anda memilih semut dan komputer memilih gajah, maka Anda menang
        result.innerHTML = "Hasil: Anda menang!";
        // Tambahkan skor Anda dengan satu
        usrScore++;
        // Tampilkan skor Anda di layar
        userScore.innerHTML = usrScore;
        // Putar sound effect sesuai dengan hasil
        winSound.play();
    } else {
        // Selain itu, maka komputer menang
        result.innerHTML = "Hasil: Komputer menang!";
        // Tambahkan skor komputer dengan satu
        compScore++;
        // Tampilkan skor komputer di layar
        computerScore.innerHTML = compScore;
        // Putar sound effect sesuai dengan hasil
        loseSound.play();
    }
}

// Tambahkan event listener pada setiap tombol pilihan untuk menjalankan fungsi checker saat diklik
choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        checker(this.getAttribute("onclick").slice(9, -2));
    });
});



// Tambahkan event listener pada dokumen untuk memutar backsound saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    backsound.play();
});

// Tambahkan event listener pada dokumen untuk memutar start sound saat tombol pertama kali diklik
document.addEventListener("click", function () {
    backsound.play();
},)