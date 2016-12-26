/**
 * @file   Panel模块
 * @author zhong
 */

import React from 'react';
import Wrap from '../../components/WrcWrap';

import style from './Panel.useable.less';
import SystemHeader from '../../components/system/Header/Header';

const PanelPage = React.createClass({

    componentWillMount: function () {
        style.use();
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function () {
        style.unuse();
    },
    render: function () {
        var that = this;
        return (
            <div className="du-page-panel">
                <SystemHeader />
                <Wrap>
                    <section className="panel-section">
                        <div className="delta-bx">

                            <h2 className="delta-hd">Panel</h2>
                            
                            <div className="delta-bd">

                                <div className="du-panel">
                                    <div className="du-panel-hd">
                                        <div className="du-item du-item-link">
                                            <a href="#" className="">
                                                <div className="du-item-before">A</div>
                                                <div className="du-item-after"><span className="du-iconfont du-icon-arrow-right"></span></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="du-panel-bd">
                                        <ul className="du-list">
                                            <li className="du-item du-item-link">
                                                <a href="#">
                                                    <div className="du-item-before">标题-带链接</div>
                                                    <div className="du-item-after"><span className="du-item-txt">说明文字</span></div>
                                                </a>
                                            </li>
                                            <li className="du-item du-item-link">
                                                <a href="#">
                                                    <div className="du-item-before">标题-带链接</div>
                                                    <div className="du-item-after"><span className="du-item-txt">说明文字</span></div>
                                                </a>
                                            </li>
                                            <li className="du-item du-item-link">
                                                <a href="#">
                                                    <div className="du-item-before">标题-带链接</div>
                                                    <div className="du-item-after"><span className="du-item-txt">说明文字</span></div>
                                                </a>
                                            </li>
                                            <li className="du-item du-item-link">
                                                <a href="#">
                                                    <div className="du-item-before">标题-带链接</div>
                                                    <div className="du-item-after"><span className="du-item-txt">说明文字</span></div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="du-panel-ft du-panel-ft-left">
                                        <div>底部文字</div>
                                    </div> 
                                </div> 

                                <div className="du-panel">
                                    <div className="du-panel-hd">B</div>
                                    <div className="du-panel-bd">

                                        <ul className="du-list">
                                            <li className="du-item du-item-side">
                                                <div className="du-item-before">标题</div>
                                                <div className="du-item-after"><span className="du-item-txt">说明文字</span></div>
                                            </li>

                                            <li className="du-item du-item-side">
                                                <div className="du-item-before">标题</div>
                                                <div className="du-item-after"><span className="du-item-txt">说明文字</span></div>
                                            </li>

                                            <li className="du-item du-item-side">
                                                <div className="du-item-before">标题</div>
                                                <div className="du-item-after"><span className="du-item-txt">说明文字</span></div>
                                            </li>

                                            <li className="du-item du-item-side">
                                                <div className="du-item-before">标题</div>
                                                <div className="du-item-after"><span className="du-item-txt">说明文字</span></div>
                                            </li>

                                        </ul>
                                    </div>
                          
                                    <div className="du-panel-ft du-panel-ft-center">
                                        <div>底部文字</div>
                                    </div>
                                </div> 

                                <div className="du-panel">
                                    <div className="du-item du-item-link">
                                        <a href="#" className="">
                                            <div className="du-item-before">标题-带链接</div>
                                            <div className="du-item-after"><span className="du-iconfont du-icon-arrow-right"></span></div>
                                        </a>
                                    </div>
                                </div> 

                                <div className="du-panel">
                                    <div className="du-panel-hd">C</div>
                                    <div className="du-panel-bd">
                                        <div className="case-1">2015年11月，百度钱包开启“常年返现计划”，打造一个能返现金的钱包，常年立返现金1%起，最高免单，资金实时返还至用户百度钱包账户余额，可提现，可消费，永不过期，将权益真正反馈用户。
                                        </div>
                                    </div>
                                    <div className="du-panel-ft du-panel-ft-right">
                                        <div>底部文字</div>
                                    </div>
                                </div> 

                            </div>

                        </div>
                    </section>
                </Wrap>
            </div>
        );
    }
});

module.exports = PanelPage;