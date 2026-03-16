<template>
  <div class="game-player" @click="handleClick">
    <!-- Фон -->
    <div class="bg" :style="{ backgroundImage: bgStyle }"></div>

    <!-- Спрайт персонажа (по центру) -->
    <div
        v-if="currentScene?.character?.trim()"
        class="character-sprite"
        :style="{ backgroundImage: `url(/assets/characters/${currentScene.character})` }"
    ></div>

    <!-- Текст + имя -->
    <div v-if="currentScene?.text" class="text-box">
      <!-- Имя персонажа -->
      <div v-if="currentScene.characterName?.trim()" class="character-name">
        {{ currentScene.characterName }}
      </div>
      <!-- Текст диалога -->
      <div class="dialogue-text">{{ currentScene.text }}</div>
    </div>

    <!-- Выборы -->
    <div v-if="currentScene?.type === 'choice' && currentScene.choices?.length" class="choices">
      <button
          v-for="(choice, idx) in currentScene.choices"
          :key="idx"
          @click.stop="selectChoice(choice)"
          class="choice-btn"
      >
        {{ choice.text }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const scenes = ref({})
const currentSceneId = ref(null)
const rootSceneId = ref(null)

const currentScene = computed(() => scenes.value[currentSceneId.value])

const bgStyle = computed(() =>
    currentScene.value?.background
        ? `url(/assets/backgrounds/${currentScene.value.background})`
        : 'none'
)

function goToScene(sceneId) {
  if (!sceneId || !scenes.value[sceneId]) {
    console.error('Сцена не найдена:', sceneId)
    return
  }
  currentSceneId.value = sceneId
}

function handleClick() {
  if (!currentScene.value) return
  if (currentScene.value.type === 'choice') return
  if (currentScene.value.type === 'normal' && currentScene.value.nextSceneId) {
    goToScene(currentScene.value.nextSceneId)
  }
}

function selectChoice(choice) {
  if (choice.nextSceneId) {
    goToScene(choice.nextSceneId)
  }
}

async function loadGameJson() {
  try {
    const response = await fetch('/assets/novel.game.json')
    const data = await response.json()
    scenes.value = data.scenes || {}
    rootSceneId.value = data.rootSceneId
    if (rootSceneId.value) {
      goToScene(rootSceneId.value)
    } else {
      console.error('Начальная сцена не указана в JSON')
    }
  } catch (err) {
    console.error('Не удалось загрузить novel.game.json:', err)
  }
}

onMounted(() => {
  loadGameJson()
})
</script>

<style scoped>
.game-player {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: #000;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.character-sprite {
  position: absolute;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 600px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom center;
}

.text-box {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: #0E0E0EB2;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.character-name {
  align-self: flex-start;
  background: #4a62a3;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 24px;
}

.dialogue-text {
  font-size: 36px;
  line-height: 1.4;
  white-space: pre-wrap;
  word-wrap: break-word;
  pointer-events: none;
}

.choices {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.choice-btn {
  padding: 12px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 24px;
  transition: background 0.2s;
  text-align: left;
}

.choice-btn:hover {
  background: #45a049;
}
</style>