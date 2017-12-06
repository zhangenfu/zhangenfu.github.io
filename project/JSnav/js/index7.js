window.onload = function () {
    var li = document.querySelectorAll("#nav li");
    var o = true;
    li[li.length - 1].onclick = function () {
        for (var i = 0; i < li.length; i++) {
            var n = i - 6;
            // i:0 1 2 3 4 5 6 7 8 9 10 11

            //n:-6-5-4-3-2-1 0 1 2 3 4 5

            //deg:-90-75-60--45-30-15 0 15 30 45 60 75
            if (o) {
                n = n * 15;
            } else {
                n = 360;
            }
            li[i].style.transform = "rotate(" + n + "deg)";
        }
        //取反o是true的时候是false
        o = !o;
    };

    for (var i = 0; i < li.length - 1; i++) {
        li[i].index = i;//通过自定义属性赋值下标值；
        li[i].onclick = function () {
            //当前点击的导航：旋转至0度
            this.style.transform = "rotate(0deg)";

            console.log(this.index);
            //当前点击的左边的旋转的度数
            var leftDeg=0;
            //当前点击的导航的左边的导航：依次向左旋转
            for (var i = this.index-1; i >= 0; i--) {
                console.log(i);
                leftDeg=leftDeg-15;
                li[i].style.transform="rotate("+leftDeg+"deg)"
            }
            //当前点击的右边的元素
            var rightDeg=15;
            for(var i=this.index+1;i<li.length;i++){
                rightDeg=rightDeg+15;
                li[i].style.transform="rotate("+rightDeg+"deg)"
            }
        }
    }
};