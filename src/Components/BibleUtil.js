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

export const calculateProgress = (books) => {
    return books.map(book => Math.floor(Math.random() * 100)); // Replace with actual reading data
};

export const categoryColors = {
    History: 'rgba(75, 192, 192, 0.7)',
    Poetry: 'rgba(255, 159, 64, 0.7)',
    Prophecy: 'rgba(54, 162, 235, 0.7)',
    Gospels: 'rgba(153, 102, 255, 0.7)',
    Epistles: 'rgba(255, 205, 86, 0.7)'
};