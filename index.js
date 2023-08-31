function myDate() {
  let getDate = new Date();
  let day = getDate.getDay();

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  for (let i = 0; i < days.length; i++) {
    const date = days[day];
    const dataResult = document.getElementById("buttonDate");
    dataResult.innerHTML = date;
  }
  const month = [
    "January",
    "Febary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Desember",
  ];
}

// function datas() {
//   12;
//   const dataValue = [
//     {
//       id: 1,
//       name: "Alice",
//       age: 25,
//       country: "USA",
//       occupation: "Engineer",
//       salary: 60000,
//     },
//     {
//       id: 2,
//       name: "Bob",
//       age: 30,
//       country: "Canada",
//       occupation: "Teacher",
//       salary: 45000,
//     },
//     {
//       id: 3,
//       name: "Carol",
//       age: 22,
//       country: "UK",
//       occupation: "Student",
//       salary: 11110,
//     },
//     {
//       id: 4,
//       name: "David",
//       age: 28,
//       country: "Australia",
//       occupation: "Designer",
//       salary: 75000,
//     },
//     {
//       id: 5,
//       name: "Eve",
//       age: 21,
//       country: "USA",
//       occupation: "Artist",
//       salary: 30000,
//     },
//     {
//       id: 6,
//       name: "Frank",
//       age: 35,
//       country: "Canada",
//       occupation: "Doctor",
//       salary: 120000,
//     },
//     {
//       id: 7,
//       name: "Grace",
//       age: 29,
//       country: "UK",
//       occupation: "Scientist",
//       salary: 90000,
//     },
//     {
//       id: 8,
//       name: "Henry",
//       age: 23,
//       country: "Australia",
//       occupation: "Writer",
//       salary: 55000,
//     },
//     {
//       id: 9,
//       name: "Ivy",
//       age: 27,
//       country: "USA",
//       occupation: "Photographer",
//       salary: 40000,
//     },
//     {
//       id: 10,
//       name: "Jack",
//       age: 26,
//       country: "Canada",
//       occupation: "Chef",
//       salary: 35000,
//     },
//     {
//       id: 11,
//       name: "Katie",
//       age: 31,
//       country: "USA",
//       occupation: "Lawyer",
//       salary: 85000,
//     },
//     {
//       id: 12,
//       name: "Liam",
//       age: 24,
//       country: "UK",
//       occupation: "Engineer",
//       salary: 62000,
//     },
//     // Tambahkan lebih banyak data dengan atribut tambahan di sini
//   ];

//   // Membuat array kosong
//   const resultApi = [];
//   // melooping data array menggunakan for looping
//   for (let i = 0; i < dataValue.length; i++) {
//     // memasukan API kedalam parameter values
//     const values = dataValue[i];
//     // push api kedalam array kosong
//     resultApi.push({
//       // inisialisasi data yang ingin dimasukan kedalam array kosong dengan parameter values
//       name: values.name,
//       id: values.id,
//       salary: values.salary,
//     });
//   }

//   // validasi memfilter data yang di inginkan
//   const sortAndFilter = resultApi
//     .filter((x) => x.salary >= 50000)
//     .sort((x, y) => x.id - y.id);

//   // validasi kedalam content
//   const mappedData = sortAndFilter.map((value) => {
//     return `<li> Name : ${value.name}, Id: ${value.id}, Salary : ${value.salary}   </li>`;
//   });

//   // Membuat containerDiv dan content
//   const containerDiv = document.getElementById("data");
//   const content = `<ul>${mappedData.join("")}</ul>`;
//   containerDiv.innerHTML = content;
// }

