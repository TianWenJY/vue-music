import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config.js'
import axios from 'axios'

export function getRecommend () {
   const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
   const data = Object.assign({},commonParams, {platform: 'h5',uin: 0,needNewCode: 1})

    return jsonp(url, data, options)
}

export function getDiscList () {
	const url = '/getDiscList'

	const data = Object.assign({},commonParams,{
		plateform: 'yyq',
		hostUin: 0,
		sin: 0,
		ein: 29,
		sortId:5,
		needNewCode: 0,
		categoryId: 10000000,
		rnd: Math.random()
	})
	   return axios.get(url,{
    	param: data
    }).then((response) => {
    	return Promise.resolve(response.data)
    	console.log(response)
    	alert(response)

    	console.log(response)
    })
}
