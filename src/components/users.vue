<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import Header from "./header.vue";
import { users } from "../../public/db";
</script>
<template>
  <div>
    <component :is='Header'></component>
    <h1 v-if="users.length == 0">click the button to display users</h1>
    <table class="border w-full">
      <tr>
        <td class="border font-bold px-10">Id</td>
        <td class="border font-bold px-10">User Name</td>
        <td class="border font-bold px-10">Email</td>
        <td class="border font-bold px-10">Password</td>
      </tr>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="border">{{ user.id }}</td>
          <td class="border px-10 ">{{ user.username }}</td>
          <td class="border px-10 ">{{ user.email }}</td>
          <td class="border px-10 ">{{ user.password }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
