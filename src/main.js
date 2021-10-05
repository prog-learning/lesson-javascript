const fileList =
  /* ↓ここに`/src/init/file-list.json`の内容を貼り付け↓ */
  [
    'lesson-01.js',
    'lesson-02.js',
    'lesson-03.js',
    'lesson-04.js',
    'lesson-05.js',
    'lesson-06.js',
    'lesson-07.js',
    'lesson-08.js',
    'lesson-09.js',
    'lesson-10.js',
    'lesson-11.js',
    'lesson-12.js',
    'lesson-12export.js',
    'lesson-13-1.js',
    'lesson-13-2.js',
    'lesson-14.js',
    'lesson-15.js',
    'lesson-16.js',
    'lesson-17.js',
  ];
/* ↑ここに`/src/init/file-list.json`の内容を貼り付け↑ */

let current = 'test-script.js';

const changePath = (e) => {
  const fileName = e.target.id;
  current = 'lessons/' + fileName;
  document.getElementsByClassName('selected')[0]?.classList.remove('selected');
  document.getElementById(fileName).classList.add('selected');
};

for (const fileName of fileList) {
  const list = document.createElement('li');
  const label = fileName.slice(0, fileName.length - 3);
  list.innerHTML = `
  <button 
    id="${fileName}"
    type="button"
    onclick="changePath(event)"
  >
  select
  </button>
  <span>${label}</span>
  `;
  const target = document.getElementById('file_list');
  target.appendChild(list);
}

const runScript = () => {
  const script = document.createElement('script');
  script.src = './src/' + current;
  const target = document.getElementById('run_script');
  target.appendChild(script);
};
