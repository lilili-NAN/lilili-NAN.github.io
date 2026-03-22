// 动态替换系统页面的背景图
var currentPath = window.location.pathname;
var webBg = document.getElementById('web_bg');

if (webBg) {
    // 字符串匹配：如果当前网址路径里包含 '/archives/'
    if (currentPath.includes('/archives/')) {
        // 强行注入新的背景图
        webBg.style.setProperty('background', 'url(/img/archives_bg.jpeg) center center / cover no-repeat fixed', 'important');
    }
    if (currentPath.includes('/categories/')) {
        // 强行注入新的背景图
        webBg.style.setProperty('background', 'url(/img/categories_bg.png) center center / cover no-repeat fixed', 'important');
    }
    if (currentPath.includes('/tags/')) {
        // 强行注入新的背景图
        webBg.style.setProperty('background', 'url(/img/tags_bg.jpeg) center center / cover no-repeat fixed', 'important');
    }
}