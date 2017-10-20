import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

export default class About extends Component{

    render(){
        return(
            <ReactMarkdown source={about} className='about'/>
        )
    }
}

let about = `## 路漫漫其修远兮 吾将上下而求索\n\r
春江花月夜\n\r
【作者】张若虚 【朝代】唐 \n\r
春江潮水连海平，海上明月共潮生。\n\r
滟滟随波千万里，何处春江无月明！\n\r
江流宛转绕芳甸，月照花林皆似霰；\n\r
空里流霜不觉飞，汀上白沙看不见。\n\r
江天一色无纤尘，皎皎空中孤月轮。\n\r
江畔何人初见月？江月何年初照人？\n\r
人生代代无穷已，江月年年只相似。\n\r
不知江月待何人，但见长江送流水。\n\r
白云一片去悠悠，青枫浦上不胜愁。\n\r
谁家今夜扁舟子？何处相思明月楼？\n\r
可怜楼上月徘徊，应照离人妆镜台。\n\r
玉户帘中卷不去，捣衣砧上拂还来。\n\r
此时相望不相闻，愿逐月华流照君。\n\r
鸿雁长飞光不度，鱼龙潜跃水成文。\n\r
昨夜闲潭梦落花，可怜春半不还家。\n\r
江水流春去欲尽，江潭落月复西斜。\n\r
斜月沉沉藏海雾，碣石潇湘无限路。\n\r
不知乘月几人归，落月摇情满江树。`
