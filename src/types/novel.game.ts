export interface IChoice {
    text: string;
    nextSceneId: string;
}

export interface IScene {
    id: string;
    type: 'normal' | 'choice' | 'ending';
    background: string;
    character: string;
    characterName: string;
    text: string;
    music: string;
    sfx: string;
    nextSceneId?: string;
    choices?: IChoice[];
}

export interface IStoryData {
    rootSceneId: string;
    scenes: Record<string, IScene>;
}

export const storyData: IStoryData = {
    "rootSceneId": "scene_3",
    "scenes": {
    "scene_3": {
        "id": "scene_3",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "ГГ",
            "text": "Этот день ни чем не отличался от обычных моих дней. Надоедливые объяснения профессоров, нудные лекции, обычные серые дни. Всё как обычно. ",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_4"
    },
    "scene_4": {
        "id": "scene_4",
            "type": "normal",
            "background": "",
            "character": "unnamed (1).webp",
            "characterName": "Учитель",
            "text": "— Такуя, ты и Куродо Мичи сегодня остаётесь убирать кабинет.",
            "music": "",
            "sfx": "",
            "nextSceneId": "choice_1"
    },
    "choice_1": {
        "id": "choice_1",
            "type": "choice",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "",
            "music": "",
            "sfx": "",
            "choices": [
            {
                "text": "— Конечно, учитель",
                "nextSceneId": "scene_6"
            },
            {
                "text": "— Можно в другой день, учитель?",
                "nextSceneId": "scene_5"
            }
        ]
    },
    "scene_5": {
        "id": "scene_5",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "ГГ",
            "text": "— Учитель, можно в другой день? У меня так живот болит.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_7"
    },
    "scene_6": {
        "id": "scene_6",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "— Конечно, учитель.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_8"
    },
    "scene_7": {
        "id": "scene_7",
            "type": "normal",
            "background": "",
            "character": "unnamed (1).webp",
            "characterName": "Учитель",
            "text": "— Сегодня твоя очередь, Андо. Это не обсуждается.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_8"
    },
    "scene_8": {
        "id": "scene_8",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "ГГ",
            "text": "Я бы хотел пойти домой. Сегодня мамы с отцом не было дома и это была отличная возможность провести время одному, пока они снова кого-то разводят своим экзорцизмом.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_9"
    },
    "scene_9": {
        "id": "scene_9",
            "type": "normal",
            "background": "",
            "character": "unnamed (1).webp",
            "characterName": "Куродо Мичи",
            "text": "— Да мы быстро управимся, не переживай!",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_10"
    },
    "scene_10": {
        "id": "scene_10",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Она мне улыбнулась, по-доброму и мило. Думаю, она хотела произвести на меня дружелюбный вид. Я ничего не почувствовал от этой улыбки и направился в глубь класса.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_11"
    },
    "scene_11": {
        "id": "scene_11",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "— Давай просто поскорее с этим покончим.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_12"
    },
    "scene_12": {
        "id": "scene_12",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Мы убирались сначала молча и меня это вполне устраивало. За окном щебетали птицы, проезжали редкие машины, слышался смех детей. ",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_13"
    },
    "scene_13": {
        "id": "scene_13",
            "type": "normal",
            "background": "",
            "character": "unnamed (1).webp",
            "characterName": "Куродо Мичи",
            "text": "— Такуя, а ты веришь в сверхестественное?",
            "music": "",
            "sfx": "",
            "nextSceneId": "choice_2"
    },
    "choice_2": {
        "id": "choice_2",
            "type": "choice",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "",
            "music": "",
            "sfx": "",
            "choices": [
            {
                "text": "— Нет, я не верю в это.",
                "nextSceneId": "scene_14"
            },
            {
                "text": "— А что?",
                "nextSceneId": "scene_16"
            }
        ]
    },
    "scene_14": {
        "id": "scene_14",
            "type": "normal",
            "background": "",
            "character": "unnamed (1).webp",
            "characterName": "Куродо Мичи",
            "text": "— О, хорошо...",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_15"
    },
    "scene_15": {
        "id": "scene_15",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Девушка кажется поникла, но убираться продолжила молча. Я был рад этому. Не хотелось ещё и в школе слушать про демонов, духов и ещё потусторонней чушью. Такого хватало дома.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_22"
    },
    "scene_16": {
        "id": "scene_16",
            "type": "normal",
            "background": "",
            "character": "unnamed (1).webp",
            "characterName": "Куродо Мичи",
            "text": "— Я недавно призвала духа, представляешь??",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_17"
    },
    "scene_17": {
        "id": "scene_17",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Я стараюсь изобразить удивление, но вышло это вяло. Но Мичи видимо этого не заметила, продолжая радостно говорить.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_23"
    },
    "scene_18": {
        "id": "scene_18",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "— Это разве не опасно?",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_19"
    },
    "scene_19": {
        "id": "scene_19",
            "type": "normal",
            "background": "",
            "character": "unnamed (1).webp",
            "characterName": "Куродо Мичи",
            "text": "— Нет! Этот дух довольно милый!",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_20"
    },
    "scene_20": {
        "id": "scene_20",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Я лишь кивнул, пожимая плечами. Она, не замечая этого, напевала себе под нос.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_21"
    },
    "scene_21": {
        "id": "scene_21",
            "type": "normal",
            "background": "",
            "character": "unnamed (1).webp",
            "characterName": "Куродо Мичи",
            "text": "— Баю-бай, не плачь, гордыня, \nСпи, утроба пустоты.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_24"
    },
    "scene_22": {
        "id": "scene_22",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Внезапно в тишине я услышал, как она запела.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_21"
    },
    "scene_23": {
        "id": "scene_23",
            "type": "normal",
            "background": "",
            "character": "unnamed (1).webp",
            "characterName": "Куродо Мичи",
            "text": "— Я в интернете вычитала обряд! Он проводится ночью, среди свечей и там надо кровь пролить свою, представляешь?",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_18"
    },
    "scene_24": {
        "id": "scene_24",
            "type": "normal",
            "background": "",
            "character": "unnamed (1).webp",
            "characterName": "Куродо Мичи",
            "text": "— Кто сказал: «Я бог отныне» —\nСлышишь, кто-то точит клыки?",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_25"
    },
    "scene_25": {
        "id": "scene_25",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Мне стало неожиданно страшно. С каждой строчкой её голос становился всё более нечеловеческим. ",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_26"
    },
    "scene_26": {
        "id": "scene_26",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Хруст.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_27"
    },
    "scene_27": {
        "id": "scene_27",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Метла в её руках сломалась и она посмотрела на меня. Я с трудом сдержал крик. Она надвигалась на меня, слишком быстро. Мне надо бежать?",
            "music": "",
            "sfx": "",
            "nextSceneId": "choice_3"
    },
    "choice_3": {
        "id": "choice_3",
            "type": "choice",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "",
            "music": "",
            "sfx": "",
            "choices": [
            {
                "text": "Остаться на месте",
                "nextSceneId": "ending_1"
            },
            {
                "text": "Бежать",
                "nextSceneId": "scene_28"
            },
            {
                "text": "Сражаться",
                "nextSceneId": "scene_35"
            }
        ]
    },
    "ending_1": {
        "id": "ending_1",
            "type": "ending",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Я не успел среагировать...",
            "music": "",
            "sfx": ""
    },
    "scene_28": {
        "id": "scene_28",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Я побежал что есть силы из кабинета. Моё дыхание сбилось, а стук моего сердца отзывался в ушах. Я никогда не был спортсменом, от чего уже через несколько метров я начал сдавать. Мне было страшно, что я умру.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_29"
    },
    "scene_29": {
        "id": "scene_29",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Эта тварь нагнала меня у лестничного пролёта. Схватила за ногу, безумно хохоча.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_30"
    },
    "scene_30": {
        "id": "scene_30",
            "type": "normal",
            "background": "",
            "character": "unnamed (1).webp",
            "characterName": "Куродо Мичи(?)",
            "text": "— Ну, куда ты бежишь?",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_31"
    },
    "scene_31": {
        "id": "scene_31",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Я попытался пнуть её в грудь, но та словно не ощутила удара. Она потянула меня за ноги к себе, а после перед глазами наступила темнота.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_32"
    },
    "scene_32": {
        "id": "scene_32",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Очнулся я в темноте. Надо мной горела лампочка и от её света у меня загудела голова и затошнило. Я попытался сделать глубокий вдох. Запах какой-то сырости и затухлости ударил мне в нос. ",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_33"
    },
    "scene_33": {
        "id": "scene_33",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "\"Где я? Что это было за место?\" — крутились у меня в голове вопросы, резко прерываемые болью в запястье.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_34"
    },
    "scene_34": {
        "id": "scene_34",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "На моей руке сияла татуировка. Символ был мне смутно знакомый, но откуда именно я не мог вспомнить. Да и это последнее, что меня волновало.",
            "music": "",
            "sfx": "",
            "nextSceneId": "ending_3"
    },
    "ending_3": {
        "id": "ending_3",
            "type": "ending",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Что произошло после того, как та тварь на меня напала?",
            "music": "",
            "sfx": ""
    },
    "scene_35": {
        "id": "scene_35",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Я схватил ближайший рядом со мной стул и кинул его в свою когда-то одногруппницу. Она зашипела и запрыгала по кабинету. Я осмотрел быстро кабинет, стараясь найти себе хоть какое-то оружие. Вечно кидаться стульями я не смогу.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_36"
    },
    "scene_36": {
        "id": "scene_36",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Пришедшая в себя тварь набросилась на меня вновь и я опрокинул на неё парту и побежал в сторону выхода. ",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_37"
    },
    "scene_37": {
        "id": "scene_37",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Оказавшись в коридоре, я попытался как можно более плотно закрыть дверь кабинета. Сердце стучало как бешенное, я бежал к лестнице как ни в себя, хотя уже ощущал усталость. Зря я всё же прогуливал физкультуру, учитель оказался прав, это мне бы пригодилось.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_38"
    },
    "scene_38": {
        "id": "scene_38",
            "type": "normal",
            "background": "",
            "character": "",
            "characterName": "",
            "text": "Я уже почти оказался на лестничном проёме, прежде чем она схватила меня за ногу и я упал на пол.",
            "music": "",
            "sfx": "",
            "nextSceneId": "scene_30"
    }
}
};