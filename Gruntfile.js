/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '320',            
            quality: 20
          },{
            name: 'small',
            width: '320',            
            quality: 40,
            suffix: '_2x'
          },{
            name: 'medium',
            width: '640',            
            quality: 40
          },{
            name: 'medium',
            width: '640',            
            quality: 60,
            suffix: '_2x'
          },{
            name: 'large',
            width: '1024',            
            quality: 80
          },{
            name: 'large',
            width: '1024',            
            quality: 100,
            suffix: '_2x'
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'public/images_src/',
          dest: 'public/images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['public/images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['public/images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'public/images_src/fixed/*.{gif,jpg,png}',
          dest: 'public/images/'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
