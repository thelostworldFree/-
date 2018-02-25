 var backLayer,Text1Layer,Text2Layer,Text3Layer,TextLayer,lineLayer,ractLayer,btnLayer,littleboxLayer,backLayer;
    var Text4Layer,Text5Layer,Text6Layer,Text7Layer,Text8Layer,Text9Layer,Text10Layer,Text11Layer,Text12Layer;

    var TextField1Layer,TextField2Layer,TextField3Layer,TextField4Layer,TextField5Layer,TextField6Layer;
    var TextField12Layer,TextField7Layer,TextField8Layer,TextField9Layer,TextField10Layer,TextField11Layer;
    var TextField13Layer,TextField14Layer,TextField15Layer,TextField16Layer,TextField16Layer,TextField18Layer;
    var TextField181Layer,TextField19Layer,TextField20Layer,TextField21Layer,TextField22Layer,TextField23Layer;
    var TextField24Layer,TextField25Layer,TextField26Layer,TextField27Layer,TextField28Layer,TextField29Layer;

    var line1Layer,line2Layer,line3Layer,line4Layer,line5Layer,line6Layer;//line7Layer，line8Layer，line9Layer，line10Layer，line11Layer；
    var line12Layer,line13Layer;//line14Layer，line15Layer，line16Layer，line17Layer，line18Layer，line19Layer，line20Layer，line21Layer，line22Layer；
    var upState,quitLayer,stageLayer,bool1,bool2,bool3,bool4;
    function main() {
       backLayer = new LSprite();        
        addChild(backLayer);
        //盒子1 
        theTextField9("城市轨道交通运营管理专业课程地图构架",80,10,10,"fff");
       
        box1();
        box2();
        box3();
        box4();
        box5();
        boxA5();
        Line();
        box6();
        ract();
        ract1();
        box7();
        box8();
        box9();
        box10();
        box11();
        next();
        //box2
        box21();
        box221();
        box222();
        box223();
        box224();
        Line2();
        box23();
        box231();
        box232();
        box233();
        box234();
        box235();
        box236();
        box237();
        box238();
        Line3();
        next1();
        box31();
        box32();
        box33();
        Line4();
        box41();
        box42();
        box43();
        box44();
        box45();
        box46();
        //box5
        
        Line51();
        box52();
        box53();
        box531();
        box532();
        box533();
        box534();
        Line55();

       


                
       
    }




    
           
                


function box1(){
        var new1 = new LSprite();
        backLayer.addChild(new1);
        Text1Layer = new LSprite();
        new1.addChild(Text1Layer);
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.063,(LGlobal.width-1000)*0.115, (LGlobal.width-1000)*0.025, (LGlobal.width-1000)*0.1]);
        Text1Layer.addChild(shape); 
        
 
    

        TextField1Layer = new LSprite();
        TextField2Layer = new LSprite();
        TextField3Layer = new LSprite();
        TextField4Layer = new LSprite();
        TextField5Layer = new LSprite();
        TextField6Layer = new LSprite();
        TextField7Layer = new LSprite();
        TextField8Layer = new LSprite();
        var theTextField1 = new LTextField();
        var theTextField2 = new LTextField();
        var theTextField3 = new LTextField();
        var theTextField4 = new LTextField();
        var theTextField5 = new LTextField();
        var theTextField6 = new LTextField();
        var theTextField7 = new LTextField();
        var theTextField8 = new LTextField();
        theTextField1.text ="职" ;
        theTextField2.text ="业" ;
        theTextField3.text ="素" ;
        theTextField4.text ="质" ;
        theTextField5.text ="与" ;
        theTextField6.text ="能" ;
        theTextField7.text ="力" ;
        theTextField8.text ="（88）" ;
        theTextField1.size=30;
        theTextField2.size=30;
        theTextField3.size=30;
        theTextField4.size=30;
        theTextField5.size=30;
        theTextField6.size=30;
        theTextField7.size=30;
        theTextField8.size=18;
        theTextField1.x =(LGlobal.width-1000)*0.071 ;
        theTextField1.y = (LGlobal.width-1000)*0.12; 
        theTextField2.x =(LGlobal.width-1000)*0.071 ;
        theTextField2.y = (LGlobal.width-1000)*0.131; 
        theTextField3.x =(LGlobal.width-1000)*0.071 ;
        theTextField3.y = (LGlobal.width-1000)*0.142; 
        theTextField4.x =(LGlobal.width-1000)*0.071 ;
        theTextField4.y = (LGlobal.width-1000)*0.153; 
        theTextField5.x =(LGlobal.width-1000)*0.071 ;
        theTextField5.y = (LGlobal.width-1000)*0.164; 
        theTextField6.x =(LGlobal.width-1000)*0.071 ;
        theTextField6.y = (LGlobal.width-1000)*0.175; 
        theTextField7.x =(LGlobal.width-1000)*0.071 ;
        theTextField7.y = (LGlobal.width-1000)*0.186; 
        theTextField8.x =(LGlobal.width-1000)*0.0668 ;
        theTextField8.y = (LGlobal.width-1000)*0.197; 
        theTextField1.color ="fff";
        theTextField2.color ="fff";
        theTextField3.color ="fff";
        theTextField4.color ="fff";
        theTextField5.color ="fff";
        theTextField6.color ="fff";
        theTextField7.color ="fff";
        theTextField8.color ="fff";
        TextField1Layer.addChild(theTextField1);
        TextField2Layer.addChild(theTextField2); 
        TextField3Layer.addChild(theTextField3); 
        TextField4Layer.addChild(theTextField4); 
        TextField5Layer.addChild(theTextField5); 
        TextField6Layer.addChild(theTextField6); 
        TextField7Layer.addChild(theTextField7); 
        TextField8Layer.addChild(theTextField8);
        Text1Layer.addChild(TextField1Layer);
        Text1Layer.addChild(TextField2Layer);
        Text1Layer.addChild(TextField3Layer);
        Text1Layer.addChild(TextField4Layer);
        Text1Layer.addChild(TextField5Layer);
        Text1Layer.addChild(TextField6Layer);
        Text1Layer.addChild(TextField7Layer);
        Text1Layer.addChild(TextField8Layer); 

       

     //  var     button01 = new LButton(Text1Layer,Text1Layer,Text1Layer);
       //     new1.addChild(button01);
        LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new1.useCursor="pointer";
            new1.addEventListener(LMouseEvent.MOUSE_OVER,function(){
                theTextField1.color ="red" ;
                theTextField2.color ="red" ;
                theTextField3.color ="red" ;
                theTextField4.color ="red" ;
                theTextField5.color ="red" ;
                theTextField6.color ="red" ;
                theTextField7.color ="red" ;
                theTextField8.color ="red" ;
            });
             new1.addEventListener(LMouseEvent.MOUSE_OUT,function(){
                theTextField1.color ="black" ;
                theTextField2.color ="black" ;
                theTextField3.color ="black" ;
                theTextField4.color ="black" ;
                theTextField5.color ="black" ;
                theTextField6.color ="black" ;
                theTextField7.color ="black" ;
                theTextField8.color ="black" ;
            });
            new1.addEventListener(LMouseEvent.MOUSE_DOWN,run1);

    }
function run1(){


}    


function box2(){
        Text2Layer = new LSprite();
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.096, (LGlobal.width-1000)*0.056, LGlobal.width*0.82, (LGlobal.width-1000)*0.22]);
        Text2Layer.addChild(shape); 
        backLayer.addChild(Text2Layer);

        

        }
function box3(){
         var new2 = new LSprite();
        backLayer.addChild(new2);
       Text3Layer = new LSprite();
       new2.addChild(Text3Layer);
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.10, (LGlobal.width-1000)*0.13, (LGlobal.width-1000)*0.018, (LGlobal.width-1000)*0.0625]);
        Text3Layer.addChild(shape); 
        

            TextField10Layer = new LSprite();
            TextField11Layer = new LSprite();
            TextField12Layer = new LSprite();
            TextField13Layer = new LSprite();
            var theTextField10 = new LTextField();
            var theTextField11 = new LTextField();
            var theTextField12 = new LTextField();
            var theTextField13 = new LTextField();
            theTextField10.text ="基" ;
            theTextField11.text ="础";
            theTextField12.text ="课";
            theTextField13.text ="程";
            theTextField10.size=32;
            theTextField11.size=32;
            theTextField12.size=32;
            theTextField13.size=32;
            theTextField10.x = (LGlobal.width-1000)*0.1035;
            theTextField10.y = (LGlobal.width-1000)*0.136;
            theTextField11.x =(LGlobal.width-1000)*0.1035;
            theTextField11.y = (LGlobal.width-1000)*0.148;
            theTextField12.x =(LGlobal.width-1000)*0.1035;
            theTextField12.y = (LGlobal.width-1000)*0.159;
            theTextField13.x = (LGlobal.width-1000)*0.1035;
            theTextField13.y = (LGlobal.width-1000)*0.170;
            theTextField10.color = "fff";
            theTextField11.color = "fff";
            theTextField12.color = "fff";
            theTextField13.color = "fff";
            TextField10Layer.addChild(theTextField10); 
            TextField11Layer.addChild(theTextField11); 
            TextField12Layer.addChild(theTextField12); 
            TextField13Layer.addChild(theTextField13); 
             Text3Layer.addChild(TextField10Layer);
             Text3Layer.addChild(TextField11Layer);
             Text3Layer.addChild(TextField12Layer);
             Text3Layer.addChild(TextField13Layer);

              //var     button01 = new LButton(Text3Layer,Text3Layer,Text3Layer);
           // new2.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new2.useCursor="pointer";
            new2.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            theTextField10.color ="red" ;
            theTextField11.color ="red" ;
            theTextField12.color ="red" ;
            theTextField13.color ="red" ;
            });
             new2.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             theTextField10.color ="black" ;
            theTextField11.color ="black" ;
            theTextField12.color ="black" ;
            theTextField13.color ="black" ;
            });
            new2.addEventListener(LMouseEvent.MOUSE_DOWN,run2);

  }
function run2(){
    
    
}  

