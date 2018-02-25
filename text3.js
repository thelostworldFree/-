init(50, "legend",1300,900,main);
var selfTextAll1,selfTextAll2,selfTextAll3,selfTextAll4,selfTextAll5,selfTextAll6,selfTextAll7,selfTextAll8,selfTextAll9,selfTextAll10,selfTextAll11,selfTextAll12,
    selfTextAll13,selfTextAll14,selfTextAll15,selfTextAll16,selfTextAll17,selfTextAll18;

var backLayer,pictureLayer1,pictureLayer2,pictureLayer3,textLayer1,textLayer2,textLayer3,textLayer4,textLayer5,textLayer6,textLayer7,textLayer8,textLayer9,textLayer10,textLayer11,textLayer12,textLayer13,textLayer14;

var imgData = new Array({name:"Background1",path:"111.png"},{name:"Background2",path:"222.png"},{name:"Background3",path:"333.png"},{name:"Background4",path:"444.png"},{name:"Background5",path:"555.png"},{name:"Background6",path:"666.png"});
var imglist={};

function main(){
    loadingLayer = new LoadingSample3();
    backLayer = new LSprite();
    addChild(backLayer);
    loadingLayer = new LoadingSample3();
    backLayer.addChild(loadingLayer);
    sound = new LSound();
    sound2 = new LSound();

    LLoadManage.load(
        imgData,
        function(progress) {
            loadingLayer.setProgress(progress);
        },
        function(result) {
            imglist=result;
            backLayer.removeChild(loadingLayer);
            loadingLayer = null;
            gameInit();
          
        }           
    );    
    
}

function  gameInit(){
    backLayer=new LSprite();
    backLayer.graphics.drawRect(0,"#4a4a4a",[0,0,1200,1200]);
    backLayer.x=10;
    backLayer.y=30;
    addChild(backLayer);
   

    selfTextAll1 = new LTextField();
    selfTextAll1.text="5.综合素质与核心能力指标构成";
    selfTextAll1.weight ="bolder";
    selfTextAll1.size="25";
    selfTextAll1.x = 0;
    selfTextAll1.y = 0;
    backLayer.addChild(selfTextAll1);
    picture1();
    picture2();
    picture3();
  
}


