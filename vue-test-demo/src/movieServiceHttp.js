// 浏览器方法 获取数据
export default {
    async getMovies(page, pageSize) { // 得到每页的展示数据
        const arr = await fetch('http://localhost:8080/moviesData/movie.json')
            .then(resp => resp.json() );

        return {
            total: arr.length,
            pageMovies: arr.slice(page * pageSize - pageSize, page * pageSize)
        }
    },
    async getMoviesDetail(id) { // 得到单个数据
        id = +id;
        const arr = await fetch('http://localhost:8080/moviesData/movie.json')
            .then(resp => resp.json() );

        let newArr = arr.filter(ele => {
            return ele.id === id;
        });
        return newArr;
    },
    async login(loginId, loginPwd) { // 模拟登录验证，
        return new Promise(resolve => {
            setTimeout(() => {
                if (loginId === 'admin' && loginPwd === "123123") {
                    resolve({
                        loginId,
                        name: '超级管理员'
                    });
                }else {
                    resolve(null);
                }
            }, 1000)
        });
    }
}