function box4(){
       var new3 = new LSprite();
        backLayer.addChild(new3);
      Text4Layer = new LSprite();
      new3.addChild(Text4Layer);
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.13, (LGlobal.width-1000)*0.096, (LGlobal.width-1000)*0.1, (LGlobal.width-1000)*0.0238]);
        Text4Layer.addChild(shape); 
       

            TextField14Layer = new LSprite();
            TextField15Layer = new LSprite();
            var theTextField14 = new LTextField();
            var theTextField15 = new LTextField();
            theTextField14.text ="数学与计算机应用能力培养课程";
            theTextField15.text ="（32-36）";
            theTextField14.size=21;
            theTextField15.size=20;
            theTextField14.x = (LGlobal.width-1000)*0.131;
            theTextField14.y = (LGlobal.width-1000)*0.0999;
            theTextField15.x = (LGlobal.width-1000)*0.165;
            theTextField15.y = (LGlobal.width-1000)*0.11;
            theTextField14.color = "fff";
            theTextField15.color = "fff";
            TextField14Layer.addChild(theTextField14); 
            TextField15Layer.addChild(theTextField15); 
            Text4Layer.addChild(TextField14Layer);
            Text4Layer.addChild(TextField15Layer);


            // var     button01 = new LButton(Text4Layer,Text4Layer,Text4Layer);
            //new3.addChild(button01);
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new3.useCursor="pointer";
            new3.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField14.color ="red" ;
            theTextField15.color ="red" ;
           
            });
             new3.addEventListener(LMouseEvent.MOUSE_OUT,function(){
              theTextField14.color ="black" ;
            theTextField15.color ="black" ;
           
         
            });
         
            new3.addEventListener(LMouseEvent.MOUSE_DOWN,run3);



}
function run3(){

    
}

//问题
function box5(){

         var new4 = new LSprite();
        backLayer.addChild(new4);
        Text4Layer = new LSprite();
        new4.addChild(Text4Layer);
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.13, (LGlobal.width-1000)*0.2, (LGlobal.width-1000)*0.1, (LGlobal.width-1000)*0.0238]);
        Text4Layer.addChild(shape); 
       

            TextField14Layer = new LSprite();
            TextField15Layer = new LSprite();
            var theTextField14 = new LTextField();
            var theTextField15 = new LTextField();
            theTextField14.text ="公共服务与专业基础能力培养课程";
            theTextField15.text ="（12）";
            theTextField14.size=19.5;
            theTextField15.size=20;
            theTextField14.x = (LGlobal.width-1000)*0.13;
            theTextField14.y = (LGlobal.width-1000)*0.204;
            theTextField15.x = (LGlobal.width-1000)*0.169;
            theTextField15.y = (LGlobal.width-1000)*0.215;
            theTextField14.color = "fff";
            theTextField15.color = "fff";
            TextField14Layer.addChild(theTextField14); 
            TextField15Layer.addChild(theTextField15); 
            Text4Layer.addChild(TextField14Layer);
            Text4Layer.addChild(TextField15Layer);


             //var     button2 = new LButton(Text4Layer,Text4Layer,Text4Layer);
           // new4.addChild(button2);
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new4.useCursor="pointer";
            new4.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField14.color ="red" ;
            theTextField15.color ="red" ;
           
            });
             new4.addEventListener(LMouseEvent.MOUSE_OUT,function(){
              theTextField14.color ="black" ;
             theTextField15.color ="black" ;
           
         
            });
            new4.addEventListener(LMouseEvent.MOUSE_DOWN,run4);



}
function run4(){

    
}

function boxA5(){
      Text5Layer = new LSprite();
        var shape = new LShape();
        addChild(shape);
        //shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.13, (LGlobal.width-1000)*0.2, (LGlobal.width-1000)*0.1, (LGlobal.width-1000)*0.0238]);
        Text5Layer.addChild(shape); 
        
            var     button01 = new LButton(Text5Layer,Text5Layer,Text5Layer);
            backLayer.addChild(button01);
            backLayer.addEventListener(LMouseEvent.MOUSE_DOWN,box2);


}


function box6(){
        Text6Layer = new LSprite();
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.24, (LGlobal.width-1000)*0.068, (LGlobal.width-1000)*0.15, (LGlobal.width-1000)*0.07]);
        Text5Layer.addChild(shape); 
        backLayer.addChild(Text5Layer);

         Text7Layer = new LSprite();
        var shape1 = new LShape();
        addChild(shape1);
        shape1.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.24, (LGlobal.width-1000)*0.145, (LGlobal.width-1000)*0.15, (LGlobal.width-1000)*0.12]);
        Text7Layer.addChild(shape1); 
        backLayer.addChild(Text7Layer);
}

        //圆角矩形
        //前
function ract(){
           
            var new5 = new LSprite();
           backLayer.addChild(new5);
            ractLayer = new LSprite();
            new5.addChild(ractLayer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRoundRect(2, "black", [(LGlobal.width-1000)*0.245, (LGlobal.width-1000)*0.088,(LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.025, (LGlobal.width-1000)*0.0125]);
           ractLayer.addChild(shape);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text ="数学类课程包";
            theTextField19.text ="（13）";
            theTextField18.size=24;
            theTextField19.size=21;
            theTextField18.x = (LGlobal.width-1000)*0.25;
            theTextField18.y = (LGlobal.width-1000)*0.092;
            theTextField19.x = (LGlobal.width-1000)*0.264;
            theTextField19.y = (LGlobal.width-1000)*0.102;
            theTextField18.color = "red";
            theTextField19.color = "red";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            ractLayer.addChild(TextField18Layer); 
            ractLayer.addChild(TextField19Layer); 
            bool2=2;
          // var     button01 = new LButton(ractLayer,ractLayer,ractLayer);
           // new5.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
           new5.useCursor="pointer";
            new5.addEventListener(LMouseEvent.MOUSE_OVER,function(){
                    theTextField19.color="blue";
                    theTextField18.color="blue";
            });
             new5.addEventListener(LMouseEvent.MOUSE_OUT,function(){
                    theTextField18.color="red";
                    theTextField19.color="red";
            });
            new5.addEventListener(LMouseEvent.MOUSE_DOWN,run5);

   }
function run5(){
 if (bool2==2) {
        bool2=1
        click2()
    }   
    else if (bool2==1) {
    bool2=2;
    FourOne_bigpart2.removeAllChild();
    TwoOne_bigpart2.removeAllChild();
}
}
/*function cursor(){
                LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
				var layer01 = new LSprite();
				layer01.useCursor = "pointer";
				addChild(layer01);
				var bm01 = new LBitmap(new LBitmapData("null", 0, 0, 100, 100));
				layer01.addChild(bm01);
                layer01.addEventListener(LMouseEvent.MOUSE_MOVE,box2);
}*/


     //后


function ract1(){
          var new6 = new LSprite();
           backLayer.addChild(new6);
          ract1Layer = new LSprite();
           new6.addChild(ract1Layer);
          var shape1 = new LShape();
          addChild(shape1);
          shape1.graphics.drawRoundRect(2, "black", [(LGlobal.width-1000)*0.315, (LGlobal.width-1000)*0.088,(LGlobal.width-1000)*0.068, (LGlobal.width-1000)*0.025, (LGlobal.width-1000)*0.0125]);
          ract1Layer.addChild(shape1);

            TextField20Layer = new LSprite();
            TextField21Layer = new LSprite();
            var theTextField20 = new LTextField();
            var theTextField21 = new LTextField();
            theTextField20.text ="计算机应用课程包";
            theTextField21.text ="（19-23）";
            theTextField20.size=24;
            theTextField21.size=21;
            theTextField20.x = (LGlobal.width-1000)*0.3175;
            theTextField20.y = (LGlobal.width-1000)*0.092;
            theTextField21.x = (LGlobal.width-1000)*0.334;
            theTextField21.y = (LGlobal.width-1000)*0.102;
            theTextField20.color = "red";
            theTextField21.color = "red";
            TextField20Layer.addChild(theTextField20); 
            TextField21Layer.addChild(theTextField21); 
            ract1Layer.addChild(TextField20Layer);
            ract1Layer.addChild(TextField21Layer);
            bool1=2;
           // var button01 = new LButton(ract1Layer,ract1Layer,ract1Layer);
          //  new6.addChild(button01);
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new6.useCursor="pointer";
            new6.addEventListener(LMouseEvent.MOUSE_OVER,function(){
                    theTextField20.color="blue";
                    theTextField21.color="blue";
            });
             new6.addEventListener(LMouseEvent.MOUSE_OUT,function(){
                    theTextField20.color="red";
                    theTextField21.color="red";
            });
            new6.addEventListener(LMouseEvent.MOUSE_DOWN,run6);
            

     }
function run6(){
    if (bool1==2) {
        bool1=1
        click1()
    }   
    else if (bool1==1) {
    bool1=2;
    FourOne_bigpart1.removeAllChild();
    TwoOne_bigpart1.removeAllChild();
    TwoOne_bigpart2.removeAllChild();
}
    
}    


       //文本
      //tittle的文本
function theTextField9(a,s,d,f,c){
            TextField1Layer = new LSprite();
            var theTextField = new LTextField();
            theTextField.text =a ;
            theTextField.size=s;
            theTextField.x = d;
            theTextField.y = f;
            
            theTextField.color = c;
            TextField1Layer.addChild(theTextField); 
             backLayer.addChild(TextField1Layer);
   }


        //画小框
        //左边1
function box7(){
           var new7 = new LSprite();
            backLayer.addChild(new7);
            Text8Layer = new LSprite();
            new7.addChild(Text8Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.245, (LGlobal.width-1000)*0.152, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text8Layer.addChild(shape); 
           


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.245, (LGlobal.width-1000)*0.172, (LGlobal.width-1000)*0.305, (LGlobal.width-1000)*0.172]);
            line1Layer.addChild(shape1);
            Text8Layer.addChild(shape1);
            

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text ="交通运输概论";
            theTextField19.text ="1，R,（4,0）";
            theTextField18.size=20;
            theTextField19.size=20;
            theTextField18.x = (LGlobal.width-1000)*0.254;
            theTextField18.y = (LGlobal.width-1000)*0.158;
            theTextField19.x = (LGlobal.width-1000)*0.255;
            theTextField19.y = (LGlobal.width-1000)*0.173;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text8Layer.addChild(TextField18Layer);
            Text8Layer.addChild(TextField19Layer);

            // var     button01 = new LButton(Text8Layer,Text8Layer,Text8Layer);
          //  new7.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new7.useCursor="pointer";
            new7.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField19.color ="red" ;
            theTextField18.color ="red" ;
           
            });
             new7.addEventListener(LMouseEvent.MOUSE_OUT,function(){
              theTextField19.color ="black" ;
             theTextField18.color ="black" ;
           
         
            });
            new7.addEventListener(LMouseEvent.MOUSE_DOWN,run7);


        }
