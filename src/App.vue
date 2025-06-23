<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/barchart">Bar</RouterLink></li>
        <li><RouterLink to="/dchart">Doughnut</RouterLink></li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>
