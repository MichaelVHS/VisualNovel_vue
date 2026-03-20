<template>
  <div class="game-player" @click="handleClick">
    <div class="bg" :style="{ backgroundImage: bgStyle }"></div>

    <div
        v-if="currentScene?.character?.trim()"
        class="character-sprite"
        :style="{ backgroundImage: `url(/assets/characters/${currentScene.character})` }"
    ></div>

    <div v-if="currentScene?.text" class="text-box">
      <div v-if="currentScene.characterName?.trim()" class="character-name">
        {{ currentScene.characterName }}
      </div>
      <div class="dialogue-text">{{ currentScene.text }}</div>
    </div>

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

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { storyData } from '../../public/assets/novel.game.ts'
import type { Scene, Choice } from '../../public/assets/novel.game.ts'

const scenes = ref<Record<string, Scene>>(storyData.scenes)
const currentSceneId = ref<string | null>(storyData.rootSceneId)

const currentScene = computed<Scene | undefined>(() =>
    scenes.value[currentSceneId.value ?? '']
)

const bgStyle = computed<string>(() =>
    currentScene.value?.background
        ? `url(/assets/backgrounds/${currentScene.value.background})`
        : 'none'
)

function goToScene(sceneId: string) {
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

function selectChoice(choice: Choice) {
  if (choice.nextSceneId) {
    goToScene(choice.nextSceneId)
  }
}

onMounted(() => {
  if (storyData.rootSceneId) {
    goToScene(storyData.rootSceneId)
  }
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
  z-index: 10;
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