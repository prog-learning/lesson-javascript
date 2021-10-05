const fs = require('fs');
var path = require('path');

(async () => {
  let fileList = await fs
    .readdirSync('./src/lessons/')
    .filter((fileName) => fileName.slice(fileName.length - 4) !== 'json');

  await fs.writeFileSync(
    path.resolve('./src/init/', 'file-list.json'),
    JSON.stringify(fileList, null, '  '),
    'utf-8'
  );
})();
