// script.js

// 页面加载完成后添加 loaded 类，触发渐入动画效果
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});

// 示例：模拟页面切换时触发渐出效果
function switchPage() {
    // 添加 fade-out 类触发渐出效果
    document.body.classList.add('fade-out');

    // 模拟页面切换逻辑，例如通过setTimeout模拟延时后的页面内容更新
    setTimeout(function() {
        // 移除 fade-out 类，确保下一个页面加载时渐入效果生效
        document.body.classList.remove('fade-out');
        // 可以在此处添加实际的页面切换逻辑
    }, 500); // 这里的500毫秒应该和CSS中opacity的过渡时间一致
}