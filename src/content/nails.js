export const quizName = 'Твой идеальный маникюр'
export const quizDescription =
  'Пройди тест и узнай, какой маникюр тебе подходит больше всего.'
export const quizCover = `${process.env.PUBLIC_URL}/covers/start-nails.jpg`

export const scores = {
  FIRST: '1',
  SECOND: '2',
  THIRD: '3'
}

export const results = {
  [scores.FIRST]: {
    text:
      'Твой идеальный вариант: яркий маникюр. Можешь добавить прикольный дизайн, чтобы подчеркнуть свою индивидуальность. ',
    cover: `${process.env.PUBLIC_URL}/covers/nails-first.jpg`
  },
  [scores.SECOND]: {
    text:
      'Твой идеальный вариант: необычный маникюр с наращиванием. Чем больше креатива, тем лучше! Ты любишь выделяться, и ногти должны соответствовать твоему характеру. ',
    cover: `${process.env.PUBLIC_URL}/covers/nails-second.jpg`
  },
  [scores.THIRD]: {
    text:
      'Твой идеальный вариант: классический маникюр. У тебя хороший вкус, поэтому ногти должны быть стильными и аккуратными. Никакого безумства! Френч или обычный лак, но обязательно с нотками элегантности.',
    cover: `${process.env.PUBLIC_URL}/covers/nails-third.jpg`
  }
}

export const formatResult = () => 'Поздравляем!'

export const questions = [
  {
    text: 'Привет! Расскажи нам, сколько тебе лет?',
    answers: [
      {
        text: 'От 5 до 9 лет',
        score: scores.FIRST
      },
      {
        text: 'От 10 до 15 лет',
        score: scores.FIRST
      },
      {
        text: 'От 16 до 20 лет',
        score: scores.SECOND
      },
      {
        text: 'От 21 до 25 лет',
        score: scores.SECOND
      },
      {
        text: 'От 25 до 30 лет',
        score: scores.THIRD
      },
      {
        text: 'Я слишком старая…',
        score: scores.THIRD
      }
    ]
  },
  {
    text: 'Твое любимое время года?',
    cover: `${process.env.PUBLIC_URL}/covers/vremena_goda.jpg`,
    answers: [
      {
        text: 'Зима',
        score: scores.THIRD
      },
      {
        text: 'Весна',
        score: scores.FIRST
      },
      {
        text: 'Лето',
        score: scores.SECOND
      },
      {
        text: 'Осень',
        score: scores.FIRST
      },
      {
        text: 'Сон',
        score: scores.SECOND
      },
      {
        text: 'А зачем вы спрашиваете?',
        score: scores.SECOND
      }
    ]
  },
  {
    text: 'Какой мем самый смешной?',
    cover: `${process.env.PUBLIC_URL}/covers/memy.jpg`,
    answers: [
      {
        text: 'Ждун',
        score: scores.FIRST
      },
      {
        text: 'Ничоси',
        score: scores.FIRST
      },
      {
        text: 'Дратути',
        score: scores.FIRST
      },
      {
        text: 'Узбагойся',
        score: scores.SECOND
      },
      {
        text: 'Любой другой мем',
        score: scores.THIRD
      },
      {
        text: 'У меня есть чувство юмора',
        score: scores.SECOND
      }
    ]
  },
  {
    text: 'Какое твое любимое домашнее животное',
    cover: `${process.env.PUBLIC_URL}/covers/zhivotnye.jpg`,
    answers: [
      {
        text: 'Кошка',
        score: scores.FIRST
      },
      {
        text: 'Собака',
        score: scores.FIRST
      },
      {
        text: 'Попугай',
        score: scores.THIRD
      },
      {
        text: 'Рыбки',
        score: scores.THIRD
      },
      {
        text: 'Муравьед',
        score: scores.SECOND
      },
      {
        text: 'Рыба-пила',
        score: scores.SECOND
      }
    ]
  },
  {
    text: 'Какие позы в сексе ты предпочитаешь?',
    answers: [
      {
        text: 'Миссионерская',
        score: scores.THIRD
      },
      {
        text: 'Догги стайл',
        score: scores.SECOND
      },
      {
        text: 'Наездница',
        score: scores.SECOND
      },
      {
        text: '«Поза 69»',
        score: scores.FIRST
      },
      {
        text: 'Предпочитаю смотреть за другими',
        score: scores.SECOND
      },
      {
        text: 'Что такое секс?',
        score: scores.FIRST
      }
    ]
  },
  {
    text: 'При падении чего ты обычно загадываешь желание?',
    answers: [
      {
        text: 'Звезды',
        score: scores.FIRST
      },
      {
        text: 'Температуры',
        score: scores.THIRD
      },
      {
        text: 'Курса рубля',
        score: scores.THIRD
      },
      {
        text: 'Нравов',
        score: scores.SECOND
      },
      {
        text: 'Римской империи',
        score: scores.SECOND
      },
      {
        text: 'У меня нет чувства юмора',
        score: scores.THIRD
      }
    ]
  },
  {
    text: 'Кто дает самые хорошие советы?',
    cover: `${process.env.PUBLIC_URL}/covers/sovety.jpg`,
    answers: [
      {
        text: 'Начальник',
        score: scores.THIRD
      },
      {
        text: 'Родители',
        score: scores.FIRST
      },
      {
        text: 'Подружки',
        score: scores.FIRST
      },
      {
        text: 'Муж',
        score: scores.THIRD
      },
      {
        text: 'Кот',
        score: scores.SECOND
      },
      {
        text: 'Гороскоп',
        score: scores.SECOND
      }
    ]
  },
  {
    text: 'Больше всего ты любишь принимать:',
    answers: [
      {
        text: 'Ванну',
        score: scores.FIRST
      },
      {
        text: 'Гостей',
        score: scores.THIRD
      },
      {
        text: 'Решения',
        score: scores.THIRD
      },
      {
        text: 'Взятки',
        score: scores.SECOND
      },
      {
        text: 'К сведению',
        score: scores.SECOND
      },
      {
        text: 'На грудь',
        score: scores.SECOND
      }
    ]
  },
  {
    text: 'Что ты говоришь, когда ты права:',
    answers: [
      {
        text: 'Ой, все'
      },
      {
        text: 'Ой, все'
      },
      {
        text: 'Ой, все'
      },
      {
        text: 'Ой, все'
      },
      {
        text: 'Ой, все'
      },
      {
        text: 'Ну я же говорила!'
      }
    ]
  },
  {
    text: 'Какой маникюр ты делаешь чаще всего?',
    answers: [
      {
        text: 'Спокойный, в пастельных тонах и оттенках',
        score: scores.THIRD
      },
      {
        text: 'Яркий, с прикольным дизайном и нэйл-артом',
        score: scores.FIRST
      },
      {
        text: 'Классика! Френч всегда в моде',
        score: scores.THIRD
      },
      {
        text: 'Разнообразие - все зависит от настроения',
        score: scores.SECOND
      },
      {
        text: 'Модный, только тренды и самые актуальные формы и цвета сезона',
        score: scores.SECOND
      }
    ]
  }
]
