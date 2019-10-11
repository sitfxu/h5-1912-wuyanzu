function alertSet(e) {
    document.getElementById("js-alert-box").style.display = "block",
    document.getElementById("js-alert-head").innerHTML = e;
    var t = 3,
    n = document.getElementById("js-sec-circle");
    document.getElementById("js-sec-text").innerHTML = t,
    setInterval(function() {
        if (0 == t){
			location.href="./store.html";//#时间到后跳转地址
		}else {
            t -= 1,
            document.getElementById("js-sec-text").innerHTML = t;
            var e = Math.round(t / 10 * 735);
            n.style.strokeDashoffset = e - 735
        }
    },
    970);
}
alertSet('micro欢迎你');