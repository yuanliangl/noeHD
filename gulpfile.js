let g=require("gulp");
let htmlmin =require("gulp-htmlmin");
let cssmin = require("gulp-clean-css");
let uglify = require("gulp-uglify");
let concat = require("gulp-concat");
let connect = require("gulp-connect");



g.task("watch-all", async () => {
    g.watch("./css/**/*", async () => {
        g.src("./css/**/*")
            // 压缩css
            // .pipe(cssmin())
            .pipe(g.dest("D:\\phpStudy\\WWW\\noe\\css"))
    });
    // 监听html
    g.watch("./*.html", async () => {
        g.src("./*.html")
            // 压缩html
            // .pipe(htmlmin({
            //     collapseWhitespace: true,
            //     removeComments: true,
            //     collapseBooleanAttributes: true,
            //     removeEmptyAttributes: true,
            //     removeScriptTypeAttributes: true,
            //     removeStyleLinkTypeAttributes: true,
            //     minifyJS: true,
            //     minifyCSS: true
            // }))
            .pipe(g.dest("D:\\phpStudy\\WWW\\noe"));
    });
    g.watch("./js/**/*", async () => {
        g.src("./js/**/*")
        .pipe(g.dest("D:\\phpStudy\\WWW\\noe\\js"))
    });
    g.watch("./images/**/*", async () => {
        g.src("./images/**/*")
        .pipe(g.dest("D:\\phpStudy\\WWW\\noe\\images"))
    });
    g.watch("./icon/**/*", async () => {
        g.src("./icon/**/*")
        .pipe(g.dest("D:\\phpStudy\\WWW\\noe\\icon"))
    });
    g.watch("./php/**/*", async () => {
        g.src("./php/**/*")
        .pipe(g.dest("D:\\phpStudy\\WWW\\noe\\php"))
    });
});