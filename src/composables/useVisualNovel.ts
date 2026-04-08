import { ref, computed } from 'vue'
import type { IChoice, IStoryData } from '@/types/novel.game'

export function useVisualNovel(storyData: IStoryData) {
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
    if (choice.nextSceneId) {
      goToScene(choice.nextSceneId)
    }
  }

  return {
    currentScene,
    canGoBack,
    bgStyle,
    characterStyle,
    advanceScene,
    goBack,
    selectChoice
  }
}