function run7(){

    
}        
        //2
function box8(){
             var new8 = new LSprite();
            backLayer.addChild(new8);
            Text7Layer = new LSprite();
            new8.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.245, (LGlobal.width-1000)*0.19, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
            


            line2Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.245, (LGlobal.width-1000)*0.21, (LGlobal.width-1000)*0.305, (LGlobal.width-1000)*0.21]);
            line2Layer.addChild(shape1);
            Text7Layer.addChild(shape1);
            

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text ="商务礼仪";
            theTextField19.text ="2，R,（2,0）";
            theTextField18.size=20;
            theTextField19.size=20;
            theTextField18.x = (LGlobal.width-1000)*0.263;
            theTextField18.y = (LGlobal.width-1000)*0.196;
            theTextField19.x = (LGlobal.width-1000)*0.257;
            theTextField19.y = (LGlobal.width-1000)*0.21;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);

            // var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
           // new8.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new8.useCursor="pointer";
            new8.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField19.color ="red" ;
            theTextField18.color ="red" ;
           
            });
             new8.addEventListener(LMouseEvent.MOUSE_OUT,function(){
              theTextField19.color ="black" ;
             theTextField18.color ="black" ;
           
         
            });
            new8.addEventListener(LMouseEvent.MOUSE_DOWN,run8);
        }
function run8(){

    
}        

        //右边1
function box9(){
           var new9 = new LSprite();
            backLayer.addChild(new9);
            Text7Layer = new LSprite();
            new9.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.32, (LGlobal.width-1000)*0.152, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
           


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.32, (LGlobal.width-1000)*0.172, (LGlobal.width-1000)*0.38, (LGlobal.width-1000)*0.172]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text ="交通运输法规与政策";
            theTextField19.text ="1，R,（0,2）";
            theTextField18.size=20;
            theTextField19.size=20;
            theTextField18.x = (LGlobal.width-1000)*0.32;
            theTextField18.y = (LGlobal.width-1000)*0.158;
            theTextField19.x = (LGlobal.width-1000)*0.332;
            theTextField19.y = (LGlobal.width-1000)*0.173;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);

           // var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
           // new9.addChild(button01);
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new9.useCursor="pointer";
            new9.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField19.color ="red" ;
            theTextField18.color ="red" ;
           
            });
             new9.addEventListener(LMouseEvent.MOUSE_OUT,function(){
              theTextField19.color ="black" ;
             theTextField18.color ="black" ;
           
         
            });
            new9.addEventListener(LMouseEvent.MOUSE_DOWN,run9);

        }
function run9(){

    
}        
        //2
function box10(){
            var new10 = new LSprite();
            backLayer.addChild(new10);
            Text7Layer = new LSprite();
            new10.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.32, (LGlobal.width-1000)*0.19, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
            


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.32, (LGlobal.width-1000)*0.21, (LGlobal.width-1000)*0.38, (LGlobal.width-1000)*0.21]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text ="管理学";
            theTextField19.text ="2，R,（2,0）";
            theTextField18.size=20;
            theTextField19.size=20;
            theTextField18.x = (LGlobal.width-1000)*0.34;
            theTextField18.y = (LGlobal.width-1000)*0.196;
            theTextField19.x = (LGlobal.width-1000)*0.332;
            theTextField19.y = (LGlobal.width-1000)*0.21;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);

            // var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
            //new10.addChild(button01);
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new10.useCursor="pointer";
            new10.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField19.color ="red" ;
            theTextField18.color ="red" ;
           
            });
             new10.addEventListener(LMouseEvent.MOUSE_OUT,function(){
              theTextField19.color ="black" ;
             theTextField18.color ="black" ;
           
         
            });
            new10.addEventListener(LMouseEvent.MOUSE_DOWN,run10);

        }
function run10(){

    
}        
        //3
function box11(){
            var new11 = new LSprite();
            backLayer.addChild(new11);
            Text7Layer = new LSprite();
            new11.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.32, (LGlobal.width-1000)*0.228, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
           

            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.32, (LGlobal.width-1000)*0.248, (LGlobal.width-1000)*0.38, (LGlobal.width-1000)*0.248]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

      
            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text ="公共关系学";
            theTextField19.text ="2，R,（0,2）";
            theTextField18.size=20;
            theTextField19.size=20;
            theTextField18.x = (LGlobal.width-1000)*0.333;
            theTextField18.y = (LGlobal.width-1000)*0.235;
            theTextField19.x = (LGlobal.width-1000)*0.332;
            theTextField19.y = (LGlobal.width-1000)*0.25;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);

           //  var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
           // new11.addChild(button01);
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new11.useCursor="pointer";
            new11.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField19.color ="red" ;
            theTextField18.color ="red" ;
           
            });
             new11.addEventListener(LMouseEvent.MOUSE_OUT,function(){
              theTextField19.color ="black" ;
             theTextField18.color ="black" ;
           
         
            });
            new11.addEventListener(LMouseEvent.MOUSE_DOWN,run11);

        }
function run11(){

    
}


  //画横线
function Line(){
     line1Layer = new LSprite();
     line2Layer = new LSprite();
     line3Layer = new LSprite();
     line4Layer = new LSprite();
     line5Layer = new LSprite();
     line6Layer = new LSprite();
     var shape1 = new LShape();
     var shape2 = new LShape();
     var shape3 = new LShape();
     var shape4 = new LShape();
     var shape5 = new LShape();
     var shape6 = new LShape();
     addChild(shape1);
     addChild(shape2);
     addChild(shape3);
     addChild(shape4);
     addChild(shape5);
     addChild(shape6);
     shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.23, (LGlobal.width-1000)*0.108, (LGlobal.width-1000)*0.24, (LGlobal.width-1000)*0.108]);
     shape2.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.23, (LGlobal.width-1000)*0.213, (LGlobal.width-1000)*0.24, (LGlobal.width-1000)*0.213]);

     shape3.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.305, (LGlobal.width-1000)*0.206, (LGlobal.width-1000)*0.32, (LGlobal.width-1000)*0.206]);
     shape4.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.305, (LGlobal.width-1000)*0.165, (LGlobal.width-1000)*0.32, (LGlobal.width-1000)*0.165]);
     shape5.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.35, (LGlobal.width-1000)*0.22, (LGlobal.width-1000)*0.35, (LGlobal.width-1000)*0.228]);

     shape6.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.305, (LGlobal.width-1000)*0.1, (LGlobal.width-1000)*0.315, (LGlobal.width-1000)*0.1]);
     
     line1Layer.addChild(shape1); 
     line2Layer.addChild(shape2);
     line3Layer.addChild(shape3);
     line4Layer.addChild(shape4);
     line5Layer.addChild(shape5);
     line5Layer.addChild(shape6);
     backLayer.addChild(line1Layer);
     backLayer.addChild(line2Layer);
     backLayer.addChild(line3Layer);
     backLayer.addChild(line4Layer);
     backLayer.addChild(line5Layer);
     backLayer.addChild(line6Layer);
  
   }




     //画圆角矩形
    /* function ract(x, y, [q,w,e,r,t]){
          ractLayer = new LSprite();
          var shape = new LShape();
          addChild(shape);
         shape.graphics.drawRoundRect(x, y, [q,w,e,r,t]);
         backLayer.addChild(ractLayer);
     }*/

 
  //box1的文本
   function theTextField2(t,s,x,y,c){
            TextLayer = new LSprite();
            var theTextField = new LTextField();
            theTextField.text = t;
            theTextField.size=s;
            theTextField.x = x;
            theTextField.y = y;
    
            theTextField.color = c;
            TextLayer.addChild(theTextField);
            backLayer.addChild(TextLayer); 
   }
   
  //画小框
  function littlebox(x, y, q,w,e,r){
      littleboxLayer = new LSprite();
     var shape = new LShape();
    addChild(shape);
    shape.graphics.drawRect(x, y, q,w,e,r);
    littleboxLayer.addChild(shape); 
     backLayer.addChild(littleboxLayer);

  }


//箭头
function next(){
         
        nextLayer = new LSprite();
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawVertices(2,"black",[[(LGlobal.width-1000)*0.42,(LGlobal.width-1000)*0.137],[(LGlobal.width-1000)*0.42,(LGlobal.width-1000)*0.162],[(LGlobal.width-1000)*0.44,(LGlobal.width-1000)*0.15]],"black");
        shape.graphics.fill();
        nextLayer.addChild(shape); 
        backLayer.addChild(nextLayer);

        next1Layer = new LSprite();
        var shape1 = new LShape();
        addChild(shape1);
        shape1.graphics.rect((LGlobal.width-1000)*0.4,(LGlobal.width-1000)*0.145,(LGlobal.width-1000)*0.03,(LGlobal.width-1000)*0.01);
        shape1.graphics.fill();
        next1Layer.addChild(shape1); 
        backLayer.addChild(next1Layer);

       }
