/**
 * ResizeObserver 监听元素尺寸变化
 * IntersectionObserver
 * MutationObserver 监听当前元素子集变化 元素属性，宽高 内容
 */
export default function useResize(el: HTMLElement, callback: (entry: ResizeObserverEntry) => void) {
  const resizeObserver = new ResizeObserver((entries) => {
    callback(entries[0])
  })
  resizeObserver.observe(el)
}
