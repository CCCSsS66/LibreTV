// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'RC-TV',
    url: 'https://tv.100419.xyz',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.01.3'
};

// API站点配置
const API_SITES = {
const API_SITES = {
    ffzy: {
        api: 'http://ffzy1.tv',
        name: '非凡影视',
        detail: 'http://ffzy1.tv',
        filterAdRule: '#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.666667,[\\s\\S]*?#EXT-X-DISCONTINUITY'
    },
    tyyszy: {
        api: 'https://tyyszy.com',
        name: '天涯资源',
        detail: 'https://tyyszy.com',
        pngadult: false
    },
    ckzy: {
        api: 'https://ckzy.me',
        name: 'CK资源',
        detail: 'https://ckzy.me',
        adult: true
    },
    zy360: {
        api: 'https://360zy.com',
        name: '360资源',
        detail: 'https://360zy.com',
        pngadult: false
    },
    wolong: {
        api: 'https://collect.wolongzyw.com',
        name: '卧龙资源',
        detail: 'https://collect.wolongzyw.com',
        pngadult: false
    },
    jisu: {
        api: 'https://jszyapi.com',
        name: '极速资源',
        detail: 'https://jszyapi.com',
        pngadult: false
    },
    mozhua: {
        api: 'https://mozhuazy.com',
        name: '魔爪资源',
        detail: 'https://mozhuazy.com',
        pngadult: false
    },
    ruyi: {
        api: 'https://cj.rycjapi.com',
        name: '如意资源',
        detail: '',
        pngadult: false
    },
    jkun: {
        api: 'https://jkunzyapi.com',
        name: 'jkun资源',
        detail: 'https://jkunzyapi.com',
        adult: true
    },
    bwzy: {
        api: 'https://api.bwzyz.com',
        name: '百万资源',
        detail: 'https://api.bwzyz.com',
        adult: true
    },
    souav: {
        api: 'https://api.souavzy.vip',
        name: 'souav资源',
        detail: 'https://api.souavzy.vip',
        adult: true
    },
    r155: {
        api: 'https://155api.com',
        name: '155资源',
        detail: 'https://155api.com',
        adult: true
    },
    lsb: {
        api: 'https://apilsbzy1.com',
        name: 'lsb资源',
        detail: 'https://apilsbzy1.com',
        adult: true
    },
    huangcang: {
        api: 'https://hsckzy.vip',
        name: '黄色仓库',
        detail: 'https://hsckzy.vip',
        adult: true
    },
    zuid: {
        api: 'https://api.zuidapi.com',
        name: '最大资源',
        detail: 'https://api.zuidapi.com',
        pngadult: false
    },
    yutu: {
        api: 'https://apiyutu.com',
        name: '玉兔资源',
        detail: 'https://apiyutu.com',
        adult: true
    },
    1080zyku: {
        api: 'https://api.1080zyku.com',
        name: 'TV-1080资源',
        detail: 'https://api.1080zyku.com',
        pngadult: false
    },
    ukuapi: {
        api: 'https://api.ukuapi.com',
        name: 'TV-U酷资源',
        detail: 'https://api.ukuapi.com',
        pngadult: false
    },
    ukuapi88: {
        api: 'https://api.ukuapi88.com',
        name: 'TV-U酷资源88',
        detail: 'https://api.ukuapi88.com',
        pngadult: false
    },
    ikunzy: {
        api: 'https://ikunzyapi.com',
        name: 'TV-ikun资源',
        detail: 'https://ikunzyapi.com',
        pngadult: false
    },
    wujinapi_cc: {
        api: 'https://api.wujinapi.cc',
        name: 'TV-wujinapi无尽',
        detail: '',
        pngadult: false
    },
    yayazy: {
        api: 'https://cj.yayazy.net',
        name: 'TV-丫丫点播',
        detail: 'https://cj.yayazy.net',
        pngadult: false
    },
    guangsuapi: {
        api: 'https://api.guangsuapi.com',
        name: 'TV-光速资源',
        detail: 'https://api.guangsuapi.com',
        pngadult: false
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk',
        name: 'TV-小猫咪资源',
        detail: 'https://zy.xmm.hk',
        pngadult: false
    },
    xinlangapi: {
        api: 'https://api.xinlangapi.com',
        name: 'TV-新浪点播',
        detail: 'https://api.xinlangapi.com',
        pngadult: false
    },
    wujinapi_com: {
        api: 'https://api.wujinapi.com',
        name: 'TV-无尽资源',
        detail: '',
        pngadult: false
    },
    wujinapi_me: {
        api: 'https://api.wujinapi.me',
        name: 'TV-无尽资源',
        detail: '',
        pngadult: false
    },
    wujinapi_net: {
        api: 'https://api.wujinapi.net',
        name: 'TV-无尽资源',
        detail: '',
        pngadult: false
    },
    wwzy: {
        api: 'https://wwzy.tv',
        name: 'TV-旺旺短剧',
        detail: 'https://wwzy.tv',
        pngadult: false
    },
    wwzy_api: {
        api: 'https://api.wwzy.tv',
        name: 'TV-旺旺资源',
        detail: 'https://api.wwzy.tv',
        pngadult: false
    },
    bfzyapi: {
        api: 'https://bfzyapi.com',
        name: 'TV-暴风资源',
        detail: '',
        pngadult: false
    },
    zuidazy: {
        api: 'http://zuidazy.me',
        name: 'TV-最大点播',
        detail: 'http://zuidazy.me',
        pngadult: false
    },
    apiyhzy: {
        api: 'https://m3u8.apiyhzy.com',
        name: 'TV-樱花资源',
        detail: '',
        pngadult: false
    },
    yparse: {
        api: 'https://api.yparse.com/api/json',
        name: 'TV-步步高资源',
        detail: '',
        pngadult: false
    },
    niuniuzy: {
        api: 'https://api.niuniuzy.me',
        name: 'TV-牛牛点播',
        detail: 'https://api.niuniuzy.me',
        pngadult: false
    },
    dyttzyapi: {
        api: 'http://caiji.dyttzyapi.com',
        name: 'TV-电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com',
        pngadult: false
    },
    apibdzy: {
        api: 'https://api.apibdzy.com',
        name: 'TV-百度云资源',
        detail: 'https://api.apibdzy.com',
        pngadult: false
    },
    1080zyku_json: {
        api: 'https://api.1080zyku.com',
        name: 'TV-神马云',
        detail: 'https://api.1080zyku.com',
        pngadult: false
    },
    suoniapi: {
        api: 'https://suoniapi.com',
        name: 'TV-索尼资源',
        detail: '',
        pngadult: false
    },
    hongniuzy2: {
        api: 'https://www.hongniuzy2.com',
        name: 'TV-红牛资源',
        detail: 'https://www.hongniuzy2.com',
        pngadult: false
    },
    maotaizy: {
        api: 'https://caiji.maotaizy.cc',
        name: 'TV-茅台资源',
        detail: 'https://caiji.maotaizy.cc',
        pngadult: false
    },
    huyaapi: {
        api: 'https://www.huyaapi.com',
        name: 'TV-虎牙资源',
        detail: 'https://www.huyaapi.com',
        pngadult: false
    },
    dbzy_caiji: {
        api: 'https://caiji.dbzy.tv',
        name: 'TV-豆瓣资源',
        detail: 'https://caiji.dbzy.tv',
        pngadult: false
    },
    dbzy: {
        api: 'https://dbzy.tv',
        name: 'TV-豆瓣资源',
        detail: 'https://dbzy.tv',
        pngadult: false
    },
    hhzyapi: {
        api: 'https://hhzyapi.com',
        name: 'TV-豪华资源',
        detail: 'https://hhzyapi.com',
        pngadult: false
    },
    subocaiji: {
        api: 'https://subocaiji.com',
        name: 'TV-速博资源',
        detail: '',
        pngadult: false
    },
    lziapi: {
        api: 'https://cj.lziapi.com',
        name: 'TV-量子资源',
        detail: '',
        pngadult: false
    },
    jinyingzy: {
        api: 'https://jinyingzy.com',
        name: 'TV-金鹰点播',
        detail: 'https://jinyingzy.com',
        pngadult: false
    },
    jyzyapi: {
        api: 'https://jyzyapi.com',
        name: 'TV-金鹰资源',
        detail: 'https://jyzyapi.com',
        pngadult: false
    },
    sdzyapi: {
        api: 'https://sdzyapi.com',
        name: 'TV-闪电资源',
        detail: 'https://sdzyapi.com',
        pngadult: false
    },
    ffzyapi: {
        api: 'https://cj.ffzyapi.com',
        name: 'TV-非凡资源',
        detail: 'https://cj.ffzyapi.com',
        pngadult: false
    },
    p2100: {
        api: 'https://p2100.net',
        name: 'TV-飘零资源',
        detail: 'https://p2100.net',
        pngadult: false
    },
    moduapi: {
        api: 'https://caiji.moduapi.cc',
        name: 'TV-魔都动漫',
        detail: 'https://caiji.moduapi.cc',
        pngadult: false
    },
    mdzyapi: {
        api: 'https://www.mdzyapi.com',
        name: 'TV-魔都资源',
        detail: 'https://www.mdzyapi.com',
        pngadult: false
    },
    heimuer: {
        api: 'https://json.heimuer.xyz',
        name: 'TV-黑木耳',
        detail: 'https://json.heimuer.xyz',
        pngadult: false
    },
    heimuer02: {
        api: 'https://json02.heimuer.xyz',
        name: 'TV-黑木耳点播',
        detail: 'https://json02.heimuer.xyz',
        pngadult: false
    },
    '91md': {
        api: 'https://91md.me',
        name: 'AV-91麻豆',
        detail: 'https://91md.me',
        pngadult: true
    },
    lbapiby: {
        api: 'http://lbapiby.com',
        name: 'AV-AIvin',
        detail: '',
        pngadult: true
    },
    lbapi9: {
        api: 'https://lbapi9.com',
        name: 'AV-乐播资源',
        detail: '',
        pngadult: true
    },
    aosikazy: {
        api: 'https://aosikazy.com',
        name: 'AV-奥斯卡资源',
        detail: 'https://aosikazy.com',
        pngadult: true
    },
    naixxzy: {
        api: 'https://Naixxzy.com',
        name: 'AV-奶香香',
        detail: 'https://Naixxzy.com',
        pngadult: true
    },
    slapibf: {
        api: 'https://slapibf.com',
        name: 'AV-森林资源',
        detail: 'https://slapibf.com',
        pngadult: true
    },
    xrbsp: {
        api: 'https://www.xrbsp.com',
        name: 'AV-淫水机资源',
        detail: 'https://www.xrbsp.com',
        pngadult: true
    },
    fhapi9: {
        api: 'http://fhapi9.com',
        name: 'AV-番号资源',
        detail: '',
        pngadult: true
    },
    kxgav: {
        api: 'https://www.kxgav.com',
        name: 'AV-白嫖资源',
        detail: 'https://www.kxgav.com',
        pngadult: true
    },
    jingpinx: {
        api: 'https://www.jingpinx.com',
        name: 'AV-精品资源',
        detail: 'https://www.jingpinx.com',
        pngadult: true
    },
    msnii: {
        api: 'https://www.msnii.com',
        name: 'AV-美少女资源',
        detail: 'https://www.msnii.com',
        pngadult: true
    },
    sexnguon: {
        api: 'https://api.sexnguon.com',
        name: 'AV-色嗨国',
        detail: 'https://api.sexnguon.com',
        pngadult: true
    },
    maozyapi: {
        api: 'https://api.maozyapi.com',
        name: 'AV-色猫资源',
        detail: 'https://api.maozyapi.com',
        pngadult: true
    },
    apilj: {
        api: 'https://apilj.com',
        name: 'AV-辣椒资源',
        detail: 'https://apilj.com',
        pngadult: true
    },
    gdlsp: {
        api: 'https://www.gdlsp.com',
        name: 'AV-香奶儿资源',
        detail: 'https://www.gdlsp.com',
        pngadult: true
    },
    shayuapi: {
        api: 'https://shayuapi.com',
        name: 'AV-鲨鱼资源',
        detail: 'https://shayuapi.com',
        pngadult: true
    },
    pgxdy: {
        api: 'https://www.pgxdy.com',
        name: 'AV-黄AV资源',
        detail: 'https://www.pgxdy.com',
        pngadult: true
    },
    ffzynew: {
        api: 'https://api.ffzyapi.com',
        name: '非凡影视new',
        detail: 'http://ffzy5.tv',
        pngadult: false
    },
    gayapi: {
        api: 'https://gayapi.com',
        name: '快播资源网站',
        detail: '',
        pngadult: false
    },
    xingba111: {
        api: 'https://xingba111.com',
        name: '性吧资源',
        detail: '',
        pngadult: true
    },
    aiduanju: {
        api: 'https://www.aiduanju.cc/',
        name: '爱短剧.cc',
        detail: '',
        pngadult: false
    },
    huawei8: {
        api: 'https://huawei8.live',
        name: '华为吧资源',
        detail: '',
        pngadult: false
    },
    taopianapi: {
        api: 'https://taopianapi.com',
        name: '淘片资源',
        detail: '',
        pngadult: false
    },
    hongniuzy3: {
        api: 'https://www.hongniuzy3.com',
        name: '红牛资源',
        detail: '',
        pngadult: false
    },
    xsd_sdzyapi: {
        api: 'https://xsd.sdzyapi.com',
        name: '索尼-闪电资源',
        detail: '',
        pngadult: false
    },
    jyzyapi_provide: {
        api: 'https://jyzyapi.com',
        name: '金鹰资源采集网',
        detail: '',
        pngadult: false
    },
    fczy888: {
        api: 'https://api.fczy888.me',
        name: '蜂巢片库',
        detail: '',
        pngadult: false
    },
    jmzy: {
        api: 'https://api.jmzy.com',
        name: '金马资源网',
        detail: '',
        pngadult: false
    },
    dadiapi: {
        api: 'https://dadiapi.com',
        name: '大地资源网络',
        detail: '',
        pngadult: false
    },
    hsckzy888: {
        api: 'https://hsckzy888.com',
        name: '黄色资源啊啊',
        detail: '',
        pngadult: true
    },
    xiaojizy: {
        api: 'https://api.xiaojizy.live',
        name: '小鸡资源',
        detail: '',
        pngadult: false
    },
    kuaichezy: {
        api: 'https://caiji.kuaichezy.org',
        name: '快车资源阿',
        detail: '',
        pngadult: false
    },
    xinlangapi_provide: {
        api: 'https://api.xinlangapi.com',
        name: '新浪资源阿',
        detail: '',
        pngadult: false
    },
    apilj_provide: {
        api: 'https://apilj.com',
        name: '辣椒资源黄黄',
        detail: '',
        pngadult: false
    },
    yzzy_api: {
        api: 'https://api.yzzy-api.com',
        name: '优质资源库1080zyk6.com高清',
        detail: '',
        pngadult: false
    },
    iqiyizyapi: {
        api: 'https://www.iqiyizyapi.com',
        name: 'iqiyi资源',
        detail: '',
        pngadult: false
    },
    xxibaozyw: {
        api: 'https://www.xxibaozyw.com',
        name: '细胞采集黄色',
        detail: '',
        pngadult: true
    },
    qiqidys: {
        api: 'https://www.qiqidys.com',
        name: '七七影视',
        detail: '',
        pngadult: false
    }
};


// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
