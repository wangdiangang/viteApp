import $http from "../request/index.js"



function getCode(data) {
    return $http({
        url:"/user/getShearCaptcha",
        data,
        method:'post'
    })
}
function getName1(data) {
    return $http({
        url:"/getName?name="+data.name,
        data,
        method:'get'
    })
}
function interface1(data) {
    return $http({
        url:'/interface1',
        data,
        method:'post'
    })
}
function interface2(data) {
    return $http({
        url:'/interface2',
        data,
        method:'post'
    })
}
export {
    getCode,
    interface1,
    interface2,
    getName1
}