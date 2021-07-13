const path = require("path");
module.exports = {
    i18n: {
        defaultLocale: "kr",
        locales: ["en", "kr"],
        localePath: path.resolve("./public/locales"),
    },
};
