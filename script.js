// Minimal change version: fix category multi-tag support

const data = {
  Nanjing: {
    themeColor: "#b31b1b",
    carousel: [
      "assets/Foding Tower.png",
      "assets/qinhuai-river.png",
      "assets/Gu Scenic Area02.png",
      "assets/Qixia Temple02.png",
      "assets/Wutong Avenue02.png",
      "assets/Xuanwu Lake02.png"
    ],
    places: [
      {
          title: "Confucius Temple",
          image: ["assets/confucius-temple.png",
                  "assets/qinhuai-river.png"],
          description: "Introduction to the Attractions Nanjing Confucius Temple 🏛, located on the beautiful banks of the Qinhuai River, is one of the four great Confucian Temples in China. This place was not only the cultural and educational center of Nanjing during the Ming and Qing dynasties, but also a complex of ancient buildings carrying the cultural heritage of a thousand years. Entering the Confucius Temple, it feels as if one has traveled through time and returned to that era when the literary style was at its peak.",
          category: ["Historical", "Cultural", "Scenic"]
      },
      {
          title: "Qinhuai River Night View",
          image: "assets/qinhuai-river.png",
          description: "Qinhuai River is famous for its scenic beauty, providing a picturesque view with traditional architecture along the riverbank.",
          category: ["Scenic","Historical"]
      },
      {
          title: "How can Ling Gu Scenic Area be so beautiful",
          image: "assets/Gu Scenic Area01.png",
          description: "The Ling Gu Scenic Area in autumn is a colorful and hidden paradise in the city of Nanjing. The golden ginkgo leaves and the bright red maple leaves interweave, as if nature's palette has been overturned here, painting a touching autumn picture. On the Deep Pine Road of Ling Gu Temple, the golden ginkgo forest and the small, round ginkgo leaves, just one can capture the charm of the entire autumn. The red and yellow walls of the temple, set off by the autumn leaves, appear particularly warm and solemn, reflecting the liveliest season in Nanjing. A gust of autumn wind blew, and the ginkgo leaves danced in the air like golden butterflies, eventually falling to the ground and spreading a golden carpet, making people feel as if they had stepped into a golden fairy tale world. The autumn in Ling Gu Scenic Area is not only a visual feast but also a touch of the soul, allowing people to feel the serenity of time and the beauty of nature in this tranquility and splendor.",
          category: "Scenic"
      },
      {
          title: "I thought the Paulownia Avenue was already beautiful enough until I went to Niu Shou Mountain...",
          image: "assets/Foding Palace.png",
          description: "Nanjing is not just about the Paulownia Avenue. I have always heard of Nanjing Niu Shou Mountain, which is named for its two peaks resembling ox heads. This place has a long history, and the natural scenery and cultural landscapes complement each other. Seeing is believing. The beauty of Niu Shou Mountain needs you to experience it yourself! After playing for a whole day, I was really healed. If you want to relieve stress, relax and get rid of the hustle and bustle, come to Niu Shou Mountain!",
         category: "Historical"
      },
      {
          title: "Qixia Temple",
          image: "assets/Qixia Temple01.png",
          description: "Qixia Mountain, originally called She Mountain, was often visited by Emperor Qianlong.\nThe inscription on the gate was written by him.\n\nIn summer, after the plum rains, the maple leaves and mountain gate shine brightly under the sun.\n\nPassing the release pool leads to Vairocana Hall, where Vairocana Buddha sits with Bodhisattvas.\n\nQixia Temple is famous for its ancient Relic Pagoda and the Thousand Buddha Cliff.\n\nThe autumn scenery, with red leaves covering the mountains, is the most beautiful season to visit.",
          category: "Historical"
      },
      {
          title: "Wutong Avenue",
          image: "assets/Wutong Avenue01.png",
          description: "Wutong Avenue captures the beauty of all four seasons, from green springs to snowy winters.\n\nTake Metro Line 2 to Mu Xue Yuan Station Exit 1, then walk 1 minute to the avenue.\n\nAdmission is free. Early morning is best for photography with fewer people and cars.\n\nThe most beautiful scenes are near Gate 5 of Ming Xiaoling Mausoleum, where Tyndall light and a retro train can be seen.\n\nBest time to visit is from late September to November when leaves turn from golden to red.\n\nNearby attractions include Stone Elephant Road, Yanque Lake, and Zijin Mountain.\n\nSmall trains and shared bikes are available if you prefer not to walk.",
          category: "Historical"
      },
      {
          title: "Xuanwu Lake",
          image: "assets/Xuanwu Lake01.png",
          description: "Xuanwu Lake offers scenic views and convenient access via Metro Line 1 and Line 4.\n\nAdmission is free. The park is open from 6:00 to 22:00 in summer and until 21:00 in winter.\n\nClassic tour starts at Xuanwu Gate, passing Pioneer Bookstore, Sakura Island, Liangzhou, Cuizhou, and the Couple's Garden.\n\nSunset route begins at Jiefang Gate and ends at the Ten-Mile Long Embankment with beautiful sunset views.\n\nSightseeing buses and cruises are available for easier touring.\n\nMust-see spots include Sakurajima's cherry blossoms, Liangzhou's historical sites, and romantic Couple's Garden.\n\nNearby food stalls offer local specialties like duck blood soup and soup dumplings.",
          category: "Scenic"
      },
      {
          title: "Nanjing Pearl Spring",
          image: "assets/Pearl Spring01.png",
          description: "Sun Yat-sen Mausoleum is a symbol of modern political and cultural identity in China.\n\nTake Metro Line 2 to Mu Xue Yuan Station Exit 1, then walk or take the sightseeing bus to the site.\n\nAdmission is free but requires advance booking through the Nanjing Zhongshan Scenic Area wechat account.\n\nThe tour starts at Bo ai Fang, continues through the tomb passage and stele pavilion, climbs 392 steps, and reaches the memorial hall.\n\nMust-visit photo spots include the Bo ai archway, pine-lined tomb passage, the grand steps, and the memorial hall.\n\nWear comfortable shoes, bring water and snacks, and respect the park rules during your visit.",
          category: "Scenic"
      },
      {
        title: "Sun Yat-sen Mausoleum",
        image: ["assets/Sun Yat-sen Mausoleum01.png",
                "assets/Sun Yat-sen Mausoleum02.png"],
        description: "Introduction to the Attractions Nanjing Confucius Temple 🏛, located on the beautiful banks of the Qinhuai River, is one of the four great Confucian Temples in China. This place was not only the cultural and educational center of Nanjing during the Ming and Qing dynasties, but also a complex of ancient buildings carrying the cultural heritage of a thousand years. Entering the Confucius Temple, it feels as if one has traveled through time and returned to that era when the literary style was at its peak.",
        category: ["Historical", "Museums"]
    },
      // Continue updating other places in similar fashion
  ]
  },
  Oulu: {
    themeColor: "#0066cc",
    carousel: [
      "assets/oulu-park.png",
      "assets/oulu-gallery.png",
      "assets/oulu-river.png"
    ],
    places: Array.from({ length: 60 }, (_, i) => ({
      title: `Oulu Place ${i + 1}`,
      image: `https://picsum.photos/seed/ou${i}/300/200`,
      description: `Description for Oulu Place ${i + 1}`,
      category: ["Cafe", "Museum", "Park", "Historical", "Scenic"][i % 5]
    }))
  }
};

