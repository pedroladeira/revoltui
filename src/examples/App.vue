<template>
  <div>
    <ul>
      <li>
        <router-link to="/buttons">Buttons</router-link>
      </li>
      <li>
        <router-link to="/badges">Badges</router-link>
      </li>
    </ul>
    <div class="mt-6">
      <router-view />
    </div>
  </div>
</template>
