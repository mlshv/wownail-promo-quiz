import mirandaCover from 'resources/covers/miranda.jpg'
import charlotteCover from 'resources/covers/charlotte.jpg'
import carrieCover from 'resources/covers/carrie.jpg'
import samanthaCover from 'resources/covers/carrie.jpg'

export const quizName = 'Кто ты из сериала Секс в Большом городе?'
export const quizDescription =
  'Пройди тест и узнай, на кого из сериал Секс в Большом Городе ты похожа больше всего.'

export const scores = {
  SAMANTHA: 'Саманта',
  MIRANDA: 'Миранда',
  CARRIE: 'Кэрри',
  CHARLOTTE: 'Шарлотта'
}

export const results = {
  [scores.SAMANTHA]: { text: '', cover: samanthaCover },
  [scores.MIRANDA]: {
    text:
      'Ты целеустремленная. Не думаешь о нарядах и косметике, и тебя несильно заботит, какая прическа сейчас в моде.',
    cover: mirandaCover
  },
  [scores.CARRIE]: { text: '', cover: carrieCover },
  [scores.CHARLOTTE]: { text: '', cover: charlotteCover }
}

export const questions = [
  {
    text:
      'Шопинг. Если выбирать из нижеперечисленного, от чего вам было бы сложнее отказаться:',
    answers: [
      {
        text:
          'От красивого нижнего белья! Настоящая женщина должна быть безупречна под одеждой!',
        score: scores.SAMANTHA
      },
      {
        text:
          'От новой роскошной сумки правильной формы. Это лучшее вложение денег!',
        score: scores.MIRANDA
      },
      {
        text:
          'От пары новых туфель, которые может быть вам и не нужны, но так хороши!',
        score: scores.CARRIE
      },
      {
        text: 'От красивого платья, подчеркивающего фигуру.',
        score: scores.CHARLOTTE
      }
    ]
  },
  {
    text:
      'Если вы чувствуете, что не можете сопротивляться охватившему вас чувству к мужчине, то скорее всего...',
    answers: [
      {
        text: 'Я поддамся ему - и будь что будет!',
        score: scores.SAMANTHA
      },
      {
        text: 'Постараюсь оттянуть этот приятный момент.',
        score: scores.CHARLOTTE
      },
      {
        text: 'Ой, не знаю! И хочется, и колется.',
        score: scores.CARRIE
      },
      {
        text:
          'По обстоятельствам. Если все будет идеально, я готова сдаться. Если же что-то пойдет не так и спугнет меня, отбой!',
        score: scores.MIRANDA
      }
    ]
  },
  {
    text: 'Ваш любимый цвет:',
    answers: [
      {
        text: 'Белый. Чистый и многогранный',
        score: scores.CHARLOTTE
      },
      {
        text: 'Фиолетовый. Сложный и глубокий',
        score: scores.MIRANDA
      },
      {
        text: 'Красный. Страстный и бескомпромиссный цвет любви',
        score: scores.SAMANTHA
      },
      {
        text: 'Черный. Это классика!',
        score: scores.CARRIE
      }
    ]
  },
  {
    text: 'Какой из этих фильмов вам нравится больше:',
    answers: [
      {
        text: '"Унесенные ветром"',
        score: scores.CHARLOTTE
      },
      {
        text: '"Список Шиндлера"',
        score: scores.MIRANDA
      },
      {
        text: '"Основной инстинкт"',
        score: scores.SAMANTHA
      },
      {
        text: '"Завтрак у Тиффани!"',
        score: scores.CARRIE
      }
    ]
  },
  {
    text: 'Ваш любимый вид спорт:',
    answers: [
      {
        text: 'Йога',
        score: scores.CARRIE
      },
      {
        text: 'Аэробика',
        score: scores.CHARLOTTE
      },
      {
        text: 'Функциональные тренировки',
        score: scores.MIRANDA
      },
      {
        text: 'Секс',
        score: scores.SAMANTHA
      }
    ]
  },
  {
    text: 'Идеальный вечер - это:',
    answers: [
      {
        text: 'Веселая вечеринка в компании интересных людей',
        score: scores.MIRANDA
      },
      {
        text: 'Ужин при свечах с любимым',
        score: scores.CARRIE
      },
      {
        text: 'Вечер в кругу семьи и гостей',
        score: scores.CHARLOTTE
      },
      {
        text: 'Авантюрное свидание с незнакомцем на отдых',
        score: scores.SAMANTHA
      }
    ]
  },
  {
    text: 'Ваше отношение к еде:',
    answers: [
      {
        text: 'Люблю и умею готовить. И с аппетитом у меня порядок',
        score: scores.CHARLOTTE
      },
      {
        text: 'Я гурман, но готовить не умею',
        score: scores.CARRIE
      },
      {
        text:
          'Не делаю культа из еды. Если надо - могу приготовить что-то вкусно',
        score: scores.MIRANDA
      },
      {
        text: 'Ем только в ресторанах. Мне важнее компания, чем еда',
        score: scores.SAMANTHA
      }
    ]
  },
  {
    text: 'Ваш стиль в одежде:',
    answers: [
      {
        text: 'Обожаю женственные образы. Например, диоровский new look',
        score: scores.CHARLOTTE
      },
      {
        text: 'Авангард. Миксую, смешиваю, не боюсь экспериментировать',
        score: scores.CARRIE
      },
      {
        text: 'Классика. Беспроигрышный вариант',
        score: scores.MIRANDA
      },
      {
        text:
          'Хиппи-шик, индивидуализм, разбавленный спокойными классическими вещами',
        score: scores.SAMANTHA
      }
    ]
  },
  {
    text: 'В чем Ваш главный недостаток?',
    answers: [
      {
        text: 'Нерешительность – часто сама не знаю, чего хочу',
        score: scores.CHARLOTTE
      },
      {
        text: 'Иногда бываю слишком инфантильно',
        score: scores.CARRIE
      },
      {
        text: 'Могу быть настоящей занудой',
        score: scores.MIRANDA
      },
      {
        text: 'Если честно, я слишком сильно люблю себя',
        score: scores.SAMANTHA
      }
    ]
  },
  {
    text: 'Что может заставить Вас влюбиться?',
    answers: [
      {
        text: 'Иногда достаточно одного взгляда',
        score: scores.CHARLOTTE
      },
      {
        text: 'Поступок, достойный настоящего мужчины',
        score: scores.CARRIE
      },
      {
        text: 'Чувство одиночества',
        score: scores.MIRANDA
      },
      {
        text: 'Любовь – для слабых и сентиментальных',
        score: scores.SAMANTHA
      }
    ]
  },
  {
    text: 'Кто вам больше нравится из нижеперечисленных мужчин:',
    answers: [
      {
        text: 'Колин Ферт',
        score: scores.CHARLOTTE
      },
      {
        text: 'Джордж Клуни',
        score: scores.CARRIE
      },
      {
        text: 'Хью Лори',
        score: scores.MIRANDA
      },
      {
        text: 'Джейсон Стэтэм',
        score: scores.SAMANTHA
      }
    ]
  }
]