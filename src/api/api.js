import $http from "../request/index.js"



function getCode(data) {
    return $http({
        url:"/service/user/getShearCaptcha",
        data,
        method:'post'
    })
}

export {
    getCode
}