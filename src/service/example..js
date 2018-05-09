import axios from './axios'
//POST请求例子
export const service = (DataObj1, DataObj2, ...) => axios('/second/url', {
	DataObj1,
	DataObj2,
	...
}, 'post');

//GIT请求
export const service = (order_no) => axios('/second/url', {
	order_no
}, 'get');

//GIT带参数请求
export const getApplyStatus = (DataObj1, DataObj2, ...) => axios('/second/url', {
	DataObj1,
	DataObj2,
	...
}, 'get');

//更多请求。如：上传文件等，详情请阅读axios.js文件。
