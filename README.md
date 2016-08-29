# pImg
A preload picture of the JS Library

Usage, please see the source code, do not too much introduction

```javascript

	pImg.loader([
		'images/a.png', 
		'images/b.png'
	], function(percentage){
    	console.log(percentage);
	});

	pImg.replace([
		{
			className: '#abc',
			bgImgURL: 'images/c.png'
		},
		{
			className: '.abcd',
			bgImgURL: 'images/d.png'
		}
	], function() {
		console.log('complate');
	});

```