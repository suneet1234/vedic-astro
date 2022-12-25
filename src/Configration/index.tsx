//================= Network Configration =======================//
const URIS = {
    DEVELOPMENT: 'https://reqres.in/api/',
    PRODUCTION: '',
    STAGING: '',
};

const HTTP_CODES = {
    SUCCESS: 200,
    UNAUTHORIZED: 401,
    VALIDATION: 422,
    SERVER_ERROR: 500,
};

const URI_METHODs = {
    LOGIN: 'users',
    REGISTRATION: 'user/registration'
};

const STATIC_PAGE = {
    PRIVACY_POLICY: '',
    TERMS_CONDITION: ''
}

//================== Font Family =============================//
const FONT_FAMILIES = {
    HEAVY: 'FuturaPT-Heavy',
    MEDIUM: 'FuturaPT-Medium',
    BOLD: 'FuturaPT-Bold',
    DEMI: 'FuturaPT-Demi',
    LIGHT: 'FuturaPT-Light',
    REGULAR: 'FuturaPT',
    BOOK: 'FuturaPT-Book'
};

//================ MARGIN and PADDINGS ===================//

const METRICS = {
    MAR_5: 5,
    MAR_8: 8,
    MAR_9: 9,
    MAR_10: 10,
    MAR_11: 11,
    MAR_12: 12,
    MAR_13: 13,
    MAR_14: 14,
    MAR_15: 15,
    MAR_16: 16,
    MAR_17: 17,
    MAR_18: 18,
    MAR_19: 19,
    MAR_20: 20,
    MAR_21: 21,
    MAR_22: 22,
    MAR_23: 23,
    MAR_24: 24,
    MAR_25: 25,
    MAR_29: 29,
    MAR_30: 30,
    MAR_32: 32,
    MAR_35: 35,
    MAR_40: 40,
    MAR_45: 45,
    MAR_50: 50,
    MAR_55: 55,
    MAR_60: 60,
    MAR_66: 66,
    MAR_81: 81,
    MAR_104: 104,
    MAR_110: 110,
    MAR_120: 120,
    MAR_131: 131,
    MAR_200: 200,
    MAR_250: 250,
    MAR_180: 180,
    MAR_220: 220
};

const START_COORDS = {
    x: 0.7,
    y: 0.05,
}
const END_COORDS = {
    x: 0.15,
    y: 0.78,
}

//==================== Define Colors ========================//
const COLORS = {
    WHITE_NORMAL: 'rgb(255,255,255)',
    GRADIENT: 'rgb(0,0,0)',
    BLACK_LOGIN: 'rgb(37,35,31)',
    BLACK_TRANS: 'rgba(30,29,29,0.9)',
    GRAY_BACKGROUND: 'rgba(190,190,190,0.5)',
    GRAY: 'gray',
    BORDER_COLOR: 'rgb(190,143,48)',
    WHITE: 'white',
    DIVIDER:'rgbe(132,240,116,0.2)',
    BLACK: 'black',
    RED: 'red',
    GREEN: 'green',
    GRAY_255_6: 'rgba(255,255,255,0.6)',
    GOLD: '#E6C65B',
    YEL: 'rgb(255,212,13)',
    MED: 'rgb(190,143,48)',
    NEW1:'rgba(190,143,48,0.5)',
    NORMAL_BLAC: 'rgba(30,29,29,0.9)',
    SIGNUP: 'rgb(191,144,48)',
    POP: 'rgb(5,63,25)',
    POP_UP: 'rgb(33,31,29)',
    HEADER: 'rgb(19,18,18)',
    DASHBOARD: 'rgb(30,29,29)',
    HOME: 'rgb(19,37,21)',
    TEXT: 'rgb(235,0,27)',
    BACK:'rgba(56,55,55,0.5)',
    BACK2:'rgb(56,55,55)',
    GET: 'rgb(240,208,110)',
    BORD:'rgb(246,172,21)',
    BORD1:'rgb(246,172,21,0.5)',
    LEFT:'rgb(191,144,48)',
    NEW:"rgba(216,187,60,0.1)",
    BOL:"rgb(216,187,60)",
    NO:'rgb(139,114,1)',
    NONE:'rgb(255,243,59)',
    MALE:'rgb(33,31,29)',
    BACK1:'rgba(56,55,55,0.25)',
    NO1:'rgba(191,144,48,0.1)',
    MED2: 'rgba(190,143,48,0.25)',
    GRAD: ["rgb(195, 160, 83)", "rgb(246, 216, 118)", "rgb(252, 226, 126)", "rgb(195, 160, 83)"],
    GRAD1: ['rgba(191,144,48,0.1)','rgba(191,144,48,0.1)'],
    GRAD2: ['rgb(190,143,48)','rgb(190,143,48)'],
};

//========================= FONT SIZE =========================//
const FONT_SIZES = {
    H1: 24,
    H2: 16,
    H3: 14,
    H4: 12,
    H5: 18,
    H6: 20,
    H7: 36,
};

export {
    HTTP_CODES,
    FONT_FAMILIES,
    FONT_SIZES,
    URIS,
    COLORS,
    METRICS,
    URI_METHODs,
    STATIC_PAGE,
    START_COORDS,
    END_COORDS
};