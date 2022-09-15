// // const myName = "Dani Juhaeni";
// // let myAddress = "Jombang";
// let i = 0;

// // myAddress = "Kuningan";
// // console.log(myName);
// // console.log(myAddress);

// function getDetailHuman(data1, data2) {
//   i += 1;
// //   console.log(`nama saya ${data1} dan alamat saya di ${data2}.`);
//   console.log(`function di panggil sebanyak ${i} kali.`);
// }

// // getDetailHuman(myName, myAddress);

// let i = 0;
// let j = 0;

// // standard function
// function getDetailHuman() {
//   i += 1;
//   if (i > 5) {
//     console.log("lebih dari 5x jatah klik");
//   } else {
//     console.log("jatah klik masih ada");
//   }
// }

// // arrow function
// const getDetailHuman2 = () => {
//   j += 1;
//   j > 5
//     ? console.log("lebih dari 5x jatah klik")
//     : console.log("jatah klik masih ada");
// };

// const mahasiswa = [
//   {
//     nama: "Dani Juhaeni",
//     alamat: "Jombang",
//     usia: 24,
//     semester: 8,
//   },
//   {
//     nama: "Tomi Alamsyah",
//     alamat: "Kuningan",
//     usia: 24,
//     semester: 8,
//   },
// ];

// function getDetailData() {
//   //   mahasiswa.map(function (result, i) {
//   //     console.table(result);
//   // });
//   mahasiswa.forEach((result) => {
//     console.table(result);
//   });
// }

class Hewan {
  color;
  skill;
  constructor(nama) {
    this.nama = nama;
  }
  set newColor(color) {
    this.color = color;
  }
  set newSkill(skill) {
    this.skill = skill;
  }

  get detail() {
    return `Hi nama saya ${this.nama}, warna saya ${this.color} dan keahlian saya ${this.skill}`;
  }
}

const kucing = new Hewan("jojo");
kucing.newColor = "Oren";
kucing.newSkill = "Mengeong";

console.log(kucing.detail);