function picture1() {
	pictureLayer1 = new LSprite();
    pictureLayer1.graphics.drawRect(0,"#4a4a4a",[0,0,650,420]);
    pictureLayer1.x=0;
    pictureLayer1.y=30; 
    backLayer.addChild(pictureLayer1);

    var bgimg = new LBitmap(new LBitmapData(imglist["Background2"],0,0,525,363));
    bgimg.x=100;
    bgimg.y=50;
    pictureLayer1.addChild(bgimg);

    selfTextAll2 = new LTextField();
    selfTextAll2.text="（1）综合素质与核心能力指标构成雷达图";
    selfTextAll2.weight ="bolder";
	selfTextAll2.size="16";
	selfTextAll2.x = 0;
	selfTextAll2.y = 0;
    pictureLayer1.addChild(selfTextAll2);

    textLayer1 = new LSprite();
    textLayer1 .x=270;
    textLayer1 .y=40; 
    pictureLayer1.addChild(textLayer1);

    selfTextAll3 = new LTextField();
    selfTextAll3.text="数学与计算机应用能力";
    selfTextAll3.weight ="bolder";
    selfTextAll3.size="14";
    selfTextAll3.x = 0;
    selfTextAll3.y = 0;
    textLayer1.addChild(selfTextAll3);


    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer1.useCursor="pointer";

    textLayer1.addEventListener(LMouseEvent.MOUSE_OVER,function(){
        selfTextAll3.color="blue";
    }); 
    
    textLayer1.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll3.color="black";
    });
     
    textLayer1.addEventListener(LMouseEvent.MOUSE_UP,function(){
    });

    textLayer2 = new LSprite();
    textLayer2 .x=450;
    textLayer2 .y=100; 
    pictureLayer1.addChild(textLayer2);

    selfTextAll4 = new LTextField();
    selfTextAll4.text="公共服务与专业基础能力";
    selfTextAll4.weight ="bolder";
    selfTextAll4.size="14";
    selfTextAll4.x = 0;
    selfTextAll4.y = 0;
    textLayer2.addChild(selfTextAll4);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer2.useCursor="pointer";

    textLayer2.addEventListener(LMouseEvent.MOUSE_OVER,function(){
       selfTextAll4.color="blue";
    });
    textLayer2.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll4.color="black";
    });

    textLayer2.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });

    textLayer3 = new LSprite();
    textLayer3 .x=500;
    textLayer3 .y=210; 
    pictureLayer1.addChild(textLayer3);

    selfTextAll5 = new LTextField();
    selfTextAll5.text="车站客运管理基础能力";
    selfTextAll5.weight ="bolder";
    selfTextAll5.size="14";
    selfTextAll5.x = 0;
    selfTextAll5.y = 0;
    textLayer3.addChild(selfTextAll5);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer3.useCursor="pointer";

    textLayer3.addEventListener(LMouseEvent.MOUSE_OVER,function(){
       selfTextAll5.color="blue";

    });
    textLayer3.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll5.color="black";
    });
    textLayer3.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });

    textLayer4 = new LSprite();
    textLayer4 .x=50;
    textLayer4 .y=210; 
    pictureLayer1.addChild(textLayer4);

    selfTextAll6 = new LTextField();
    selfTextAll6.text="应急处理基本能力";
    selfTextAll6.weight ="bolder";
    selfTextAll6.size="14";
    selfTextAll6.x = 0;
    selfTextAll6.y = 0;
    textLayer4.addChild(selfTextAll6);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer4.useCursor="pointer";

    textLayer4.addEventListener(LMouseEvent.MOUSE_OVER,function(){
       selfTextAll6.color="blue";

    });
    textLayer4.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll6.color="black";
    });
    textLayer4.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });

    textLayer5 = new LSprite();
    textLayer5 .x=450;
    textLayer5 .y=330; 
    pictureLayer1.addChild(textLayer5);

    selfTextAll7 = new LTextField();
    selfTextAll7.text="票务服务与管能力";
    selfTextAll7.weight ="bolder";
    selfTextAll7.size="14";
    selfTextAll7.x = 0;
    selfTextAll7.y = 0;
    textLayer5.addChild(selfTextAll7);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer5.useCursor="pointer";

    textLayer5.addEventListener(LMouseEvent.MOUSE_OVER,function(){
       selfTextAll7.color="blue";

    });
    textLayer5.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll7.color="black";
    });
    textLayer5.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });

    textLayer6 = new LSprite();
    textLayer6 .x=220;
    textLayer6 .y=390; 
    pictureLayer1.addChild(textLayer6);

    selfTextAll8 = new LTextField();
    selfTextAll8.text="车站客运管理基础行车组织基本能力";
    selfTextAll8.weight ="bolder";
    selfTextAll8.size="14";
    selfTextAll8.x = 0;
    selfTextAll8.y = 0;
    textLayer6.addChild(selfTextAll8);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer6.useCursor="pointer";

    textLayer6.addEventListener(LMouseEvent.MOUSE_OVER,function(){
       selfTextAll8.color="blue";

    });
    textLayer6.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll8.color="black";
    });
    textLayer6.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });

    textLayer7 = new LSprite();
    textLayer7 .x=50;
    textLayer7 .y=330; 
    pictureLayer1.addChild(textLayer7);

    selfTextAll9 = new LTextField();
    selfTextAll9.text="铁路客货运输组织管理能力";
    selfTextAll9.weight ="bolder";
    selfTextAll9.size="14";
    selfTextAll9.x = 0;
    selfTextAll9.y = 0;
    textLayer7.addChild(selfTextAll9);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer7.useCursor="pointer";

    textLayer7.addEventListener(LMouseEvent.MOUSE_OVER,function(){
       selfTextAll9.color="blue";

    });
    textLayer7.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll9.color="black";
    });
    textLayer7.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });

    textLayer8 = new LSprite();
    textLayer8.x=100;
    textLayer8.y=100; 
    pictureLayer1.addChild(textLayer8);

    selfTextAll10 = new LTextField();
    selfTextAll10.text="铁路交通规划能力";
    selfTextAll10.weight ="bolder";
    selfTextAll10.size="14";
    selfTextAll10.x = 0;
    selfTextAll10.y = 0;
    textLayer8.addChild(selfTextAll10);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer8.useCursor="pointer";

    textLayer8.addEventListener(LMouseEvent.MOUSE_OVER,function(){
       selfTextAll10.color="blue";

    });
    textLayer8.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll10.color="black";
    });
    textLayer8.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });
    
}