//box2
function box21(){
        var new12 = new LSprite();
        backLayer.addChild(new12);
      Text3Layer = new LSprite();
      new12.addChild(Text3Layer);
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.45, (LGlobal.width-1000)*0.12, (LGlobal.width-1000)*0.018, (LGlobal.width-1000)*0.0625]);
        Text3Layer.addChild(shape); 
        


            TextField10Layer = new LSprite();
            TextField11Layer = new LSprite();
            TextField12Layer = new LSprite();
            TextField13Layer = new LSprite();
            var theTextField10 = new LTextField();
            var theTextField11 = new LTextField();
            var theTextField12 = new LTextField();
            var theTextField13 = new LTextField();

            theTextField10.text ="核" ;
            theTextField11.text ="心";
            theTextField12.text ="课";
            theTextField13.text ="程";
            theTextField10.size=32;
            theTextField11.size=32;
            theTextField12.size=32;
            theTextField13.size=32;
            theTextField10.x = (LGlobal.width-1000)*0.4535;
            theTextField10.y = (LGlobal.width-1000)*0.126;
            theTextField11.x =(LGlobal.width-1000)*0.4535;
            theTextField11.y = (LGlobal.width-1000)*0.138;
            theTextField12.x =(LGlobal.width-1000)*0.4535;
            theTextField12.y = (LGlobal.width-1000)*0.152;
            theTextField13.x = (LGlobal.width-1000)*0.4535;
            theTextField13.y = (LGlobal.width-1000)*0.166;
            theTextField10.color = "fff";
            theTextField11.color = "fff";
            theTextField12.color = "fff";
            theTextField13.color = "fff";
            TextField10Layer.addChild(theTextField10); 
            TextField11Layer.addChild(theTextField11); 
            TextField12Layer.addChild(theTextField12); 
            TextField13Layer.addChild(theTextField13); 
             Text3Layer.addChild(TextField10Layer);
             Text3Layer.addChild(TextField11Layer);
             Text3Layer.addChild(TextField12Layer);
             Text3Layer.addChild(TextField13Layer);

             // var     button01 = new LButton(Text3Layer,Text3Layer,Text3Layer);
           // new12.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new12.useCursor="pointer";
            new12.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            theTextField10.color ="red" ;
            theTextField11.color ="red" ;
            theTextField12.color ="red" ;
            theTextField13.color ="red" ;
          
           
            });
             new12.addEventListener(LMouseEvent.MOUSE_OUT,function(){
              theTextField10.color ="black" ;
            theTextField11.color ="black" ;
            theTextField12.color ="black" ;
            theTextField13.color ="black" ;
           
         
            });
            new12.addEventListener(LMouseEvent.MOUSE_DOWN,run12);
  }
function run12(){

    
}

      
function box221(){
        var new13 = new LSprite();
        backLayer.addChild(new13);
          Text4Layer = new LSprite();
          new13.addChild(Text4Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.49, (LGlobal.width-1000)*0.08, (LGlobal.width-1000)*0.1, (LGlobal.width-1000)*0.0238]);
            Text4Layer.addChild(shape); 
       

            TextField14Layer = new LSprite();
            TextField15Layer = new LSprite();
            var theTextField14 = new LTextField();
            var theTextField15 = new LTextField();
            theTextField14.text ="车站客运管理基础能力培养课程";
            theTextField15.text ="（6）";
            theTextField14.size=21;
            theTextField15.size=20;
            theTextField14.x = (LGlobal.width-1000)*0.491;
            theTextField14.y = (LGlobal.width-1000)*0.084;
            theTextField15.x = (LGlobal.width-1000)*0.53;
            theTextField15.y = (LGlobal.width-1000)*0.094;
            theTextField14.color = "fff";
            theTextField15.color = "fff";
            TextField14Layer.addChild(theTextField14); 
            TextField15Layer.addChild(theTextField15); 
            Text4Layer.addChild(TextField14Layer);
            Text4Layer.addChild(TextField15Layer);


            // var     button01 = new LButton(Text4Layer,Text4Layer,Text4Layer);
           // new13.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new13.useCursor="pointer";
            new13.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            theTextField14.color ="red" ;
            theTextField15.color ="red" ;
           
          
           
            });
             new13.addEventListener(LMouseEvent.MOUSE_OUT,function(){
           theTextField14.color ="black" ;
            theTextField15.color ="black" ;
           
         
            });
            new13.addEventListener(LMouseEvent.MOUSE_DOWN,run13);


}
function run13(){

    
}
 
function box222(){
        var new14 = new LSprite();
        backLayer.addChild(new14);
      Text4Layer = new LSprite();
      new14.addChild(Text4Layer);
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.49, (LGlobal.width-1000)*0.128, (LGlobal.width-1000)*0.1, (LGlobal.width-1000)*0.0238]);
        Text4Layer.addChild(shape); 
     

            TextField14Layer = new LSprite();
            TextField15Layer = new LSprite();
            var theTextField14 = new LTextField();
            var theTextField15 = new LTextField();
            theTextField14.text ="票务服务与管理基本能力培养课程";
            theTextField15.text ="（6）";
            theTextField14.size=20;
            theTextField15.size=20;
            theTextField14.x = (LGlobal.width-1000)*0.49;
            theTextField14.y = (LGlobal.width-1000)*0.132;
            theTextField15.x = (LGlobal.width-1000)*0.53;
            theTextField15.y = (LGlobal.width-1000)*0.143;
            theTextField14.color = "fff";
            theTextField15.color = "fff";
            TextField14Layer.addChild(theTextField14); 
            TextField15Layer.addChild(theTextField15); 
            Text4Layer.addChild(TextField14Layer);
            Text4Layer.addChild(TextField15Layer);

            // var     button01 = new LButton(Text4Layer,Text4Layer,Text4Layer);
           // new14.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new14.useCursor="pointer";
            new14.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            theTextField14.color ="red" ;
            theTextField15.color ="red" ;
           
          
           
            });
             new14.addEventListener(LMouseEvent.MOUSE_OUT,function(){
           theTextField14.color ="black" ;
            theTextField15.color ="black" ;
           
         
            });
            new14.addEventListener(LMouseEvent.MOUSE_DOWN,run14);


}
function run14(){

    
}

function box223(){
        var new15 = new LSprite();
        backLayer.addChild(new15);
      Text4Layer = new LSprite();
      new15.addChild(Text4Layer);
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.49, (LGlobal.width-1000)*0.176, (LGlobal.width-1000)*0.1, (LGlobal.width-1000)*0.0238]);
        Text4Layer.addChild(shape); 
      

            TextField14Layer = new LSprite();
            TextField15Layer = new LSprite();
            var theTextField14 = new LTextField();
            var theTextField15 = new LTextField();
            theTextField14.text ="车站客运管理基础能力培养课程";
            theTextField15.text ="（8）";
            theTextField14.size=21;
            theTextField15.size=20;
            theTextField14.x = (LGlobal.width-1000)*0.49;
            theTextField14.y = (LGlobal.width-1000)*0.18;
            theTextField15.x = (LGlobal.width-1000)*0.531;
            theTextField15.y = (LGlobal.width-1000)*0.19;
            theTextField14.color = "fff";
            theTextField15.color = "fff";
            TextField14Layer.addChild(theTextField14); 
            TextField15Layer.addChild(theTextField15); 
            Text4Layer.addChild(TextField14Layer);
            Text4Layer.addChild(TextField15Layer);


            //var     button01 = new LButton(Text4Layer,Text4Layer,Text4Layer);
          //  new15.addChild(button01);
          LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new15.useCursor="pointer";
            new15.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            theTextField14.color ="red" ;
            theTextField15.color ="red" ;
           
          
           
            });
             new15.addEventListener(LMouseEvent.MOUSE_OUT,function(){
           theTextField14.color ="black" ;
            theTextField15.color ="black" ;
           
         
            });
            new15.addEventListener(LMouseEvent.MOUSE_DOWN,run15);


}
function run15(){

    
}

function box224(){
        var new16 = new LSprite();
        backLayer.addChild(new16);
        Text4Layer = new LSprite();
        new16.addChild(Text4Layer);
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.49, (LGlobal.width-1000)*0.223, (LGlobal.width-1000)*0.1, (LGlobal.width-1000)*0.0238]);
        Text4Layer.addChild(shape); 
      

            TextField14Layer = new LSprite();
            TextField15Layer = new LSprite();
            var theTextField14 = new LTextField();
            var theTextField15 = new LTextField();
            theTextField14.text ="应急处理基本能力培养课程";
            theTextField15.text ="（6）";
            theTextField14.size=21;
            theTextField15.size=20;
            theTextField14.x = (LGlobal.width-1000)*0.5;
            theTextField14.y = (LGlobal.width-1000)*0.227;
            theTextField15.x = (LGlobal.width-1000)*0.531;
            theTextField15.y = (LGlobal.width-1000)*0.237;
            theTextField14.color = "fff";
            theTextField15.color = "fff";
            TextField14Layer.addChild(theTextField14); 
            TextField15Layer.addChild(theTextField15); 
            Text4Layer.addChild(TextField14Layer);
            Text4Layer.addChild(TextField15Layer);

           // var     button01 = new LButton(Text4Layer,Text4Layer,Text4Layer);
         //   new16.addChild(button01);
          LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new16.useCursor="pointer";
            new16.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            theTextField14.color ="red" ;
            theTextField15.color ="red" ;
           
          
           
            });
             new16.addEventListener(LMouseEvent.MOUSE_OUT,function(){
           theTextField14.color ="black" ;
            theTextField15.color ="black" ;
           
         
            });
            new16.addEventListener(LMouseEvent.MOUSE_DOWN,run16);


}
function run16(){

    
}

function Line2(){
     line1Layer = new LSprite();
     line2Layer = new LSprite();
     line3Layer = new LSprite();
     line4Layer = new LSprite();
     var shape1 = new LShape();
     var shape2 = new LShape();
     var shape3 = new LShape();
     var shape4 = new LShape();
     addChild(shape1);
     addChild(shape2);
     addChild(shape3);
     addChild(shape4);
     shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.59, (LGlobal.width-1000)*0.092, (LGlobal.width-1000)*0.605, (LGlobal.width-1000)*0.092]);
     shape2.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.59, (LGlobal.width-1000)*0.14, (LGlobal.width-1000)*0.605, (LGlobal.width-1000)*0.14]);
     shape3.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.59, (LGlobal.width-1000)*0.188, (LGlobal.width-1000)*0.605, (LGlobal.width-1000)*0.188]);
     shape4.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.59, (LGlobal.width-1000)*0.236, (LGlobal.width-1000)*0.605, (LGlobal.width-1000)*0.236]);
     line1Layer.addChild(shape1); 
     line2Layer.addChild(shape2);
     line3Layer.addChild(shape3);
     line4Layer.addChild(shape4);
     backLayer.addChild(line1Layer);
     backLayer.addChild(line2Layer);
     backLayer.addChild(line3Layer);
     backLayer.addChild(line4Layer);
  
   }

function box23(){
       
        Text6Layer = new LSprite();
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.605, (LGlobal.width-1000)*0.065, (LGlobal.width-1000)*0.15, (LGlobal.width-1000)*0.047]);
        Text5Layer.addChild(shape); 
        backLayer.addChild(Text5Layer);

         Text7Layer = new LSprite();
        var shape1 = new LShape();
        addChild(shape1);
        shape1.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.605, (LGlobal.width-1000)*0.116, (LGlobal.width-1000)*0.15, (LGlobal.width-1000)*0.047]);
        Text7Layer.addChild(shape1); 
        backLayer.addChild(Text7Layer);

         Text8Layer = new LSprite();
        var shape2 = new LShape();
        addChild(shape2);
        shape2.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.605, (LGlobal.width-1000)*0.168, (LGlobal.width-1000)*0.15, (LGlobal.width-1000)*0.047]);
        Text8Layer.addChild(shape2); 
        backLayer.addChild(Text8Layer);

         Text9Layer = new LSprite();
        var shape3 = new LShape();
        addChild(shape3);
        shape3.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.605, (LGlobal.width-1000)*0.22, (LGlobal.width-1000)*0.15, (LGlobal.width-1000)*0.047]);
        Text9Layer.addChild(shape3); 
        backLayer.addChild(Text9Layer);
}