let currentCity = "Nanjing";
let currentPage = 1;
const placesPerPage = 10;
let currentSearch = "";
let currentFilter = "all";

// DOM elements
const cityNameEl = document.getElementById("cityName");
const switchBtn = document.getElementById("cityToggle");
const filterSelect = document.getElementById("filterSelect");
const searchInput = document.getElementById("searchInput");
const cardContainer = document.getElementById("cardContainer");
const pagination = document.getElementById("pagination");
const carouselInner = document.getElementById("carouselInner");
const modal = new bootstrap.Modal(document.getElementById("placeModal"));
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");

function updateTheme() {
  document.body.className = currentCity.toLowerCase() + "-theme";
  switchBtn.style.backgroundColor = data[currentCity].themeColor;
  document.getElementById("headerBackground").style.backgroundColor = data[currentCity].themeColor;
}

function updateTitle() {
  cityNameEl.textContent = currentCity;
  switchBtn.textContent = `Switch to ${currentCity === "Nanjing" ? "Oulu" : "Nanjing"}`;
}

function updateCarousel() {
  const images = data[currentCity].carousel;
  carouselInner.innerHTML = "";
  images.forEach((imgSrc, idx) => {
    const div = document.createElement("div");
    div.className = `carousel-item${idx === 0 ? " active" : ""}`;
    div.innerHTML = `<img src="${imgSrc}" alt="City Image" class="d-block w-100 rounded" style="object-fit: cover; max-height: 300px;">`;
    carouselInner.appendChild(div);
  });
}

