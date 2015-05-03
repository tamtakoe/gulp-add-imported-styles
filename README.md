# gulp-add-imported-styles [![NPM version](https://badge.fury.io/js/gulp-add-imported-styles.svg)](http://badge.fury.io/js/gulp-add-imported-styles)

> gulp plugin generate style with imports from links array and add it into stream

## Install with [npm](npmjs.org)

```sh
npm install gulp-add-imported-styles
```

## Usage

```js
var gulpAddImportedStyles = require('gulp-add-imported-styles');

gulp.src('src/**/*.js')
    .pipe(gulpAddImportedStyles([
            'stylus/variables.styl',
            'css/main.css',
            'stylus/mixins.styl',
            'css/extra.css'
        ],
        {basename: 'main'}))
    
//We have stream with two files:
//main.styl
//@import 'stylus/variables.styl';
//@import 'stylus/mixins.styl';
//
//main.css
//@import 'css/main.css';
//@import 'css/extra.css';
```


## API
### styles
Type: `Array`

Array of styles paths

### options
Type: `Object`

#### Parameters

##### cwd
Type: `String`

The current working directory in which to search

##### basename
Type: `String`
Default: `compiled`

Output file basename


## License

Copyright (c) 2014-2015 Oleg Istomin
Released under the MIT license

***