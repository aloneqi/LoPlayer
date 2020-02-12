/*
 * @Author: last order
 * @Date: 2019-08-13 16:51:16
 * @LastEditTime : 2020-02-12 19:34:15
 */
import player from '../template/player.art'
export default class Template {
  constructor (options) {
    this.container = options.container
    this.options = options
    this.init()
  }

  init () {
    console.log(this.options)
    this.container.innerHTML = player({
      options: this.options
    })
    this.playerBox = document.querySelectorAll('.playerBox')[0]
    this.prevBtn = document.querySelectorAll('.playerBox .prevBtn')[0]
    this.nextBtn = document.querySelectorAll('.playerBox .nextBtn')[0]
    this.playBtn = document.querySelectorAll('.playerBox #play')[0]
    this.player = document.querySelectorAll('.playerBox #video')[0]
    this.source = document.querySelectorAll('#player source')[0]
    this.currentTime = document.querySelectorAll('.playerBox .duration span:nth-of-type(1)')[0]
    this.duration = document.querySelectorAll('.playerBox .duration span:nth-of-type(3)')[0]
    this.controlBox = document.querySelectorAll('.playerBox .controlBox')[0]
    // 进度条
    this.videoProgressLine = document.querySelectorAll('.playerBox .progressLine')[0]
    this.videoProgress = document.querySelectorAll('.playerBox .progress')[0]
    this.preload = document.querySelectorAll('.playerBox .preload')[0]
    this.videoProgressBar = document.querySelectorAll('.playerBox .progressBar')[0]
    // 音量控制条
    this.volumeBox = document.querySelectorAll('.playerBox .volumeBox')[0]
    this.volumeLine = document.querySelectorAll('.playerBox .volumeBox .progressLine')[0]
    this.volumeProgress = document.querySelectorAll('.playerBox .volumeBox .progress')[0]
    this.volumeBar = document.querySelectorAll('.playerBox .volumeBox .progressBar')[0]
    this.volumeBtn = document.querySelectorAll('.playerBox .volumeBtn')[0]
    this.volumeBtn = document.querySelectorAll('.playerBox .volumeBtn')[0]
    this.fullScreen = document.querySelectorAll('.playerBox .fullscreen')[0]
    this.volumeBtn = document.querySelectorAll('.playerBox .volumeBtn')[0]
    this.volumeBtn = document.querySelectorAll('.playerBox .volumeBtn')[0]
    this.loading = document.querySelectorAll('.playerBox .loading')[0]
    this.volumeBtn = document.querySelectorAll('.playerBox .volumeBtn')[0]
    this.logo = document.querySelectorAll('.playerBox .playStatus')[0]
    this.speedPanel = document.querySelectorAll('.playerBox .speed-panel')[0]
    this.setting = document.querySelectorAll('.playerBox .setting')[0]
    this.settingPanel = document.querySelectorAll('.playerBox .setting-panel')[0]
    if (this.options.screenShot) {
      this.screenshot = document.querySelectorAll('.playerBox .screenshot')[0]
    }
  }
}
