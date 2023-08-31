// test button name
function myButton() {
  let name = prompt("siapa nama kamu?");
  let old = prompt("berapa usia kamu?");
  let address = prompt("dimana kamu tinggal?");
  let status = prompt("berapa pacar kamu?");

  // pengkondisian apabila pacar lebih dari 1
  if (status == 1) {
    status = "wah lumayan juga kamu";
  } else if (status < 5) {
    status = "pemain juga nihh!";
  } else {
    status = "kamu ternyata setia yah";
  }

  const result = `Halo namaku adalah ${name}, usiaku ${old}, tempat tinggalku ada di ${address}, ${status}`;

  const message = document.getElementById("button");
  message.innerHTML = result;
  message.style.color = "white";
}

// operator
function operatorSystem() {
  let saldo = Number(prompt("berapa saldo kamu sekaarang?"));
  let debit = Number(prompt("berapa hutang kamu sekarang?"));
  let investment = Number(prompt("berapa lama kamu mau investasi?"));
  let percent = Number(prompt("berapa % return yang di inginkan?"));

  const result = (saldo - debit) * investment;

  const message = document.getElementById("buttonOperator");
  message.innerHTML = result;
  message.style.fontSize = "18px";
}

// date
function myDate() {
  const date = new Date();
  const day = date.getDay();
  const clock = date.getHours();
  const minute = date.getMinutes();

  let days = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];

  let results = days[day];

  let message = `hari ini adalah hari ${results}, jam ${clock} : ${minute}`;
  let result = document.getElementById("buttonDate");
  result.innerHTML = message;
  result.style.fontSize = "18px";
}

// javascript dom
const body = document.body;
const btn1 = document.getElementById("btn1");
const btn = document.querySelectorAll("button");

function myBtn() {
  btn1.style.borderRadius = "14px";
  btn1.style.padding = "24px";
  btn1.style.fontSize = "14px";
  btn1.style.background = "red";
  btn1.style.color = "white";
  const text = document.createElement("p");
  text.textContent = "hello guys";

  btn1.innerHTML = "muncul katakataa";

  body.append(text);
}

function myBtn1() {
  const text = document.querySelector("p");
  text.style.color = "red";
  text.style.fontSize = "24px";
}

// materi array
const myArray = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date(),
    capacity: 7,
  },
];

const text = document.createElement("h1");
text.innerHTML = myArray[0];

body.append(text);

function arrayku() {
  const text = document.createElement("h1");
  text.textContent = myArray;
  text.style.zIndex = 100;
  body.append(text);
}

// includes adalah mengecek bahwa nilai array tersebut ada atau tidak
// indexOf itu adalah mencari tau posisi nilai yang dicari
// length adalah panjang data
// shift adalah untuk mencari nilai pertama dan pop adalah untuk mencari nilai terakhir dalam suatu array
// list of (variable) untuk memecah nilai array
// cara menggunakan mapping yaitu = variabel.map((value, index) => ??)
const arrayBuah = ["semangka", "durian", "apel", "rambutan", "anggur"];
const arrayBuah1 = ["semangka", "durian", "apel", "rambutan", "anggur"];

const newArrayBuah = arrayBuah.concat(arrayBuah1);
newArrayBuah.map((value) => console.log(value));

// const objectArray = [
//   {
//     name: "Fandi Bayu",
//     stack: "JavaScript",
//     age: 21,
//   },
//   {
//     name: " Bayu",
//     stack: "Go",
//     age: 22,
//   },
//   {
//     name: "Fandi ",
//     stack: "C++",
//     age: 25,
//   },
//   {
//     name: "Fandi ss",
//     stack: "PHP",
//     age: 15,
//   },
//   { name: "John", stack: "Frontend", age: 25 },
//   { name: "Jane", stack: "Backend", age: 30 },
//   { name: "Michael", stack: "Full Stack", age: 28 },
//   { name: "Emily", stack: "UI/UX", age: 24 },
//   { name: "David", stack: "DevOps", age: 32 },
//   { name: "Olivia", stack: "Frontend", age: 27 },
//   { name: "William", stack: "Backend", age: 29 },
//   { name: "Sophia", stack: "Full Stack", age: 26 },
//   { name: "Daniel", stack: "UI/UX", age: 31 },
//   { name: "Ava", stack: "DevOps", age: 23 },
// ];

