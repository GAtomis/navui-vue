


export function useLazyload(eles: NodeListOf<Element>=document.querySelectorAll('img[data-src]')) {
    var viewHeight = document.documentElement.clientHeight;  // 可视化区域的高度
    var viewWidth = document.documentElement.clientWidth; // 可视化区域的宽度
    // console.log('获取所有的信息', eles)
    Array.prototype.forEach.call(eles, (item, index) => {
        console.log(item);
        let rect;
        if (item.dataset.src === '') {
            return;
        }
        rect = item.getBoundingClientRect();  // 返回元素的大小及其相对于视口的位置
        console.log('返回元素的大小及其相对于视口的位置', rect)

        //图片一进入可视区，动态加载
        if (rect.bottom >= 0 && rect.top < viewHeight) {
            let img = new Image();
            img.src = item.dataset.src;
            img.onload = function () {
                item.src = img.src;
            }
            item.removeAttribute('data-src');
        }
    })

}