//little box231左
function box231(){
             var new17 = new LSprite();
             backLayer.addChild(new17);
            Text7Layer = new LSprite()
            new17.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.61, (LGlobal.width-1000)*0.075, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
            


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.61, (LGlobal.width-1000)*0.095, (LGlobal.width-1000)*0.67, (LGlobal.width-1000)*0.095]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text ="城市轨道交通车站设备";
            theTextField19.text ="1，R,（0,2）";
            theTextField18.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.61;
            theTextField18.y = (LGlobal.width-1000)*0.081;
            theTextField19.x = (LGlobal.width-1000)*0.625;
            theTextField19.y = (LGlobal.width-1000)*0.095;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);


            // var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
            //new17.addChild(button01);
             LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new17.useCursor="pointer";
            new17.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            theTextField18.color ="red" ;
            theTextField19.color ="red" ;
       
           
            });
             new17.addEventListener(LMouseEvent.MOUSE_OUT,function(){
          theTextField18.color ="black" ;
            theTextField19.color ="black" ;
           
            });
            new17.addEventListener(LMouseEvent.MOUSE_DOWN,run17);



        }
function run17(){

    
}        


//little box231右
function box232(){
           var new18 = new LSprite();
            backLayer.addChild(new18);
            Text7Layer = new LSprite();
            new18.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.688, (LGlobal.width-1000)*0.075, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
            


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.688, (LGlobal.width-1000)*0.095, (LGlobal.width-1000)*0.748, (LGlobal.width-1000)*0.095]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text ="城市轨道交通客运管理";
            theTextField19.text ="2，R,(4,0)";
            theTextField18.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.688;
            theTextField18.y = (LGlobal.width-1000)*0.081;
            theTextField19.x = (LGlobal.width-1000)*0.702;
            theTextField19.y = (LGlobal.width-1000)*0.096;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);

            //var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
           // new18.addChild(button01);
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new18.useCursor="pointer";
            new18.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            theTextField18.color ="red" ;
            theTextField19.color ="red" ;
       
           
            });
             new18.addEventListener(LMouseEvent.MOUSE_OUT,function(){
          theTextField18.color ="black" ;
            theTextField19.color ="black" ;
           
            });
            new18.addEventListener(LMouseEvent.MOUSE_DOWN,run18);

        }
function run18(){

    
}        

//little box231左
function box233(){
            var new19 = new LSprite();
            backLayer.addChild(new19);
            Text7Layer = new LSprite();
            new19.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.61, (LGlobal.width-1000)*0.125, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
       


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.61, (LGlobal.width-1000)*0.145, (LGlobal.width-1000)*0.67, (LGlobal.width-1000)*0.145]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text ="运输经济学";
            theTextField19.text ="2，R,（4,0）";
            theTextField18.size=17.5;
            theTextField19.size=18;


            theTextField18.x = (LGlobal.width-1000)*0.625;
            theTextField18.y = (LGlobal.width-1000)*0.131;
            theTextField19.x = (LGlobal.width-1000)*0.625;
            theTextField19.y = (LGlobal.width-1000)*0.1465;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);

           // var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
           // new19.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new19.useCursor="pointer";
            new19.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            theTextField18.color ="red" ;
            theTextField19.color ="red" ;
       
           
            });
             new19.addEventListener(LMouseEvent.MOUSE_OUT,function(){
          theTextField18.color ="black" ;
            theTextField19.color ="black" ;
           
            });
            new19.addEventListener(LMouseEvent.MOUSE_DOWN,run19);

        }
function run19(){

    
}


//little box231右
function box234(){
            var new20 = new LSprite();
            backLayer.addChild(new20);

            Text16Layer = new LSprite();
            new20.addChild(Text16Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.61, (LGlobal.width-1000)*0.175, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text16Layer.addChild(shape); 



            line2Layer = new LSprite();
            var shape3 = new LShape();
            addChild(shape3);
             shape3.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.61, (LGlobal.width-1000)*0.195, (LGlobal.width-1000)*0.67, (LGlobal.width-1000)*0.195]);
            line2Layer.addChild(shape3);
            Text16Layer.addChild(line2Layer);

            TextField18ALayer = new LSprite();
            TextField18BLayer = new LSprite();
            TextField18CLayer = new LSprite();
            var theTextField18A = new LTextField();
            var theTextField18B = new LTextField();
            var theTextField18C = new LTextField();

            theTextField18A.text = "城市轨道交通";
            theTextField18B.text = "行车组织";
            theTextField18C.text ="2，R,（4,0）";
            theTextField18A.size=17.5;
            theTextField18B.size=17.5;
            theTextField18C.size=18;

            theTextField18A.x = (LGlobal.width-1000)*0.623;
            theTextField18A.y = (LGlobal.width-1000)*0.178;
            theTextField18B.x = (LGlobal.width-1000)*0.628;
            theTextField18B.y = (LGlobal.width-1000)*0.1855;
            theTextField18C.x = (LGlobal.width-1000)*0.625;
            theTextField18C.y = (LGlobal.width-1000)*0.197;

            
            theTextField18A.color = "fff";
            theTextField18B.color = "fff";
            theTextField18C.color = "fff";
            TextField18ALayer.addChild(theTextField18A); 
            TextField18BLayer.addChild(theTextField18B); 
            TextField18CLayer.addChild(theTextField18C); 
            Text16Layer.addChild(TextField18ALayer);
            Text16Layer.addChild(TextField18BLayer)
            Text16Layer.addChild(TextField18CLayer);

           //  var     button01 = new LButton(Text16Layer,Text16Layer,Text16Layer);
           // new20.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new20.useCursor="pointer";
            new20.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField18A.color ="red" ;
            theTextField18B.color ="red" ;
            theTextField18C.color ="red" ;
         
       
           
            });
             new20.addEventListener(LMouseEvent.MOUSE_OUT,function(){
         theTextField18A.color ="black" ;
            theTextField18B.color ="black" ;
            theTextField18C.color ="black" ;
           
            });
            new20.addEventListener(LMouseEvent.MOUSE_DOWN,run20);
        }


function run20(){

    
}
//little box231左
function box235(){
            var new21 = new LSprite();
            backLayer.addChild(new21);
            Text7Layer = new LSprite();
            new21.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.688, (LGlobal.width-1000)*0.125, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
      


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.688, (LGlobal.width-1000)*0.145, (LGlobal.width-1000)*0.748, (LGlobal.width-1000)*0.145]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField181Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField181 = new LTextField();
            var theTextField19 = new LTextField();

           theTextField18.text = "城市轨道交通";
            theTextField181.text = "票务管理";
            theTextField19.text ="2，R,（2,0）";
            theTextField18.size=17.5;
            theTextField181.size=17.5;
            theTextField181.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.699;
            theTextField18.y = (LGlobal.width-1000)*0.127;
            theTextField181.x = (LGlobal.width-1000)*0.705;
            theTextField181.y = (LGlobal.width-1000)*0.135;
            theTextField19.x = (LGlobal.width-1000)*0.702;
            theTextField19.y = (LGlobal.width-1000)*0.1465;
            
            theTextField18.color = "fff";
            theTextField181.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField181Layer.addChild(theTextField181); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField181Layer)
            Text7Layer.addChild(TextField19Layer);


           // var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
          //  new21.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new21.useCursor="pointer";
            new21.addEventListener(LMouseEvent.MOUSE_OVER,function(){
              theTextField18.color = "red";
            theTextField181.color = "red";
            theTextField19.color = "red";
       
           
            });
             new21.addEventListener(LMouseEvent.MOUSE_OUT,function(){
         theTextField18.color = "fff";
            theTextField181.color = "fff";
            theTextField19.color = "fff";
           
            });
            new21.addEventListener(LMouseEvent.MOUSE_DOWN,run21);


        }

function run21(){

    
}        
//little box231右
function box236(){
             var new22 = new LSprite();
            backLayer.addChild(new22);
            Text7Layer = new LSprite();
            new22.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.688, (LGlobal.width-1000)*0.175, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 



            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.688, (LGlobal.width-1000)*0.195, (LGlobal.width-1000)*0.748, (LGlobal.width-1000)*0.195]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField181Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField181 = new LTextField();
            var theTextField19 = new LTextField();


            theTextField18.text = "城市轨道交通";
            theTextField181.text = "信息管理";
            theTextField19.text ="1，R,（0,4）";
            theTextField18.size=17.5;
            theTextField181.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.699;
            theTextField18.y = (LGlobal.width-1000)*0.178;
            theTextField181.x = (LGlobal.width-1000)*0.705;
            theTextField181.y = (LGlobal.width-1000)*0.1855;
            theTextField19.x = (LGlobal.width-1000)*0.702;
            theTextField19.y = (LGlobal.width-1000)*0.197;

           
            theTextField18.color = "fff";
            theTextField181.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField181Layer.addChild(theTextField181); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField181Layer)
            Text7Layer.addChild(TextField19Layer);


           // var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
           // new22.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new22.useCursor="pointer";
            new22.addEventListener(LMouseEvent.MOUSE_OVER,function(){
              theTextField18.color = "red";
            theTextField181.color = "red";
            theTextField19.color = "red";
       
           
            });
             new22.addEventListener(LMouseEvent.MOUSE_OUT,function(){
         theTextField18.color = "fff";
            theTextField181.color = "fff";
            theTextField19.color = "fff";
           
            });
            new22.addEventListener(LMouseEvent.MOUSE_DOWN,run22);

        }

function run22(){

    
}        

