function click2(){
   	
   	backLayer=new LSprite();
    addChild(backLayer);
   
    
    //线   
    //层
    //第一块

    var new_FourEight=new LSprite();
    FourEight_part=new LSprite();
    new_FourEight.addChild(FourEight_part);

    var new_FourNine=new LSprite();
    FourNine_part=new LSprite();
    new_FourNine.addChild(FourNine_part);
    Four_listen9();

    var new_FourTen=new LSprite();
    FourTen_part=new LSprite();
    new_FourTen.addChild(FourTen_part);
    Four_listen10();

    var new_FourEleven=new LSprite();
    FourEleven_part=new LSprite();
    new_FourEleven.addChild(FourEleven_part);
    Four_listen11();

    var new_FourTwelve=new LSprite();
    FourTwelve_part=new LSprite();
    new_FourTwelve.addChild(FourTwelve_part);
    Four_listen12();

    var new_FourThirteen=new LSprite();
    FourThirteen_part=new LSprite();
    new_FourThirteen.addChild(FourThirteen_part);
    Four_listen13();

    var new_FourForteen=new LSprite();
    FourForteen_part=new LSprite();
    new_FourForteen.addChild(FourForteen_part);
    //第二块的层
    FourOne_bigpart2=new LSprite()
    backLayer.addChild(FourOne_bigpart2);
    FourOne_background2=new LShape();
    FourOne_background2.graphics.drawRect(1,"black",[(LGlobal.width-1000)*0.202,(LGlobal.width-1000)*0.104,(LGlobal.width-1000)*0.2004,(LGlobal.width-1000)*0.070],true,"yellow");
    FourOne_bigpart2.addChild(FourOne_background2);
    FourOne_bigpart2.addChild(new_FourNine);
    FourOne_bigpart2.addChild(new_FourTen);
    FourOne_bigpart2.addChild(new_FourEleven);
    FourOne_bigpart2.addChild(new_FourTwelve);
    FourOne_bigpart2.addChild(new_FourThirteen);
    FourOne_bigpart2.addChild(new_FourForteen);
    FourOne_bigpart2.x=(LGlobal.width-1000)*0.193;
    FourOne_bigpart2.y=(LGlobal.width-1000)*0.043;

    

    line4();

//包装
line4()

       four_eight(1,"balck",[(LGlobal.width-1000)*0.202,(LGlobal.width-1000)*0.024,(LGlobal.width-1000)*0.2004,(LGlobal.width-1000)*0.070]);
       four_nine(1,"balck",[(LGlobal.width-1000)*0.205,(LGlobal.width-1000)*0.108,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
       four_ten(1,"balck",[(LGlobal.width-1000)*0.272,(LGlobal.width-1000)*0.108,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
       four_eleven(1,"balck",[(LGlobal.width-1000)*0.339,(LGlobal.width-1000)*0.108,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
       four_twelve(1,"balck",[(LGlobal.width-1000)*0.272,(LGlobal.width-1000)*0.138,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
       four_thirteen(1,"balck",[(LGlobal.width-1000)*0.339,(LGlobal.width-1000)*0.138,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
       four_fourteen(1,"balck",[(LGlobal.width-1000)*0.202,(LGlobal.width-1000)*0.104,(LGlobal.width-1000)*0.2004,(LGlobal.width-1000)*0.070]);



function line4(){
            //第一条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"red",[0,222,0,0]);
            line_shap4.x=242;
            line_shap4.y=209;
            FourOne_bigpart2.addChild(line_shap4);
            //第二条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"red",[363,0,0,0]);
            line_shap4.x=242;
            line_shap4.y=430;
            FourOne_bigpart2.addChild(line_shap4);
        
            //第六条
             line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[179,0,0,0]);
            line_shap4.x=615;
            line_shap4.y=374;
            FourNine_part.addChild(line_shap4);
            //第七条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[179,0,0,0]);
            line_shap4.x=816;
            line_shap4.y=374;
            FourTen_part.addChild(line_shap4);
            //第八条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[179,0,0,0]);
            line_shap4.x=1017;
            line_shap4.y=374;
            FourEleven_part.addChild(line_shap4);
            //第九条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[179,0,0,0]);
            line_shap4.x=816;
            line_shap4.y=464;
            FourTwelve_part.addChild(line_shap4);
            //第十条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[179,0,0,0]);
            line_shap4.x=1017;
            line_shap4.y=464;
            FourThirteen_part.addChild(line_shap4);
            //第十一条
            //第十一条
            //第十二条
            //第十九条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[21,0,0,0]);
            line_shap4.x=795;
            line_shap4.y=350;
            FourOne_bigpart2.addChild(line_shap4);
            //第二十条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[21,0,0,0]);
            line_shap4.x=996;
            line_shap4.y=440;
            FourOne_bigpart2.addChild(line_shap4);
            //第二十一条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[0,18,0,0]);
            line_shap4.x=900;
            line_shap4.y=397;
            FourOne_bigpart2.addChild(line_shap4);
            //第二十二条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[0,18,0,0]);
            line_shap4.x=1100;
            line_shap4.y=397;
            FourOne_bigpart2.addChild(line_shap4);
}
 


       





   
   function four_eight(x,y,q,w,e,r){
        fifth_shape=new LShape();
        fifth_shape.graphics.drawRect(x,y,q,w,e,r);
        FourEight_part.addChild(fifth_shape);
       }

       function four_nine(x,y,q,w,e,r){
        eighth_shape=new LShape();
        eighth_shape.graphics.drawRect(x,y,q,w,e,r);
        FourNine_part.addChild(eighth_shape);
        eighth_picture123=new LTextField();
        eighth_picture123.text="高等数学1";
        eighth_picture223=new LTextField();
        eighth_picture223.text="1,\n\n\nR,\n\n\n(4,0)";
        eighth_picture123.x=(LGlobal.width-1000)*0.223;
        eighth_picture123.y=(LGlobal.width-1000)*0.113;
        eighth_picture223.x=(LGlobal.width-1000)*0.220;
        eighth_picture223.y=(LGlobal.width-1000)*0.126;
        FourNine_part.addChild(eighth_picture123);
        FourNine_part.addChild(eighth_picture223);

       }

       function four_ten(x,y,q,w,e,r){
        eighth_shape=new LShape();
        eighth_shape.graphics.drawRect(x,y,q,w,e,r);
        FourTen_part.addChild(eighth_shape);
        eighth_picture1234=new LTextField();
        eighth_picture1234.text="高等数学2";
        eighth_picture2234=new LTextField();
        eighth_picture2234.text="1,\n\n\nR,\n\n\n(0,4)";
        eighth_picture1234.x=(LGlobal.width-1000)*0.288;
        eighth_picture1234.y=(LGlobal.width-1000)*0.113;
        eighth_picture2234.x=(LGlobal.width-1000)*0.287;
        eighth_picture2234.y=(LGlobal.width-1000)*0.126;
        FourTen_part.addChild(eighth_picture1234);
        FourTen_part.addChild(eighth_picture2234);

       }

       function four_eleven(x,y,q,w,e,r){
        eighth_shape=new LShape();
        eighth_shape.graphics.drawRect(x,y,q,w,e,r);
        FourEleven_part.addChild(eighth_shape);
        eighth_picture12345=new LTextField();
        eighth_picture12345.text="交通运输统计";
        eighth_picture22345=new LTextField();
        eighth_picture22345.text="3,\n\n\nR/S,\n\n\n(2,0)";
        eighth_picture12345.x=(LGlobal.width-1000)*0.353;
        eighth_picture12345.y=(LGlobal.width-1000)*0.113;
        eighth_picture22345.x=(LGlobal.width-1000)*0.352;
        eighth_picture22345.y=(LGlobal.width-1000)*0.126;
        FourEleven_part.addChild(eighth_picture12345);
        FourEleven_part.addChild(eighth_picture22345);

       }

       function four_twelve(x,y,q,w,e,r){
        eighth_shape=new LShape();
        eighth_shape.graphics.drawRect(x,y,q,w,e,r);
        FourTwelve_part.addChild(eighth_shape);
        eighth_picture123456=new LTextField();
        eighth_picture123456.text="线性代数";
        eighth_picture223456=new LTextField();
        eighth_picture223456.text="1,\n\n\nR/S,\n\n\n(0,2)";
        eighth_picture123456.x=(LGlobal.width-1000)*0.292;
        eighth_picture123456.y=(LGlobal.width-1000)*0.143;
        eighth_picture223456.x=(LGlobal.width-1000)*0.287;
        eighth_picture223456.y=(LGlobal.width-1000)*0.156;
        FourTwelve_part.addChild(eighth_picture123456);
        FourTwelve_part.addChild(eighth_picture223456);

       }

       function four_thirteen(x,y,q,w,e,r){
        eighth_shape=new LShape();
        eighth_shape.graphics.drawRect(x,y,q,w,e,r);
        FourThirteen_part.addChild(eighth_shape);
        eighth_picture1=new LTextField();
        eighth_picture1.text="概率论与概率统计";
        eighth_picture2=new LTextField();
        eighth_picture2.text="2,\n\n\nR/S,\n\n\n(3,0)";
        eighth_picture1.x=(LGlobal.width-1000)*0.348;
        eighth_picture1.y=(LGlobal.width-1000)*0.143;
        eighth_picture2.x=(LGlobal.width-1000)*0.352;
        eighth_picture2.y=(LGlobal.width-1000)*0.156;
        FourThirteen_part.addChild(eighth_picture1);
        FourThirteen_part.addChild(eighth_picture2);

       }

       function four_forteen(x,y,q,w,e,r){
        fifth_shape=new LShape();
        fifth_shape.graphics.drawRect(x,y,q,w,e,r);
        FourForteen_part.addChild(fifth_shape);
       }
       //监听

       function Four_listen13(){
       	/* var button413 = new LButton(FourThirteen_part,FourThirteen_part,FourThirteen_part);
            new_FourThirteen.addChild(button413);*/
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new_FourThirteen.useCursor="pointer";
            new_FourThirteen.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            eighth_picture1.color ="red" ;
            eighth_picture2.color ="red" ;
           
            });
             new_FourThirteen.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             eighth_picture1.color ="black" ;
            eighth_picture2.color ="black" ;
            
            });
            new_FourThirteen.addEventListener(LMouseEvent.MOUSE_UP,run413);
       }
       function run413(){};

       function Four_listen9(){
       	 //var button49 = new LButton(FourNine_part,FourNine_part,FourNine_part);
           // new_FourNine.addChild(button49);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new_FourNine.useCursor="pointer";
            new_FourNine.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            eighth_picture123.color ="red" ;
            eighth_picture223.color ="red" ;
           
            });
             new_FourNine.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             eighth_picture123.color ="black" ;
            eighth_picture223.color ="black" ;
            
            });
            new_FourNine.addEventListener(LMouseEvent.MOUSE_UP,run49);
       }
       function run49(){};

       function Four_listen10(){
       //	 var button410 = new LButton(FourTen_part,FourTen_part,FourTen_part);
          //  new_FourTen.addChild(button410);
          LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new_FourTen.useCursor="pointer";
            new_FourTen.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            eighth_picture1234.color ="red" ;
            eighth_picture2234.color ="red" ;
           
            });
             new_FourTen.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             eighth_picture1234.color ="black" ;
            eighth_picture2234.color ="black" ;
            
            });
            new_FourTen.addEventListener(LMouseEvent.MOUSE_UP,run410);
       }
       function run410(){};

       function Four_listen11(){
       	// var button411 = new LButton(FourEleven_part,FourEleven_part,FourEleven_part);
           // new_FourEleven.addChild(button411);
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
           new_FourEleven.useCursor="pointer";
            new_FourEleven.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            eighth_picture12345.color ="red" ;
            eighth_picture22345.color ="red" ;
           
            });
             new_FourEleven.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             eighth_picture12345.color ="black" ;
            eighth_picture22345.color ="black" ;
            
            });
            new_FourEleven.addEventListener(LMouseEvent.MOUSE_UP,run411);
       }
       function run411(){};

       function Four_listen12(){
       	// var button412 = new LButton(FourTwelve_part,FourTwelve_part,FourTwelve_part);
         //   new_FourTwelve.addChild(button412);
         LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
           new_FourTwelve.useCursor="pointer";
            new_FourTwelve.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            eighth_picture123456.color ="red" ;
            eighth_picture223456.color ="red" ;
           
            });
             new_FourTwelve.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             eighth_picture123456.color ="black" ;
            eighth_picture223456.color ="black" ;
            
            });
            new_FourTwelve.addEventListener(LMouseEvent.MOUSE_UP,run412);
       }
       function run412(){};
   }