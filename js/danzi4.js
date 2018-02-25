 function click1(){
   	
   	backLayer=new LSprite();
    addChild(backLayer);
   
    
    //线
    
    //层
    //第一块

    var new_FourThree=new LSprite();
    FourThree_part=new LSprite();
    new_FourThree.addChild(FourThree_part);
    Four_listen3();

    var new_FourFour=new LSprite();
    FourFour_part=new LSprite();
    new_FourFour.addChild(FourFour_part);
    Four_listen4();

    var new_FourFive=new LSprite();
    FourFive_part=new LSprite();
    new_FourFive.addChild(FourFive_part);
    Four_listen5();

   var new_FourSix=new LSprite();
    FourSix_part=new LSprite();
    new_FourSix.addChild(FourSix_part);
    Four_listen6();

    var new_FourSeven=new LSprite();
    FourSeven_part=new LSprite();
    new_FourSeven.addChild(FourSeven_part);
    Four_listen7();

  var  FourEight_part=new LSprite();
    backLayer.addChild(FourEight_part);
    //第一块的层
    FourOne_bigpart1=new LSprite();
    backLayer.addChild(FourOne_bigpart1);
    FourOne_background=new LShape();
    FourOne_background.graphics.drawRect(1,"black",[(LGlobal.width-1000)*0.202,(LGlobal.width-1000)*0.024,(LGlobal.width-1000)*0.2004,(LGlobal.width-1000)*0.070],true,"yellow");
    FourOne_bigpart1.addChild(FourOne_background);
    FourOne_bigpart1.addChild(new_FourThree);
    FourOne_bigpart1.addChild(new_FourFour);
    FourOne_bigpart1.addChild(new_FourFive);
    FourOne_bigpart1.addChild(new_FourSix);
    FourOne_bigpart1.addChild(new_FourSeven);
    FourOne_bigpart1.addChild(FourEight_part);
    FourOne_bigpart1.x=(LGlobal.width-1000)*0.193
    FourOne_bigpart1.y=(LGlobal.width-1000)*0.043

    //第二块
    line4();

//包装
line4()
       four_three(1,"balck",[(LGlobal.width-1000)*0.205,(LGlobal.width-1000)*0.045,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
       four_four(1,"balck",[(LGlobal.width-1000)*0.272,(LGlobal.width-1000)*0.028,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
       four_five(1,"balck",[(LGlobal.width-1000)*0.272,(LGlobal.width-1000)*0.058,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
       four_six(1,"balck",[(LGlobal.width-1000)*0.339,(LGlobal.width-1000)*0.029,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0228,30]);
       four_seven(1,"balck",[(LGlobal.width-1000)*0.339,(LGlobal.width-1000)*0.059,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0228,30]);
       four_eight(1,"balck",[(LGlobal.width-1000)*0.202,(LGlobal.width-1000)*0.024,(LGlobal.width-1000)*0.2004,(LGlobal.width-1000)*0.070]);



function line4(){
	        //第一条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"red",[35,0,0,0]);
            line_shap4.x=570;
            line_shap4.y=172;
            FourOne_bigpart1.addChild(line_shap4);
            //第二条
            //第三条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[179,0,0,0]);
            line_shap4.x=615;
            line_shap4.y=184;
            FourThree_part.addChild(line_shap4);
            //第四条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[179,0,0,0]);
            line_shap4.x=816;
            line_shap4.y=134;
            FourFour_part.addChild(line_shap4);
            //第五条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[179,0,0,0]);
            line_shap4.x=816;
            line_shap4.y=224;
            FourFive_part.addChild(line_shap4);
            //第六条

            //第七条

            //第八条

            //第九条

            //第十条

            //第十一条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[8,0,0,0]);
            line_shap4.x=795;
            line_shap4.y=170;
            FourOne_bigpart1.addChild(line_shap4);
            //第十一条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[0,80,0,0]);
            line_shap4.x=803;
            line_shap4.y=120;
            FourOne_bigpart1.addChild(line_shap4);
            //第十二条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[14,0,0,0]);
            line_shap4.x=802;
            line_shap4.y=121;
            FourOne_bigpart1.addChild(line_shap4);
            //第十三条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[14,0,0,0]);
            line_shap4.x=802;
            line_shap4.y=201;
            FourOne_bigpart1.addChild(line_shap4);
            //第十四条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[0,92,0,0]);
            line_shap4.x=1005;
            line_shap4.y=120;
            FourOne_bigpart1.addChild(line_shap4);
            //第十五条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[14,0,0,0]);
            line_shap4.x=1004;
            line_shap4.y=121;
            FourOne_bigpart1.addChild(line_shap4);
            //第十六条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[14,0,0,0]);
            line_shap4.x=1004;
            line_shap4.y=212;
            FourOne_bigpart1.addChild(line_shap4);
            //第十七条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[10,0,0,0]);
            line_shap4.x=996;
            line_shap4.y=202;
            FourOne_bigpart1.addChild(line_shap4);
            //第十八条
            line_shap4=new LSprite();
            line_shap4.graphics.drawLine(1,"black",[10,0,0,0]);
            line_shap4.x=996;
            line_shap4.y=142;
            FourOne_bigpart1.addChild(line_shap4);
            //第十九条
}
 




       function four_three(x,y,q,w,e,r){
        eighth_shape=new LShape();
        eighth_shape.graphics.drawRect(x,y,q,w,e,r);
        FourThree_part.addChild(eighth_shape);
        eighth_picture11=new LTextField();
        eighth_picture11.text="大学计算机应用基础";
        eighth_picture12=new LTextField();
        eighth_picture12.text="1,\n\n\nR,\n\n\n(3,0)";
        eighth_picture11.x=(LGlobal.width-1000)*0.214;
        eighth_picture11.y=(LGlobal.width-1000)*0.050;
        eighth_picture12.x=(LGlobal.width-1000)*0.220;
        eighth_picture12.y=(LGlobal.width-1000)*0.063;
        FourThree_part.addChild(eighth_picture11);
        FourThree_part.addChild(eighth_picture12);

        
       }

       function four_four(x,y,q,w,e,r){
        eighth_shape=new LShape();
        eighth_shape.graphics.drawRect(x,y,q,w,e,r);
        FourFour_part.addChild(eighth_shape);
        eighth_picture01=new LTextField();
        eighth_picture01.text="计算机程序基础";
        eighth_picture013=new LTextField();
        eighth_picture013.text="(JAVA/C语言)";
        eighth_picture012=new LTextField();
        eighth_picture012.text="1,\n\n\nR/S,\n\n\n(0,3)";
        eighth_picture01.x=(LGlobal.width-1000)*0.285;
        eighth_picture01.y=(LGlobal.width-1000)*0.031;
        eighth_picture013.x=(LGlobal.width-1000)*0.288;
        eighth_picture013.y=(LGlobal.width-1000)*0.037;
        eighth_picture012.x=(LGlobal.width-1000)*0.286;
        eighth_picture012.y=(LGlobal.width-1000)*0.046;
        FourFour_part.addChild(eighth_picture01);
        FourFour_part.addChild(eighth_picture012);
         FourFour_part.addChild(eighth_picture013);

       }

        function four_five(x,y,q,w,e,r){
        eighth_shape=new LShape();
        eighth_shape.graphics.drawRect(x,y,q,w,e,r);
        FourFive_part.addChild(eighth_shape);
        eighth_picture1=new LTextField();
        eighth_picture1.text="数据库管理系统";
        eighth_picture2=new LTextField();
        eighth_picture2.text="2,\n\n\nR/S,\n\n\n(3,0)";
        eighth_picture1.x=(LGlobal.width-1000)*0.285;
        eighth_picture1.y=(LGlobal.width-1000)*0.063;
        eighth_picture2.x=(LGlobal.width-1000)*0.286;
        eighth_picture2.y=(LGlobal.width-1000)*0.076;
        FourFive_part.addChild(eighth_picture1);
        FourFive_part.addChild(eighth_picture2);

       }

       function four_six(x,y,q,w,e,r,t){
        TwoOne_shape=new LShape();
        TwoOne_shape.graphics.drawRoundRect(x,y,q,w,e,r,t);
        FourSix_part.addChild(TwoOne_shape);
        TwoOne_picture41=new LTextField();
        TwoOne_picture41.text="系统仿真课程包";
        TwoOne_picture41.color="purple";
        TwoOne_picture42=new LTextField();
        TwoOne_picture42.text="(6)";
        TwoOne_picture42.color="purple";
        TwoOne_picture41.x=(LGlobal.width-1000)*0.351;
        TwoOne_picture41.y=(LGlobal.width-1000)*0.034;
        TwoOne_picture42.x=(LGlobal.width-1000)*0.365;
        TwoOne_picture42.y=(LGlobal.width-1000)*0.040;
        FourSix_part.addChild(TwoOne_picture41);
        FourSix_part.addChild(TwoOne_picture42);
   }

   function four_seven(x,y,q,w,e,r,t){
        TwoOne_shape=new LShape();
        TwoOne_shape.graphics.drawRoundRect(x,y,q,w,e,r,t);
        FourSeven_part.addChild(TwoOne_shape);
        TwoOne_picture111=new LTextField();
        TwoOne_picture111.text="多媒体技术应用课程包";
        TwoOne_picture111.color="purple";
        TwoOne_picture112=new LTextField();
        TwoOne_picture112.text="(4-8)";
        TwoOne_picture112.color="purple";
        TwoOne_picture111.x=(LGlobal.width-1000)*0.345;
        TwoOne_picture111.y=(LGlobal.width-1000)*0.064;
        TwoOne_picture112.x=(LGlobal.width-1000)*0.363;
        TwoOne_picture112.y=(LGlobal.width-1000)*0.070;
        FourSeven_part.addChild(TwoOne_picture111);
        FourSeven_part.addChild(TwoOne_picture112);
   }

   
   function four_eight(x,y,q,w,e,r){
        fifth_shape=new LShape();
        fifth_shape.graphics.drawRect(x,y,q,w,e,r);
        FourEight_part.addChild(fifth_shape);
       }

       //监听



       function Four_listen3(){
       	/* var button43 = new LButton(FourThree_part,FourThree_part,FourThree_part);
            new_FourThree.addChild(button43);*/
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new_FourThree.useCursor="pointer";
            new_FourThree.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             eighth_picture11.color = "red";
            eighth_picture12.color = "red";
     
            });
             new_FourThree.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             eighth_picture11.color = "fff";
            eighth_picture12.color = "fff";
        
            });

            new_FourThree.addEventListener(LMouseEvent.MOUSE_UP,run43);
       }
       function run43(){}

       function Four_listen4(){
       	 //var button44 = new LButton(FourFour_part,FourFour_part,FourFour_part);
            //new_FourFour.addChild(button44);
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            FourFour_part.useCursor="pointer";
            FourFour_part.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             eighth_picture01.color = "red";
            eighth_picture012.color = "red";
            eighth_picture013.color = "red";
     
            });
             FourFour_part.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             eighth_picture01.color = "fff";
            eighth_picture012.color = "fff";
            eighth_picture013.color = "fff";
        
            });

            FourFour_part.addEventListener(LMouseEvent.MOUSE_UP,run44);
       }
       function run44(){}

       function Four_listen5(){
       	 /*var button45 = new LButton(FourFive_part,FourFive_part,FourFive_part);
            new_FourFive.addChild(button45);*/
             LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            FourFive_part.useCursor="pointer";
            FourFive_part.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             eighth_picture1.color = "red";
            eighth_picture02.color = "red";
          
     
            });
             FourFive_part.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             eighth_picture1.color = "fff";
            eighth_picture02.color = "fff";
      
        
            });
            FourFive_part.addEventListener(LMouseEvent.MOUSE_UP,run45);
       }
       function run45(){}


       function Four_listen6(){
        bool3=2;
       	 /*var button46 = new LButton(FourSix_part,FourSix_part,FourSix_part);
            new_FourSix.addChild(button46);*/
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            FourSix_part.useCursor="pointer";
            FourSix_part.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             TwoOne_picture41.color = "red";
            TwoOne_picture42.color = "red";
          
     
            });
             FourSix_part.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             TwoOne_picture41.color = "purple";
            TwoOne_picture42.color = "purple";
      
        
            });
            FourSix_part.addEventListener(LMouseEvent.MOUSE_UP,run46);
       }
       function run46(){
         if (bool3==2) {
        bool3=1
        click3()
    }   
    else if (bool3==1) {
    bool3=2;
    TwoOne_bigpart1.removeAllChild();
}
       }

       function Four_listen7(){
        bool4=2;
       	 /*var button47 = new LButton(FourSeven_part,FourSeven_part,FourSeven_part);
            new_FourSeven.addChild(button47);*/
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            FourSeven_part.useCursor="pointer";
            FourSeven_part.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             TwoOne_picture111.color = "red";
            TwoOne_picture112.color = "red";
          
     
            });
             FourSeven_part.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             TwoOne_picture111.color = "purple";
            TwoOne_picture112.color = "purple";
      
        
            });
            FourSeven_part.addEventListener(LMouseEvent.MOUSE_UP,run47);
       }
       function run47(){
        if (bool4==2) {
        bool4=1;
        click4();
    }   
    else if (bool4==1) {
    bool4=2;
    TwoOne_bigpart2.removeAllChild();
       }

      
   }
}