//little box231左
function box237(){
            var new23 = new LSprite();
            backLayer.addChild(new23);
            Text7Layer = new LSprite();
            new23.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.61, (LGlobal.width-1000)*0.228, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
          


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.61, (LGlobal.width-1000)*0.248, (LGlobal.width-1000)*0.67, (LGlobal.width-1000)*0.248]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text ="旅客运输心理学";
            theTextField19.text ="2，R,（0,2）";
            theTextField18.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.619;
            theTextField18.y = (LGlobal.width-1000)*0.235;
            theTextField19.x = (LGlobal.width-1000)*0.625;
            theTextField19.y = (LGlobal.width-1000)*0.25;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);


            
           // var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
            //new23.addChild(button01);
             LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new23.useCursor="pointer";
            new23.addEventListener(LMouseEvent.MOUSE_OVER,function(){
              theTextField18.color = "red";
            theTextField19.color = "red";
           
            });
             new23.addEventListener(LMouseEvent.MOUSE_OUT,function(){
        theTextField18.color = "fff";
            theTextField19.color = "fff";
            });
            new23.addEventListener(LMouseEvent.MOUSE_DOWN,run23);

        }

function run23(){

    
}        

//little box231右
function box238(){
            var new24 = new LSprite();
            backLayer.addChild(new24);
            Text7Layer = new LSprite();
            new24.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.688, (LGlobal.width-1000)*0.228, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
          


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.688, (LGlobal.width-1000)*0.248, (LGlobal.width-1000)*0.748, (LGlobal.width-1000)*0.248]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text ="城市轨道交通安全管理";
            theTextField19.text ="2，R,（0,4）";
            theTextField18.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.688;
            theTextField18.y = (LGlobal.width-1000)*0.235;
            theTextField19.x = (LGlobal.width-1000)*0.702;
            theTextField19.y = (LGlobal.width-1000)*0.25;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);


           //  var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
            //new24.addChild(button01);
             LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new24.useCursor="pointer";
            new24.addEventListener(LMouseEvent.MOUSE_OVER,function(){
              theTextField18.color = "red";
            theTextField19.color = "red";
           
            });
             new24.addEventListener(LMouseEvent.MOUSE_OUT,function(){
        theTextField18.color = "fff";
            theTextField19.color = "fff";
            });
            new24.addEventListener(LMouseEvent.MOUSE_DOWN,run24);

        }  

function run24(){

    
}              


function Line3(){
     line1Layer = new LSprite();
     line2Layer = new LSprite();
     line3Layer = new LSprite();
     line4Layer = new LSprite();
     var shape1 = new LShape();
     var shape2 = new LShape();
     var shape3 = new LShape();
     var shape4 = new LShape();
     addChild(shape1);
     addChild(shape2);
     addChild(shape3);
     addChild(shape4);
     shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.67, (LGlobal.width-1000)*0.092, (LGlobal.width-1000)*0.688, (LGlobal.width-1000)*0.092]);
     shape2.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.67, (LGlobal.width-1000)*0.14, (LGlobal.width-1000)*0.688, (LGlobal.width-1000)*0.14]);
     shape3.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.67, (LGlobal.width-1000)*0.188, (LGlobal.width-1000)*0.688, (LGlobal.width-1000)*0.188]);
     shape4.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.67, (LGlobal.width-1000)*0.236, (LGlobal.width-1000)*0.688, (LGlobal.width-1000)*0.236]);
     line1Layer.addChild(shape1); 
     line2Layer.addChild(shape2);
     line3Layer.addChild(shape3);
     line4Layer.addChild(shape4);
     backLayer.addChild(line1Layer);
     backLayer.addChild(line2Layer);
     backLayer.addChild(line3Layer);
     backLayer.addChild(line4Layer);


      
  
   }

//箭头2
function next1(){
        nextLayer = new LSprite();
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawVertices(2,"black",[[(LGlobal.width-1000)*0.79,(LGlobal.width-1000)*0.137],[(LGlobal.width-1000)*0.79,(LGlobal.width-1000)*0.162],[(LGlobal.width-1000)*0.81,(LGlobal.width-1000)*0.15]],"black");
        shape.graphics.fill();
        nextLayer.addChild(shape); 
        backLayer.addChild(nextLayer);

        next1Layer = new LSprite();
        var shape1 = new LShape();
        addChild(shape1);
        shape1.graphics.rect((LGlobal.width-1000)*0.77,(LGlobal.width-1000)*0.145,(LGlobal.width-1000)*0.03,(LGlobal.width-1000)*0.01);
        shape1.graphics.fill();
        next1Layer.addChild(shape1); 
        backLayer.addChild(next1Layer);

       }

 //box3
function box31(){
        var new25 = new LSprite();
        backLayer.addChild(new25);
        Text3Layer = new LSprite();
         new25.addChild(Text3Layer);
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.82, (LGlobal.width-1000)*0.11, (LGlobal.width-1000)*0.018, (LGlobal.width-1000)*0.089]);
        Text3Layer.addChild(shape); 
      


            TextField10Layer = new LSprite();
            TextField11Layer = new LSprite();
            TextField12Layer = new LSprite();
            TextField13Layer = new LSprite();
            TextField21Layer = new LSprite();
            TextField22Layer = new LSprite();
            var theTextField10 = new LTextField();
            var theTextField11 = new LTextField();
            var theTextField12 = new LTextField();
            var theTextField13 = new LTextField();
            var theTextField21 = new LTextField();
            var theTextField22 = new LTextField();

            theTextField10.text ="专" ;
            theTextField11.text ="业";
            theTextField12.text ="拓";
            theTextField13.text ="展";
            theTextField21.text ="课";
            theTextField22.text ="程";
            theTextField10.size=32;
            theTextField11.size=32;
            theTextField12.size=32;
            theTextField13.size=32;
            theTextField21.size=32;
            theTextField22.size=32;
            theTextField10.x = (LGlobal.width-1000)*0.824;
            theTextField10.y = (LGlobal.width-1000)*0.115;
            theTextField11.x =(LGlobal.width-1000)*0.824;
            theTextField11.y = (LGlobal.width-1000)*0.128;
            theTextField12.x =(LGlobal.width-1000)*0.824;
            theTextField12.y = (LGlobal.width-1000)*0.141;
            theTextField13.x = (LGlobal.width-1000)*0.824;
            theTextField13.y = (LGlobal.width-1000)*0.154;
            theTextField21.x = (LGlobal.width-1000)*0.824;
            theTextField21.y = (LGlobal.width-1000)*0.167;
            theTextField22.x = (LGlobal.width-1000)*0.824;
            theTextField22.y = (LGlobal.width-1000)*0.18;
            theTextField10.color = "fff";
            theTextField11.color = "fff";
            theTextField12.color = "fff";
            theTextField13.color = "fff";
            theTextField21.color = "fff";
            theTextField22.color = "fff";
            TextField10Layer.addChild(theTextField10); 
            TextField11Layer.addChild(theTextField11); 
            TextField12Layer.addChild(theTextField12); 
            TextField13Layer.addChild(theTextField13); 
            TextField21Layer.addChild(theTextField21); 
            TextField22Layer.addChild(theTextField22); 
             Text3Layer.addChild(TextField10Layer);
             Text3Layer.addChild(TextField11Layer);
             Text3Layer.addChild(TextField12Layer);
             Text3Layer.addChild(TextField13Layer);
             Text3Layer.addChild(TextField21Layer);
             Text3Layer.addChild(TextField22Layer);

            // var     button01 = new LButton(Text3Layer,Text3Layer,Text3Layer);
           // new25.addChild(button01);
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new25.useCursor="pointer";
            new25.addEventListener(LMouseEvent.MOUSE_OVER,function(){
              theTextField10.color = "red";
            theTextField11.color = "red";
            theTextField12.color = "red";
            theTextField13.color = "red";
            theTextField21.color = "red";
            theTextField22.color = "red";
           
            });
             new25.addEventListener(LMouseEvent.MOUSE_OUT,function(){
            theTextField10.color = "fff";
            theTextField11.color = "fff";
            theTextField12.color = "fff";
            theTextField13.color = "fff";
            theTextField21.color = "fff";
            theTextField22.color = "fff";
            });
            new25.addEventListener(LMouseEvent.MOUSE_DOWN,run25);

  }

function run25(){

    
}  

//box32
function box32(){
        var new26 = new LSprite();
        backLayer.addChild(new26);
        Text4Layer = new LSprite();
        new26.addChild(Text4Layer);
         var shape = new LShape();
         addChild(shape);
         shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.85, (LGlobal.width-1000)*0.1, (LGlobal.width-1000)*0.1, (LGlobal.width-1000)*0.0238]);
         Text4Layer.addChild(shape); 
    

            TextField18Layer = new LSprite();
            TextField181Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField181 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text = "铁路客货运输管理能力";
            theTextField181.text = "培育课程";
            theTextField19.text ="（8）";
            theTextField18.size=17.5;
            theTextField181.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.875;
            theTextField18.y = (LGlobal.width-1000)*0.1;
            theTextField181.x = (LGlobal.width-1000)*0.887;
            theTextField181.y = (LGlobal.width-1000)*0.107;
            theTextField19.x = (LGlobal.width-1000)*0.89;
            theTextField19.y = (LGlobal.width-1000)*0.115;
            theTextField18.color = "fff";
            theTextField181.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField181Layer.addChild(theTextField181); 
            TextField19Layer.addChild(theTextField19); 
            Text4Layer.addChild(TextField18Layer);
            Text4Layer.addChild(TextField181Layer)
            Text4Layer.addChild(TextField19Layer);

            // var     button01 = new LButton(Text4Layer,Text4Layer,Text4Layer);
           // new26.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new26.useCursor="pointer";
            new26.addEventListener(LMouseEvent.MOUSE_OVER,function(){
              theTextField18.color = "red";
            theTextField181.color = "red";
            theTextField19.color = "red";
            });
             new26.addEventListener(LMouseEvent.MOUSE_OUT,function(){
            theTextField18.color = "fff";
            theTextField181.color = "fff";
            theTextField19.color = "fff";
            });
            new26.addEventListener(LMouseEvent.MOUSE_DOWN,run26);
            

        }
