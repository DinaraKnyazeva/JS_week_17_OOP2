//массив с информацией
const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

//
const container = document.querySelector(".car-bike");

//создаем класс Transport
class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }

  getInfo() {
    return `Type: ${this.type} 
    Brand: ${this.brand}`;
  }

  getPrice() {
    return this.price;
  }
}
//создаем наследуемый от Transport класс Car
class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }

  getDoorsCount() {
    return `Doors: ${this.doors}`;
  }
}

//создаем наследуемый от Transport класс Bike
class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return `Max Speed: ${this.maxSpeed}`;
  }
}

// Обработка ч\з цикл массив и вывод информации на страницу
for (const item of data) {
  if (item.type === "car") {
    const car = new Car(item.type, item.price, item.brand, item.doors);

    let listItemCar = document.createElement("div");
    listItemCar.innerText = car.getInfo();

    let listItemDoors = document.createElement("div");
    listItemDoors.innerText = car.getDoorsCount();

    let listItemImg = document.createElement("img");
    listItemImg.classList.add("car-bike__img");
    listItemImg.src = item.image;

    let listItemPrice = document.createElement("div");
    listItemPrice.classList.add("car-bike__price");
    listItemPrice.innerText = `Price: ${car.getPrice().toLocaleString()} rub.`;

    container.appendChild(listItemImg);
    container.appendChild(listItemCar);
    container.appendChild(listItemDoors);
    container.appendChild(listItemPrice);
  } else if (item.type === "bike") {
    const bike = new Bike(item.type, item.price, item.brand, item.maxSpeed);

    let listItemBike = document.createElement("div");
    listItemBike.innerText = bike.getInfo();

    let listItemMaxSpeed = document.createElement("div");
    listItemMaxSpeed.innerText = bike.getMaxSpeed();

    let listItemImg = document.createElement("img");
    listItemImg.classList.add("car-bike__img");
    listItemImg.src = item.image;

    let listItemPrice = document.createElement("div");
    listItemPrice.classList.add("car-bike__price");
    listItemPrice.innerText = `Price: ${bike.getPrice().toLocaleString()} rub.`;

    container.appendChild(listItemImg);
    container.appendChild(listItemBike);
    container.appendChild(listItemMaxSpeed);
    container.appendChild(listItemPrice);
  }
}
