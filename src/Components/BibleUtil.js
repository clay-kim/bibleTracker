// Dictionary object mapping abbreviations to full names
export const bookNames = {
    "gn": "창세기",
    "ex": "출애굽기",
    "lv": "레위기",
    "nm": "민수기",
    "dt": "신명기",
    "js": "여호수아",
    "jud": "사사기",
    "rt": "룻기",
    "1sm": "사무엘상",
    "2sm": "사무엘하",
    "1kgs": "열왕기상",
    "2kgs": "열왕기하",
    "1ch": "역대상",
    "2ch": "역대하",
    "ezr": "에스라",
    "ne": "느헤미야",
    "et": "에스더",
    "job": "욥기",
    "ps": "시편",
    "prv": "잠언",
    "ec": "전도서",
    "so": "아가",
    "is": "이사야",
    "jr": "예레미야",
    "lm": "예레미야애가",
    "ez": "에스겔",
    "dn": "다니엘",
    "ho": "호세아",
    "jl": "요엘",
    "am": "아모스",
    "ob": "오바댜",
    "jn": "요나",
    "mi": "미가",
    "na": "나훔",
    "hk": "하박국",
    "zp": "스바냐",
    "hg": "학개",
    "zc": "스가랴",
    "ml": "말라기",
    "mt": "마태복음",
    "mk": "마가복음",
    "lk": "누가복음",
    "jo": "요한복음",
    "act": "사도행전",
    "rm": "로마서",
    "1co": "고린도전서",
    "2co": "고린도후서",
    "gl": "갈라디아서",
    "eph": "에베소서",
    "ph": "빌립보서",
    "cl": "골로새서",
    "1ts": "데살로니가전서",
    "2ts": "데살로니가후서",
    "1tm": "디모데전서",
    "2tm": "디모데후서",
    "tt": "디도서",
    "phm": "빌레몬서",
    "hb": "히브리서",
    "jm": "야고보서",
    "1pe": "베드로전서",
    "2pe": "베드로후서",
    "1jo": "요한일서",
    "2jo": "요한이서",
    "3jo": "요한삼서",
    "jd": "유다서",
    "re": "요한계시록"
};

// Function to convert abbreviation to full name
export const getFullBookName = (abbrev) => {
    return bookNames[abbrev] || abbrev; // Return the full name if found, otherwise return the abbreviation itself
};

// Break into 5 different sections
export const bibleGroups = {
    History: [
        'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth',
        '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra',
        'Nehemiah', 'Esther', 'Acts'
    ],
    Poetry: ['Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon'],
    Prophecy: [
        'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
        'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah',
        'Malachi', 'Revelation'
    ],
    Gospels: ['Matthew', 'Mark', 'Luke', 'John'],
    Epistles: [
        'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians',
        'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus',
        'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude'
    ]
};

// color for each graph
export const categoryColors = {
    History: 'rgb(255, 211, 78, 0.7)',
    Poetry: 'rgb(140, 190, 178, 0.7)',
    Prophecy: 'rgb(240, 96, 96, 0.7)',
    Gospels: 'rgb(242, 235, 191, 0.7)',
    Epistles: 'rgb(181, 230, 85, 0.7)'
};


//======= Total verse number for each book =======

