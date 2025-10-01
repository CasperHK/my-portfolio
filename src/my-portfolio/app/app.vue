<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <NuxtRouteAnnouncer />
    
    <!-- Hero Section -->
    <section class="container mx-auto px-6 py-20 text-center">
      <div class="max-w-4xl mx-auto">
        <!-- Greeting -->
        <div class="mb-8">
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span class="text-blue-600">Casper</span> 👋
          </h1>
          <div class="flex flex-wrap justify-center gap-4 mb-8">
            <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
              📸 Photographer
            </span>
            <span class="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
              💻 IT Guy
            </span>
            <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
              🤖 Prompt Engineer
            </span>
          </div>
        </div>

        <!-- Introduction -->
        <div class="mb-12">
          <p class="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I'm passionate about exploring new technologies that can make our lives 
            <span class="font-semibold text-blue-600">easier</span> and 
            <span class="font-semibold text-green-600">better</span>. 
            Whether it's capturing the perfect moment, solving complex IT challenges, 
            or crafting intelligent prompts, I love bringing creativity and innovation together.
          </p>
        </div>

        <!-- Call to Action -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <!-- Test Vuetify Button -->
          <VBtn color="primary" size="large" class="shadow-lg">
            View My Work
          </VBtn>
          <button class="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
            Get In Touch
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container mx-auto px-6 py-16">
      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Photography -->
        <VCard class="text-center hover:shadow-xl transition-shadow duration-300">
          <VCardText>
            <div class="text-4xl mb-4">📸</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Photography</h3>
            <p class="text-gray-600">
              Capturing moments and stories through the lens, with an eye for detail and composition.
            </p>
          </VCardText>
        </VCard>

        <!-- IT Solutions -->
        <VCard class="text-center hover:shadow-xl transition-shadow duration-300">
          <VCardText>
            <div class="text-4xl mb-4">💻</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">IT Solutions</h3>
            <p class="text-gray-600">
              Building robust systems and solving complex technical challenges with modern technologies.
            </p>
          </VCardText>
        </VCard>

        <!-- AI & Prompts -->
        <VCard class="text-center hover:shadow-xl transition-shadow duration-300">
          <VCardText>
            <div class="text-4xl mb-4">🤖</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Prompt Engineering</h3>
            <p class="text-gray-600">
              Crafting intelligent prompts and leveraging AI to create innovative solutions.
            </p>
          </VCardText>
        </VCard>
      </div>
    </section>

    <!-- Technology Exploration -->
    <section class="bg-gray-900 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Always Exploring, Always Learning
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Technology evolves rapidly, and I'm committed to staying at the forefront. 
          From cutting-edge web frameworks to AI innovations, I'm constantly discovering 
          new ways to improve our digital experiences.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white py-8 border-t border-gray-200">
      <div class="container mx-auto px-6 text-center">
        <p class="text-gray-600">
          © 2025 Casper. Built with ❤️ using Nuxt.js 4
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Custom animations and hover effects */
.container {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
