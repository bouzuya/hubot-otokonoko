# hubot-otokonoko

A Hubot script that calls "[男の娘WebAPI](https://pds.polestars.jp/contents/campaign.html)"

**2014/08/29-2014/11/30 [download API KEY](https://pds.polestars.jp/uploads/%E6%96%B0WebAPI%E4%BB%95%E6%A7%98%E6%9B%B8.zip)**

## Installation

    $ npm install git://github.com/bouzuya/hubot-otokonoko.git

or

    $ # TAG is the package version you need.
    $ npm install 'git://github.com/bouzuya/hubot-otokonoko.git#TAG'

## Example

    bouzuya> hubot help otokonoko
      hubot> hubot otokonoko <image url> - calls "男の娘WebAPI"

    bouzuya> hubot otokonoko http://example.com/ryochin.png
      hubot> 年齢: 20
             性別: 100% 女性
             男の娘レベル: 33/100

## Configuration

See [`src/scripts/otokonoko.coffee`](src/scripts/otokonoko.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-otokonoko
[travis-badge]: https://travis-ci.org/bouzuya/hubot-otokonoko.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-otokonoko
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-otokonoko.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-otokonoko
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-otokonoko.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
