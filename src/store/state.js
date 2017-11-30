// 1.存放所有状态
import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {},
  playing: false, // 是否正在播放
  fullScreen: false, // 是否全屏播放
  playlist: [], //播放列表，随播放模式而变化
  sequenceList: [], // 原始顺序
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory: loadSearch(), //从本地存储动态读取历史
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state