// // membuat function
// function datas() {
//   // isi data yang ingin ditampilkan
//   const dataValue = [
//     {
//       id: 1,
//       name: "Alice",
//       age: 25,
//       country: "USA",
//       occupation: "Engineer",
//       salary: 60000,
//     },
//     {
//       id: 2,
//       name: "Bob",
//       age: 30,
//       country: "Canada",
//       occupation: "Teacher",
//       salary: 45000,
//     },
//     {
//       id: 3,
//       name: "Carol",
//       age: 22,
//       country: "UK",
//       occupation: "Student",
//       salary: 11110,
//     },
//     {
//       id: 4,
//       name: "David",
//       age: 28,
//       country: "Australia",
//       occupation: "Designer",
//       salary: 75000,
//     },
//     {
//       id: 5,
//       name: "Eve",
//       age: 21,
//       country: "USA",
//       occupation: "Artist",
//       salary: 30000,
//     },
//     {
//       id: 6,
//       name: "Frank",
//       age: 35,
//       country: "Canada",
//       occupation: "Doctor",
//       salary: 120000,
//     },
//     {
//       id: 7,
//       name: "Grace",
//       age: 29,
//       country: "UK",
//       occupation: "Scientist",
//       salary: 90000,
//     },
//     {
//       id: 8,
//       name: "Henry",
//       age: 23,
//       country: "Australia",
//       occupation: "Writer",
//       salary: 55000,
//     },
//     {
//       id: 9,
//       name: "Ivy",
//       age: 27,
//       country: "USA",
//       occupation: "Photographer",
//       salary: 40000,
//     },
//     {
//       id: 10,
//       name: "Jack",
//       age: 26,
//       country: "Canada",
//       occupation: "Chef",
//       salary: 35000,
//     },
//     {
//       id: 11,
//       name: "Katie",
//       age: 31,
//       country: "USA",
//       occupation: "Lawyer",
//       salary: 85000,
//     },
//     {
//       id: 12,
//       name: "Liam",
//       age: 24,
//       country: "UK",
//       occupation: "Engineer",
//       salary: 62000,
//     },
//     // Tambahkan lebih banyak data dengan atribut tambahan di sini
//   ];

//   // membuat array kosong agar tidak merusak main array
//   const data = [];

//   // looping data main array
//   for (let i = 0; i < dataValue.length; i++) {
//     // masukan array kedalam variabel baru
//     const value = dataValue[i];
//     // memasukan ke parameter array yang kosong
//     data.push({
//       // validasi masing-masing nilai
//       id: value.id,
//       Name: value.name,
//       salary: value.salary,
//       occupation: value.occupation,
//       Country: value.country,
//     });
//   }
//   // membuat variabel baru untuk di filter
//   const filterData = data
//     .filter((x) => x.salary >= 50000)
//     .sort((x, y) => x.id - y.id);

//   const mappedData = filterData.map((value) => {
//     return `<li>name : ${value.Name}, id: ${value.id}, salary: ${value.salary}, occupation : ${value.occupation}, Country : ${value.Country}  </li>`;
//   });

//   const containerDiv = document.getElementById("data");
//   const content = `<ul>${mappedData.join("")}</ul>`;
//   containerDiv.innerHTML = content;

//   // // membuat content js menggunakan let agar bisa diubah datanya
//   // let content = "<ul>";
//   // // melakukan looping yang sudah di filter
//   // for (let i = 0; i < filterData.length; i++) {
//   //   // pindahkan ke variabel result
//   //   const result = filterData[i];
//   //   // masukan ke backtik untuk di render
//   //   content += `<li> Name: ${result.Name}, Id: ${result.id}, Salary: ${result.salary}, Occupation ${result.occupation}, Country ${result.Country}  </li>`;
//   // }

//   // // validasi variabel
//   // const containerDiv = document.getElementById("data");
//   // // tutup content let
//   // content += `</ul>`;
//   // // render parameter
//   // containerDiv.innerHTML = content;
// }

