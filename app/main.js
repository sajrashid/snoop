// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["jquery"], function ($) {

    require(['testModule'], function (t) {
        var val = 1;
        var x = t.someMethod(val);
    });
  $('body').append('jQuery ' + $.fn.jquery + ' loaded!');
});
