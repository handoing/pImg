;(function () {

	var pImg = {
		version: '0.1.0'
	}

    function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }

	function loadImgLabel() {
		var imgList = document.querySelectorAll('img');
		for (var i = 0; i < imgList.length; i++) {
			var src = imgList[i].getAttribute('_src');
			imgList[i].setAttribute('src', src);
		}
	}

	function imgBgLoad(list) {
		for (var i = 0; i < list.length; i++) {
			var className = list[i]['className'],
				url = list[i]['bgImgURL'];
			if (className.substr(-1) === '#') {
				document.querySelector(className).style.backgroundImage = "url('" + url +"')";
				continue;
			}
			var classList = document.querySelectorAll(className);
			for (var j = 0; j < classList.length; j++) {
				classList[j].style.backgroundImage = "url('" + url +"')";
			}
		}
	}


    var loader = function (imgList, callback, timeout) {
        timeout = timeout || 5000;
        imgList = isArray(imgList) && imgList || [];
        callback = typeof(callback) === 'function' && callback;

        var total = imgList.length,
            loaded = 0,
            imgages = [],
            _on = function () {
                loaded < total && (++loaded, callback && callback(loaded / total));
            };

        if (!total) {
            return callback && callback(1);
        }

        for (var i = 0; i < total; i++) {
            imgages[i] = new Image();
            imgages[i].onload = imgages[i].onerror = _on;
            imgages[i].src = imgList[i];
        }

        setTimeout(function () {
            loaded < total && (loaded = total, callback && callback(loaded / total));
        }, timeout * total);

    };

	var imgLoader = function (items, callback, isloadImgLabel) {
		var isloadImgLabel = isloadImgLabel === undefined ? true : isloadImgLabel;
		if (isloadImgLabel) {
			loadImgLabel();
		}
		var listData = items;
		imgBgLoad(listData);
		callback && callback();
	}


	pImg.loader = loader;
	pImg.replace = imgLoader;


    "function" === typeof define && define.cmd ? define(function () {
        return pImg
    }) : window.pImg = pImg;
    
})();