/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 let compareVersion = function(version1, version2) {
    const v1_arr = version1.split(".")
    const v2_arr = version2.split(".")

    for(let i = 0; i < v1_arr.length || i < v2_arr.length; i++){
        let x = 0,y = 0
        if(i < v1_arr.length){
            x = parseInt(v1_arr[i])
        }
        if(i < v2_arr.length){
            y = parseInt(v2_arr[i])
        }
        // 逻辑完整 x = y
        if(x > y) return 1
        if(x < y) return -1
    }

    return 0
};