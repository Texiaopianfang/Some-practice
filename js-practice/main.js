/**
 * jiangzhaojin
 */

// 判断是否是数组
function isArray(arr){
	return typeof arr === 'object' && Object.prototype.toString.call(arr).slice(8,-1) === 'Array';
}

// 判断是否时函数
function isFunction(func){
	return typeof func === 'function';
}

// 深度克隆
function getType(src){
	if (src === 'null') {
		return 'Null';
	} else if (src === undefined) {
        return 'Undefined'
	} else {
		return Object.prototype.toString.call(src).slice(8,-1);
	}
}
function cloneObject(obj){
    var o ;

    if (Object.prototype.toString.call(src).slice(8,-1)=='Array') {
    	o = [];
    } else if (Object.prototype.toString.call(src).slice(8,-1)=='Object') {
    	o = {};
    } else {
    	return obj;
    }

    for (var i in obj) {
    	if(src.hasOwnPrototype(i)) {
    		if (typeof i == 'object') {
    			o[i] = cloneObject(obj[i]);
    		} else {
    			o[i] = obj[i];
    		}
    	}
    }

    return o;
}

// 数组去重
Array.prototype.uniq = function(){
	var newArr = [];
	for (var i = 0; i < this.length; i++) {
		if(this.indexOf(this[i]) == i) {
            newArr.push(this[i]);
		} 
	}
	return newArr;
}

Array.prototype.uniq = function(){
	var newArr = [];
	var a = {};
	for (var i = 0; i < this.length; i++) {
		if(a[this[i]]) {
			continue;
		} else {
			newArr.push(this[i]);
			a[this[i]] = true;
		}
	}
	return newArr;
}

Array.prototype.uniq = function(){
	var newArr = [];
	for (var i = 0; i < this.length; i++) {
		if(newArr.indexOf(this[i]) == -1) {
			newArr.push(this[i]);
		}
	}
	return newArr;
}

// 对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制
Object.prototype.clone = function(){
    var o = this.constructor === Array ? [] : {};
    for(var e in this){
            o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
    }
    return o;
}

//编写一个方法 求一个字符串的字节长度
//假设：一个英文字符占用一个字节，一个中文字符占用两个字节

 function GetBytes(str){
    var len = str.length;
    var bytes = len;
    for(var i=0; i<len; i++){
        if (str.charCodeAt(i) > 255) bytes++;
    }
    return bytes;
}
alert(GetBytes("你好,as"));

// 遍历数组，对每个元素调用函数
function each(arr, fn){
	for(var i in arr){
		fn(arr[i], i);
	}
}

// 正则表达式练习

// 去空格
function trim(str){
    return str.replace(/^\s+|\s+$/g, '');
}

// 判断是否邮箱
function isEmail(emailStr) {
	var pattern = /^(\w+\.)*\w+@\w+(\.\w+)+$/;
	return pattern.test(emailStr);
}

// 判断是否手机号
function isMobilePhoneNum(num){
	var pattern = /^(\+\d{1,4})?\d{7,11}$/;
	pattern.test(num);
}

// 判断是否URL
function isUrl(url){

}

// -----------------------------------------//
// 增加样式
function addClass(element, className){
	var oldClassName = element.className;
	element.className = oldClassName == "" ? className : oldClassName+" "+className;
}

// 移除样式
function removeClass(element, className){
	var oldClassName = element.className;
	element.className = oldClassName.replace(className, "");
}

// 同一级元素判断
function isSiblingNode(element1, element2){
	return element1.parentNode === element2.parentNode;
}

//  获取

//------------------事件---------------//
// 事件处理
var EventUtil = {
	addEvent: function(element, event, listener){
    	if (element.addEventListener) {
            element.addEventListener(event, listener);
    	} else if(element.attachEvent) {
            element.attachEvent('on' + event, listener);
    	} else {
    		element['on' + event] = listener;
    	}		
	}
	removeEvent: function(element, event, listener){
		if (element.removeEventListener) {
			element.removeEventListener(event, listener);
		} else if(element.detachEvent) {
            element.detachEvent(event, listener);
		} else {
			element.['on' + event] = null;
		}
	}
}