function picture2(){
	pictureLayer2=new LSprite();
    pictureLayer2.graphics.drawRect(0,"#4a4a4a",[0,0,500,420]);
    pictureLayer2.x=670;
    pictureLayer2.y=30;
    backLayer.addChild(pictureLayer2);

    var bgimg = new LBitmap(new LBitmapData(imglist["Background3"],0,0,485,382));
    bgimg.x=20;
    bgimg.y=0;
    pictureLayer2.addChild(bgimg);

    textLayer9 = new LSprite();
    textLayer9.x=0;
    textLayer9.y=340; 
    pictureLayer2.addChild(textLayer9);

    selfTextAll11 = new LTextField();
    selfTextAll11.text="第二语言能力";
    selfTextAll11.weight ="bolder";
    selfTextAll11.size="14";
    selfTextAll11.x = 0;
    selfTextAll11.y = 0;
    textLayer9.addChild(selfTextAll11);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer9.useCursor="pointer";

    textLayer9.addEventListener(LMouseEvent.MOUSE_OVER,function(){
       selfTextAll11.color="blue";

    });
    textLayer9.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll11.color="black";
    });
    textLayer9.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });

    textLayer10 = new LSprite();
    textLayer10.x=380;
    textLayer10.y=340; 
    pictureLayer2.addChild(textLayer10);

    selfTextAll12 = new LTextField();
    selfTextAll12.text="身体素质与意志品质";
    selfTextAll12.weight ="bolder";
    selfTextAll12.size="14";
    selfTextAll12.x = 0;
    selfTextAll12.y = 0;
    textLayer10.addChild(selfTextAll12);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer10.useCursor="pointer";

    textLayer10.addEventListener(LMouseEvent.MOUSE_OVER,function(){
       selfTextAll12.color="blue";

    });
    textLayer10.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll12.color="black";
    });
    textLayer10.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });

    textLayer11 = new LSprite();
    textLayer11.x=210;
    textLayer11.y=30; 
    pictureLayer2.addChild(textLayer11);


    selfTextAll13 = new LTextField();
    selfTextAll13.text="政治思想";
    selfTextAll13.weight ="bolder";
    selfTextAll13.size="14";
    selfTextAll13.x = 0;
    selfTextAll13.y = 0;
    textLayer11.addChild(selfTextAll13);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer11.useCursor="pointer";

    textLayer11.addEventListener(LMouseEvent.MOUSE_OVER,function(){
       selfTextAll13.color="blue";

    });
    textLayer11.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll13.color="black";
    });
    textLayer11.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });
}