export const totalVerses = {
    'Genesis': 1533,
    'Exodus': 1213,
    'Leviticus': 859,
    'Numbers': 1288,
    'Deuteronomy': 959,
    'Joshua': 658,
    'Judges': 618,
    'Ruth': 85,
    '1 Samuel': 810,
    '2 Samuel': 695,
    '1 Kings': 816,
    '2 Kings': 719,
    '1 Chronicles': 942,
    '2 Chronicles': 822,
    'Ezra': 280,
    'Nehemiah': 406,
    'Esther': 167,
    'Job': 1070,
    'Psalms': 2461,
    'Proverbs': 915,
    'Ecclesiastes': 222,
    'Song of Songs': 117,
    'Isaiah': 1292,
    'Jeremiah': 1364,
    'Lamentations': 154,
    'Ezekiel': 1273,
    'Daniel': 357,
    'Hosea': 197,
    'Joel': 73,
    'Amos': 146,
    'Obadiah': 21,
    'Jonah': 48,
    'Micah': 105,
    'Nahum': 47,
    'Habakkuk': 56,
    'Zephaniah': 53,
    'Haggai': 38,
    'Zechariah': 211,
    'Malachi': 55,
    'Matthew': 1071,
    'Mark': 678,
    'Luke': 1151,
    'John': 879,
    'Acts': 1007,
    'Romans': 433,
    '1 Corinthians': 437,
    '2 Corinthians': 257,
    'Galatians': 149,
    'Ephesians': 155,
    'Philippians': 104,
    'Colossians': 95,
    '1 Thessalonians': 89,
    '2 Thessalonians': 47,
    '1 Timothy': 113,
    '2 Timothy': 83,
    'Titus': 46,
    'Philemon': 25,
    'Hebrews': 303,
    'James': 108,
    '1 Peter': 105,
    '2 Peter': 61,
    '1 John': 105,
    '2 John': 13,
    '3 John': 14,
    'Jude': 25,
    'Revelation': 404
};

// Translate Korean to English [[Book]]
export const koreanToEnglishBookNames = {
    '창세기': 'Genesis',
    '출애굽기': 'Exodus',
    '레위기': 'Leviticus',
    '민수기': 'Numbers',
    '신명기': 'Deuteronomy',
    '여호수아': 'Joshua',
    '사사기': 'Judges',
    '룻기': 'Ruth',
    '사무엘상': '1 Samuel',
    '사무엘하': '2 Samuel',
    '열왕기상': '1 Kings',
    '열왕기하': '2 Kings',
    '역대상': '1 Chronicles',
    '역대하': '2 Chronicles',
    '에스라': 'Ezra',
    '느헤미야': 'Nehemiah',
    '에스더': 'Esther',
    '욥기': 'Job',
    '시편': 'Psalms',
    '잠언': 'Proverbs',
    '전도서': 'Ecclesiastes',
    '아가': 'Song of Solomon',
    '이사야': 'Isaiah',
    '예레미야': 'Jeremiah',
    '예레미야애가': 'Lamentations',
    '에스겔': 'Ezekiel',
    '다니엘': 'Daniel',
    '호세아': 'Hosea',
    '요엘': 'Joel',
    '아모스': 'Amos',
    '오바댜': 'Obadiah',
    '요나': 'Jonah',
    '미가': 'Micah',
    '나훔': 'Nahum',
    '하박국': 'Habakkuk',
    '스바냐': 'Zephaniah',
    '학개': 'Haggai',
    '스가랴': 'Zechariah',
    '말라기': 'Malachi',
    '마태복음': 'Matthew',
    '마가복음': 'Mark',
    '누가복음': 'Luke',
    '요한복음': 'John',
    '사도행전': 'Acts',
    '로마서': 'Romans',
    '고린도전서': '1 Corinthians',
    '고린도후서': '2 Corinthians',
    '갈라디아서': 'Galatians',
    '에베소서': 'Ephesians',
    '빌립보서': 'Philippians',
    '골로새서': 'Colossians',
    '데살로니가전서': '1 Thessalonians',
    '데살로니가후서': '2 Thessalonians',
    '디모데전서': '1 Timothy',
    '디모데후서': '2 Timothy',
    '디도서': 'Titus',
    '빌레몬서': 'Philemon',
    '히브리서': 'Hebrews',
    '야고보서': 'James',
    '베드로전서': '1 Peter',
    '베드로후서': '2 Peter',
    '요한일서': '1 John',
    '요한이서': '2 John',
    '요한삼서': '3 John',
    '유다서': 'Jude',
    '요한계시록': 'Revelation'
};

// Function to convert abbreviation to full name
export const getFullBookNameEng = (name) => {
    return koreanToEnglishBookNames[name] || name; // Return the full name if found, otherwise return the abbreviation itself
};
