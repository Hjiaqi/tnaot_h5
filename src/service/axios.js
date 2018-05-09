import axios from 'axios';


axios.defaults.baseURL = 'http://www.url.com';//全局接口


export default async(url = '', data = {}, type = 'get', ContentType = '') => {
    let params = {};
	
    //如果是get则参数添加到params
    if (type === 'get') {
		Object.keys(data).forEach(key => {
			params[key] = data[key];
		})
	}

	//非文件上传data转为json格式
	if (type === 'post' && ContentType === '') {
		data = JSON.stringify(data);
	}

 	//文件上传data需整合到formData
    if (ContentType !== '') {
 		//文件上传需建立一个formdata进行上传
 		let formData = new FormData();
 		let dataKeys = Object.keys(data);
 	    for (var i = 0; i < dataKeys.length; i++) {
 	    	//多图上传
 	    	if (dataKeys[i] === 'images') {
                 let fileData = data[dataKeys[i]];
                 for (let k = 0; k < fileData.length; k++) {
                 	formData.append('images[]',fileData[k],fileData[k].name);
                 }
 	    	}else{
 	    		formData.append(dataKeys[i],data[dataKeys[i]]);
 	    	}
 	    }
 	    data = formData;
 	    //同时更改Content-Type
 	    axios.defaults.headers.post['Content-Type'] = ContentType;
    }else{
    	//默认Content-Type
 		axios.defaults.headers.post['Content-Type'] = 'application/json';
    }

	let requestConfig = {
		url: url,
		method: type,
        params: params,
		data: data,
		responseType: 'json'
	}
    //进行错误捕捉
	try {
		const response = await axios(url, requestConfig);
		let result;
		//返回结果为字符串则需进行转码
		if (typeof response.data === 'string') {
			result = JSON.parse(response.data);
		}else{
			result = response.data
		}
		return result;
	}
	catch (error) {
		throw new Error(error)
	}
}