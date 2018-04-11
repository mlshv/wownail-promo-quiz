export const quizName = 'Кто ты из сериала Деффчонки?'
export const quizDescription =
  'Пройди тест и узнай, на кого из сериала Деффчонки ты похожа больше всего.'
export const quizCover = `${process.env.PUBLIC_URL}/covers/start-deffchonki.jpg`

export const scores = {
  PALNA: 'Пална',
  VASI: 'Вася',
  LELI: 'Лёля',
  BOBILICH: 'Бобылыч'
}

export const results = {
  [scores.PALNA]: {
    text:
      'Ты прекрасно движется по карьерной лестнице, но не уверенна в самой себе. Ты трезво смотришь на вещи, придумываешь крутые бизнес-идеи и презентуешь их напрямую боссу. Объясняешь всё логически, неплохо одеваешься.',
    cover: `${process.env.PUBLIC_URL}/covers/palna.jpg`
  },
  [scores.VASI]: {
    text:
      'Творческая, шустрая, находчивая, способная - это всё про тебя! Ты рождена для сцены и шоу-бизнеса. Ты никогда не отчаиваешься и продолжаешь идти к своей цели. Смотришь на мир с позитивом и ни при каких обстоятельствах не опускаешь руки.',
    cover: `${process.env.PUBLIC_URL}/covers/vasi.jpg`
  },
  [scores.LELI]: {
    text:
      'Ты не заморачиваешься на поисках вечных истин, предпочитая им комфортную жизнь в своё удовольствие и без особых усилий. Для обеспечения такой жизни ты используешь свое обаяние, необузданную сексуальность и природную красоту. ',
    cover: `${process.env.PUBLIC_URL}/covers/leli.jpg`
  },
  [scores.BOBILICH]: {
    text:
      'Ты очень хозяйственная и трудолюбивая девушка. Очень влюбчивая, но тебе почти всегда не везет с партнером. Ты легкоранимая, склонна к переживаниям даже незначительных неудач.',
    cover: `${process.env.PUBLIC_URL}/covers/bobilich.jpg`
  }
}

export const formatResult = result => `Ты ${result}!`

export const questions = [
  {
    text: 'Какой у тебя цвет волос?',
    answers: [
      {
        text: 'Рыжий',
        score: scores.PALNA
      },
      {
        text: 'Русый',
        score: scores.VASI
      },
      {
        text: 'Блондинка',
        score: scores.LELI
      },
      {
        text: 'Брюнетка',
        score: scores.BOBILICH
      }
    ]
  },
  {
    text: 'Какая у тебя фигура?',
    answers: [
      {
        text: 'Худощавая',
        score: scores.LELI
      },
      {
        text: 'Стройная',
        score: scores.BOBILICH
      },
      {
        text: 'Спортивная',
        score: scores.VASI
      },
      {
        text: 'Полноватая',
        score: scores.PALNA
      }
    ]
  },
  {
    text: 'Как ты проводишь свободное время?',
    answers: [
      {
        text: 'Чтение и самообразование',
        score: scores.PALNA
      },
      {
        text: 'Танцы и музыка',
        score: scores.VASI
      },
      {
        text: 'Шоппинг и развлечения',
        score: scores.LELI
      },
      {
        text: 'Домашние дела и семейные заботы',
        score: scores.BOBILICH
      }
    ]
  },
  {
    text: 'Какой у тебя характер?',
    answers: [
      {
        text: 'Я мудрая, романтичная, мечтательная',
        score: scores.BOBILICH
      },
      {
        text: 'Я умная, образованная, серьёзная',
        score: scores.PALNA
      },
      {
        text: 'Я красивая, хитрая, уверенная',
        score: scores.LELI
      },
      {
        text: 'Я сообразительная, творческая, весёлая',
        score: scores.VASI
      }
    ]
  },
  {
    text: 'О чём ты мечтаешь?',
    answers: [
      {
        text: 'Удачно выйти замуж и переехать жить на собственную виллу',
        score: scores.LELI
      },
      {
        text: 'Заниматься творчеством и стать звездой сцены',
        score: scores.VASI
      },
      {
        text: 'Найти свою любовь, выйти замуж и создать большую семью',
        score: scores.BOBILICH
      },
      {
        text: 'Стать профессионалом своего дела и построить успешную карьеру',
        score: scores.PALNA
      }
    ]
  },
  {
    text: 'Твоя любимая одежда?',
    answers: [
      {
        text: 'Удобные вещи в уличном стиле',
        score: scores.VASI
      },
      {
        text: 'Самые модные и стильные штучки',
        score: scores.LELI
      },
      {
        text: 'Строгие фасоны и деловой стиль',
        score: scores.PALNA
      },
      {
        text: 'Красивые и простые вещи',
        score: scores.BOBILICH
      }
    ]
  },
  {
    text: 'Какие у тебя отношения с парнями?',
    answers: [
      {
        text: 'Мечтаю об отношениях, но пока не встретила «своего» человека',
        score: scores.BOBILICH
      },
      {
        text: 'Мне совершенно наплевать на парней, мне не нужны отношения',
        score: scores.VASI
      },
      {
        text:
          'У меня есть несколько вариантов, но я не знаю, какой будет более удачным',
        score: scores.LELI
      },
      {
        text: 'Я влюблена, но это не взаимно',
        score: scores.PALNA
      }
    ]
  },
  {
    text: 'Что умеешь делать лучше всего?',
    answers: [
      {
        text: 'Выносить максимум пользы для себя из любой ситуации',
        score: scores.LELI
      },
      {
        text: 'Трезво смотреть на вещи и находить интересные идеи',
        score: scores.BOBILICH
      },
      {
        text: 'Концентрироваться на задаче и доводить любое дело до конца',
        score: scores.PALNA
      },
      {
        text: 'Добиваться поставленных целей, не смотря ни на что',
        score: scores.VASI
      }
    ]
  },
  {
    text: 'Без чего ты не можешь жить?',
    answers: [
      {
        text: 'Без творчества и мечты',
        score: scores.VASI
      },
      {
        text: 'Без карьеры и любимой работы',
        score: scores.PALNA
      },
      {
        text: 'Без развлечений и отдыха',
        score: scores.LELI
      },
      {
        text: 'Без семьи и друзей',
        score: scores.BOBILICH
      }
    ]
  },
  {
    text: 'Профессия твоей мечты?',
    answers: [
      {
        text: 'Юрист или экономист',
        score: scores.PALNA
      },
      {
        text: 'Учительница или преподаватель',
        score: scores.BOBILICH
      },
      {
        text: 'Дизайнер или модельер',
        score: scores.LELI
      },
      {
        text: 'Музыкант или певица',
        score: scores.VASI
      }
    ]
  },
  {
    text: 'Кем работает твой идеальный мужчина?',
    answers: [
      {
        text: 'Мне и без парня будет прекрасно, буду жить в своё удовольствие!',
        score: scores.VASI
      },
      {
        text: 'Бизнесмен, знаменитыцй футболист или даже президент',
        score: scores.LELI
      },
      {
        text: 'Важный начальник или директор в большой компании',
        score: scores.PALNA
      },
      {
        text: 'Не важно, где он работает, главное - чувства',
        score: scores.BOBILICH
      }
    ]
  }
]
