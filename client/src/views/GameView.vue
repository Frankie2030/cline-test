<template>
  <div class="game-view">
    <h1>Tic-Tac-Toe</h1>
    <div class="game-info">
      <p>Current Player: {{ currentPlayer }}</p>
    </div>
    <div class="game-board">
      <div 
        v-for="(cell, index) in board" 
        :key="index" 
        class="cell" 
        @click="makeMove(index)"
      >
        {{ cell }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const board = ref(Array(9).fill(null));
const currentPlayer = ref('X');

function makeMove(index: number) {
  if (!board.value[index]) {
    board.value[index] = currentPlayer.value;
    currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X';
  }
}
</script>

<style scoped>
.game-view {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin-top: 20px;
}

.cell {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: #f0f0f0;
  cursor: pointer;
}

.cell:hover {
  background-color: #e0e0e0;
}
</style>
