define([], function () {
    return   function (url) {
        return new  Promise(function (app,error) {
            var com = 'v!' + url;
            require([com], function (c) {
                app(c)
            })
        })
    }
})
