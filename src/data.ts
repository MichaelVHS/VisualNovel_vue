import type {IStoryData} from "@/types/novel.game.ts";

export const storyData: IStoryData = {
    rootSceneId: "scene_3",
    scenes: {
        scene_3: {
            id: "scene_3",
            type: "normal",
            background: "class.jpg",
            characterName: "ГГ",
            text: "Этот день ни чем не отличался от обычных моих дней. Надоедливые объяснения профессоров, нудные лекции, обычные серые дни. Всё как обычно. ",
            nextSceneId: "scene_4"
        },
        scene_4: {
            id: "scene_4",
            type: "normal",
            background: "class.jpg",
            characterName: "Учитель",
            text: "— Такуя, ты и Куродо Мичи сегодня остаётесь убирать кабинет.",
            nextSceneId: "choice_1"
        },
        choice_1: {
            id: "choice_1",
            background: "class.jpg",
            type: "choice",
            choices: [
                { text: "— Конечно, учитель", nextSceneId: "scene_6" },
                { text: "— Можно в другой день, учитель?", nextSceneId: "scene_5" }
            ]
        },
        scene_5: {
            id: "scene_5",
            type: "normal",
            background: "class.jpg",
            characterName: "ГГ",
            text: "— Учитель, можно в другой день? У меня так живот болит.",
            nextSceneId: "scene_7"
        },
        scene_6: {
            id: "scene_6",
            type: "normal",
            background: "class.jpg",
            text: "— Конечно, учитель.",
            nextSceneId: "scene_8"
        },
        scene_7: {
            id: "scene_7",
            type: "normal",
            background: "class.jpg",
            characterName: "Учитель",
            text: "— Сегодня твоя очередь, Андо. Это не обсуждается.",
            nextSceneId: "scene_8"
        },
        scene_8: {
            id: "scene_8",
            type: "normal",
            background: "class.jpg",
            characterName: "ГГ",
            text: "Я бы хотел пойти домой. Сегодня мамы с отцом не было дома и это была отличная возможность провести время одному, пока они снова кого-то разводят своим экзорцизмом.",
            nextSceneId: "scene_9"
        },
        scene_9: {
            id: "scene_9",
            type: "normal",
            background: "class.jpg",
            character: "Michi_dc.png",
            characterName: "Куродо Мичи",
            text: "— Да мы быстро управимся, не переживай!",
            nextSceneId: "scene_10"
        },
        scene_10: {
            id: "scene_10",
            type: "normal",
            character: "Michi_happy.png",
            background: "class.jpg",
            text: "Она мне улыбнулась, по-доброму и мило. Думаю, она хотела произвести на меня дружелюбный вид. Я попытался улыбнуться ей в ответ, хотя со стороны это выглядело скорее, как будто я проглотил лимон.",
            nextSceneId: "scene_11"
        },
        scene_11: {
            id: "scene_11",
            type: "normal",
            background: "class.jpg",
            text: "— Давай просто поскорее с этим покончим.",
            nextSceneId: "scene_12"
        },
        scene_12: {
            id: "scene_12",
            type: "normal",
            background: "class.jpg",
            text: "Мы убирались сначала молча и меня это вполне устраивало. За окном щебетали птицы, проезжали редкие машины, слышался смех детей. ",
            nextSceneId: "scene_13"
        },
        scene_13: {
            id: "scene_13",
            type: "normal",
            background: "class.jpg",
            character: "Michi_dc.png",
            characterName: "Куродо Мичи",
            text: "— Такуя, а ты веришь в сверхестественное?",
            nextSceneId: "choice_2"
        },
        choice_2: {
            id: "choice_2",
            type: "choice",
            background: "class.jpg",
            choices: [
                { text: "— Нет, я не верю в это.", nextSceneId: "scene_14" },
                { text: "— А что?", nextSceneId: "scene_16" }
            ]
        },
        scene_14: {
            id: "scene_14",
            type: "normal",
            background: "class.jpg",
            character: "Michi_sad.png",
            characterName: "Куродо Мичи",
            text: "— О, хорошо...",
            nextSceneId: "scene_15"
        },
        scene_15: {
            id: "scene_15",
            type: "normal",
            background: "class.jpg",
            text: "Девушка кажется поникла, но убираться продолжила молча. Я почувствовал укол вины. Но мне не хотелось ещё и в школе слушать про демонов, духов и всякие риуталы. Такого хватало дома.",
            nextSceneId: "scene_22"
        },
        scene_16: {
            id: "scene_16",
            type: "normal",
            background: "class.jpg",
            character: "Michi_happy.png",
            characterName: "Куродо Мичи",
            text: "— Я недавно призвала духа, представляешь??",
            nextSceneId: "scene_17"
        },
        scene_17: {
            id: "scene_17",
            type: "normal",
            background: "class.jpg",
            text: "Я посмотрел на неё удивлённо, насколько мне позволяло моё вялое и малоэмоциональное лицо. Но Мичи видимо этого не заметила, продолжая радостно рассказывать.",
            nextSceneId: "scene_23"
        },
        scene_18: {
            id: "scene_18",
            type: "normal",
            background: "class.jpg",
            text: "— Это разве не опасно?",
            nextSceneId: "scene_19"
        },
        scene_19: {
            id: "scene_19",
            type: "normal",
            background: "class.jpg",
            character: "Michi_dc.png",
            characterName: "Куродо Мичи",
            text: "— Нет! Этот дух довольно милый!",
            nextSceneId: "scene_20"
        },
        scene_20: {
            id: "scene_20",
            type: "normal",
            background: "class.jpg",
            text: "Я посмотрел на неё долгим взглядом, пытаясь выразить беспокойство. Она, не замечая этого, напевала себе под нос. Похоже это было на колыбельную. Только слова были странные...",
            nextSceneId: "scene_21"
        },
        scene_21: {
            id: "scene_21",
            type: "normal",
            background: "class.jpg",
            character: "Michi_dc.png",
            characterName: "Куродо Мичи",
            text: "— Баю-бай, не плачь, гордыня, \nСпи, утроба пустоты.",
            nextSceneId: "scene_24"
        },
        scene_22: {
            id: "scene_22",
            type: "normal",
            background: "class.jpg",
            text: "Всё же это была очень странная колыбельная... Свет начал моргать, а алый закат за окнами начал пугать.",
            nextSceneId: "scene_21"
        },
        scene_23: {
            id: "scene_23",
            type: "normal",
            background: "class.jpg",
            character: "Michi_dc.png",
            characterName: "Куродо Мичи",
            text: "— Я в интернете вычитала обряд! Он проводится ночью, среди свечей и там надо кровь пролить свою, представляешь?",
            nextSceneId: "scene_18"
        },
        scene_24: {
            id: "scene_24",
            type: "normal",
            background: "class.jpg",
            character: "Michi_dc.png",
            characterName: "Куродо Мичи",
            text: "— Кто сказал: «Я бог отныне» —\nСлышишь, кто-то точит клыки?",
            nextSceneId: "scene_25"
        },
        scene_25: {
            id: "scene_25",
            type: "normal",
            background: "class.jpg",
            text: "Мне стало неожиданно страшно. С каждой строчкой её голос становился всё более нечеловеческим. ",
            nextSceneId: "scene_26"
        },
        scene_26: {
            id: "scene_26",
            type: "normal",
            background: "class.jpg",
            text: "Хруст.",
            nextSceneId: "scene_27"
        },
        scene_27: {
            id: "scene_27",
            type: "normal",
            background: "class.jpg",
            text: "Метла в её руках сломалась и она посмотрела на меня. Я с трудом сдержал крик. Она надвигалась на меня, слишком быстро. Мне надо бежать?",
            nextSceneId: "choice_3"
        },
        choice_3: {
            id: "choice_3",
            type: "choice",
            background: "class.jpg",
            choices: [
                { text: "Остаться на месте", nextSceneId: "ending_1" },
                { text: "Бежать", nextSceneId: "scene_28" },
                { text: "Сражаться", nextSceneId: "scene_35" }
            ]
        },
        ending_1: {
            id: "ending_1",
            type: "ending",
            text: "Я не успел среагировать..."
        },
        scene_28: {
            id: "scene_28",
            type: "normal",
            background: "hall.png",
            text: "Я побежал что есть силы из кабинета. Моё дыхание сбилось, а стук моего сердца отзывался в ушах. Я никогда не был спортсменом, от чего уже через несколько метров я начал сдавать. Мне было страшно, что я умру.",
            nextSceneId: "scene_29"
        },
        scene_29: {
            id: "scene_29",
            type: "normal",
            background: "hall.png",
            text: "Эта тварь нагнала меня у лестничного пролёта. Схватила за ногу, безумно хохоча.",
            nextSceneId: "scene_30"
        },
        scene_30: {
            id: "scene_30",
            type: "normal",
            background: "hall.png",
            character: "Michi_dc.png",
            characterName: "Куродо Мичи(?)",
            text: "— Ну, куда ты бежишь?",
            nextSceneId: "scene_31"
        },
        scene_31: {
            id: "scene_31",
            type: "normal",
            background: "hall.png",
            text: "Я попытался пнуть её в грудь, но та словно не ощутила удара. Она потянула меня за ноги к себе, а после перед глазами наступила темнота.",
            nextSceneId: "scene_32"
        },
        scene_32: {
            id: "scene_32",
            type: "normal",
            text: "Очнулся я в темноте. Надо мной горела лампочка и от её света у меня загудела голова и затошнило. Я попытался сделать глубокий вдох. Запах какой-то сырости и затухлости ударил мне в нос. ",
            nextSceneId: "scene_33"
        },
        scene_33: {
            id: "scene_33",
            type: "normal",
            text: "\"Где я? Что это было за место?\" — крутились у меня в голове вопросы, резко прерываемые болью в запястье.",
            nextSceneId: "scene_34"
        },
        scene_34: {
            id: "scene_34",
            type: "normal",
            text: "На моей руке сияла татуировка. Символ был мне смутно знакомый, но откуда именно я не мог вспомнить. Да и это последнее, что меня волновало.",
            nextSceneId: "ending_3"
        },
        ending_3: {
            id: "ending_3",
            type: "ending",
            text: "Что произошло после того, как та тварь на меня напала?"
        },
        scene_35: {
            id: "scene_35",
            type: "normal",
            background: "class.jpg",
            text: "Я схватил ближайший рядом со мной стул и кинул его в свою когда-то одногруппницу. Она зашипела и запрыгала по кабинету. Я осмотрел быстро кабинет, стараясь найти себе хоть какое-то оружие. Вечно кидаться стульями я не смогу.",
            nextSceneId: "scene_36"
        },
        scene_36: {
            id: "scene_36",
            type: "normal",
            background: "class.jpg",
            text: "Пришедшая в себя тварь набросилась на меня вновь и я опрокинул на неё парту и побежал в сторону выхода. ",
            nextSceneId: "scene_37"
        },
        scene_37: {
            id: "scene_37",
            type: "normal",
            background: "hall.png",
            text: "Оказавшись в коридоре, я попытался как можно более плотно закрыть дверь кабинета. Сердце стучало как бешенное, я бежал к лестнице как ни в себя, хотя уже ощущал усталость. Зря я всё же прогуливал физкультуру, учитель оказался прав, это мне бы пригодилось.",
            nextSceneId: "scene_38"
        },
        scene_38: {
            id: "scene_38",
            type: "normal",
            background: "hall.png",
            text: "Я уже почти оказался на лестничном проёме, прежде чем она схватила меня за ногу и я упал на пол.",
            nextSceneId: "scene_30"
        }
    }
};
