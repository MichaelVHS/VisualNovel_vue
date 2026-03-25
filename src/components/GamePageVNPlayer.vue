<template>
  <div class="game-player" @click="handleClick">
    <button
        v-if="canGoBack"
        @click.stop="goBack"
        class="back-btn"
        title="Назад"
    >
      ← Назад
    </button>

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
import { storyData } from '../types/novel.game.ts'
import type { IScene, IChoice } from '../types/novel.game.ts'

const scenes = ref<Record<string, IScene>>(storyData.scenes)
const currentSceneId = ref<string | null>(storyData.rootSceneId)

const history = ref<string[]>([])

const currentScene = computed<IScene | undefined>(() =>
    scenes.value[currentSceneId.value ?? '']
)

const canGoBack = computed(() => history.value.length > 0)

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

  if (currentSceneId.value) {
    history.value.push(currentSceneId.value)
  }

  currentSceneId.value = sceneId
}

function goBack() {
  if (history.value.length > 0) {
    const prevSceneId = history.value.pop()
    if (prevSceneId) {
      currentSceneId.value = prevSceneId
    }
  }
}

function handleClick() {
  if (!currentScene.value) return
  if (currentScene.value.type === 'choice') return

  if (currentScene.value.type === 'normal' && currentScene.value.nextSceneId) {
    goToScene(currentScene.value.nextSceneId)
  }
}

function selectChoice(choice: IChoice) {
  if (choice.nextSceneId) {
    goToScene(choice.nextSceneId)
  }
}

onMounted(() => {
  if (storyData.rootSceneId) {
    currentSceneId.value = storyData.rootSceneId
    history.value = []
  }
})
</script>

<style scoped>
.game-player {
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  cursor: pointer;
}

.back-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 20;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.back-btn:hover {
  background: rgba(0, 0, 0, 0.8);
  border-color: white;
}

.bg {
  position: absolute;
  inset: 0;
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
  background: #0e0e0eb2;
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
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 24px;
  text-align: left;
}

.choice-btn:hover {
  background: #45a049;
}
</style>