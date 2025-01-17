<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white shadow-xl rounded-lg overflow-hidden" data-aos="fade-up">
      <div class="p-8">
        <img data-aos="fade-up" data-aos-delay="100" src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/414203916_385731537174859_3046328303491009574_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=b0W3UTPHUpUQ7kNvgEVEu12&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=Ajg-u8XP7bHO3DDChSVVEXu&oh=00_AYBmHNbqET2olnpPJlcTWISyPUhrnnW64QeJRaXojohawg&oe=678F96A9" alt="" class="w-24 h-24 object-cover rounded-full mx-auto">
        <h1 data-aos="fade-up" data-aos-delay="300" class="text-4xl font-bold text-gray-800 mb-4 text-center">Chào mừng đến với trang web của Khôi Trần</h1>
        <p class="text-gray-600 text-lg mb-6 text-center" data-aos="fade-up" data-aos-delay="600">
          Đây là trang web portfolio được xây dựng bằng Vue.js và Tailwind CSS. <br> Hãy xem qua các chức năng sẽ phát triển.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="900">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Chức năng</h2>
            <ul class="list-disc list-inside text-gray-600">
              <li>Vue.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="1200">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Mô tả</h2>
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