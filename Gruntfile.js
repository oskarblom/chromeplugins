module.exports = function(grunt) {

    var getjquery = {
        createfile: function() {
            var content = grunt.file.read("build/getjquery.min.js");
            var template = "<a href='javascript:<%= content %>'>Load jQuery</a>";
            var out = grunt.template.process(template, { data: { content: content }});
            grunt.file.write("build/getjquerybookmarklet.html", out);
            grunt.file.delete("build/getjquery.min.js");
            grunt.log.write("bookmarklet written to: build/getjquerybookmarklet.html\n");
        }
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            options: { compress: true, mangle: true, report: "min" },
            getjquery: { files: { "build/getjquery.min.js": ["src/getjquery.js"] } }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("getjquerytemplate", getjquery.createfile);
    grunt.registerTask("build", ["uglify:getjquery", "getjquerytemplate"]);
    grunt.registerTask("default", ["build"]);
};

