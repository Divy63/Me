<template>
  <div class="font-sans bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen">
    <!-- Navigation -->
    <header class="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-sm">
      <nav class="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <div class="flex items-center">
          <span class="text-2xl font-bold text-emerald-400">Divy Patel</span>
        </div>
        
        <!-- Mobile menu button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:space-x-6">
          <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`" 
             class="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
            {{ item.name }}
          </a>
        </div>
      </nav>
      
      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" class="md:hidden bg-slate-800 px-4 py-2">
        <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`" 
           @click="isMenuOpen = false"
           class="block py-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300">
          {{ item.name }}
        </a>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-20">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">
              <span class="text-white">Hi, I'm </span>
              <span class="text-emerald-400">Divy Patel</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8">Computer Science Student, Gaming Enthusiast & Travel Explorer</p>
            <div class="flex space-x-4">
              <a href="#contact" class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Contact Me
              </a>
              <a href="#projects" class="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                View Projects
              </a>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-400 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                   alt="Divy Patel" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-slate-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span class="border-b-4 border-emerald-400 pb-2">About Me</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 class="text-2xl font-semibold mb-4 text-emerald-400">Education & Background</h3>
            <p class="text-gray-300 mb-6">
              I'm currently pursuing a Bachelor of Science with a Major in Computer Science at the University of Manitoba (January 2022 - Present) with a GPA of 3.82/4.50.
            </p>
            <p class="text-gray-300 mb-6">
              As a computer science student with a passion for gaming and travel, I blend technical expertise with creative exploration. My journey in tech is complemented by my adventures around the world and immersive gaming experiences.
            </p>
            
            <h3 class="text-2xl font-semibold mb-4 text-emerald-400">Achievements</h3>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>International Undergraduate Student Scholarship (July 2023, July 2024)</li>
              <li>Burger King Scholars Award (April 2024)</li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-2xl font-semibold mb-4 text-emerald-400">Technical Skills</h3>
            
            <div class="mb-6">
              <h4 class="text-xl font-medium mb-2 text-white">Coding Languages</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in codingSkills" :key="skill" 
                      class="px-3 py-1 bg-slate-700 text-emerald-300 rounded-full text-sm">
                  {{ skill }}
                </span>
              </div>
            </div>
            
            <div class="mb-6">
              <h4 class="text-xl font-medium mb-2 text-white">Database Management</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="db in databaseSkills" :key="db" 
                      class="px-3 py-1 bg-slate-700 text-emerald-300 rounded-full text-sm">
                  {{ db }}
                </span>
              </div>
            </div>
            
            <div>
              <h4 class="text-xl font-medium mb-2 text-white">Software & Tools</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tool in toolSkills" :key="tool" 
                      class="px-3 py-1 bg-slate-700 text-emerald-300 rounded-full text-sm">
                  {{ tool }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-slate-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span class="border-b-4 border-emerald-400 pb-2">My Projects</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="project in projects" :key="project.title" 
               class="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="h-48 bg-slate-700 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-slate-900/80"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
              </div>
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" :key="tech" 
                      class="px-2 py-1 bg-slate-700 text-emerald-300 rounded-full text-xs">
                  {{ tech }}
                </span>
              </div>
              <p class="text-gray-300 mb-4">{{ project.description }}</p>
              <div class="text-sm text-gray-400">{{ project.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gaming Experience -->
    <section id="gaming" class="py-20 bg-slate-800 relative overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span class="border-b-4 border-emerald-400 pb-2">Gaming Experience</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="game in gamingExperience" :key="game.title" 
               class="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="h-12 w-12 rounded-lg bg-emerald-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-emerald-400">{{ game.title }}</h3>
            <p class="text-gray-300 mb-3">{{ game.description }}</p>
            <div class="flex items-center text-gray-400 text-sm">
              <span>{{ game.platform }}</span>
              <span class="mx-2">•</span>
              <span>{{ game.hours }}+ hours</span>
            </div>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <h3 class="text-2xl font-bold mb-4 text-white">Gaming Setup</h3>
          <div class="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <ul class="text-gray-300 space-y-2">
              <li><span class="text-emerald-400 font-medium">CPU:</span> AMD Ryzen 7 5800X</li>
              <li><span class="text-emerald-400 font-medium">GPU:</span> NVIDIA RTX 3070</li>
              <li><span class="text-emerald-400 font-medium">RAM:</span> 32GB DDR4 3600MHz</li>
              <li><span class="text-emerald-400 font-medium">Monitor:</span> 27" 1440p 165Hz Gaming Monitor</li>
              <li><span class="text-emerald-400 font-medium">Peripherals:</span> Mechanical Keyboard, Gaming Mouse, Headset</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Travel Experience -->
    <section id="travel" class="py-20 bg-slate-900 relative overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span class="border-b-4 border-emerald-400 pb-2">Travel Experience</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="trip in travelExperience" :key="trip.destination" 
               class="bg-slate-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
            <div class="h-48 relative">
              <img :src="trip.image" :alt="trip.destination" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-4">
                <h3 class="text-xl font-bold text-white">{{ trip.destination }}</h3>
                <p class="text-emerald-300">{{ trip.date }}</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-300 mb-4">{{ trip.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="highlight in trip.highlights" :key="highlight" 
                      class="px-2 py-1 bg-slate-700 text-emerald-300 rounded-full text-xs">
                  {{ highlight }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Experience -->
    <section id="work" class="py-20 bg-slate-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span class="border-b-4 border-emerald-400 pb-2">Work Experience</span>
        </h2>
        
        <div class="max-w-3xl mx-auto">
          <div class="relative pl-8 sm:pl-32 py-6 group">
            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-600 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-emerald-500 after:border-4 after:box-content after:border-slate-900 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-400 bg-emerald-900/30 rounded-full">Present</time>
              <div class="text-xl font-bold text-white">Shift Coordinator</div>
            </div>
            <div class="text-slate-400">Burger King, Winnipeg, Manitoba | April 2023 - Present</div>
            <ul class="text-gray-300 mt-3 list-disc list-inside space-y-1">
              <li>Made store run smoothly in my shift by keeping close attention to details.</li>
              <li>Supported my team to provide great customer service to the customers.</li>
              <li>Maintained positive environment throughout the shift and made sure that everyone worked together and helped each other.</li>
              <li>Ensured safety, followed rules, and made sure customers were happy by following proper regulations and solving any problems that came up during shifts.</li>
            </ul>
          </div>
          
          <div class="relative pl-8 sm:pl-32 py-6 group">
            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-600 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-emerald-500 after:border-4 after:box-content after:border-slate-900 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-400 bg-emerald-900/30 rounded-full">2023</time>
              <div class="text-xl font-bold text-white">Team Member</div>
            </div>
            <div class="text-slate-400">Burger King, Winnipeg, Manitoba | April 2022 - April 2023</div>
            <ul class="text-gray-300 mt-3 list-disc list-inside space-y-1">
              <li>Took customer orders, ensured quick service made customers happy.</li>
              <li>Made food items which included burgers and sides according to Burger King's standards, helping maintain consistent quality.</li>
              <li>Cleaned the restaurant inside and outside, including restrooms and dining areas, to keep it welcoming for customers.</li>
              <li>Collected and unloaded deliveries and organized stock to keep the restaurant running smoothly.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-slate-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span class="border-b-4 border-emerald-400 pb-2">Get In Touch</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-emerald-400">Contact Information</h3>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-medium text-white">Email</h4>
                  <a href="mailto:patelda2@myumanitoba.ca" class="text-gray-300 hover:text-emerald-400 transition-colors">patelda2@myumanitoba.ca</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-medium text-white">Phone</h4>
                  <a href="tel:+12049623036" class="text-gray-300 hover:text-emerald-400 transition-colors">(204) 962-3036</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-medium text-white">Social</h4>
                  <div class="flex space-x-3 mt-2">
                    <a href="https://linkedin.com/in/divy-patel-15565a22b" target="_blank" rel="noopener noreferrer" 
                       class="h-8 w-8 rounded-full bg-slate-700 hover:bg-emerald-500 flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/Divy63" target="_blank" rel="noopener noreferrer" 
                       class="h-8 w-8 rounded-full bg-slate-700 hover:bg-emerald-500 flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.
