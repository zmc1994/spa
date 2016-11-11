module.exports = function(app) {
    // 浏览器拦截请求地址  重定向
    app.get('/User', function(req, res) {
        var use = req.session.user;
        // use = {
        //     name: 'zhangsan',
        //     phone: '17711111111'
        // }
        if (use) {
            // home.jade
            res.render('home', {
                username: use.name
            });
        } else {
            res.render('login', {});
        }
    });
};
