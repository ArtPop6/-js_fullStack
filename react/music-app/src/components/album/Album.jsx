// pure component.  comtainer里面才与redux有关  与redux无关，数据直接从。。
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './album.styl';
import Scroll from '../../common/scroll/Scroll';
import { getAlbumInfo } from '../../api/recommend';
class Album extends Component {
    state = {
        show: false
    }
    componentDidMount() {
        // id传到路由上去了
        const id = this.props.match.params.id;
        getAlbumInfo().then(res => {
            console.log('getAlbumInfo', res);
        })
        this.setState({
            show: true
        })
    }
    render () {
        return (
            // in值发生变化， css变化 classNames是多个类名，translate只是前缀
            <CSSTransition in={this.state.show} timeout={300} classNames="Translate">
            <div className="music-album">
                <div ref="albumBg" className="album-img">
                    <div className="filter"></div>
                    {/* <span>播放</span> */}
                </div>
                <div className="albumFixedBg" className="album-img fixed">
                    <div className="filter"></div>
                </div>
                <div className="play-wrapper" ref="playButtonWrapper">
                    <div className="play-button">
                        <i className="icon-play"></i>
                        <span>播放全部</span>
                    </div>
                </div>
                <div className="album-Container">
                    <div className="album-scroll">
                        {/* 从qq音乐api获取歌单 */}
                        <Scroll>
                            <div></div>
                        </Scroll>
                    </div>
                </div>
            </div>
            </CSSTransition>
        );
    }
}

export default Album