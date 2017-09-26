<template>
    <div id="div1">
        <div id="div3">
            <transition name="expand">
            <img :src="pics"  v-for="(pics,index) in  pic" v-if="index===selectIndex">
            </transition>
        </div>
        <div id="text" v-for="(texts,index) in text" v-show="index===selectIndex">{{texts}}</div>
        <div id="div2">
            <ul id="ul1">
                <li v-for="(icos,index) in ico"  :class="{img1:index===selectIndex}">
                    <img :src="icos" @click="changeIndex(index)" @mouseout="change()"/>
                </li>
            </ul>

        </div>


    </div>
</template>
<script>
    export default {
        data(){
            return{
                pic:['images/pic_1.jpg','images/pic_2.jpg','images/pic_3.jpg','images/pic_4.jpg','images/pic_5.jpg','images/pic_6.jpg','images/pic_7.jpg','images/pic_8.jpg'],
                ico:['images/ico_1.jpg','images/ico_2.jpg','images/ico_3.jpg','images/ico_4.jpg','images/ico_5.jpg','images/ico_6.jpg','images/ico_7.jpg','images/ico_8.jpg'],
                text:['文字一','文字二','文字三','文字四','文字五','文字六','文字七','文字八',],
                selectIndex:0,
                timer:null,
            }
        },
        mounted(){
            this.change();
        },
        methods:{
            change:function(){
                clearInterval(this.timer);
                var _this=this;
                this.timer=setInterval(function(){
                    _this.selectIndex++;
                    if(_this.selectIndex>=7){
                        _this.selectIndex=0;
                    }
                },3000)
            },
            changeIndex:function(index){
                this.selectIndex=index;
                clearInterval(this.timer);
            }
        }
     }
</script>
<style lang="less" scoped>
  * {
            margin: 0;
            padding: 0;
        }
        .expand-transition{
            transition: all 3s ease;
            display: inline-block;
            opacity: 0;
        }
        .expand-enter,
        .expand-leave {
            opacity: 0;
        }
        #div1 {
            height: 330px;
            width: 660px;
            margin: 40px auto;
            position: relative;
        }
        
        #div1 img {
            position: absolute;
        }
        
        #div1 #img1 {
            display: block;
        }
        #div1 #text {
            position: absolute;
            z-index: 2;
            top: 248px;
            left: 70px;
            color: #fff;
        }
        
        #div1 #ul1 {
            list-style-type: none;
            position: absolute;
            z-index: 3;
            margin-top: 10px;
            position: absolute;
            width: 540px;
            height: 40px;
            top: -10px;
        }
        
        #div1 li {
            float: left;
            margin-left: 7px;
            margin-top: 5px;
            border: 2px solid;
        }
        .img1{
            border-color:#fff !important;
        }

        #div1 ul li img {
            display: block;
            position: static;
        }
        
        #div1 #div2 {
            width: 530px;
            height: 45px;
            position: absolute;
            z-index: 10;
            top: 280px;
            left: 10px;
            overflow: hidden;
        }
        
        #div1 #a_hover {
            position: absolute;
            z-index: 4;
            display: block;
            margin-left: 37px;
        }
</style>