function run26(){

    
}
function box33(){
        var new27 = new LSprite();
        backLayer.addChild(new27);
         Text4Layer = new LSprite();
         new27.addChild(Text4Layer);
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.85, (LGlobal.width-1000)*0.186, (LGlobal.width-1000)*0.1, (LGlobal.width-1000)*0.0238]);
        Text4Layer.addChild(shape); 
    

            TextField14Layer = new LSprite();
            TextField15Layer = new LSprite();
            var theTextField14 = new LTextField();
            var theTextField15 = new LTextField();
            theTextField14.text ="车站客运管理基础能力培养课程";
            theTextField15.text ="（8）";
            theTextField14.size=21;
            theTextField15.size=20;
            theTextField14.x = (LGlobal.width-1000)*0.851;
            theTextField14.y = (LGlobal.width-1000)*0.19;
            theTextField15.x = (LGlobal.width-1000)*0.89;
            theTextField15.y = (LGlobal.width-1000)*0.2;
            theTextField14.color = "fff";
            theTextField15.color = "fff";
            TextField14Layer.addChild(theTextField14); 
            TextField15Layer.addChild(theTextField15); 
            Text4Layer.addChild(TextField14Layer);
            Text4Layer.addChild(TextField15Layer);

            //var     button01 = new LButton(Text4Layer,Text4Layer,Text4Layer);
           // new27.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new27.useCursor="pointer";
            new27.addEventListener(LMouseEvent.MOUSE_OVER,function(){
              theTextField14.color = "red";
            theTextField15.color = "red";
            });
             new27.addEventListener(LMouseEvent.MOUSE_OUT,function(){
            theTextField14.color = "fff";
            theTextField15.color = "fff";
            });
    
            new27.addEventListener(LMouseEvent.MOUSE_DOWN,box2);
   
        }       

function Line4(){
     line1Layer = new LSprite();
     line2Layer = new LSprite();

     line3Layer = new LSprite();
     line4Layer = new LSprite();
     line5Layer = new LSprite();
  

     var shape1 = new LShape();
     var shape2 = new LShape();

     var shape3 = new LShape();
     var shape4 = new LShape();
     var shape5 = new LShape();
     

     addChild(shape1);
     addChild(shape2);

     addChild(shape3);
     addChild(shape4);
     addChild(shape5);
    
     shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.95, (LGlobal.width-1000)*0.11, (LGlobal.width-1000)*0.965, (LGlobal.width-1000)*0.11]);
     shape2.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.95, (LGlobal.width-1000)*0.198, (LGlobal.width-1000)*0.965, (LGlobal.width-1000)*0.198]);
     
     shape3.graphics.drawLine(2, "black", [(LGlobal.width-1000)*1.03, (LGlobal.width-1000)*0.135, (LGlobal.width-1000)*1.045, (LGlobal.width-1000)*0.135]);
     shape4.graphics.drawLine(2, "black", [(LGlobal.width-1000)*1.03, (LGlobal.width-1000)*0.2, (LGlobal.width-1000)*1.045, (LGlobal.width-1000)*0.2]);
     shape5.graphics.drawLine(2, "black", [(LGlobal.width-1000)*1, (LGlobal.width-1000)*0.115, (LGlobal.width-1000)*1, (LGlobal.width-1000)*0.123]);
    
     line1Layer.addChild(shape1); 
     line2Layer.addChild(shape2);

      line3Layer.addChild(shape3); 
      line4Layer.addChild(shape4);
      line5Layer.addChild(shape5); 
     

     backLayer.addChild(line1Layer);
     backLayer.addChild(line2Layer);

     backLayer.addChild(line3Layer);
     backLayer.addChild(line4Layer);
     backLayer.addChild(line5Layer);
 

   }  

function box41(){
        Text6Layer = new LSprite();
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.965, (LGlobal.width-1000)*0.075, (LGlobal.width-1000)*0.145, (LGlobal.width-1000)*0.088]);
        Text5Layer.addChild(shape); 
        backLayer.addChild(Text5Layer);

        
         Text8Layer = new LSprite();
        var shape2 = new LShape();
        addChild(shape2);
        shape2.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.965, (LGlobal.width-1000)*0.178, (LGlobal.width-1000)*0.145, (LGlobal.width-1000)*0.05]);
        Text8Layer.addChild(shape2); 
        backLayer.addChild(Text8Layer);

        
}         

function box42(){
            var new28 = new LSprite();
            backLayer.addChild(new28);
            Text7Layer = new LSprite();
            new28.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.97, (LGlobal.width-1000)*0.085, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
           


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.97, (LGlobal.width-1000)*0.105, (LGlobal.width-1000)*1.03, (LGlobal.width-1000)*0.105]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text = "集装箱多式联运";
            theTextField19.text ="3，R,（3,0）";
            theTextField18.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.98;
            theTextField18.y = (LGlobal.width-1000)*0.092;
            theTextField19.x = (LGlobal.width-1000)*0.985;
            theTextField19.y = (LGlobal.width-1000)*0.106;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);

            //var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
           // new28.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new28.useCursor="pointer";
            new28.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField18.color = "red";
            theTextField19.color = "red";
            });
             new28.addEventListener(LMouseEvent.MOUSE_OUT,function(){
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            });
    
            new28.addEventListener(LMouseEvent.MOUSE_DOWN,run27);


        }
function run27(){

    
}
function box43(){
            var new29 = new LSprite();
            backLayer.addChild(new29);
            Text7Layer = new LSprite();
            new29.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.97, (LGlobal.width-1000)*0.123, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
       


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.97, (LGlobal.width-1000)*0.1428, (LGlobal.width-1000)*1.03, (LGlobal.width-1000)*0.1428]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text = "铁路客运组织学";
            theTextField19.text ="2，R,（0,4）";
            theTextField18.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.98;
            theTextField18.y = (LGlobal.width-1000)*0.13;
            theTextField19.x = (LGlobal.width-1000)*0.985;
            theTextField19.y = (LGlobal.width-1000)*0.144;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);

            //var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
           // new29.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new29.useCursor="pointer";
            new29.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField18.color = "red";
            theTextField19.color = "red";
            });
             new29.addEventListener(LMouseEvent.MOUSE_OUT,function(){
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            });
            new29.addEventListener(LMouseEvent.MOUSE_DOWN,run28);


        }       
function run28(){

    
}
function box44(){
            var new30 = new LSprite();
            backLayer.addChild(new30);
            Text7Layer = new LSprite();
            new30.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*1.045, (LGlobal.width-1000)*0.123, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 



            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*1.045, (LGlobal.width-1000)*0.1428, (LGlobal.width-1000)*1.105, (LGlobal.width-1000)*0.1428]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text = "铁路货运组织学";
            theTextField19.text ="2，R,（0,4）";
            theTextField18.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*1.055;
            theTextField18.y = (LGlobal.width-1000)*0.13;
            theTextField19.x = (LGlobal.width-1000)*1.06;
            theTextField19.y = (LGlobal.width-1000)*0.144;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);


          //  var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
           // new30.addChild(button01);
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new30.useCursor="pointer";
            new30.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField18.color = "red";
            theTextField19.color = "red";
            });
             new30.addEventListener(LMouseEvent.MOUSE_OUT,function(){
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            });
            new30.addEventListener(LMouseEvent.MOUSE_DOWN,run29);



        } 

function run29(){

    
}               

function box45(){
             var new31 = new LSprite();
            backLayer.addChild(new31);
            Text7Layer = new LSprite();
            new31.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.97, (LGlobal.width-1000)*0.188, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
           

            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.97, (LGlobal.width-1000)*0.208, (LGlobal.width-1000)*1.03, (LGlobal.width-1000)*0.208]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text = "交通运输系统分析";
            theTextField19.text ="2，R,（0,2）";
            theTextField18.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.978;
            theTextField18.y = (LGlobal.width-1000)*0.194;
            theTextField19.x = (LGlobal.width-1000)*0.985;
            theTextField19.y = (LGlobal.width-1000)*0.21;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);


             // var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
           // new31.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new31.useCursor="pointer";
            new31.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField18.color = "red";
            theTextField19.color = "red";
            });
             new31.addEventListener(LMouseEvent.MOUSE_OUT,function(){
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            });
            new31.addEventListener(LMouseEvent.MOUSE_DOWN,run30);


        }

function run30(){

    
}               

function box46(){
            var new32 = new LSprite();
            backLayer.addChild(new32);
            Text7Layer = new LSprite();
            new32.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*1.045, (LGlobal.width-1000)*0.188, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 



            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*1.045, (LGlobal.width-1000)*0.208, (LGlobal.width-1000)*1.105, (LGlobal.width-1000)*0.208]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text = "城市轨道交通规划与设计";
            theTextField19.text ="3，R,（0,4）";
            theTextField18.size=16;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*1.046;
            theTextField18.y = (LGlobal.width-1000)*0.194;
            theTextField19.x = (LGlobal.width-1000)*1.06;
            theTextField19.y = (LGlobal.width-1000)*0.21;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);


            
          //    var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
        // new32.addChild(button01);
           LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new32.useCursor="pointer";
            new32.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField18.color = "red";
            theTextField19.color = "red";
            });
             new32.addEventListener(LMouseEvent.MOUSE_OUT,function(){
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            });
            new32.addEventListener(LMouseEvent.MOUSE_DOWN,run31);



        }                

function run31(){

    
}
//box5
function Line51(){
     
    
     line5Layer = new LSprite();
     line6Layer = new LSprite();
     var shape5 = new LShape();
     var shape6 = new LShape();
     addChild(shape5);
     addChild(shape6);
     shape5.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.6, (LGlobal.width-1000)*0.276, (LGlobal.width-1000)*0.6, (LGlobal.width-1000)*0.38]);
     shape6.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.6, (LGlobal.width-1000)*0.38, (LGlobal.width-1000)*0.7, (LGlobal.width-1000)*0.38]);
     line5Layer.addChild(shape5);
     line5Layer.addChild(shape6);
     backLayer.addChild(line5Layer);
     backLayer.addChild(line6Layer);

     nextLayer = new LSprite();
        var shape = new LShape();
        addChild(shape);
        shape.graphics.drawVertices(2,"black",[[(LGlobal.width-1000)*0.7,(LGlobal.width-1000)*0.37],[(LGlobal.width-1000)*0.7,(LGlobal.width-1000)*0.39],[(LGlobal.width-1000)*0.715,(LGlobal.width-1000)*0.38]],"black");
        shape.graphics.fill();
        nextLayer.addChild(shape); 
        backLayer.addChild(nextLayer);

  
   }

