const replace = require('replace-in-file');

// define parameters to replace
const removeEndHTMLTag = {
    files: "./index.html",
    from: "</html>",
    to: "",
};

const removeEndDivTag = {
    files: "./index.html",
    from: "</div end>",
    to: "",
};

function replaceTextinHTML() {
    replace(removeEndHTMLTag);
    replace(removeEndDivTag);
};

module.exports = replaceTextinHTML;