import React, { Component } from 'react';
import { connect } from "react-redux";
import Album from '../components/album/Album';
/**
 * container component 处理redux
 *   pure component  与redux无关
 */
// 方法处理放到conponents里
const mapStateToProps = (state) => {}
const mapDispatchToProps = (dispatch) => {}
// 从redux读数据
// export default connect(mapStateToProps, mapDispatchToProps)(Album);
export default Album