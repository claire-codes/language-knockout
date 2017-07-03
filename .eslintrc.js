module.exports = {
    "env": {
        "node": true
    },
    "globals": {
        "it": true,
        "describe": true,
        "beforeEach": true,
        "expect": true,
        "waitsForPromise": true,
        "atom": true,
        "runs": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};