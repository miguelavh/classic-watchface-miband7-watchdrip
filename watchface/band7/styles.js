/// <reference path="../../.types/index.d.ts" />

import {img,range} from "../../utils/helper";
import {Colors} from "../../utils/config/constants";

const bgNumArr = range(10).map((v) => {
    return img(`bgNum/${v}.png`);
});

const bgNumLowArr = range(10).map((v) => {
    return img(`bgNumLow/${v}.png`);
});

const bgNumHighArr = range(10).map((v) => {
    return img(`bgNumHigh/${v}.png`);
});

const bigNumArr = range(10).map((v) => {
    return img(`bigNum/${v}.png`);
});

const DH = 490;
const T_WIDTH = 72;
const T_HEIGHT = 94;
const T_SPACE = 10;

const dateline = DH/2+T_HEIGHT+T_SPACE/2+12;
const statNums = range(0, 10).map((v) => {
    return img(`status_numbers/s${v}.png`)
});


export const DIGITAL_TIME = {
    hour_startX: px(18-5),
    hour_startY: px(25+110),
    hour_zero: true,
    hour_space: 2,
    hour_align: hmUI.align.CENTER_H,
    hour_array: bigNumArr,
    hour_unit_sc: img('bigNum/sp.png'), // colon
    hour_unit_tc: img('bigNum/sp.png'),
    hour_unit_en: img('bigNum/sp.png'),
    minute_zero: true,
    minute_space: 2,
    minute_align: hmUI.align.CENTER_H,
    minute_array: bigNumArr,
    minute_follow: 1,
    am_x: px(137-5),
    am_y: px(40+110),
    am_sc_path: img('bigNum/am.png'),
    am_en_path: img('bigNum/am.png'),
    pm_x: px(137-5),
    pm_y: px(40+110),
    pm_sc_path: img('bigNum/pm.png'),
    pm_en_path: img('bigNum/pm.png'),
    second_zero: 1,
    second_startX: 30,
    second_startY: dateline,
    second_align: hmUI.align.CENTER_H,
    second_array: statNums,
    second_space: 3,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_NO_DATA_TEXT = {
    x: px(66-44-2),
    y: px(193-10+180),
    w: px(59),
    h: px(46),
    color: Colors.white,
    text_size: px(34),
    align_h: hmUI.align.RIGHT,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: 'No data',
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_TEXT_IMG = {
    x: px(46-44),
    y: px(115-10+180),
    w: px(113),
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgNum/d.png'),
    font_array: bgNumArr,
    visible: false,
    h_space:1,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_TEXT_IMG_LOW = {
    x: px(46-44-2),
    y: px(115-10+180),
    w: px(113),
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgNumLow/d.png'),
    font_array: bgNumLowArr,
    visible: false,
    h_space:1,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_TEXT_IMG_HIGH = {
    x: px(46-44-2),
    y: px(115-10+180),
    w: px(113),
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgNumHigh/d.png'),
    font_array: bgNumHighArr,
    visible: false,
    h_space:1,
    show_level: hmUI.show_level.ONLY_NORMAL
};


export const BG_TIME_TEXT = {
    x: px(100+5),
    y: px(300+15),
    w: px(80),
    h: px(30),
    color: Colors.defaultTransparent,
    text_size: px(23),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_DELTA_TEXT = {
    x: px(90+5+2),
    y: px(225+55),
    w: px(56),
    h: px(41),
    color: Colors.defaultTransparent,
    text_size: px(27),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_TREND_IMAGE = {
    src: 'watchdrip/arrows/None.png',
    x: px(101+30+5+5+5),
    y: px(225+55),
    w: px(60),
    h: px(41),
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_STALE_IMG = {
//    x: px(69-45),
//    y: px(135-10),
    x: px(64-50-2),
    y: px(105+30+180),
    src: 'watchdrip/stale.png',
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};


export const IMG_LOADING_PROGRESS = {
    x: px(110+15),
    y: px(295+10),
    src: 'watchdrip/progress.png',
    angle: 0,
    center_x: 20,
    center_y: 20,
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};

// END Edit Widgets