function renderCards() {
  cardContainer.innerHTML = "";
  const allPlaces = data[currentCity].places.filter(place => {
    const matchSearch = place.title.toLowerCase().includes(currentSearch.toLowerCase());
    const matchCategory = currentFilter.toLowerCase() === "all" || 
  (Array.isArray(place.category)
    ? place.category.map(c => c.toLowerCase()).includes(currentFilter.toLowerCase())
    : place.category.toLowerCase() === currentFilter.toLowerCase()
  );
    return matchSearch && matchCategory;
  });

  const start = (currentPage - 1) * placesPerPage;
  const pageItems = allPlaces.slice(start, start + placesPerPage);

  pageItems.forEach(place => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
  <div class="card h-100">
    <img src="${Array.isArray(place.image) ? place.image[0] : place.image}" class="card-img-top" alt="${place.title}">
    <div class="card-body">
      <h5 class="card-title">${place.title}</h5>
      ${(Array.isArray(place.category) ? place.category.map(cat => `<span class="badge bg-secondary">${cat}</span>`).join(' ') : `<span class="badge bg-secondary">${place.category}</span>`)}
    </div>
  </div>
`;
    col.querySelector(".card").addEventListener("click", () => {
      modalTitle.textContent = place.title;
modalDescription.textContent = place.description;

// 清空小轮播
const modalCarouselInner = document.getElementById("modalCarouselInner");
modalCarouselInner.innerHTML = "";

// 新建轮播图片
const images = Array.isArray(place.image) ? place.image : [place.image]; // 兼容旧单张图片的格式
images.forEach((imgSrc, idx) => {
  const div = document.createElement("div");
  div.className = `carousel-item${idx === 0 ? " active" : ""}`;
  div.innerHTML = `<img src="${imgSrc}" class="d-block w-100 rounded" style="object-fit: cover; max-height: 300px;">`;
  modalCarouselInner.appendChild(div);
});

modal.show();

    });
    cardContainer.appendChild(col);
  });

  renderPagination(allPlaces.length);
}

function renderPagination(totalItems) {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(totalItems / placesPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = "page-item" + (i === currentPage ? " active" : "");
    li.innerHTML = `<button class="page-link">${i}</button>`;
    li.querySelector("button").addEventListener("click", () => {
      currentPage = i;
      renderCards();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    pagination.appendChild(li);
  }
}

// Event Listeners
switchBtn.addEventListener("click", () => {
  currentCity = currentCity === "Nanjing" ? "Oulu" : "Nanjing";
  currentPage = 1;
  currentSearch = "";
  currentFilter = "all";
  searchInput.value = "";
  filterSelect.value = "all";
  updateTheme();
  updateTitle();
  updateCarousel();
  renderCards();
});

filterSelect.addEventListener("change", (e) => {
  currentFilter = e.target.value;
  currentPage = 1;
  renderCards();
});

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  currentPage = 1;
  renderCards();
});

// Init
updateTheme();
updateTitle();
updateCarousel();
renderCards();
