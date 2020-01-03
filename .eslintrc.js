module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/prettier"
    ],
    "rules": {
        "comma-dangle": 0,
        "no-console": "off"
    },
    "parserOptions": {
        "parser": "babel-eslint",
        "no-console": "off"
    }
}
