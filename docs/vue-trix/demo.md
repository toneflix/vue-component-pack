---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'See it in action'
---

<div :class="$style['my-md']">
    <ClientOnly>
        <vue-trix v-model="content"/>
    </ClientOnly>
</div>

<script setup lang="ts">
import { ref } from 'vue';
const content = ref<string>(`<div style="margin: 0; font-family: Arial, sans-serif; line-height: 1.6;">

  <!-- Header Section -->
  <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center;">
    <h1>Welcome to My Simple Page</h1>
    <p>Styled entirely with inline CSS!</p>
  </div>

  <!-- Main Content -->
  <div style="padding: 20px;">
    <!-- About Section -->
    <div style="margin-bottom: 20px;">
      <h2 style="color: #333;">About This Page</h2>
      <p style="color: #555;">This is a simple example of an HTML template styled using inline CSS. It's lightweight and includes images to make it visually appealing.</p>
    </div>

    <!-- Image Gallery -->
    <div style="margin-bottom: 20px;">
      <h2 style="color: #333;">Image Gallery</h2>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <img src="https://via.placeholder.com/150" alt="Sample 1" style="width: 150px; height: 150px; border-radius: 5px;">
        <img src="https://via.placeholder.com/150" alt="Sample 2" style="width: 150px; height: 150px; border-radius: 5px;">
        <img src="https://via.placeholder.com/150" alt="Sample 3" style="width: 150px; height: 150px; border-radius: 5px;">
      </div>
    </div>

    <!-- Contact Section -->
    <div>
      <h2 style="color: #333;">Contact</h2>
      <p style="color: #555;">Feel free to reach out to me via email at <a href="mailto:example@example.com" style="color: #4CAF50; text-decoration: none;">example@example.com</a>.</p>
    </div>
  </div>

  <!-- Footer -->
  <div style="background-color: #333; color: white; text-align: center; padding: 10px;">
    <p>&copy; 2024 My Simple Page. All rights reserved.</p>
  </div>

</div>`);
</script>

<style module>
    .my-md {
        margin-top: 15px;
        margin-bottom: 15px;
    }

  div:has(>trix-editor) {
    background: #dcdcdc !important; 
    color:black; 
    padding: 5px;
  }
</style>
