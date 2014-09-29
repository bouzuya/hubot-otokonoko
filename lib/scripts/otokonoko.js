// Description
//   A Hubot script that calls "男の娘WebAPI"
//
// Configuration:
//   HUBOT_OTOKONOKO_API_KEY
//
// Commands:
//   hubot otokonoko <image url> - calls "男の娘WebAPI"
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var API_KEY, request;
  request = require('request');
  API_KEY = process.env.HUBOT_OTOKONOKO_API_KEY;
  return robot.respond(/otokonoko (https?:\/\/.*)$/i, function(res) {
    var imageUrl;
    imageUrl = res.match[1];
    return request({
      method: 'POST',
      url: 'http://limited.api.polestars.jp:8080/webapi/prettyface.do',
      form: {
        apiKey: API_KEY,
        imageURL: imageUrl,
        eliminateOlder: 0
      },
      json: true
    }, function(err, _, json) {
      var age, face, gender, level, score;
      if (err != null) {
        return robot.logger.error(err);
      }
      face = json.prettyFace[0];
      age = face.ageJudge;
      gender = face.realGender === 0 ? '男性' : '女性';
      score = face.realGenderScore;
      level = face.otokonokoLevel;
      return res.send(["年齢: " + age, "性別: " + (Math.floor(score / 10)) + "% " + gender, "男の娘レベル: " + level + "/100"].join('\n'));
    });
  });
};
