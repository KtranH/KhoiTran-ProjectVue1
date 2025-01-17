<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white shadow-xl rounded-lg overflow-hidden">
      <div class="p-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Chào mừng đến với trang web của tôi</h1>
        <p class="text-gray-600 text-lg mb-6">
          Đây là trang web portfolio được xây dựng bằng Vue.js và Tailwind CSS.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Kỹ năng</h2>
            <ul class="list-disc list-inside text-gray-600">
              <li>Vue.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Dự án</h2>
            <ul class="list-disc list-inside text-gray-600">
              <li>Website Portfolio</li>
              <li>E-commerce Platform</li>
              <li>Blog System</li>
              <li>Mobile App</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script> 