function box52(){
         var new33 = new LSprite();
         backLayer.addChild(new33);
         Text8Layer = new LSprite();
         new33.addChild(Text8Layer);
        var shape2 = new LShape();
        addChild(shape2);
        shape2.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.72, (LGlobal.width-1000)*0.366, (LGlobal.width-1000)*0.115, (LGlobal.width-1000)*0.025]);
        Text8Layer.addChild(shape2); 
       

        TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text = "综合技能培养课程";
            theTextField19.text ="（4）";
            theTextField18.size=25;
            theTextField19.size=20;
            theTextField18.x = (LGlobal.width-1000)*0.745;
            theTextField18.y = (LGlobal.width-1000)*0.37;
            theTextField19.x = (LGlobal.width-1000)*0.765;
            theTextField19.y = (LGlobal.width-1000)*0.38;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text8Layer.addChild(TextField18Layer);
            Text8Layer.addChild(TextField19Layer);

            
          //    var     button01 = new LButton(Text8Layer,Text8Layer,Text8Layer);
           // new33.addChild(button01);
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new33.useCursor="pointer";
            new33.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField18.color = "red";
            theTextField19.color = "red";
            });
             new33.addEventListener(LMouseEvent.MOUSE_OUT,function(){
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            });
            new33.addEventListener(LMouseEvent.MOUSE_DOWN,run32);

}
function run32(){

    
}

function box53(){
      

         

         Text9Layer = new LSprite();
        var shape3 = new LShape();
        addChild(shape3);
        shape3.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.86, (LGlobal.width-1000)*0.325, (LGlobal.width-1000)*0.15, (LGlobal.width-1000)*0.1]);
        Text9Layer.addChild(shape3); 
        backLayer.addChild(Text9Layer);
}  
        
function box531(){
             var new34 = new LSprite();
             backLayer.addChild(new34);
            Text7Layer = new LSprite();
            new34.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.865, (LGlobal.width-1000)*0.34, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 



            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.865, (LGlobal.width-1000)*0.36, (LGlobal.width-1000)*0.925, (LGlobal.width-1000)*0.36]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField181Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField181 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text = "城市轨道交通";
            theTextField181.text = "客运组织实训";
            theTextField19.text ="3，R,（1,0）";
            theTextField18.size=17.5;
            theTextField181.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.878;
            theTextField18.y = (LGlobal.width-1000)*0.343;
            theTextField181.x = (LGlobal.width-1000)*0.878;
            theTextField181.y = (LGlobal.width-1000)*0.35;
            theTextField19.x = (LGlobal.width-1000)*0.88;
            theTextField19.y = (LGlobal.width-1000)*0.36;
            theTextField18.color = "fff";
            theTextField181.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField181Layer.addChild(theTextField181); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField181Layer)
            Text7Layer.addChild(TextField19Layer);

          /*   var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
            new34.addChild(button01);*/
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new34.useCursor="pointer";
            new34.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField18.color = "red";
            theTextField181.color = "red";
            theTextField19.color = "red";
            });
             new34.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             theTextField18.color = "fff";
            theTextField181.color = "fff";
            theTextField19.color = "fff";
            });
            new34.addEventListener(LMouseEvent.MOUSE_DOWN,run33);

            

        }
function run33(){

    
}


//little box231右
function box532(){
           var new35 = new LSprite();
            backLayer.addChild(new35);
            Text7Layer = new LSprite();
            new35.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.945, (LGlobal.width-1000)*0.34, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
         


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.945, (LGlobal.width-1000)*0.36, (LGlobal.width-1000)*1.005, (LGlobal.width-1000)*0.36]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField181Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField181 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text = "城市轨道交通";
            theTextField181.text = "票务组织实训";
            theTextField19.text ="3，R,（1,0）";
            theTextField18.size=17.5;
            theTextField181.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.958;
            theTextField18.y = (LGlobal.width-1000)*0.343;
            theTextField181.x = (LGlobal.width-1000)*0.958;
            theTextField181.y = (LGlobal.width-1000)*0.35;
            theTextField19.x = (LGlobal.width-1000)*0.96;
            theTextField19.y = (LGlobal.width-1000)*0.36;
            theTextField18.color = "fff";
            theTextField181.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField181Layer.addChild(theTextField181); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField181Layer)
            Text7Layer.addChild(TextField19Layer);

            
              /*var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
            new35.addChild(button01);*/
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new35.useCursor="pointer";
            new35.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField18.color = "red";
            theTextField181.color = "red";
            theTextField19.color = "red";
            });
             new35.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             theTextField18.color = "fff";
            theTextField181.color = "fff";
            theTextField19.color = "fff";
            });
            new35.addEventListener(LMouseEvent.MOUSE_DOWN,run34);


        }

function run34(){

    
}

//little box231左
function box533(){
            var new36 = new LSprite();
            backLayer.addChild(new36);
            Text7Layer = new LSprite();
            new36.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.865, (LGlobal.width-1000)*0.38, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
           


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.865, (LGlobal.width-1000)*0.4, (LGlobal.width-1000)*0.925, (LGlobal.width-1000)*0.4]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text = "应急处置综合演练";
            theTextField19.text ="3，R,（1,0）";
            theTextField18.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.871;
            theTextField18.y = (LGlobal.width-1000)*0.388;
            theTextField19.x = (LGlobal.width-1000)*0.88;
            theTextField19.y = (LGlobal.width-1000)*0.401;
            theTextField18.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField19Layer);

           /* var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
            new36.addChild(button01);*/
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new36.useCursor="pointer";
            new36.addEventListener(LMouseEvent.MOUSE_OVER,function(){
            theTextField18.color = "red";
            theTextField19.color = "red";
            });
             new36.addEventListener(LMouseEvent.MOUSE_OUT,function(){
           theTextField18.color = "fff";
            theTextField19.color = "fff";
            });
            new36.addEventListener(LMouseEvent.MOUSE_DOWN,run35);

        }

function run35(){

    
}        
//little box231右
function box534(){
           var new37 = new LSprite();
            backLayer.addChild(new37);
            Text7Layer = new LSprite();
            new37.addChild(Text7Layer);
            var shape = new LShape();
            addChild(shape);
            shape.graphics.drawRect(2, "black", [(LGlobal.width-1000)*0.945, (LGlobal.width-1000)*0.38, (LGlobal.width-1000)*0.06, (LGlobal.width-1000)*0.03]);
            Text7Layer.addChild(shape); 
    


            line1Layer = new LSprite();
            var shape1 = new LShape();
            addChild(shape1);
            shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.945, (LGlobal.width-1000)*0.4, (LGlobal.width-1000)*1.005, (LGlobal.width-1000)*0.4]);
            line1Layer.addChild(shape1);
            Text7Layer.addChild(line1Layer);

            TextField18Layer = new LSprite();
            TextField181Layer = new LSprite();
            TextField19Layer = new LSprite();
            var theTextField18 = new LTextField();
            var theTextField181 = new LTextField();
            var theTextField19 = new LTextField();
            theTextField18.text = "城市轨道交通";
            theTextField181.text = "行车调度指挥实训";
            theTextField19.text ="3，R,（1,0）";
            theTextField18.size=17.5;
            theTextField181.size=17.5;
            theTextField19.size=18;
            theTextField18.x = (LGlobal.width-1000)*0.958;
            theTextField18.y = (LGlobal.width-1000)*0.382;
            theTextField181.x = (LGlobal.width-1000)*0.952;
            theTextField181.y = (LGlobal.width-1000)*0.39;
            theTextField19.x = (LGlobal.width-1000)*0.96;
            theTextField19.y = (LGlobal.width-1000)*0.401;
            theTextField18.color = "fff";
            theTextField181.color = "fff";
            theTextField19.color = "fff";
            TextField18Layer.addChild(theTextField18); 
            TextField181Layer.addChild(theTextField181); 
            TextField19Layer.addChild(theTextField19); 
            Text7Layer.addChild(TextField18Layer);
            Text7Layer.addChild(TextField181Layer)
            Text7Layer.addChild(TextField19Layer);

            /* var     button01 = new LButton(Text7Layer,Text7Layer,Text7Layer);
            new37.addChild(button01);*/
            LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,false);
            new37.useCursor="pointer";
            new37.addEventListener(LMouseEvent.MOUSE_OVER,function(){
             theTextField18.color = "red";
            theTextField181.color = "red";
            theTextField19.color = "red";
            });
             new37.addEventListener(LMouseEvent.MOUSE_OUT,function(){
             theTextField18.color = "fff";
            theTextField181.color = "fff";
            theTextField19.color = "fff";
            });
            new37.addEventListener(LMouseEvent.MOUSE_DOWN,run36);

        }

function run36(){

    
}        


function Line55(){
     line1Layer = new LSprite();
     line2Layer = new LSprite();
     line3Layer = new LSprite();
     line4Layer = new LSprite();
     line5Layer = new LSprite();
     line6Layer = new LSprite();
     var shape1 = new LShape();
     var shape2 = new LShape();
     var shape3 = new LShape();
     var shape4 = new LShape();
     var shape5 = new LShape();
     var shape6 = new LShape();
     addChild(shape1);
     addChild(shape2);
     addChild(shape3);
     addChild(shape4);
     addChild(shape5);
     addChild(shape6);
     shape1.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.835, (LGlobal.width-1000)*0.376, (LGlobal.width-1000)*0.86, (LGlobal.width-1000)*0.376]);

     shape2.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.895, (LGlobal.width-1000)*0.37, (LGlobal.width-1000)*0.895, (LGlobal.width-1000)*0.38]);
     shape3.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.975, (LGlobal.width-1000)*0.37, (LGlobal.width-1000)*0.975, (LGlobal.width-1000)*0.38]);

     shape4.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.925, (LGlobal.width-1000)*0.355, (LGlobal.width-1000)*0.945, (LGlobal.width-1000)*0.355]);
     shape5.graphics.drawLine(2, "black", [(LGlobal.width-1000)*0.925, (LGlobal.width-1000)*0.395, (LGlobal.width-1000)*0.945, (LGlobal.width-1000)*0.395]);

     
     line1Layer.addChild(shape1); 
     line2Layer.addChild(shape2);
     line3Layer.addChild(shape3);
     line4Layer.addChild(shape4);
     line5Layer.addChild(shape5);
     line5Layer.addChild(shape6);
     backLayer.addChild(line1Layer);
     backLayer.addChild(line2Layer);
     backLayer.addChild(line3Layer);
     backLayer.addChild(line4Layer);
     backLayer.addChild(line5Layer);
     backLayer.addChild(line6Layer);


     
  
   }