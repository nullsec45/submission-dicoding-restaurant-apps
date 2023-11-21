import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import { maxBody } from './helper'; '../scripts/helper.js';



// navbar
const navbar_responsive = document.querySelector("header nav .navbar_responsive");
const hamburger_icon = document.querySelector("header nav .hamburger_icon");

hamburger_icon.addEventListener("click", function () {
    if (navbar_responsive.style.display === "grid") {
        navbar_responsive.style.display = "none";
    } else {
        navbar_responsive.style.display = "grid";
    }
});

window.addEventListener("resize", function () {
    if (this.innerWidth > 768) {
        navbar_responsive.style.display = "none";
    }
});

// daftar restaurant

const restaurant_list = document.querySelector("main .restaurant_list");


const daftar_restaurant = [
    {
        "id": "6c7bqjgi84kcowlqdz",
        "name": "Bring Your Phone Cafe",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
        "pictureId": "https://restaurant-api.dicoding.dev/images/medium/41",
        "city": "Medan",
        "rating": 4.6
    },
    {
        "id": "ljx8i0qu2uckcowlqdz",
        "name": "Run The Gun",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
        "pictureId": "https://restaurant-api.dicoding.dev/images/medium/07",
        "city": "Bali",
        "rating": 4.6
    },
    {
        "id": "fe8bbxoazddkcowlqdz",
        "name": "Pangsit Express",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
        "pictureId": "https://restaurant-api.dicoding.dev/images/medium/29",
        "city": "Ternate",
        "rating": 4.8
    },
    {
        "id": "ik1zljmlf68kcowlqdz",
        "name": "Ducky Duck",
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
        "pictureId": "https://restaurant-api.dicoding.dev/images/medium/38",
        "city": "Malang",
        "rating": 4.7
    },
    {
        "id": "9jpuzkm6n6jkcowlqdz",
        "name": "Kafein",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
        "pictureId": "https://restaurant-api.dicoding.dev/images/medium/40",
        "city": "Bali",
        "rating": 3.8
    },
    {
        "id": "cpl5jpsnuqkkcowlqdz",
        "name": "Makan mudah",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
        "pictureId": "https://restaurant-api.dicoding.dev/images/medium/08",
        "city": "Malang",
        "rating": 4.6
    },
    {
        "id": "iqtf9hmdzvbkcowlqdz",
        "name": "Saya Suka",
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
        "pictureId": "https://restaurant-api.dicoding.dev/images/medium/32",
        "city": "Surabaya",
        "rating": 3.6
    },
    {
        "id": "8i06gqcc2dpkcowlqdz",
        "name": "Gigitan Cepat",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
        "pictureId": "https://restaurant-api.dicoding.dev/images/medium/45",
        "city": "Aceh",
        "rating": 4
    },
    {
        "id": "wf5o19xhxxkcowlqdz",
        "name": "Fairy Cafe",
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
        "pictureId": "https://restaurant-api.dicoding.dev/images/medium/04",
        "city": "Malang",
        "rating": 3.9
    },
    {
        "id": "wf5o19xhxxkcowlqdz",
        "name": "Fairy Cafe",
        "description": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
        "pictureId": "https://restaurant-api.dicoding.dev/images/medium/04",
        "city": "Malang",
        "rating": 3.9
    },
];

function renderCardRestaurant(resto) {
    const container_card_restaurant = document.createElement("div");
    container_card_restaurant.classList.add("container_card_restaurant");

    container_card_restaurant.insertAdjacentHTML("afterbegin", `
         <div class="card_restaurant" tabindex="0">
            <div class="card_image">
                     <img src="${resto.pictureId}" tabindex="0">
            </div>
            <div class="card_content" tabindex="0">
                    <h2 class="card_title" tabindex="0">${resto.name}</h2>
                    <span>
                        <h3 class="card_sub_title">
                            <span tabindex="0">
                                <i class="fas fa-map-marker-alt maps"></i> ${resto.city}
                            </span>
                            <span tabindex="0">
                                <i class="fas fa-star stars"></i> ${resto.rating}
                            </span>
                        </h3>
                    </span>
                    <p class="card_text" tabindex="0">${maxBody(resto.description, 200)}</p>
            </div>
        </div>
    `);

    restaurant_list.appendChild(container_card_restaurant);
}

daftar_restaurant.forEach((resto, index) => {
    renderCardRestaurant(resto);
});

// content_skip
const content_skip = document.querySelector("#content_skip");

content_skip.addEventListener("click", function () {
    document.location.href = "#content";
})

// search restaurant
const input_search = document.querySelector(".search .komponen_search .input_search input");
const button_search = document.querySelector(".search .komponen_search .input_search button");

button_search.addEventListener("click", () => {
    let inputValue = input_search.value;
    let searchTitle = new RegExp(inputValue, "gi");
    let resultSearchRestaurant = [];

    if (inputValue.trim("") == "") {
        alert("Input tidak boleh kosong");
        return false;
    }


    daftar_restaurant.map((data) => {
        if (searchTitle.test(data.name)) {
            restaurant_list.innerHTML = "";
            resultSearchRestaurant.push(data);
        }
    })


    if (resultSearchRestaurant.length === 0) {
        alert("Restaurant yang anda cari tidak ditemukan!.");
    }

    resultSearchRestaurant.forEach((data) => {
        renderCardRestaurant(data);
    });
});




