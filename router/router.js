const express = require("express");
const router = express.Router();
// 用户行为
const test = require("./test/index");
const translate = require("./translate/index");
const personalpage = require("./personalPage/index");

// router.get("/test", test.test);
// router.post("/test", test.test);
// // 测试mysql
// router.post("/testMysql", test.testMysql);
// router.post("/testAsyncMysql", test.testAsyncMysql);

// 翻译
router.get("/translate", translate.translate);
// 个人主页
router.get("/home/getskill", personalpage.getskill);
router.get("/about/getResume", personalpage.getResume);
router.get("/project/list", personalpage.getProjectList);
module.exports = router;
