//包含n个接口请求函数
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops', {longitude, latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})
// [5、获取一次性验证码](#5获取一次性验证码)
// [6、用户名密码登陆](#6用户名密码登陆)
// [7、发送短信验证码](#7发送短信验证码)
// [8、手机号验证码登陆](#8手机号验证码登陆)
// [9、根据会话获取用户信息](#9根据会话获取用户信息)
// [10、用户登出](#10用户登出)