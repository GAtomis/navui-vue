

/**
 * @description:  返回公共的icon
 * @param {array} arr classname列表
 * @return {*}
 */
export default (...arr:string[])=>{
    return ()=><i class={['iconfont',...arr]}>  </i>
}

