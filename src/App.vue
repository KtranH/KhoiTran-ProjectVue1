<template>
  <head>
    <title>Khôi Trần: Sáng tạo ảnh</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Khôi Trần: Sáng tạo ảnh">
    <meta name="keywords" content="Khôi Trần, Sáng tạo ảnh">
    <meta name="author" content="Khôi Trần">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <div class="min-h-screen bg-gray-100">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div class="flex items-center py-4">
              <span class="font-semibold text-gray-500 text-lg">Khôi Trần</span>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <router-link to="/" class="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Trang chủ</router-link>
              <router-link to="/about" class="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Thông tin</router-link>
              <router-link to="/contact" class="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Liên hệ</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <div class="container mx-auto px-4 py-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<!-- <script setup>
const tailwindScript = document.createElement('script')
tailwindScript.src = 'https://cdn.tailwindcss.com'
document.head.appendChild(tailwindScript)
</script>
-->