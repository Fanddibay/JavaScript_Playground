function product() {
  // data api
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

  //   buat array kosong
  let mergeApi = [];

  for (const element of products.concat(products2)) {
    const value = element;
    mergeApi.push({
      name: value.name,
      price: value.price,
      stock: value.stock,
    });
  }

  const filterApi = mergeApi
    .filter((x) => x.stock > 12)
    .sort((x, y) => x.price - y.price);

  const mappingApi = filterApi.map((value) => {
    return `<ul><li>${value.name}, ${value.stock}, ${value.price} </li></ul>`;
  });

  const body = document.body;
  const containerDiv = document.createElement("div");
  const contentDiv = mappingApi;
  containerDiv.innerHTML = contentDiv;

  body.append(containerDiv);
}
// const dataSum = [42, 24, 22, 12, 24, 244, 21, 16, 16];
// let totalX = 0;
// let total = 0;

// dataSum.forEach(function (value) {
//   totalX += value;
// });
// console.log(totalX);
// do {
//   total += dataSum[totalX];
//   totalX++;
// } while (totalX < dataSum.length);
// console.log(total);
// while (totalX < dataSum.length) {
//   total += dataSum[totalX];
//   totalX++;
// }
// console.log(total);
// for (let i = 0; i < dataSum.length; i++) {
//   total += dataSum[i];
// }
// console.log(total);
// dataSum.forEach((total, index) => {
//   console.log(total, index);
// });

function datas() {
  const dataId = document.getElementById("data");

  const getDates = new Date();
  const day = getDates.getDay();
  const hour = getDates.getHours();
  const minutes = getDates.getMinutes();

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  const result = days[day];

  dataId.innerHTML = `hari ini hari ${result}, jam ${hour}:${minutes}`;
}
