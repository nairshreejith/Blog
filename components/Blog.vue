<template>
 <div class="container" :class="{ 'dark-mode': darkMode, 'light-mode': !darkMode }">
    <button class="btn btn-dark mode-toggle" @click="toggleDarkMode">
      {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
       

    <h1 class="display-4 text-center">Welcome to Shreejith's Holiday Destination Blog</h1>
    <div class="row">
      <div class="col-md-4">
        <div class="section">
          <h2 class="mt-4 text-center">Categories</h2>
          <ul class="list-group">
            <li v-for="category in categories" :key="category.id" class="list-group-item">
                 {{ category.name }}
              <img :src="category.image" alt="Category Image" class="category-image">

            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="section">
          <h2 class="mt-4 text-center">Holiday Destinations</h2>
          <ul class="list-group">
            <li v-for="destination in destinations" :key="destination.id" class="list-group-item">
              {{ destination.name }}
              <img :src="destination.image" alt="Destination Image" class="destination-image">
            </li>
          </ul>
        </div>
      </div>
  <div class="col-md-4">
  <div class="section">
    <h2 class="mt-4 text-center">Recent Posts</h2>
    <div class="container-box">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(post, index) in recentPosts" :key="post.id" class="carousel-item" :class="{ active: index === 0 }">
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <ul class="list-group">
              <li v-for="comment in post.comments" :key="comment.id" class="list-group-item">{{ comment.content }}</li>
            </ul>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon highlighted-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon highlighted-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
 <div class="row mt-4">
  <div class="col-md-4" v-for="destination in peoplecomments" :key="destination.id">
    <div class="card">
      <img :src="destination.imageUrl" class="card-img-top" alt="Image">
      <div class="card-body " :class="{ 'dark-mode': darkMode, 'light-mode': !darkMode }">
        <h5 class="card-title" >{{ destination.title }}</h5>
        <p class="card-text">{{ destination.content }}</p>
      </div>
      <div class="card-footer" :class="{ 'dark-mode': darkMode, 'light-mode': !darkMode }">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>


    <footer class="mt-4 text-muted">
      <p>&copy; 2023 Shreejith's Blog. All rights reserved.</p>
    </footer>
 </div>
</template>


<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: "Beach Destinations", image: "https://source.unsplash.com/400x300/?beach" },
        { id: 2, name: "Adventure Travel", image: "https://source.unsplash.com/400x300/?adventure" },
        { id: 3, name: "Cultural Experiences", image: "https://source.unsplash.com/400x300/?culture" },
      ],
      destinations: [
        { id: 1, name: "Maldives", image: "https://source.unsplash.com/400x300/?maldives" },
        { id: 2, name: "New Zealand", image: "https://source.unsplash.com/400x300/?newzealand" },
        { id: 3, name: "Italy", image: "https://source.unsplash.com/400x300/?italy" },
      ],
    recentPosts: [
  {
    id: 1,
    title: "Exploring the Pristine Beaches of Maldives",
    excerpt: "Discover the breathtaking beauty of the Maldives and its pristine beaches.",
    comments: [
      { id: 1, content: "This looks like a dream destination!" },
      { id: 2, content: "I've always wanted to visit the Maldives." },
      { id: 3, content: "The Maldives is on my travel bucket list!" },
      { id: 4, content: "I can't get enough of the stunning turquoise waters!" },
      { id: 5, content: "The Maldives seems like the perfect place for a romantic getaway." },
      { id: 6, content: "I'm amazed by the luxurious resorts in the Maldives." },
      { id: 7, content: "The Maldives offers incredible snorkeling and diving opportunities." },
      { id: 8, content: "I can't wait to relax on the white sandy beaches of the Maldives." },
    ],
  },
  {
    id: 2,
    title: "Thrilling Adventures in New Zealand",
    excerpt: "Embark on thrilling adventures in the stunning landscapes of New Zealand.",
    comments: [
      { id: 1, content: "New Zealand is a paradise for outdoor enthusiasts!" },
      { id: 2, content: "I'm excited to try bungee jumping in New Zealand." },
      { id: 3, content: "The Lord of the Rings film locations in New Zealand are a must-visit." },
      { id: 4, content: "New Zealand's Maori culture is fascinating." },
      { id: 5, content: "I can't wait to hike the Tongariro Alpine Crossing." },
      { id: 6, content: "New Zealand's landscapes are incredibly diverse and breathtaking." },
      { id: 7, content: "I'm looking forward to exploring the glowworm caves in Waitomo." },
      { id: 8, content: "New Zealand's adrenaline-pumping activities are calling my name!" },
    ],
  },
  {
    id: 3,
    title: "Immersing in the Rich Culture of Italy",
    excerpt: "Experience the rich cultural heritage and delicious cuisine of Italy.",
    comments: [
      { id: 1, content: "Italy has so much history and art to explore!" },
      { id: 2, content: "I can't wait to try authentic Italian pizza and pasta." },
      { id: 3, content: "Italy's architecture is stunning, especially the Colosseum." },
      { id: 4, content: "The Italian countryside is breathtaking, especially Tuscany." },
      { id: 5, content: "I'm excited to visit the Vatican and see the Sistine Chapel." },
      { id: 6, content: "Italian gelato is the best dessert in the world!" },
      { id: 7, content: "I'm looking forward to exploring the canals of Venice." },
      { id: 8, content: "Italy's rich cultural heritage fascinates me." },
    ],
  },
], peoplecomments : [
  {
    title: "Exquisite Beach Paradise in Bali",
    content: "Discover the stunning beaches of Bali, where crystal-clear turquoise waters meet golden sandy shores. Immerse yourself in the island's vibrant culture, explore ancient temples, and indulge in delicious local cuisine.",
    imageUrl: "https://source.unsplash.com/400x300/?beach"
  },
  {
    title: "Adventure and Nature in Patagonia",
    content: "Embark on a thrilling adventure in the breathtaking landscapes of Patagonia. Hike through majestic mountain ranges, witness towering glaciers, and encounter unique wildlife. ",
    imageUrl: "https://source.unsplash.com/400x300/?mountain"
  },
  {
    title: "Cultural Delights in Kyoto, Japan",
    content: "Step into a world of tradition and tranquility in Kyoto, Japan. Explore ancient temples, stroll through peaceful gardens adorned with cherry blossoms, and savor the delicate flavors of traditional tea ceremonies. ",
    imageUrl: "https://source.unsplash.com/400x300/?city"
  }
],
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>

