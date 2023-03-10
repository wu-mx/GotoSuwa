function operator(objList) {
	const result = [];

	const regex = /.+\s.+\s\d+(?:\s[Premium])?/;

	objList.forEach(obj => {
		if (regex.test(obj.name)) {
			obj.name = formatName(obj.name);
			result.push(obj);
		} else {
			result.push(obj);
		}
	});

	return result;
}

function formatName(name) {
	const countryMap = {
		"Hong Kong": "香港",
		"Singapore": "新加坡",
		"Argentina": "阿根廷",
		"Brazil": "巴西",
		"Indonesia": "印尼",
		"India": "印度",
		"Australia Sydney": "澳大利亚",
		"Canada": "加拿大",
		"Taiwan": "台湾",
		"Korea": "韩国",
		"Hungary": "匈牙利",
		"Turkey": "土耳其",
		"Ireland": "爱尔兰",
		"Austria": "奥地利",
		"Bulgaria": "保加利亚",
		"Sweden": "瑞典",
		"UK Coventry": "英国",
		"UK London": "英国",
		"Switzerland": "瑞士",
		"France": "法国",
		"Germany": "德国",
		"Russia Moscow": "俄罗斯",
		"Netherlands": "荷兰",
		"Japan": "日本",
		"USA San Jose": "美国",
		"USA Seattle": "美国",
	};

	const regex = /.+\s.+\s(\d+)(?:\s\[Premium\])?/;
	const match = name.match(regex);

	if (match) {
		const country = match[0].split(' ')[0];
		const number = match[1];
	        return `${country} v2|${countryMap[match[0].slice(country.length+1,-(match[1].length+1))]} ${number}|MPTCP|★★★`;
	} else {
		return name;
	}
}
