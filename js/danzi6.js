function click3(){
    backLayer=new LSprite();
    addChild(backLayer);
    //层

    var new_TwoOne=new LSprite();
    TwoOne_part=new LSprite();
    new_TwoOne.addChild(TwoOne_part);
    Two_listen1();

    var new_TwoTwo=new LSprite();
    TwoTwo_part=new LSprite();
    new_TwoTwo.addChild(TwoTwo_part);
    Two_listen2();

    var new_TwoThree=new LSprite();
    TwoThree_part=new LSprite();
    new_TwoThree.addChild(TwoThree_part);
    Two_listen3();
//第一包
    TwoOne_bigpart1=new LSprite()
    backLayer.addChild(TwoOne_bigpart1);
    TwoOne_background4=new LShape();
    TwoOne_background4.graphics.drawRect(1,"black",[(LGlobal.width-1000)*0.177,(LGlobal.width-1000)*0.042,(LGlobal.width-1000)*0.075,(LGlobal.width-1000)*0.092],true,"grey");
    TwoOne_bigpart1.addChild(TwoOne_background4);
    TwoOne_bigpart1.addChild(new_TwoOne);
    TwoOne_bigpart1.addChild(new_TwoTwo);
    TwoOne_bigpart1.addChild(new_TwoThree);
    TwoOne_bigpart1.x=(LGlobal.width-1000)*0.423;
    TwoOne_bigpart1.y=(LGlobal.width-1000)*0.003;

    //包装
    line2();
    two_one(1,"balck",[(LGlobal.width-1000)*0.183,(LGlobal.width-1000)*0.046,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
    two_two(1,"balck",[(LGlobal.width-1000)*0.183,(LGlobal.width-1000)*0.076,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
    two_three(1,"balck",[(LGlobal.width-1000)*0.183,(LGlobal.width-1000)*0.106,(LGlobal.width-1000)*0.060,(LGlobal.width-1000)*0.0245]);
   
   function line2(){
            //第一条
            Two_line_shap1=new LSprite();
            Two_line_shap1.graphics.drawLine(1,"black",[179,0,0,0]);
            Two_line_shap1.x=550;
            Two_line_shap1.y=183;
            TwoOne_part.addChild(Two_line_shap1);
            //第二条
            Two_line_shap1=new LSprite();
            Two_line_shap1.graphics.drawLine(1,"black",[179,0,0,0]);
            Two_line_shap1.x=550;
            Two_line_shap1.y=273;
            TwoTwo_part.addChild(Two_line_shap1);
            //第六条
            Two_line_shap1=new LSprite();
            Two_line_shap1.graphics.drawLine(1,"black",[179,0,0,0]);
            Two_line_shap1.x=550;
            Two_line_shap1.y=363;
            TwoThree_part.addChild(Two_line_shap1);
            //第四条
            Two_line_shap1=new LSprite();
            Two_line_shap1.graphics.drawLine(1,"red",[23,0,0,0]);
            Two_line_shap1.x=507;
            Two_line_shap1.y=240;
            TwoOne_bigpart1.addChild(Two_line_shap1);

   }

   function two_one(x,y,q,w,e,r){
        TwoOne_shape=new LShape();
        TwoOne_shape.graphics.drawRect(x,y,q,w,e,r);
        TwoOne_part.addChild(TwoOne_shape);
        TwoOne_picture01=new LTextField();
        TwoOne_picture01.text="TRANSCAD";
        TwoOne_picture02=new LTextField();
        TwoOne_picture02.text="2,\n\n\nR/S,\n\n\n(0,2)";
        TwoOne_picture01.x=(LGlobal.width-1000)*0.200;
        TwoOne_picture01.y=(LGlobal.width-1000)*0.051;
        TwoOne_picture02.x=(LGlobal.width-1000)*0.198;
        TwoOne_picture02.y=(LGlobal.width-1000)*0.062;
        TwoOne_part.addChild(TwoOne_picture01);
        TwoOne_part.addChild(TwoOne_picture02);
   }

    function two_two(x,y,q,w,e,r){
        TwoOne_shape=new LShape();
        TwoOne_shape.graphics.drawRect(x,y,q,w,e,r);
        TwoTwo_part.addChild(TwoOne_shape);
        TwoOne_picture021=new LTextField();
        TwoOne_picture021.text="交通运输系统仿真";
        TwoOne_picture022=new LTextField();
        TwoOne_picture022.text="3,\n\n\nR/S,\n\n\n(3,0)";
        TwoOne_picture021.x=(LGlobal.width-1000)*0.195;
        TwoOne_picture021.y=(LGlobal.width-1000)*0.081;
        TwoOne_picture022.x=(LGlobal.width-1000)*0.198;
        TwoOne_picture022.y=(LGlobal.width-1000)*0.092;
        TwoTwo_part.addChild(TwoOne_picture021);
        TwoTwo_part.addChild(TwoOne_picture022);
   }

   function two_three(x,y,q,w,e,r){
        TwoOne_shape=new LShape();
        TwoOne_shape.graphics.drawRect(x,y,q,w,e,r);
        TwoThree_part.addChild(TwoOne_shape);
        TwoOne_picture1=new LTextField();
        TwoOne_picture1.text="物流系统仿真";
        TwoOne_picture2=new LTextField();
        TwoOne_picture2.text="3,\n\n\nR/S,\n\n\n(3,0)";
        TwoOne_picture1.x=(LGlobal.width-1000)*0.198;
        TwoOne_picture1.y=(LGlobal.width-1000)*0.111;
        TwoOne_picture2.x=(LGlobal.width-1000)*0.198;
        TwoOne_picture2.y=(LGlobal.width-1000)*0.122;
        TwoThree_part.addChild(TwoOne_picture1);
        TwoThree_part.addChild(TwoOne_picture2);
   }

   //监听
   function Two_listen1(){
       /* var button21 = new LButton(TwoOne_part,TwoOne_part,TwoOne_part);
            new_TwoOne.addChild(button21);*/
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new_TwoOne.useCursor="pointer";
            new_TwoOne.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            TwoOne_picture01.color ="white" ;
            TwoOne_picture02.color ="white" ;
         
            });
             new_TwoOne.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             TwoOne_picture01.color ="fff" ;
             TwoOne_picture02.color ="fff" ;
            });
            new_TwoOne.addEventListener(LMouseEvent.MOUSE_UP,run21);
       }
       function run21(){}

       function Two_listen2(){
        /*var button22 = new LButton(TwoTwo_part,TwoTwo_part,TwoTwo_part);
            new_TwoTwo.addChild(button22);*/
             LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new_TwoTwo.useCursor="pointer";
            new_TwoTwo.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            TwoOne_picture021.color ="white" ;
            TwoOne_picture022.color ="white" ;
         
            });
             new_TwoTwo.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             TwoOne_picture021.color ="fff" ;
             TwoOne_picture022.color ="fff" ;
            });
            new_TwoTwo.addEventListener(LMouseEvent.MOUSE_UP,run22);
       }
       function run22(){}

       function Two_listen3(){
        /*var button23 = new LButton(TwoThree_part,TwoThree_part,TwoThree_part);
            new_TwoThree.addChild(button23);*/
             LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new_TwoThree.useCursor="pointer";
            new_TwoThree.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            TwoOne_picture1.color ="white" ;
            TwoOne_picture2.color ="white" ;
         
            });
             new_TwoThree.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             TwoOne_picture1.color ="fff" ;
             TwoOne_picture2.color ="fff" ;
            });
            new_TwoThree.addEventListener(LMouseEvent.MOUSE_UP,run23);
       }
       function run23(){}


}

