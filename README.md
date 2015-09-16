# gulp-add-imported-styles [![NPM version](https://badge.fury.io/js/gulp-add-imported-styles.svg)](http://badge.fury.io/js/gulp-add-imported-styles)

> gulp plugin generate style with imports from links array and add it into stream

## Install with [npm](npmjs.org)

```sh
npm install gulp-add-imported-styles
```

## Usage

```js
var gulpAddImportedStyles = require('gulp-add-imported-styles');

gulp.src('styles/**/*')
    .pipe(gulpAddImportedStyles())
    
//We have stream with compiled files which include paths of styles in `@import`. F.e.:
//compiled.styl
//@import 'styles/variables.styl';
//@import 'styles/mixins.styl';
//
//compiled.sass
//@import 'styles/variables.styl';
//@import 'styles/mixins.styl';
//
//compiled.css
//@import 'styles/main.css';

gulp.src('styles/**/*')
    .pipe(gulpAddImportedStyles([
            'stylus/variables.styl',
            'css/main.css',
            'stylus/mixins.styl',
            'css/extra.css'
        ],
        {basename: 'main'}))
    
//We have stream with two extra files. F.e.:
//some.styl
//some.css
//... other styles from src stream
//
//main.styl
//@import 'stylus/variables.styl';
//@import 'stylus/mixins.styl';
//
//main.css
//@import 'css/main.css';
//@import 'css/extra.css';
```


## API
### gulpAddImportedStyles([styles][, options])
#### styles
Type: `Array`

Array of styles paths. If not defined then styles will be taken from the stream and will be overridden by compiled files

#### options
Type: `Object`

##### cwd
Type: `String`

The current working directory in which to search

##### basename
Type: `String`
Default: `compiled`

Output file basename

##### exclude
Type: `Array`

Array of excluded file extensions of base stream (if `styles` not used). F.e. `exclude: ['css']`

### gulpAddImportedStyles.src(styles[, options])

Create stream from styles array


## License

Copyright (c) 2014-2015 Oleg Istomin
Released under the MIT license

***