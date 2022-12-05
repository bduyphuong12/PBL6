module.exports = function (router) {
    const KanjiController = require("../controller/kanji.controller");
    router.post("/kanji", KanjiController.predict);
    router.get("/test", KanjiController.test);
  };