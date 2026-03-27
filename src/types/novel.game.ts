export interface IChoice {
    text: string;
    nextSceneId: string;
}

export type TSceneType = 'normal' | 'choice' | 'ending'

export interface IScene {
    id: string;
    type: TSceneType;
    background?: string;
    character?: string;
    characterName?: string;
    text?: string;
    music?: string;
    sfx?: string;
    nextSceneId?: string;
    choices?: IChoice[];
}

export interface IStoryData {
    rootSceneId: string;
    scenes: Record<string, IScene>;
}