function datas() {
  const dataArray = [
    {
      name: "Alice Johnson",
      country: "United States",
      id: 1001,
      salary: 80000,
      occupation: "Marketing Manager",
      motivation: "To create effective marketing campaigns.",
    },
    {
      name: "David Lee",
      country: "United Kingdom",
      id: 1002,
      salary: 65000,
      occupation: "Sales Representative",
      motivation: "To build strong customer relationships.",
    },
    {
      name: "Maria Rodriguez",
      country: "Spain",
      id: 1003,
      salary: 55000,
      occupation: "Accountant",
      motivation: "To maintain accurate financial records.",
    },
    {
      name: "Yusuf Ahmed",
      country: "Nigeria",
      id: 1004,
      salary: 40000,
      occupation: "Teacher",
      motivation: "To educate and inspire students.",
    },
    {
      name: "Miyuki Tanaka",
      country: "Japan",
      id: 1005,
      salary: 70000,
      occupation: "Software Developer",
      motivation: "To build cutting-edge applications.",
    },
    {
      name: "Elena Petrova",
      country: "Russia",
      id: 1006,
      salary: 60000,
      occupation: "Research Scientist",
      motivation: "To advance scientific knowledge.",
    },
    {
      name: "Carlos Gomez",
      country: "Mexico",
      id: 1007,
      salary: 48000,
      occupation: "Customer Service Representative",
      motivation: "To assist and support customers.",
    },
    {
      name: "Sophie Dubois",
      country: "France",
      id: 1008,
      salary: 72000,
      occupation: "Fashion Designer",
      motivation: "To create unique and stylish clothing.",
    },
    {
      name: "Chen Wei",
      country: "China",
      id: 1009,
      salary: 58000,
      occupation: "Marketing Analyst",
      motivation: "To analyze market trends and insights.",
    },
    {
      name: "Amit Patel",
      country: "India",
      id: 1010,
      salary: 45000,
      occupation: "Content Writer",
      motivation: "To craft engaging and informative content.",
    },
    {
      name: "John Doe",
      country: "United States",
      id: 12345,
      salary: 60000,
      occupation: "Software Engineer",
      motivation: "To create innovative solutions.",
    },
    {
      name: "Jane Smith",
      country: "Canada",
      id: 67890,
      salary: 75000,
      occupation: "Data Analyst",
      motivation: "To derive insights from data.",
    },
    {
      name: "Ahmed Khan",
      country: "Pakistan",
      id: 54321,
      salary: 45000,
      occupation: "Graphic Designer",
      motivation: "To express ideas visually.",
    },
  ];

  const apiName = [];

  //  looping data
  for (let i = 0; i < dataArray.length; i++) {
    const value = dataArray[i];
    apiName.push({
      Name: value.name,
      Id: value.id,
      Country: value.country,
      Salary: value.salary,
      Motivation: value.motivation,
      occupation: value.occupation,
    });
  }

  const filterResult = apiName
    .filter((x) => x.Salary >= 65000)
    .sort((x, y) => x.Id - y.Id);

  const mappingData = filterResult.map((value) => {
    return `<li>Name : ${value.Name}</li>,<li> Id : ${value.Id}</li>, Country : ${value.Country}, Salary : ${value.Salary}, Motivation : ${value.Motivation}, Occupation : ${value.occupation}`;
  });
  const body = document.body;
  const content = `<ul>${mappingData.join("")}</ul>`;
  console.log(filterResult);
  const container = document.createElement("div");
  container.innerHTML = content;
  container.style.fontSize = "24px";

  body.append(container);
}

// data mahasiswa
function dataCollages() {
  // data api
  const students = [
    { name: "Alice", age: 21, score: 75 },
    { name: "Bob", age: 20, score: 85 },
    { name: "Charlie", age: 22, score: 90 },
    { name: "David", age: 23, score: 78 },
    { name: "Eva", age: 21, score: 92 },
    { name: "Frank", age: 24, score: 60 },
    { name: "Grace", age: 20, score: 88 },
    { name: "Helen", age: 22, score: 95 },
    { name: "Ivan", age: 23, score: 82 },
    { name: "Julia", age: 21, score: 70 },
    { name: "Kevin", age: 20, score: 93 },
    { name: "Laura", age: 24, score: 68 },
    { name: "Michael", age: 22, score: 87 },
    { name: "Nina", age: 23, score: 91 },
    { name: "Oliver", age: 21, score: 79 },
  ];

  const data = [];
  for (let i = 0; i < students.length; i++) {
    const value = students[i];
    data.push({
      Name: value.name,
      Age: value.age,
      Score: value.score,
    });
  }
  // filter data
  const filteredData = data
    .filter((x) => x.Score >= 80)
    .sort((x, y) => x.Age - y.Age);

  const mapping = filteredData.map((value) => {
    return `<ul><li>Name : ${value.Name}, Age : ${value.Age}, Score : ${value.Score}</li></ul>`;
  });

  const body = document.body;
  const content = `${mapping.join("")}`;
  const containerDiv = document.createElement("div");
  containerDiv.innerHTML = content;
  containerDiv.style.fontSize = "24px";
  containerDiv.style.marginTop = "12px";
  body.append(containerDiv);
}

