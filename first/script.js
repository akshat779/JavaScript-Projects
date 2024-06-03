const emoji = document.getElementById('emoji');
const emojis = [
    // give me a list of emojis
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    '😂',
    '🤣',
    '😊',
    '😇',
    '🙂',
    '🙃',
    '😉',
    '😌',
    '😍',
    '🥰',
    '😘',
];

// emoji.innerText = emojis[Math.floor(Math.random() * (emojis.length))]
emoji.addEventListener('mouseover', () => {emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)]});