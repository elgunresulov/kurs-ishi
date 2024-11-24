const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    

    breakpoints: {
      520: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

//   {
// // API URL
// const apiUrl = "https://your-api-endpoint.com/services";

// // Servisləri göstərmək funksiyası
// async function fetchAndDisplayServices() {
//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) throw new Error("API request failed");

//     const services = await response.json();
//     const container = document.getElementById("services-container");

//     services.forEach(service => {
//       // Hər xidmət üçün kart yarat
//       const card = document.createElement("div");
//       card.classList.add("service-card");

//       card.innerHTML = `
//         <h3>${service.title}</h3>
//         <p>${service.description}</p>
//         <button onclick="learnMore(${service.id})">Learn More</button>
//       `;
//       container.appendChild(card);
//     });
//   } catch (error) {
//     console.error("Error fetching services:", error);
//   }
// }

// // Learn More düyməsi üçün funksional
// function learnMore(serviceId) {
//   alert(`You clicked Learn More for service ID: ${serviceId}`);
// }

// // Servisləri yüklə
// fetchAndDisplayServices();

// }

/* <div class="swiper-slide text-center">
                    <div class="card rounded-0  " style="width: 20rem;">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div> */



const mukafatlarDivi = document.getElementById("ders")

window.addEventListener("DOMContentLoaded" ,  melumatlariGetir()  )

async function melumatlariGetir() {
  const unvan ="/assets/salam.json"
  
  try {
   const gelenCavab=await fetch(unvan)
    const mukafatlar= await gelenCavab.json()
    console.log(mukafatlar)

    mukafatlar.forEach(function(birmukafat) {
      mukafatlarDivi.innerHTML +=
      `
                  <div class="swiper-slide text-center">
                    <div class="card rounded-3"  >
                        <img src="${birmukafat.photo}" class="card-img-top " alt="...">
                        <div class="card-body ">
                            <h2 class="card-title">${birmukafat.title}</h2>
                            <p class="card-text">${birmukafat.description}</p>
                            <a href="#" class="btn btn-primary "><strong>Learn More</strong></a>
                        </div>
                    </div>
                  </div>
      `
    });
  } 
  catch (error) {
    
  }
}

// mobile menyu 
const navbarBtn = document.querySelector(".fa-bars-staggered")

const mobileMenyu = document.querySelector(".mobile-menyu")
const closeIcon = document.querySelector(".fa-xmark")

navbarBtn.addEventListener("click", function() {
    mobileMenyu.classList.add("aktiv")
})

closeIcon.addEventListener("click", function() {
    mobileMenyu.classList.remove("aktiv")
})
