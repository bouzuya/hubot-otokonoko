# Description
#   A Hubot script that calls "男の娘WebAPI"
#
# Configuration:
#   HUBOT_OTOKONOKO_API_KEY
#
# Commands:
#   hubot otokonoko <image url> - calls "男の娘WebAPI"
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  request = require 'request'

  API_KEY = process.env.HUBOT_OTOKONOKO_API_KEY
  robot.respond /otokonoko (https?:\/\/.*)$/i, (res) ->
    imageUrl = res.match[1]
    request
      method: 'POST'
      url: 'http://limited.api.polestars.jp:8080/webapi/prettyface.do'
      form:
        apiKey: API_KEY
        imageURL: imageUrl
        eliminateOlder: 0
      json: true
    , (err, _, json) ->
      return robot.logger.error(err) if err?
      face = json.prettyFace[0]
      age = face.ageJudge
      gender = if face.realGender is 0 then '男性' else '女性'
      score = face.realGenderScore
      level = face.otokonokoLevel
      res.send [
        "年齢: #{age}"
        "性別: #{Math.floor(score/10)}% #{gender}"
        "男の娘レベル: #{level}/100"
      ].join '\n'
