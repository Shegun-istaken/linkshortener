<script setup>
import { reactive } from "vue";
import getData from "@/composables/callBitly.js";
import simplecopy from "@/composables/simpleCopy.js";

const state = reactive({
  address: "",
  error: false,
  shortLink: "",
});

async function handleClick() {
  if (state.address.includes("//") && state.address.length > 7) {
    state.error = false;
    const response = await getData(state.address);
    state.shortLink = response.link;
  } else {
    state.error = true;
  }
}

function copy() {
  simplecopy(`${state.shortLink}`);
}
</script>
<template>
  <main className="home">
    <h1>Link Shortener</h1>
    <input
      v-model="state.address"
      type="url"
      placeholder="https://www.example.com"
    />
    <p v-if="state.error">Invalid Link</p>
    <button @click="handleClick">Shorten your Link</button>

    <div v-if="state.shortLink" className="link">
      <p>{{ state.shortLink }}</p>
      <button @click="copy">Copy link</button>
    </div>
  </main>
</template>

<style>
body {
  background-color: #181818;
  font-family: "Open Sans", sans-serif;
}

main.home {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px auto 0 auto;
  border: 0;
  width: 40%;
}

main.home input {
  width: 90%;
  height: 48px;
  padding: 8px;
  border-radius: 8px;
}

input:focus,
input:hover {
  outline: none;
}

main.home button {
  width: 90%;
  padding: 16px;
  margin: 16px 0px;
  font-weight: 400;
  border-radius: 8px;
}

main.home div.link {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: 5%;
}

main.home div.link button {
  white-space: nowrap;
  background-color: rgb(192, 190, 190);
}

main.home div.link button:hover {
  background-color: rgb(151, 151, 151);
}
</style>
