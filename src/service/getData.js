// 引用封装的fetch进行请求数据
import fetch from '../config/fetch'



// 获取首页默认地址
export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});

// 获取首页热门城市
export const hotcity = () => fetch('/v1/cities',{
  type:'hot'
});


// 获取首页所有所有城市
export const groupcity = () => fetch('/v1/cities',{
  type:'group'
});
