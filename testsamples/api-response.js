const axios=require('axios');

const responseapi = async (x) => {
	resp = await axios.get('https://www.googleapis.com/blogger/v3/blogs/289697706018745836/posts?maxResults=78&pageToken=CgkIThjBqavWiCoQ7Nv42_XQzYIE&key=AIzaSyByVxpTTF2jCtnZjlgmsIOW9vWC0KSL0Wg');
	console.log(resp.data);
	console.log(resp.data.items.length,resp.data.nextPageToken);
}

console.log(responseapi(1));
