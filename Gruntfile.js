module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	includes: {
		default: {
		  files: {
			//'probtn_concat_full.js': ['src/probtn_concat_template.js'], // Source files
			//'custom_include/maximonline_full.js': ['src/maximonline_template.js']
		  }
		}
	},
	uglify: {
		default: {
          files: {
			//what files we are uglifying
            //'probtn.js': ['probtn_full.js'],
			//'probtn_concat.js': ['probtn_concat_full.js'],
			//'bower/probtn_concat.js': ['probtn_concat_full.js'],
			//'bower/showinparent_concat.js': ['showinparent_concat.js'],
			//'custom_include/maximonline.js': ['custom_include/maximonline_full.js']
          }
        },
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n'
      }
    },
	/*githooks: {
		all: {
		  'pre-commit': 'default'
		},
		options: {
		  //run this template before commit - to add unglyfied probtn.js to commit
		  template: 'precommit.js'
		},
	}*/
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks('grunt-git');

  // Default task(s).
  //grunt.registerTask('default', ['includes', 'uglify']);
  
  // precommit.js
grunt.registerTask('default', '', function () {
	var done = this.async();
	
	var exec = require('child_process').exec;
	// https://npmjs.org/package/execSync
	// Executes shell commands synchronously
	//var sh = require('sync-exec').run;
	
	console.log(exec);

	console.log("test0");
	console.log("test1");
	
	var test1 = function() {
		console.log("test2");
	}
	
	exec('echo "hello world"', function (err, stdout, stderr) {
	 	  console.log(0);
			console.log(err);
			console.log(stdout);
		  exec('git add .', function (err, stdout, stderr) { 
			console.log(1);
			console.log(err);
			console.log(stdout);
			
			exec('git commit -m "bower"', function (err, stdout, stderr) { 
			console.log(2);
			console.log(err);
			console.log(stdout);
			
				exec('git push', function (err, stdout, stderr) { 
				console.log(3);
				console.log(err);
				console.log(stdout);
				
					done();
				});
			});
		  });	 
	});
});
 
 

  
};

