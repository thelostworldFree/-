 function click4(){
    backLayer=new LSprite();
    addChild(backLayer);
    //层

    var new_TwoFour=new LSprite();
    TwoFour_part=new LSprite();
    new_TwoFour.addChild(TwoFour_part);
    Two_listen4();

    var new_TwoFive=new LSprite();
    TwoFive_part=new LSprite();
    new_TwoFive.addChild(TwoFive_part);
    Two_listen5();

    var new_TwoSix=new LSprite();
    TwoSix_part=new LSprite();
    new_TwoSix.addChild(TwoSix_part);
    Two_listen6();
    
    var new_TwoSeven=new LSprite();
    TwoSeven_part=new LSprite();
    new_TwoSeven.addChild(TwoSeven_part);
    Two_listen7();

    //包装
    //第二包
    TwoOne_bigpart2=new LSprite();
    backLayer.addChild(TwoOne_bigpart2);
    TwoOne_background5=new LShape();
    TwoOne_background5.graphics.drawRect(1,"black",[(LGlobal.width-1000)*0.245,(LGlobal.width-1000)*0.014,(LGlobal.width-1000)*0.075,(LGlobal.width-1000)*0.120],true,"grey");
    TwoOne_bigpart2.addChild(TwoOne_background5);
    TwoOne_bigpart2.addChild(new_TwoFour);
    TwoOne_bigpart2.addChild(new_TwoFive);
    TwoOne_bigpart2.addChild(new_TwoSix);
    TwoOne_bigpart2.addChild(new_TwoSeven);
    TwoOne_bigpart2.x=(LGlobal.width-1000)*0.440;
    TwoOne_bigpart2.y=(LGlobal.width-1000)*0.003;

     line2();
    two_four(1,"balck",[(LGlobal.width-1000)*0.253,(LGlobal.width-1000)*0.016,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
    two_five(1,"balck",[(LGlobal.width-1000)*0.253,(LGlobal.width-1000)*0.046,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
    two_six(1,"balck",[(LGlobal.width-1000)*0.253,(LGlobal.width-1000)*0.076,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
    two_seven(1,"balck",[(LGlobal.width-1000)*0.253,(LGlobal.width-1000)*0.106,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);

   function line2(){
            //第一条
            Two_line_shap1=new LSprite();
            Two_line_shap1.graphics.drawLine(1,"black",[179,0,0,0]);
            Two_line_shap1.x=759;
            Two_line_shap1.y=93;
            TwoFour_part.addChild(Two_line_shap1);

            //第三条
            Two_line_shap1=new LSprite();
            Two_line_shap1.graphics.drawLine(1,"black",[179,0,0,0]);
            Two_line_shap1.x=759;
            Two_line_shap1.y=183;
            TwoFive_part.addChild(Two_line_shap1);

            //第五条
            Two_line_shap1=new LSprite();
            Two_line_shap1.graphics.drawLine(1,"black",[179,0,0,0]);
            Two_line_shap1.x=759;
            Two_line_shap1.y=273;
            TwoSix_part.addChild(Two_line_shap1);
            
            //第七条
            Two_line_shap1=new LSprite();
            Two_line_shap1.graphics.drawLine(1,"black",[179,0,0,0]);
            Two_line_shap1.x=759;
            Two_line_shap1.y=363;
            TwoSeven_part.addChild(Two_line_shap1);

            //第八条
            Two_line_shap1=new LSprite();
            Two_line_shap1.graphics.drawLine(1,"red",[281,0,0,0]);
            Two_line_shap1.x=455;
            Two_line_shap1.y=333;
            TwoOne_bigpart2.addChild(Two_line_shap1);
   }




   function two_four(x,y,q,w,e,r){
        TwoOne_shape=new LShape();
        TwoOne_shape.graphics.drawRect(x,y,q,w,e,r);
        TwoFour_part.addChild(TwoOne_shape);
        TwoOne_picture19=new LTextField();
        TwoOne_picture19.text="图像处理实用技术";
        TwoOne_picture29=new LTextField();
        TwoOne_picture29.text="3,\n\n\nS,\n\n\n(2,0)";
        TwoOne_picture19.x=(LGlobal.width-1000)*0.264;
        TwoOne_picture19.y=(LGlobal.width-1000)*0.021;
        TwoOne_picture29.x=(LGlobal.width-1000)*0.268;
        TwoOne_picture29.y=(LGlobal.width-1000)*0.032;
        TwoFour_part.addChild(TwoOne_picture19);
        TwoFour_part.addChild(TwoOne_picture29);
   }
9
   function two_five(x,y,q,w,e,r){
        TwoOne_shape=new LShape();
        TwoOne_shape.graphics.drawRect(x,y,q,w,e,r);
        TwoFive_part.addChild(TwoOne_shape);
        TwoOne_picture18=new LTextField();
        TwoOne_picture18.text="平面动画实用技术";
        TwoOne_picture28=new LTextField();
        TwoOne_picture28.text="3,\n\n\nS,\n\n\n(2,0)";
        TwoOne_picture18.x=(LGlobal.width-1000)*0.264;
        TwoOne_picture18.y=(LGlobal.width-1000)*0.051;
        TwoOne_picture28.x=(LGlobal.width-1000)*0.268;
        TwoOne_picture28.y=(LGlobal.width-1000)*0.062;
        TwoFive_part.addChild(TwoOne_picture18);
        TwoFive_part.addChild(TwoOne_picture28);
   }

   function two_six(x,y,q,w,e,r){
        TwoOne_shape=new LShape();
        TwoOne_shape.graphics.drawRect(x,y,q,w,e,r);
        TwoSix_part.addChild(TwoOne_shape);
        TwoOne_picture17=new LTextField();
        TwoOne_picture17.text="多媒体制作工作实用";
        TwoOne_picture27=new LTextField();
        TwoOne_picture27.text="3,\n\n\nS,\n\n\n(0,2)";
        TwoOne_picture17.x=(LGlobal.width-1000)*0.262;
        TwoOne_picture17.y=(LGlobal.width-1000)*0.081;
        TwoOne_picture27.x=(LGlobal.width-1000)*0.268;
        TwoOne_picture27.y=(LGlobal.width-1000)*0.092;
        TwoSix_part.addChild(TwoOne_picture17);
        TwoSix_part.addChild(TwoOne_picture27);
   }

   function two_seven(x,y,q,w,e,r){
        TwoOne_shape=new LShape();
        TwoOne_shape.graphics.drawRect(x,y,q,w,e,r);
        TwoSeven_part.addChild(TwoOne_shape);
        TwoOne_picture16=new LTextField();
        TwoOne_picture16.text="商业简报制作";
        TwoOne_picture26=new LTextField();
        TwoOne_picture26.text="3,\n\n\nS,\n\n\n(0,2)";
        TwoOne_picture16.x=(LGlobal.width-1000)*0.267;
        TwoOne_picture16.y=(LGlobal.width-1000)*0.111;
        TwoOne_picture26.x=(LGlobal.width-1000)*0.268;
        TwoOne_picture26.y=(LGlobal.width-1000)*0.122;
        TwoSeven_part.addChild(TwoOne_picture16);
        TwoSeven_part.addChild(TwoOne_picture26);
   }


   //监听
        function Two_listen4(){
      //  var button24 = new LButton(TwoFour_part,TwoFour_part,TwoFour_part);
          //  new_TwoFour.addChild(button24);
          LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new_TwoFour.useCursor="pointer";
            new_TwoFour.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            TwoOne_picture19.color ="white" ;
            TwoOne_picture29.color ="white" ;
          
            });
             new_TwoFour.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             TwoOne_picture19.color ="black" ;
            TwoOne_picture29.color ="black" ;
           
            });
            new_TwoFour.addEventListener(LMouseEvent.MOUSE_UP,run24);
       }
       function run24(){}

       function Two_listen5(){
        /*var button25 = new LButton(TwoFive_part,TwoFive_part,TwoFive_part);
            new_TwoFive.addChild(button25);*/
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new_TwoFive.useCursor="pointer";
            new_TwoFive.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            TwoOne_picture18.color ="white" ;
            TwoOne_picture28.color ="white" ;
          
            });
             new_TwoFive.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             TwoOne_picture18.color ="black" ;
            TwoOne_picture28.color ="black" ;
           
            });
            new_TwoFive.addEventListener(LMouseEvent.MOUSE_UP,run25);
       }
       function run25(){}

       function Two_listen6(){
        /*var button26 = new LButton(TwoSix_part,TwoSix_part,TwoSix_part);
            new_TwoSix.addChild(button26);*/
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new_TwoSix.useCursor="pointer";
            new_TwoSix.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            TwoOne_picture17.color ="white" ;
            TwoOne_picture27.color ="white" ;
          
            });
             new_TwoSix.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             TwoOne_picture17.color ="black" ;
            TwoOne_picture27.color ="black" ;
           
            });
            new_TwoSix.addEventListener(LMouseEvent.MOUSE_UP,run26);
       }
       function run26(){}

       function Two_listen7(){
       /* var button27 = new LButton(TwoSeven_part,TwoSeven_part,TwoSeven_part);
            new_TwoSeven.addChild(button27);*/
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new_TwoSeven.useCursor="pointer";
            new_TwoSeven.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            TwoOne_picture16.color ="white" ;
            TwoOne_picture26.color ="white" ;
          
            });
             new_TwoSeven.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             TwoOne_picture16.color ="black" ;
            TwoOne_picture26.color ="black" ;
           
            });
            new_TwoSeven.addEventListener(LMouseEvent.MOUSE_UP,run27);
       }
       function run27(){}
}