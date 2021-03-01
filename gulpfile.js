const { src, dest } = require('gulp')
const del = require('del')

exports.default = () => {
    del.sync('lib')

    return src('src/**/*.js')
        .pipe(dest('lib/'))
}
