# pImg
A preload picture of the JS Library

Usage, please see the source code, do not too much introduction

```javascript

	var num;

	pImg.loader([
		'images/a.png', 
		'images/b.png'
	], function(percentage){
		num = Math.ceil(percentage * 100);

        if (num >= 100) {
            pImg.replace(function() {
            	console.log('complate');
            });
        }

	});

```