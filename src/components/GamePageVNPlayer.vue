<template>
  <div class="game-player" @click="advanceScene">
    <GameButton
        v-if="canGoBack"
        @click.stop="goBack"
        variant="back"
    />

    <div class="bg" :style="bgStyle"></div>

    <div
        v-if="currentScene?.character"
        class="character-sprite"
        :style="characterStyle"
    ></div>

    <div v-if="currentScene?.text" class="text-box">
      <div v-if="currentScene.characterName" class="character-name">
        {{ currentScene.characterName }}
      </div>
      <div class="dialogue-text">{{ currentScene.text }}</div>
    </div>

    <div v-if="currentScene?.type === 'choice'" class="choices">
      <GameButton
          v-for="(choice, idx) in currentScene.choices"
          :key="idx"
          @click.stop="selectChoice(choice)"
          variant="choice"
      >
        {{ choice.text }}
      </GameButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import GameButton from '@/components/GamePageVNPlayerButtons.vue'
import { storyData } from '@/data.ts'
import type { IChoice } from '@/types/novel.game.ts'

const scenes = storyData.scenes

const gameState = ref({
  currentSceneId: storyData.rootSceneId,
  history: [] as string[]
})

const currentScene = computed(() => scenes[gameState.value.currentSceneId])
const canGoBack = computed(() => gameState.value.history.length > 0)

const bgStyle = computed(() => {
  const bg = currentScene.value?.background
  return bg
      ? { backgroundImage: `url(/assets/backgrounds/${bg})` }
      : { backgroundImage: 'none' }
})

const characterStyle = computed(() => {
  const char = currentScene.value?.character
  return char
      ? { backgroundImage: `url(/assets/characters/${char})` }
      : {}
})

function goToScene(sceneId: string) {
  if (gameState.value.currentSceneId !== sceneId) {
    gameState.value.history.push(gameState.value.currentSceneId)
    gameState.value.currentSceneId = sceneId
  }
}

function goBack() {
  const previous = gameState.value.history.pop()
  if (previous) {
    gameState.value.currentSceneId = previous
  }
}

function advanceScene() {
  if (currentScene.value?.type === 'normal' && currentScene.value.nextSceneId) {
    goToScene(currentScene.value.nextSceneId)
  }
}

function selectChoice(choice: IChoice) {
  if (choice.nextSceneId) goToScene(choice.nextSceneId)
}

</script>

<style scoped>
.game-player {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--bg-color);
  cursor: pointer;
}

.bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}

.character-sprite {
  position: absolute;
  bottom: 80px;
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
  inset: auto 20px 20px 20px;
  padding: 12px 16px;
  border-radius: 6px;
  border: 2px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: var(--text-box-bg);
}

.character-name {
  align-self: flex-start;
  background: var(--name_bg-color);
  padding: 2px 6px;
  border-radius: 6px;
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
  inset: auto 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>