function picture3(){
    pictureLayer3=new LSprite();
    pictureLayer3.graphics.drawRect(0,"#4a4a4a",[0,0,1100,400]);
    pictureLayer3.x=0;
    pictureLayer3.y=450;
    backLayer.addChild(pictureLayer3);
    
    var bgimg = new LBitmap(new LBitmapData(imglist["Background1"],0,0,485,382));
    bgimg.x=500;
    bgimg.y=150;
    pictureLayer3.addChild(bgimg);

    var bgimg = new LBitmap(new LBitmapData(imglist["Background4"],0,0,193,183));
    bgimg.x=800;
    bgimg.y=20;
    pictureLayer3.addChild(bgimg);

    var bgimg = new LBitmap(new LBitmapData(imglist["Background5"],0,0,160,126));
    bgimg.x=500;
    bgimg.y=-50;
    pictureLayer3.addChild(bgimg);

    var bgimg = new LBitmap(new LBitmapData(imglist["Background5"],0,0,160,126));
    bgimg.x=200;
    bgimg.y=200;
    pictureLayer3.addChild(bgimg);

    var bgimg = new LBitmap(new LBitmapData(imglist["Background6"],0,0,135,274));
    bgimg.x=80;
    bgimg.y=80;
    pictureLayer3.addChild(bgimg);

    textLayer12 = new LSprite();
    textLayer12.x=550;
    textLayer12.y=100; 
    pictureLayer3.addChild(textLayer12);

    selfTextAll14 = new LTextField();
    selfTextAll14.text="职业素质与能力";
    selfTextAll14.weight ="bolder";
    selfTextAll14.size="25";
    selfTextAll14.x = 0;
    selfTextAll14.y = 0;
    textLayer12.addChild(selfTextAll14);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer12.useCursor="pointer";

    textLayer12.addEventListener(LMouseEvent.MOUSE_OVER,function(){
       selfTextAll14.color="blue";

    });
    textLayer12.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll14.color="black";
    });
    textLayer12.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });
    
    textLayer13 = new LSprite();
    textLayer13.x=800;
    textLayer13.y=350; 
    pictureLayer3.addChild(textLayer13);

    selfTextAll15 = new LTextField();
    selfTextAll15.text="基本素质与能力";
    selfTextAll15.weight ="bolder";
    selfTextAll15.size="25";
    selfTextAll15.x = 0;
    selfTextAll15.y = 0;
    textLayer13.addChild(selfTextAll15);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer13.useCursor="pointer";

    textLayer13.addEventListener(LMouseEvent.MOUSE_OVER,function(){
    selfTextAll15.color="blue";

    });
    textLayer13.addEventListener(LMouseEvent.MOUSE_OUT,function(){
    selfTextAll15.color="black";
    });
    textLayer13.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });

    textLayer14 = new LSprite();
    textLayer14.x=280;
    textLayer14.y=350; 
    pictureLayer3.addChild(textLayer14);

    selfTextAll16 = new LTextField();
    selfTextAll16.text="创新创业意识技能";
    selfTextAll16.weight ="bolder";
    selfTextAll16.size="25";
    selfTextAll16.x = 0;
    selfTextAll16.y = 0;
    textLayer14.addChild(selfTextAll16);

    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
    textLayer14.useCursor="pointer";

    textLayer14.addEventListener(LMouseEvent.MOUSE_OVER,function(){
       selfTextAll16.color="blue";

    });
    textLayer14.addEventListener(LMouseEvent.MOUSE_OUT,function(){
       selfTextAll16.color="black";
    });
    textLayer14.addEventListener(LMouseEvent.MOUSE_UP,function(){

    });


    selfTextAll17 = new LTextField();
    selfTextAll17.text="创新意识培养";
    selfTextAll17.weight ="bolder";
    selfTextAll17.size="16";
    selfTextAll17.x = 80;
    selfTextAll17.y = 50;
    pictureLayer3.addChild(selfTextAll17);

    selfTextAll18 = new LTextField();
    selfTextAll18.text="创新意识与能力培养";
    selfTextAll18.weight ="bolder";
    selfTextAll18.size="16";
    selfTextAll18.x = 60;
    selfTextAll18.y = 380;
    pictureLayer3.addChild(selfTextAll18);
}

