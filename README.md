# wownail-promo-quiz
Промо-тест для студии маникюра wownail

## О проекте
### Стек
- Inferno (React API)
- styled-components
- react-flexbox-grid
### Файловая структура
* public/covers - обложки к квизам
* src/*.js - компоненты и бизнес-логика
* src/content - контент квизов

### Как билдить
Для каждого отдельного квиза нужно отдельно указывать файл с контентом. Например, для квиза "Деффчонки", контент которого лежит в src/content/deffchonki.js выполнить:

```INFERNO_APP_CONTENT="deffchonki.js" npm run build```
