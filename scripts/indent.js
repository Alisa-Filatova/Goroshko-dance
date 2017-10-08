const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');

fs.readFile(htmlPath, 'utf8', (error, html) => {
    if (error) {
        console.error(error.toString());
        return;
    }

    const content = html
        .replace(/(<script type="text\/javascript" src="\/dist\/js\/index\.js\?[0-9\w]+"><\/script>)/, '\n    $1\n')
        .replace(/(<link href="\/dist\/css\/index.css\?[0-9\w]+" rel="stylesheet">)/, '    $1\n');

    fs.writeFile(htmlPath, content, (err) => {
        if (err) {
            console.error(err.toString());
            return;
        }
    });
});
