module.exports = function(grunt) {
    "use strict";

    var getjquery = {
        srcfile: "src/getjquery/getjquery.js",

        destfile: "build/getjquery/getjquery.min.js",

        compilefile: "build/getjquery/getjquerybookmarklet.html",

        createfile: function() {
            var content = grunt.file.read(getjquery.destfile);
            var template = "<a href='javascript:<%= content %>'>Load jQuery</a>";
            var out = grunt.template.process(template, { data: { content: content }});
            grunt.file.write(getjquery.compilefile, out);
            grunt.file["delete"](getjquery.destfile);
            grunt.log.write("bookmarklet written to: " + getjquery.compilefile + "\n");
        },

        getuglifycfg: function() {
            var opts = {};
            opts[getjquery.destfile] =  [getjquery.srcfile];
            return opts;
        }
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            options: { compress: true, mangle: true, report: "min" },
            getjquery: { 
                files : getjquery.getuglifycfg()
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("getjquerytemplate", getjquery.createfile);
    grunt.registerTask("build", ["uglify:getjquery", "getjquerytemplate"]);
    grunt.registerTask("default", ["build"]);
};