// objectArray
//   .filter((x) => x.age >= 23)
//   .sort((x, y) => x.age - y.age)
//   .map((values) => console.log(values));

function datas() {
  const dataValue = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      country: "USA",
      occupation: "Engineer",
      salary: 60000,
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      country: "Canada",
      occupation: "Teacher",
      salary: 45000,
    },
    {
      id: 3,
      name: "Carol",
      age: 22,
      country: "UK",
      occupation: "Student",
      salary: 0,
    },
    {
      id: 4,
      name: "David",
      age: 28,
      country: "Australia",
      occupation: "Designer",
      salary: 75000,
    },
    {
      id: 5,
      name: "Eve",
      age: 21,
      country: "USA",
      occupation: "Artist",
      salary: 30000,
    },
    {
      id: 6,
      name: "Frank",
      age: 35,
      country: "Canada",
      occupation: "Doctor",
      salary: 120000,
    },
    {
      id: 7,
      name: "Grace",
      age: 29,
      country: "UK",
      occupation: "Scientist",
      salary: 90000,
    },
    {
      id: 8,
      name: "Henry",
      age: 23,
      country: "Australia",
      occupation: "Writer",
      salary: 55000,
    },
    {
      id: 9,
      name: "Ivy",
      age: 27,
      country: "USA",
      occupation: "Photographer",
      salary: 40000,
    },
    {
      id: 10,
      name: "Jack",
      age: 26,
      country: "Canada",
      occupation: "Chef",
      salary: 35000,
    },
    {
      id: 11,
      name: "Katie",
      age: 31,
      country: "USA",
      occupation: "Lawyer",
      salary: 85000,
    },
    {
      id: 12,
      name: "Liam",
      age: 24,
      country: "UK",
      occupation: "Engineer",
      salary: 62000,
    },
    // Tambahkan lebih banyak data dengan atribut tambahan di sini
  ];

  const data = [];
  for (let i = 0; i < dataValue.length; i++) {
    const values = dataValue[i];
    data.push({
      name: values.name,
      country: values.country,
      age: values.age,
      id: values.id,
    });
  }

  const dataContainer = document.getElementById("data");

  let content = "<ul>"; // Mulai daftar tak terurut

  for (let i = 0; i < data.length; i++) {
    const person = data[i];
    content += `<li>Name: ${person.name}, Age: ${person.age}, Country: ${person.country}, ID: ${person.id}</li>`;
  }

  content += "</ul>"; // Akhiri daftar tak terurut

  // Memasukkan konten ke dalam elemen div menggunakan innerHTML
  dataContainer.innerHTML = content;
}

// filter salarynya diatas 40000, dan urutkan berdasarkan  id, lakukan mapping  dengan console.log

// functionlearning
function addName() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

addName(
  "Fandi",
  "Bayu",
  "Fandi",
  "Bayu",
  "Fandi",
  "Bayu",
  "Fandi",
  "Bayu",
  "sakti"
);

// arrow function
const sum = (x, y) => {
  console.log(x * y);
};

sum(2, 100);

const password = document.getElementById("pwd");
const show = document.getElementById("chk");

show.onchange = (x) => {
  password.type = show.checked ? "text" : "password";
};

/*
TUGAS BESAR
1. Membuat perhitungan Matematika
  - Luas lingkaran
  - Luas segitiga
  - Luas  persegi panjang
  - Luas jajargenjang

2. Menghitung total gaji yang di dapat dalam satu bulan
dengan input minimal :
  - Nama karyawan
  - Gaji perhari
  - Jumlah hari masuk kerja
**/

const luasLingkaran = (x, y, z) => {
  console.log(x * y * z);
};

luasLingkaran(3.14, 12, 12);

const segitiga = new Function("x", "y", "z", "console.log(x / y * z)");
segitiga(12, 24, 12);

function luasPersegi(x, y) {
  console.log(x * y);
}

luasPersegi(12, 12);

const luasJajargenjang = (x, y) => {
  console.log(x * y);
};

luasJajargenjang(12, 14);

// const totalGaji = (namaKaryawan, gajiPehari, jumlahHari) => {
//   alert(`namanya ${namaKaryawan}, total gajinya ${gajiPehari * jumlahHari}`);
// };

// totalGaji("Fandi Bayu", 100000, 22);
