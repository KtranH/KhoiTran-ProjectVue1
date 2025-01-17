import { createApp, onMounted, h } from 'vue'; // Sử dụng createApp
import App from './App.vue';
import router from './router'; // Router của ứng dụng
import AOS from 'aos'; // Import thư viện AOS
import 'aos/dist/aos.css'; // Import CSS của AOS

// Tạo ứng dụng Vue 3
const app = createApp({
  setup() {
    // Khởi tạo AOS khi ứng dụng được tải
    onMounted(() => {
      AOS.init({
        duration: 500, // Thời gian hiệu ứng (ms)
        once: true, // Hiệu ứng chỉ chạy 1 lần
        offset: 200, // Khoảng cách từ viewport
        easing: 'ease-in-out', // Hiệu ứng easing
        delay: 100, // Độ trễ
      });
    });
  },
  render: () => h(App), // Render App.vue
});

// Sử dụng router
app.use(router);

// Mount ứng dụng
app.mount('#app');
