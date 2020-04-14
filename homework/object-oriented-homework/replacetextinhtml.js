const replace = require('replace-in-file');

// define parameters to replace
const removeEndDivTag = {
    files: "./index.html",
    from: "</div end>",
    to: "",
};

function replaceTextinHTML() {
    replace(removeEndDivTag);
};

module.exports = replaceTextinHTML;