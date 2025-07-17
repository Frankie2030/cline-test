<template>
  <div class="lobby-view">
    <h1>Game Lobby</h1>
    <div class="players-list">
      <h2>Online Players</h2>
      <ul>
        <li v-for="player in players" :key="player.id">
          {{ player.username }}
          <button @click="challengePlayer(player.id)">Challenge</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const players = ref([
  { id: 1, username: 'Player1' },
  { id: 2, username: 'Player2' }
]);

function challengePlayer(playerId: number) {
  console.log('Challenging player:', playerId);
}
</script>

<style scoped>
.lobby-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.players-list {
  margin-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
