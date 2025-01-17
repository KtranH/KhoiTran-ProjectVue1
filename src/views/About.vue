<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white shadow-xl rounded-lg overflow-hidden">
      <div class="p-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-6">Về tôi</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="md:col-span-1">
            <div class="bg-gray-100 p-4 rounded-lg">
              <img src="https://via.placeholder.com/200" alt="Profile" class="w-full rounded-lg shadow-md">
            </div>
          </div>
          <div class="md:col-span-2">
            <div class="space-y-4">
              <div>
                <h2 class="text-2xl font-semibold text-gray-800">Thông tin cá nhân</h2>
                <p class="text-gray-600 mt-2">
                  Tôi là một lập trình viên web với niềm đam mê tạo ra những trải nghiệm người dùng tuyệt vời.
                  Tôi chuyên về phát triển frontend với Vue.js và các công nghệ hiện đại.
                </p>
              </div>
              <div>
                <h2 class="text-2xl font-semibold text-gray-800">Kinh nghiệm</h2>
                <ul class="list-disc list-inside text-gray-600 mt-2">
                  <li>3 năm kinh nghiệm phát triển web</li>
                  <li>Chuyên gia Vue.js và Tailwind CSS</li>
                  <li>Đã hoàn thành nhiều dự án lớn nhỏ</li>
                </ul>
              </div>
              <div>
                <h2 class="text-2xl font-semibold text-gray-800">Học vấn</h2>
                <p class="text-gray-600 mt-2">
                  Tốt nghiệp Đại học Công nghệ Thông tin
                  <br>
                  Chuyên ngành: Kỹ thuật phần mềm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script> 