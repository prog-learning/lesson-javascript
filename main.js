const lessons = [
  { id: '01', title: 'Lesson01', discription: 'コンソールに表示' },
  { id: '02', title: 'Lesson02', discription: 'コンソールに表示' },
  { id: '03', title: 'Lesson03', discription: 'コンソールに表示' },
  { id: '04', title: 'Lesson04', discription: 'コンソールに表示' },
  { id: '05', title: 'Lesson05', discription: 'コンソールに表示' },
  { id: '06', title: 'Lesson06', discription: 'コンソールに表示' },
  { id: '07', title: 'Lesson07', discription: 'コンソールに表示' },
  { id: '08', title: 'Lesson08', discription: 'コンソールに表示' },
  { id: '09', title: 'Lesson09', discription: 'コンソールに表示' },
  { id: '10', title: 'Lesson10', discription: 'コンソールに表示' },
  { id: '11', title: 'Lesson11', discription: 'コンソールに表示' },
  { id: '12', title: 'Lesson12', discription: 'コンソールに表示' },
  { id: '13', title: 'Lesson13', discription: 'コンソールに表示' },
  { id: '14', title: 'Lesson14', discription: 'コンソールに表示' },
  { id: '15', title: 'Lesson15', discription: 'コンソールに表示' },
];

const buttons = document.getElementById('buttons');
const scriptTag = document.getElementById('scriptTag');
console.log(scriptTag);
// scriptTag.setAttribute('src', 'src/lesson-01.js');

lessons.forEach((lesson) => {
  const btn = document.createElement('button');
  btn.textContent = lesson.title;
  btn.addEventListener('click', () => {
    // scriptTag.removeAttribute('src');
    // scriptTag.setAttribute('src', `src/lesson-${lesson.id}.js`);
  });
  buttons.appendChild(btn);
});
