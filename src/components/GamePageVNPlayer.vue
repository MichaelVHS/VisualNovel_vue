<template>
  <div class="game-player" @click="goToNextScene">
    <GameButton
        v-if="canGoBack"
        @click.stop="goBackToScene"
        variant="back"
    >←</GameButton>

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
          @click.stop="makeChoiceToGoToScene(choice)"
          variant="choice"
      >
        {{ choice.text }}
      </GameButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameButton from '@/components/GamePageVNPlayerButtons.vue'
import { storyData } from '@/data'
import { useVisualNovel } from '@/composables/useVisualNovel'

const {
  currentScene,
  canGoBack,
  bgStyle,
  characterStyle,
  goToNextScene,
  goBackToScene,
  makeChoiceToGoToScene
} = useVisualNovel(storyData)
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