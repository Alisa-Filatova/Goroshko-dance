/**
 * Добавляет отступы и переносы строк до и после link и script в index.html,
 * сгенерированный html-webpack-plugin 
 */

const fs = require('fs');
const path = require('path');

const DIST_PATH = path.join(__dirname, '..', 'dist');

fs.readdirSync(DIST_PATH).forEach(filename => {
    if (!/\.html$/.test(filename)) return;

    const filePath = `${DIST_PATH}/${filename}`;
    const html = fs.readFileSync(filePath, { encoding: 'utf8' });

    const content = html
        .replace(/(<link href="(?!(http|\/\/))[^"]+" rel="stylesheet">)/g, '    $1\n')
        .replace(/(<script type="text\/javascript" src="(?!(http|\/\/))[^"]+"><\/script>)/g, '    $1\n');

    fs.writeFileSync(filePath, content);
});