function product() {
  const products = [
    { name: "Laptop", price: 12000000, stock: 15 },
    { name: "Smartphone", price: 6000000, stock: 25 },
    { name: "Tablet", price: 4000000, stock: 10 },
    { name: "Headphones", price: 800000, stock: 50 },
    { name: "Keyboard", price: 600000, stock: 30 },
    { name: "Mouse", price: 300000, stock: 40 },
    { name: "Monitor", price: 2500000, stock: 20 },
    { name: "Printer", price: 1500000, stock: 5 },
    { name: "Speaker", price: 1000000, stock: 12 },
    { name: "External Hard Drive", price: 800000, stock: 18 },
    { name: "Webcam", price: 500000, stock: 22 },
    { name: "Microphone", price: 700000, stock: 15 },
    { name: "Router", price: 900000, stock: 8 },
    { name: "USB Flash Drive", price: 150000, stock: 35 },
    { name: "Portable Charger", price: 250000, stock: 30 },
  ];

  console.log(product);

  const products2 = [
    { name: "Camera", price: 1800000, stock: 10 },
    { name: "Smart TV", price: 3500000, stock: 8 },
    { name: "Fitness Tracker", price: 500000, stock: 20 },
    { name: "Gaming Console", price: 2500000, stock: 6 },
    { name: "Wireless Earbuds", price: 800000, stock: 15 },
    { name: "Coffee Maker", price: 600000, stock: 12 },
    { name: "Blender", price: 400000, stock: 18 },
    { name: "Toaster", price: 300000, stock: 25 },
    { name: "Electric Shaver", price: 750000, stock: 10 },
    { name: "Rice Cooker", price: 200000, stock: 30 },
    { name: "Air Purifier", price: 1200000, stock: 8 },
    { name: "Vacuum Cleaner", price: 1800000, stock: 5 },
    { name: "Smart Watch", price: 1500000, stock: 12 },
    { name: "Wireless Router", price: 900000, stock: 15 },
    { name: "Hair Dryer", price: 400000, stock: 20 },
  ];

  const dataProduct = [];
  for (const element of products) {
    const value = element;
    dataProduct.push({
      name: value.name,
      price: value.price,
      stock: value.stock,
    });
  }
  for (let i = 0; i < products2.length; i++) {
    const value = products2[i];
    dataProduct.push({
      name: value.name,
      price: value.price,
      stock: value.stock,
    });
  }

  const filterDatas = dataProduct
    .sort((x, y) => x.stock - y.stock)
    .filter((x) => x.price > 500000);

  const resultProduct = filterDatas.map((value) => {
    return `<ul><li>name : ${value.name}, price : ${value.price}, stock : ${value.stock}</li></ul>`;
  });

  const body = document.body;
  const containerContent = `${resultProduct.join("")}`;
  const div = document.createElement("div");
  div.innerHTML = containerContent;
  div.style.margin = "24px, 24px";
  div.style.fontSize = "24px";
  div.style.backgroundColor = "red";
  body.append(div);
}
// looping js
// for, for of. for in
// while & do while
// let xy = 0;
// while (xy < 20) {
//   if (xy % 2 !== 0) console.log(xy);
//   xy++;
// }

// let xz = 0;
// do {
//   if (xz % 2 !== 0);
//   console.log(xz);
//   xz++;
// } while (xz < 20);

// tugas
// 1 buat perulangan dari suatu variabel berrtipe array
// let x = 0;
// while (x < 3) {
//   console.log(x);
//   x++;
// }

// const x = [3, 5, 12];
// let total = 0;

// for (let y = 0; y < x.length; y++) {
//   total += x[y];
// }

// console.log(`Total nilai adalah ${total} karena 3 + 5 + 12 = ${total}`);

// const x = [3, 5, 12];
// let y = 0;
// let total = 0;

// while (y < x.length) {
//   total += x[y];
//   y++;
// }

// console.log(total);

// const xy = [3, 5, 12];
// let xz = 0;
// let total2 = 0;

// do {
//   total2 += xy[xz];
//   xz++;
// } while (xz < xy.length);
// console.log(total2);

// const yz = [3, 5, 12];
// let zy = 0;
// for (const element of yz) {
//   zy += element;
// }
// console.log(zy);

// let arraySum = [42, 24, 12, 90, 22, 100, 590, 521];
// let totalSum = 0;

// arraySum.forEach(function (value) {
//   totalSum += value;
// });

// console.log(totalSum);

const x = [12, 15, 13];
let y = 0;
let total = 0;

while (total < x.length) {
  y += x[total];
  total++;
}
console.log(y);

const z = [12, 15, 13];
let u = 0;
let totalU = 0;
do {
  totalU += z[u];
  u++;
} while (u < z.length);
console.log(totalU);
// let adalah variabel yang masih bisa diubah nantinya
// var sama speerti let cuma ini versi lama
// const nilai yang kostanta atau tidak dapat diubah
const dataZ = [12, 15, 13];
let xx = 0;

for (i = 0; i < dataZ.length; i++) {
  xx += dataZ[i];
}
console.log(xx);
