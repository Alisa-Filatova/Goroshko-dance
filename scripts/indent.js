/**
 * Добавляет отступы и переносы строк до и после link и script в index.html,
 * сгенерированный html-webpack-plugin 
 */

const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');

fs.readFile(htmlPath, 'utf8', (readError, html) => {
    if (readError) {
        console.error(readError.toString());
        return;
    }

    const content = html
        .replace(/(<script type="text\/javascript" src="\/dist\/js\/index\.js\?[0-9\w]+"><\/script>)/, '\n    $1\n')
        .replace(/(<link href="\/dist\/css\/index.css\?[0-9\w]+" rel="stylesheet">)/, '    $1\n');

    fs.writeFile(htmlPath, content, (writeError) => {
        if (writeError) {
            console.error(writeError.toString());
            return;
        }
    });
});
