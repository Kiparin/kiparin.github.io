// Функция для генерации массива символов
function generateCharacters() {
    const utf8Characters = [];

    // Диапазоны символов
    const englishLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)) // A-Z
        .concat(Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))); // a-z

    const japaneseHiragana = Array.from({ length: 82 }, (_, i) => String.fromCharCode(12353 + i)); // ひらがな
    const japaneseKatakana = Array.from({ length: 83 }, (_, i) => String.fromCharCode(12449 + i)); // カタカナ
    const japaneseKanji = Array.from({ length: 3000 }, (_, i) => String.fromCharCode(19968 + i)); // 常用漢字 (примерно)

    const chineseCharacters = Array.from({ length: 3000 }, (_, i) => String.fromCharCode(0x4E00 + i)); // Основные китайские символы

    // Объединение всех символов в один массив
    utf8Characters.push(...englishLetters, ...japaneseHiragana, ...japaneseKatakana, ...japaneseKanji, ...chineseCharacters);

    // Если нужно ровно 4000 символов, обрезаем массив
    return utf8Characters.slice(0, 4000);
}

// Генерация массива символов
const utf8Characters = generateCharacters();

// Функция для получения случайного элемента
function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * utf8Characters.length);
    return utf8Characters[randomIndex];
}

// Функция для обновления содержимого <span>
function updateCharacter() {
    const randomCharacter = getRandomCharacter();
    document.getElementById('result').innerHTML = `${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()} ${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}
    ${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}${getRandomCharacter()}`;
}

// Запуск обновления каждые 1000 миллисекунд (1 секунда)
setInterval(updateCharacter, 250);

// Вызываем функцию один раз, чтобы сразу показать символ
updateCharacter();