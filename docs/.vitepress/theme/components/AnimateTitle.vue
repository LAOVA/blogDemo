<script setup lang="ts"></script>

<template>
  <h1 class="name">
    <span class="clip">一个简约的个人博客</span>
  </h1>
  <p class="text">记录属于我的前端学习&生活</p>
  <p class="tagline">—— By LAOVA</p>
</template>

<style scoped>
.name {
  background: -webkit-linear-gradient(135deg, #95f179 10%, #1464dc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.name,
.text {
  max-width: 392px;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
}

.text {
  font-size: 40px !important;
  font-weight: 600 !important;
}

@media (min-width: 640px) {

  .name,
  .text {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }
}

@media (min-width: 960px) {

  .name,
  .text {
    line-height: 64px;
    font-size: 56px;
  }
}

.tagline {
  padding-top: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}

@media (min-width: 640px) {
  .tagline {
    padding-top: 12px;
    max-width: 576px;
    line-height: 32px;
    font-size: 20px;
  }
}

@media (min-width: 960px) {
  .tagline {
    line-height: 36px;
    font-size: 24px;
  }
}
</style>

