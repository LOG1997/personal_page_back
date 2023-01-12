const md5 = require("md5-node");
const axios = require("axios");

const appid = "20210621000868993";
const salt = "log1997";
const key = "wm1Flf13BmzbeGSJDo9n";
const from = "auto";
const to = "auto";
exports.translate = async (req, res) => {
  const query = req.query;
  const { q } = query;
  const sign = md5(appid + q + salt + key);
  const url = `https://fanyi-api.baidu.com/api/trans/vip/translate?q=${q}&from=${from}&to=${to}&appid=${appid}&salt=${salt}&sign=${sign}`;
  const result = await axios.get(url);
  const { trans_result } = result.data;
  const { src, dst } = trans_result[0];
  return res.json({ msg: "success", success: true, result: { src, dst } });
};