<style>


.container {
  padding: 2rem;
  background-image: url('');
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 0.3s ease;

}




.section {
  margin-bottom: 2rem;
}

.container {
  padding: 2rem;
}

.display-4 {
  margin-top: 2rem;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.carousel-item h3 {
  margin-bottom: 1rem;
}

.card {
  margin-bottom: 1rem;
}

.footer {
  margin-top: 2rem;
  text-align: center;
}

.dark-mode {
 background-color:#000;
 color:#fff;
 background-image: url('');
}
.light-mode {
  /* Add your light mode styles here */
  background-color: #f8f8f8;
  color: #000;
}

.mode-toggle {
  position: fixed;
  bottom: 2rem;
  right: 0;
}

.carousel-item.active {
  display: flex !important;
}

.carousel-item h3 {
  margin-bottom: 1rem;
}

.highlighted-icon {
  background-image: url('https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_white_24dp.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #000; /* Use light mode color by default */
  color: #000; /* Use light mode color by default */
  padding: 4px; /* Adjust the padding value as needed */
}

.dark-mode .highlighted-icon {
  background-color: #c7ea18; /* Use dark mode color when in dark mode */
  color: #c7ea18; /* Use dark mode color when in dark mode */
}

.highlighted-icon:hover {
  background-color: #f00;
}




.category-image,
.destination-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

@media (max-width: 767px) {
  .col-md-4 {
    margin-bottom: 1rem;
  }
  
  .display-4 {
    font-size: 2rem;
  }
  
  .carousel-item {
    padding: 2rem;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
}
</style>
