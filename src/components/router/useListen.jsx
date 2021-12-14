import { useEffect } from 'react'
import { rootHistory } from './Router'

/* 监听路由改变 */
function useListen(cb) {
    useEffect(()=>{
        if(!rootHistory) return ()=> {}
        /* 绑定路由事件监听器 */
        const unlisten = rootHistory.listen((location)=>{
             cb && cb(location)
        })
        return function () {
            unlisten && unlisten()
        }
    },[cb])
}
export default useListen