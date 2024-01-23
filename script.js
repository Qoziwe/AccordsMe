audio1:{
    var pauplay1 = 0
    function x(){
        if(pauplay1%2!=0){
            document.getElementById('s1').addEventListener('change', function(){
                document.getElementById('song1').currentTime = s1.value;
            })
        }
        
    }
    document.getElementById('s1but').addEventListener('click', function(){
        pauplay1=pauplay1+1
        if(pauplay1%2!=0){
            document.getElementById('song1').play();
            for(var i1 = 0; i1<1; i1++){
                setInterval( function(){
                    if(s1.value>=60){
                        send_result.innerHTML = Math.floor(s1.value/60) + ":" + s1.value%60;
                    }
                    else{
                        send_result.innerHTML = "00:" + s1.value;
                    }
                    s1.value = document.getElementById('song1').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song1').pause();
        }
    })
    function volume(){
        document.getElementById('v1').addEventListener('change', function(){
            document.getElementById('song1').volume = v1.value;
        }) 
    }
    document.getElementById('song1').volume = 0.5;
}

audio2:{
    var pauplay2 = 0
    function x2(){
        if(pauplay2%2!=0){
            document.getElementById('s2').addEventListener('change', function(){
                document.getElementById('song2').currentTime = s2.value;
            })
        }
        
    }
    document.getElementById('s2but').addEventListener('click', function(){
        pauplay2=pauplay2+1
        if(pauplay2%2!=0){
            document.getElementById('song2').play();
            for(var i2 = 0; i2<1; i2++){
                setInterval( function(){
                    if(s2.value>=60){
                        send_result2.innerHTML = Math.floor(s2.value/60) + ":" + s2.value%60;
                    }
                    else{
                        send_result2.innerHTML = "00:" + s2.value;
                    }
                    s2.value = document.getElementById('song2').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song2').pause();
        }
    })
    function volume2(){
        document.getElementById('v2').addEventListener('change', function(){
            document.getElementById('song2').volume = v2.value;
        }) 
    }
    document.getElementById('song2').volume = 0.5;
}

audio3:{
    var pauplay3 = 0
    function x3(){
        if(pauplay3%2!=0){
            document.getElementById('s3').addEventListener('change', function(){
                document.getElementById('song3').currentTime = s3.value;
            })
        }
        
    }
    document.getElementById('s3but').addEventListener('click', function(){
        pauplay3=pauplay3+1
        if(pauplay3%2!=0){
            document.getElementById('song3').play();
            for(var i3 = 0; i3<1; i3++){
                setInterval( function(){
                    if(s3.value>=60){
                        send_result3.innerHTML = Math.floor(s3.value/60) + ":" + s3.value%60;
                    }
                    else{
                        send_result3.innerHTML = "00:" + s3.value;
                    }
                    s3.value = document.getElementById('song3').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song3').pause();
        }
    })
    function volume3(){
        document.getElementById('v3').addEventListener('change', function(){
            document.getElementById('song3').volume = v3.value;
        }) 
    }
    document.getElementById('song3').volume = 0.5;
}

audio4:{
    var pauplay4 = 0
    function x4(){
        if(pauplay4%2!=0){
            document.getElementById('s4').addEventListener('change', function(){
                document.getElementById('song4').currentTime = s4.value;
            })
        }
        
    }
    document.getElementById('s4but').addEventListener('click', function(){
        pauplay4=pauplay4+1
        if(pauplay4%2!=0){
            document.getElementById('song4').play();
            for(var i4 = 0; i4<1; i4++){
                setInterval( function(){
                    if(s4.value>=60){
                        send_result4.innerHTML = Math.floor(s4.value/60) + ":" + s4.value%60;
                    }
                    else{
                        send_result4.innerHTML = "00:" + s4.value;
                    }
                    s4.value = document.getElementById('song4').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song4').pause();
        }
    })
    function volume4(){
        document.getElementById('v4').addEventListener('change', function(){
            document.getElementById('song4').volume = v4.value;
        }) 
    }
    document.getElementById('song4').volume = 0.5;
}

audio5:{
    var pauplay5 = 0
    function x5(){
        if(pauplay5%2!=0){
            document.getElementById('s5').addEventListener('change', function(){
                document.getElementById('song5').currentTime = s5.value;
            })
        }
        
    }
    document.getElementById('s5but').addEventListener('click', function(){
        pauplay5=pauplay5+1
        if(pauplay5%2!=0){
            document.getElementById('song5').play();
            for(var i5 = 0; i5<1; i5++){
                setInterval( function(){
                    if(s5.value>=60){
                        send_result5.innerHTML = Math.floor(s5.value/60) + ":" + s5.value%60;
                    }
                    else{
                        send_result5.innerHTML = "00:" + s5.value;
                    }
                    s5.value = document.getElementById('song5').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song5').pause();
        }
    })
    function volume5(){
        document.getElementById('v5').addEventListener('change', function(){
            document.getElementById('song5').volume = v5.value;
        }) 
    }
    document.getElementById('song5').volume = 0.5;
}

audio6:{
    var pauplay6 = 0
    function x6(){
        if(pauplay6%2!=0){
            document.getElementById('s6').addEventListener('change', function(){
                document.getElementById('song6').currentTime = s6.value;
            })
        }
        
    }
    document.getElementById('s6but').addEventListener('click', function(){
        pauplay6=pauplay6+1
        if(pauplay6%2!=0){
            document.getElementById('song6').play();
            for(var i6 = 0; i6<1; i6++){
                setInterval( function(){
                    if(s6.value>=60){
                        send_result6.innerHTML = Math.floor(s6.value/60) + ":" + s6.value%60;
                    }
                    else{
                        send_result6.innerHTML = "00:" + s6.value;
                    }
                    s6.value = document.getElementById('song6').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song6').pause();
        }
    })
    function volume6(){
        document.getElementById('v6').addEventListener('change', function(){
            document.getElementById('song6').volume = v6.value;
        }) 
    }
    document.getElementById('song6').volume = 0.5;
}


audio7:{
    var pauplay7 = 0
    function x7(){
        if(pauplay7%2!=0){
            document.getElementById('s7').addEventListener('change', function(){
                document.getElementById('song7').currentTime = s7.value;
            })
        }
        
    }
    document.getElementById('s7but').addEventListener('click', function(){
        pauplay7=pauplay7+1
        if(pauplay7%2!=0){
            document.getElementById('song7').play();
            for(var i7 = 0; i7<1; i7++){
                setInterval( function(){
                    if(s7.value>=60){
                        send_result7.innerHTML = Math.floor(s7.value/60) + ":" + s7.value%60;
                    }
                    else{
                        send_result7.innerHTML = "00:" + s7.value;
                    }
                    s7.value = document.getElementById('song7').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song7').pause();
        }
    })
    function volume7(){
        document.getElementById('v7').addEventListener('change', function(){
            document.getElementById('song7').volume = v7.value;
        }) 
    }
    document.getElementById('song7').volume = 0.5;
}

audio8:{
    var pauplay8 = 0
    function x8(){
        if(pauplay8%2!=0){
            document.getElementById('s8').addEventListener('change', function(){
                document.getElementById('song8').currentTime = s8.value;
            })
        }
        
    }
    document.getElementById('s8but').addEventListener('click', function(){
        pauplay8=pauplay8+1
        if(pauplay8%2!=0){
            document.getElementById('song8').play();
            for(var i8 = 0; i8<1; i8++){
                setInterval( function(){
                    if(s8.value>=60){
                        send_result8.innerHTML = Math.floor(s8.value/60) + ":" + s8.value%60;
                    }
                    else{
                        send_result8.innerHTML = "00:" + s8.value;
                    }
                    s8.value = document.getElementById('song8').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song8').pause();
        }
    })
    function volume8(){
        document.getElementById('v8').addEventListener('change', function(){
            document.getElementById('song8').volume = v8.value;
        }) 
    }
    document.getElementById('song8').volume = 0.5;
}

audio9:{
    var pauplay9 = 0
    function x9(){
        if(pauplay9%2!=0){
            document.getElementById('s9').addEventListener('change', function(){
                document.getElementById('song9').currentTime = s9.value;
            })
        }
        
    }
    document.getElementById('s9but').addEventListener('click', function(){
        pauplay9=pauplay9+1
        if(pauplay9%2!=0){
            document.getElementById('song9').play();
            for(var i9 = 0; i9<1; i9++){
                setInterval( function(){
                    if(s9.value>=60){
                        send_result9.innerHTML = Math.floor(s9.value/60) + ":" + s9.value%60;
                    }
                    else{
                        send_result9.innerHTML = "00:" + s9.value;
                    }
                    s9.value = document.getElementById('song9').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song9').pause();
        }
    })
    function volume9(){
        document.getElementById('v9').addEventListener('change', function(){
            document.getElementById('song9').volume = v9.value;
        }) 
    }
    document.getElementById('song9').volume = 0.5;
}

audio10:{
    var pauplay10 = 0
    function x10(){
        if(pauplay10%2!=0){
            document.getElementById('s10').addEventListener('change', function(){
                document.getElementById('song10').currentTime = s10.value;
            })
        }
        
    }
    document.getElementById('s10but').addEventListener('click', function(){
        pauplay10=pauplay10+1
        if(pauplay10%2!=0){
            document.getElementById('song10').play();
            for(var i10 = 0; i10<1; i10++){
                setInterval( function(){
                    if(s10.value>=60){
                        send_result10.innerHTML = Math.floor(s10.value/60) + ":" + s10.value%60;
                    }
                    else{
                        send_result10.innerHTML = "00:" + s10.value;
                    }
                    s10.value = document.getElementById('song10').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song10').pause();
        }
    })
    function volume10(){
        document.getElementById('v10').addEventListener('change', function(){
            document.getElementById('song10').volume = v10.value;
        }) 
    }
    document.getElementById('song10').volume = 0.5;
}

audio11:{
    var pauplay11 = 0
    function x11(){
        if(pauplay11%2!=0){
            document.getElementById('s11').addEventListener('change', function(){
                document.getElementById('song11').currentTime = s11.value;
            })
        }
        
    }
    document.getElementById('s11but').addEventListener('click', function(){
        pauplay11=pauplay11+1
        if(pauplay11%2!=0){
            document.getElementById('song11').play();
            for(var i11 = 0; i11<1; i11++){
                setInterval( function(){
                    if(s11.value>=60){
                        send_result11.innerHTML = Math.floor(s11.value/60) + ":" + s11.value%60;
                    }
                    else{
                        send_result11.innerHTML = "00:" + s11.value;
                    }
                    s11.value = document.getElementById('song11').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song11').pause();
        }
    })
    function volume11(){
        document.getElementById('v11').addEventListener('change', function(){
            document.getElementById('song11').volume = v11.value;
        }) 
    }
    document.getElementById('song11').volume = 0.5;
}

audio12:{
    var pauplay12 = 0
    function x12(){
        if(pauplay12%2!=0){
            document.getElementById('s12').addEventListener('change', function(){
                document.getElementById('song12').currentTime = s12.value;
            })
        }
        
    }
    document.getElementById('s12but').addEventListener('click', function(){
        pauplay12=pauplay12+1
        if(pauplay12%2!=0){
            document.getElementById('song12').play();
            for(var i12 = 0; i12<1; i12++){
                setInterval( function(){
                    if(s12.value>=60){
                        send_result12.innerHTML = Math.floor(s12.value/60) + ":" + s12.value%60;
                    }
                    else{
                        send_result12.innerHTML = "00:" + s12.value;
                    }
                    s12.value = document.getElementById('song12').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song12').pause();
        }
    })
    function volume12(){
        document.getElementById('v12').addEventListener('change', function(){
            document.getElementById('song12').volume = v12.value;
        }) 
    }
    document.getElementById('song12').volume = 0.5;
}

audio13:{
    var pauplay13 = 0
    function x13(){
        if(pauplay13%2!=0){
            document.getElementById('s13').addEventListener('change', function(){
                document.getElementById('song13').currentTime = s13.value;
            })
        }
        
    }
    document.getElementById('s13but').addEventListener('click', function(){
        pauplay13=pauplay13+1
        if(pauplay13%2!=0){
            document.getElementById('song13').play();
            for(var i13 = 0; i13<1; i13++){
                setInterval( function(){
                    if(s13.value>=60){
                        send_result13.innerHTML = Math.floor(s13.value/60) + ":" + s13.value%60;
                    }
                    else{
                        send_result13.innerHTML = "00:" + s13.value;
                    }
                    s13.value = document.getElementById('song13').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song13').pause();
        }
    })
    function volume13(){
        document.getElementById('v13').addEventListener('change', function(){
            document.getElementById('song13').volume = v13.value;
        }) 
    }
    document.getElementById('song13').volume = 0.5;
}

audio14:{
    var pauplay14 = 0
    function x14(){
        if(pauplay14%2!=0){
            document.getElementById('s14').addEventListener('change', function(){
                document.getElementById('song14').currentTime = s14.value;
            })
        }
        
    }
    document.getElementById('s14but').addEventListener('click', function(){
        pauplay14=pauplay14+1
        if(pauplay14%2!=0){
            document.getElementById('song14').play();
            for(var i14 = 0; i14<1; i14++){
                setInterval( function(){
                    if(s14.value>=60){
                        send_result14.innerHTML = Math.floor(s14.value/60) + ":" + s14.value%60;
                    }
                    else{
                        send_result14.innerHTML = "00:" + s14.value;
                    }
                    s14.value = document.getElementById('song14').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song14').pause();
        }
    })
    function volume14(){
        document.getElementById('v14').addEventListener('change', function(){
            document.getElementById('song14').volume = v14.value;
        }) 
    }
    document.getElementById('song14').volume = 0.5;
}

audio15:{
    var pauplay15 = 0
    function x15(){
        if(pauplay15%2!=0){
            document.getElementById('s15').addEventListener('change', function(){
                document.getElementById('song15').currentTime = s15.value;
            })
        }
        
    }
    document.getElementById('s15but').addEventListener('click', function(){
        pauplay15=pauplay15+1
        if(pauplay15%2!=0){
            document.getElementById('song15').play();
            for(var i15 = 0; i15<1; i15++){
                setInterval( function(){
                    if(s15.value>=60){
                        send_result15.innerHTML = Math.floor(s15.value/60) + ":" + s15.value%60;
                    }
                    else{
                        send_result15.innerHTML = "00:" + s15.value;
                    }
                    s15.value = document.getElementById('song15').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song15').pause();
        }
    })
    function volume15(){
        document.getElementById('v15').addEventListener('change', function(){
            document.getElementById('song15').volume = v15.value;
        }) 
    }
    document.getElementById('song15').volume = 0.5;
}

audio16:{
    var pauplay16 = 0
    function x16(){
        if(pauplay16%2!=0){
            document.getElementById('s16').addEventListener('change', function(){
                document.getElementById('song16').currentTime = s16.value;
            })
        }
        
    }
    document.getElementById('s16but').addEventListener('click', function(){
        pauplay16=pauplay16+1
        if(pauplay16%2!=0){
            document.getElementById('song16').play();
            for(var i16 = 0; i16<1; i16++){
                setInterval( function(){
                    if(s16.value>=60){
                        send_result16.innerHTML = Math.floor(s16.value/60) + ":" + s16.value%60;
                    }
                    else{
                        send_result16.innerHTML = "00:" + s16.value;
                    }
                    s16.value = document.getElementById('song16').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song16').pause();
        }
    })
    function volume16(){
        document.getElementById('v16').addEventListener('change', function(){
            document.getElementById('song16').volume = v16.value;
        }) 
    }
    document.getElementById('song16').volume = 0.5;
}

audio17:{
    var pauplay17 = 0
    function x17(){
        if(pauplay17%2!=0){
            document.getElementById('s17').addEventListener('change', function(){
                document.getElementById('song17').currentTime = s17.value;
            })
        }
        
    }
    document.getElementById('s17but').addEventListener('click', function(){
        pauplay17=pauplay17+1
        if(pauplay17%2!=0){
            document.getElementById('song17').play();
            for(var i17 = 0; i17<1; i17++){
                setInterval( function(){
                    if(s17.value>=60){
                        send_result17.innerHTML = Math.floor(s17.value/60) + ":" + s17.value%60;
                    }
                    else{
                        send_result17.innerHTML = "00:" + s17.value;
                    }
                    s17.value = document.getElementById('song17').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song17').pause();
        }
    })
    function volume17(){
        document.getElementById('v17').addEventListener('change', function(){
            document.getElementById('song17').volume = v17.value;
        }) 
    }
    document.getElementById('song17').volume = 0.5;
}

audio18:{
    var pauplay18 = 0
    function x18(){
        if(pauplay18%2!=0){
            document.getElementById('s18').addEventListener('change', function(){
                document.getElementById('song18').currentTime = s18.value;
            })
        }
        
    }
    document.getElementById('s18but').addEventListener('click', function(){
        pauplay18=pauplay18+1
        if(pauplay18%2!=0){
            document.getElementById('song18').play();
            for(var i18 = 0; i18<1; i18++){
                setInterval( function(){
                    if(s18.value>=60){
                        send_result18.innerHTML = Math.floor(s18.value/60) + ":" + s18.value%60;
                    }
                    else{
                        send_result18.innerHTML = "00:" + s18.value;
                    }
                    s18.value = document.getElementById('song18').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song18').pause();
        }
    })
    function volume18(){
        document.getElementById('v18').addEventListener('change', function(){
            document.getElementById('song18').volume = v18.value;
        }) 
    }
    document.getElementById('song18').volume = 0.5;
}

audio19:{
    var pauplay19 = 0
    function x19(){
        if(pauplay19%2!=0){
            document.getElementById('s19').addEventListener('change', function(){
                document.getElementById('song19').currentTime = s19.value;
            })
        }
        
    }
    document.getElementById('s19but').addEventListener('click', function(){
        pauplay19=pauplay19+1
        if(pauplay19%2!=0){
            document.getElementById('song19').play();
            for(var i19 = 0; i19<1; i19++){
                setInterval( function(){
                    if(s19.value>=60){
                        send_result19.innerHTML = Math.floor(s19.value/60) + ":" + s19.value%60;
                    }
                    else{
                        send_result19.innerHTML = "00:" + s19.value;
                    }
                    s19.value = document.getElementById('song19').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song19').pause();
        }
    })
    function volume19(){
        document.getElementById('v19').addEventListener('change', function(){
            document.getElementById('song19').volume = v19.value;
        }) 
    }
    document.getElementById('song19').volume = 0.5;
}

audio20:{
    var pauplay20 = 0
    function x20(){
        if(pauplay20%2!=0){
            document.getElementById('s20').addEventListener('change', function(){
                document.getElementById('song20').currentTime = s20.value;
            })
        }
        
    }
    document.getElementById('s20but').addEventListener('click', function(){
        pauplay20=pauplay20+1
        if(pauplay20%2!=0){
            document.getElementById('song20').play();
            for(var i20 = 0; i20<1; i20++){
                setInterval( function(){
                    if(s20.value>=60){
                        send_result20.innerHTML = Math.floor(s20.value/60) + ":" + s20.value%60;
                    }
                    else{
                        send_result20.innerHTML = "00:" + s20.value;
                    }
                    s20.value = document.getElementById('song20').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song20').pause();
        }
    })
    function volume20(){
        document.getElementById('v20').addEventListener('change', function(){
            document.getElementById('song20').volume = v20.value;
        }) 
    }
    document.getElementById('song20').volume = 0.5;
}

audio21:{
    var pauplay21 = 0
    function x21(){
        if(pauplay21%2!=0){
            document.getElementById('s21').addEventListener('change', function(){
                document.getElementById('song21').currentTime = s21.value;
            })
        }
        
    }
    document.getElementById('s21but').addEventListener('click', function(){
        pauplay21=pauplay21+1
        if(pauplay21%2!=0){
            document.getElementById('song21').play();
            for(var i21 = 0; i21<1; i21++){
                setInterval( function(){
                    if(s21.value>=60){
                        send_result21.innerHTML = Math.floor(s21.value/60) + ":" + s21.value%60;
                    }
                    else{
                        send_result21.innerHTML = "00:" + s21.value;
                    }
                    s21.value = document.getElementById('song21').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song21').pause();
        }
    })
    function volume21(){
        document.getElementById('v21').addEventListener('change', function(){
            document.getElementById('song21').volume = v21.value;
        }) 
    }
    document.getElementById('song21').volume = 0.5;
}

audio22:{
    var pauplay22 = 0
    function x22(){
        if(pauplay22%2!=0){
            document.getElementById('s22').addEventListener('change', function(){
                document.getElementById('song22').currentTime = s22.value;
            })
        }
        
    }
    document.getElementById('s22but').addEventListener('click', function(){
        pauplay22=pauplay22+1
        if(pauplay22%2!=0){
            document.getElementById('song22').play();
            for(var i22 = 0; i22<1; i22++){
                setInterval( function(){
                    if(s22.value>=60){
                        send_result22.innerHTML = Math.floor(s22.value/60) + ":" + s22.value%60;
                    }
                    else{
                        send_result22.innerHTML = "00:" + s22.value;
                    }
                    s22.value = document.getElementById('song22').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song22').pause();
        }
    })
    function volume22(){
        document.getElementById('v22').addEventListener('change', function(){
            document.getElementById('song22').volume = v22.value;
        }) 
    }
    document.getElementById('song22').volume = 0.5;
}

audio23:{
    var pauplay23 = 0
    function x23(){
        if(pauplay23%2!=0){
            document.getElementById('s23').addEventListener('change', function(){
                document.getElementById('song23').currentTime = s23.value;
            })
        }
        
    }
    document.getElementById('s23but').addEventListener('click', function(){
        pauplay23=pauplay23+1
        if(pauplay23%2!=0){
            document.getElementById('song23').play();
            for(var i23 = 0; i23<1; i23++){
                setInterval( function(){
                    if(s23.value>=60){
                        send_result23.innerHTML = Math.floor(s23.value/60) + ":" + s23.value%60;
                    }
                    else{
                        send_result23.innerHTML = "00:" + s23.value;
                    }
                    s23.value = document.getElementById('song23').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song23').pause();
        }
    })
    function volume23(){
        document.getElementById('v23').addEventListener('change', function(){
            document.getElementById('song23').volume = v23.value;
        }) 
    }
    document.getElementById('song23').volume = 0.5;
}

audio24:{
    var pauplay24 = 0
    function x24(){
        if(pauplay24%2!=0){
            document.getElementById('s24').addEventListener('change', function(){
                document.getElementById('song24').currentTime = s24.value;
            })
        }
        
    }
    document.getElementById('s24but').addEventListener('click', function(){
        pauplay24=pauplay24+1
        if(pauplay24%2!=0){
            document.getElementById('song24').play();
            for(var i24 = 0; i24<1; i24++){
                setInterval( function(){
                    if(s24.value>=60){
                        send_result24.innerHTML = Math.floor(s24.value/60) + ":" + s24.value%60;
                    }
                    else{
                        send_result24.innerHTML = "00:" + s24.value;
                    }
                    s24.value = document.getElementById('song24').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song24').pause();
        }
    })
    function volume24(){
        document.getElementById('v24').addEventListener('change', function(){
            document.getElementById('song24').volume = v24.value;
        }) 
    }
    document.getElementById('song24').volume = 0.5;
}

audio25:{
    var pauplay25 = 0
    function x25(){
        if(pauplay25%2!=0){
            document.getElementById('s25').addEventListener('change', function(){
                document.getElementById('song25').currentTime = s25.value;
            })
        }
        
    }
    document.getElementById('s25but').addEventListener('click', function(){
        pauplay25=pauplay25+1
        if(pauplay25%2!=0){
            document.getElementById('song25').play();
            for(var i25 = 0; i25<1; i25++){
                setInterval( function(){
                    if(s25.value>=60){
                        send_result25.innerHTML = Math.floor(s25.value/60) + ":" + s25.value%60;
                    }
                    else{
                        send_result25.innerHTML = "00:" + s25.value;
                    }
                    s25.value = document.getElementById('song25').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song25').pause();
        }
    })
    function volume25(){
        document.getElementById('v25').addEventListener('change', function(){
            document.getElementById('song25').volume = v25.value;
        }) 
    }
    document.getElementById('song25').volume = 0.5;
}

audio26:{
    var pauplay26 = 0
    function x26(){
        if(pauplay26%2!=0){
            document.getElementById('s26').addEventListener('change', function(){
                document.getElementById('song26').currentTime = s26.value;
            })
        }
        
    }
    document.getElementById('s26but').addEventListener('click', function(){
        pauplay26=pauplay26+1
        if(pauplay26%2!=0){
            document.getElementById('song26').play();
            for(var i26 = 0; i26<1; i26++){
                setInterval( function(){
                    if(s26.value>=60){
                        send_result26.innerHTML = Math.floor(s26.value/60) + ":" + s26.value%60;
                    }
                    else{
                        send_result26.innerHTML = "00:" + s26.value;
                    }
                    s26.value = document.getElementById('song26').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song26').pause();
        }
    })
    function volume26(){
        document.getElementById('v26').addEventListener('change', function(){
            document.getElementById('song26').volume = v26.value;
        }) 
    }
    document.getElementById('song26').volume = 0.5;
}

audio27:{
    var pauplay27 = 0
    function x27(){
        if(pauplay27%2!=0){
            document.getElementById('s27').addEventListener('change', function(){
                document.getElementById('song27').currentTime = s27.value;
            })
        }
        
    }
    document.getElementById('s27but').addEventListener('click', function(){
        pauplay27=pauplay27+1
        if(pauplay27%2!=0){
            document.getElementById('song27').play();
            for(var i27 = 0; i27<1; i27++){
                setInterval( function(){
                    if(s27.value>=60){
                        send_result27.innerHTML = Math.floor(s27.value/60) + ":" + s27.value%60;
                    }
                    else{
                        send_result27.innerHTML = "00:" + s27.value;
                    }
                    s27.value = document.getElementById('song27').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song27').pause();
        }
    })
    function volume27(){
        document.getElementById('v27').addEventListener('change', function(){
            document.getElementById('song27').volume = v27.value;
        }) 
    }
    document.getElementById('song27').volume = 0.5;
}

audio28:{
    var pauplay28 = 0
    function x28(){
        if(pauplay28%2!=0){
            document.getElementById('s28').addEventListener('change', function(){
                document.getElementById('song28').currentTime = s28.value;
            })
        }
        
    }
    document.getElementById('s28but').addEventListener('click', function(){
        pauplay28=pauplay28+1
        if(pauplay28%2!=0){
            document.getElementById('song28').play();
            for(var i28 = 0; i28<1; i28++){
                setInterval( function(){
                    if(s28.value>=60){
                        send_result28.innerHTML = Math.floor(s28.value/60) + ":" + s28.value%60;
                    }
                    else{
                        send_result28.innerHTML = "00:" + s28.value;
                    }
                    s28.value = document.getElementById('song28').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song28').pause();
        }
    })
    function volume28(){
        document.getElementById('v28').addEventListener('change', function(){
            document.getElementById('song28').volume = v28.value;
        }) 
    }
    document.getElementById('song28').volume = 0.5;
}

audio29:{
    var pauplay29 = 0
    function x29(){
        if(pauplay29%2!=0){
            document.getElementById('s29').addEventListener('change', function(){
                document.getElementById('song29').currentTime = s29.value;
            })
        }
        
    }
    document.getElementById('s29but').addEventListener('click', function(){
        pauplay29=pauplay29+1
        if(pauplay29%2!=0){
            document.getElementById('song29').play();
            for(var i29 = 0; i29<1; i29++){
                setInterval( function(){
                    if(s29.value>=60){
                        send_result29.innerHTML = Math.floor(s29.value/60) + ":" + s29.value%60;
                    }
                    else{
                        send_result29.innerHTML = "00:" + s29.value;
                    }
                    s29.value = document.getElementById('song29').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song29').pause();
        }
    })
    function volume29(){
        document.getElementById('v29').addEventListener('change', function(){
            document.getElementById('song29').volume = v29.value;
        }) 
    }
    document.getElementById('song29').volume = 0.5;
}

audio30:{
    var pauplay30 = 0
    function x30(){
        if(pauplay30%2!=0){
            document.getElementById('s30').addEventListener('change', function(){
                document.getElementById('song30').currentTime = s30.value;
            })
        }
        
    }
    document.getElementById('s30but').addEventListener('click', function(){
        pauplay30=pauplay30+1
        if(pauplay30%2!=0){
            document.getElementById('song30').play();
            for(var i30 = 0; i30<1; i30++){
                setInterval( function(){
                    if(s30.value>=60){
                        send_result30.innerHTML = Math.floor(s30.value/60) + ":" + s30.value%60;
                    }
                    else{
                        send_result30.innerHTML = "00:" + s30.value;
                    }
                    s30.value = document.getElementById('song30').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song30').pause();
        }
    })
    function volume30(){
        document.getElementById('v30').addEventListener('change', function(){
            document.getElementById('song30').volume = v30.value;
        }) 
    }
    document.getElementById('song30').volume = 0.5;
}

audio31:{
    var pauplay31 = 0
    function x31(){
        if(pauplay31%2!=0){
            document.getElementById('s31').addEventListener('change', function(){
                document.getElementById('song31').currentTime = s31.value;
            })
        }
        
    }
    document.getElementById('s31but').addEventListener('click', function(){
        pauplay31=pauplay31+1
        if(pauplay31%2!=0){
            document.getElementById('song31').play();
            for(var i31 = 0; i31<1; i31++){
                setInterval( function(){
                    if(s31.value>=60){
                        send_result31.innerHTML = Math.floor(s31.value/60) + ":" + s31.value%60;
                    }
                    else{
                        send_result31.innerHTML = "00:" + s31.value;
                    }
                    s31.value = document.getElementById('song31').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song31').pause();
        }
    })
    function volume31(){
        document.getElementById('v31').addEventListener('change', function(){
            document.getElementById('song31').volume = v31.value;
        }) 
    }
    document.getElementById('song31').volume = 0.5;
}

audio32:{
    var pauplay32 = 0
    function x32(){
        if(pauplay32%2!=0){
            document.getElementById('s32').addEventListener('change', function(){
                document.getElementById('song32').currentTime = s32.value;
            })
        }
        
    }
    document.getElementById('s32but').addEventListener('click', function(){
        pauplay32=pauplay32+1
        if(pauplay32%2!=0){
            document.getElementById('song32').play();
            for(var i32 = 0; i32<1; i32++){
                setInterval( function(){
                    if(s32.value>=60){
                        send_result32.innerHTML = Math.floor(s32.value/60) + ":" + s32.value%60;
                    }
                    else{
                        send_result32.innerHTML = "00:" + s32.value;
                    }
                    s32.value = document.getElementById('song32').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song32').pause();
        }
    })
    function volume32(){
        document.getElementById('v32').addEventListener('change', function(){
            document.getElementById('song32').volume = v32.value;
        }) 
    }
    document.getElementById('song32').volume = 0.5;
}

audio33:{
    var pauplay33 = 0
    function x33(){
        if(pauplay33%2!=0){
            document.getElementById('s33').addEventListener('change', function(){
                document.getElementById('song33').currentTime = s33.value;
            })
        }
        
    }
    document.getElementById('s33but').addEventListener('click', function(){
        pauplay33=pauplay33+1
        if(pauplay33%2!=0){
            document.getElementById('song33').play();
            for(var i33 = 0; i33<1; i33++){
                setInterval( function(){
                    if(s33.value>=60){
                        send_result33.innerHTML = Math.floor(s33.value/60) + ":" + s33.value%60;
                    }
                    else{
                        send_result33.innerHTML = "00:" + s33.value;
                    }
                    s33.value = document.getElementById('song33').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song33').pause();
        }
    })
    function volume33(){
        document.getElementById('v33').addEventListener('change', function(){
            document.getElementById('song33').volume = v33.value;
        }) 
    }
    document.getElementById('song33').volume = 0.5;
}

audio34:{
    var pauplay34 = 0
    function x34(){
        if(pauplay34%2!=0){
            document.getElementById('s34').addEventListener('change', function(){
                document.getElementById('song34').currentTime = s34.value;
            })
        }
        
    }
    document.getElementById('s34but').addEventListener('click', function(){
        pauplay34=pauplay34+1
        if(pauplay34%2!=0){
            document.getElementById('song34').play();
            for(var i34 = 0; i34<1; i34++){
                setInterval( function(){
                    if(s34.value>=60){
                        send_result34.innerHTML = Math.floor(s34.value/60) + ":" + s34.value%60;
                    }
                    else{
                        send_result34.innerHTML = "00:" + s34.value;
                    }
                    s34.value = document.getElementById('song34').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song34').pause();
        }
    })
    function volume34(){
        document.getElementById('v34').addEventListener('change', function(){
            document.getElementById('song34').volume = v34.value;
        }) 
    }
    document.getElementById('song34').volume = 0.5;
}

audio35:{
    var pauplay35 = 0
    function x35(){
        if(pauplay35%2!=0){
            document.getElementById('s35').addEventListener('change', function(){
                document.getElementById('song35').currentTime = s35.value;
            })
        }
        
    }
    document.getElementById('s35but').addEventListener('click', function(){
        pauplay35=pauplay35+1
        if(pauplay35%2!=0){
            document.getElementById('song35').play();
            for(var i35 = 0; i35<1; i35++){
                setInterval( function(){
                    if(s35.value>=60){
                        send_result35.innerHTML = Math.floor(s35.value/60) + ":" + s35.value%60;
                    }
                    else{
                        send_result35.innerHTML = "00:" + s35.value;
                    }
                    s35.value = document.getElementById('song35').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song35').pause();
        }
    })
    function volume35(){
        document.getElementById('v35').addEventListener('change', function(){
            document.getElementById('song35').volume = v35.value;
        }) 
    }
    document.getElementById('song35').volume = 0.5;
}

audio36:{
    var pauplay36 = 0
    function x36(){
        if(pauplay36%2!=0){
            document.getElementById('s36').addEventListener('change', function(){
                document.getElementById('song36').currentTime = s36.value;
            })
        }
        
    }
    document.getElementById('s36but').addEventListener('click', function(){
        pauplay36=pauplay36+1
        if(pauplay36%2!=0){
            document.getElementById('song36').play();
            for(var i36 = 0; i36<1; i36++){
                setInterval( function(){
                    if(s36.value>=60){
                        send_result36.innerHTML = Math.floor(s36.value/60) + ":" + s36.value%60;
                    }
                    else{
                        send_result36.innerHTML = "00:" + s36.value;
                    }
                    s36.value = document.getElementById('song36').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song36').pause();
        }
    })
    function volume36(){
        document.getElementById('v36').addEventListener('change', function(){
            document.getElementById('song36').volume = v36.value;
        }) 
    }
    document.getElementById('song36').volume = 0.5;
}

audio37:{
    var pauplay37 = 0
    function x37(){
        if(pauplay37%2!=0){
            document.getElementById('s37').addEventListener('change', function(){
                document.getElementById('song37').currentTime = s37.value;
            })
        }
        
    }
    document.getElementById('s37but').addEventListener('click', function(){
        pauplay37=pauplay37+1
        if(pauplay37%2!=0){
            document.getElementById('song37').play();
            for(var i37 = 0; i37<1; i37++){
                setInterval( function(){
                    if(s37.value>=60){
                        send_result37.innerHTML = Math.floor(s37.value/60) + ":" + s37.value%60;
                    }
                    else{
                        send_result37.innerHTML = "00:" + s37.value;
                    }
                    s37.value = document.getElementById('song37').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song37').pause();
        }
    })
    function volume37(){
        document.getElementById('v37').addEventListener('change', function(){
            document.getElementById('song37').volume = v37.value;
        }) 
    }
    document.getElementById('song37').volume = 0.5;
}

audio38:{
    var pauplay38 = 0
    function x38(){
        if(pauplay38%2!=0){
            document.getElementById('s38').addEventListener('change', function(){
                document.getElementById('song38').currentTime = s38.value;
            })
        }
        
    }
    document.getElementById('s38but').addEventListener('click', function(){
        pauplay38=pauplay38+1
        if(pauplay38%2!=0){
            document.getElementById('song38').play();
            for(var i38 = 0; i38<1; i38++){
                setInterval( function(){
                    if(s38.value>=60){
                        send_result38.innerHTML = Math.floor(s38.value/60) + ":" + s38.value%60;
                    }
                    else{
                        send_result38.innerHTML = "00:" + s38.value;
                    }
                    s38.value = document.getElementById('song38').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song38').pause();
        }
    })
    function volume38(){
        document.getElementById('v38').addEventListener('change', function(){
            document.getElementById('song38').volume = v38.value;
        }) 
    }
    document.getElementById('song38').volume = 0.5;
}

audio39:{
    var pauplay39 = 0
    function x39(){
        if(pauplay39%2!=0){
            document.getElementById('s39').addEventListener('change', function(){
                document.getElementById('song39').currentTime = s39.value;
            })
        }
        
    }
    document.getElementById('s39but').addEventListener('click', function(){
        pauplay39=pauplay39+1
        if(pauplay39%2!=0){
            document.getElementById('song39').play();
            for(var i39 = 0; i39<1; i39++){
                setInterval( function(){
                    if(s39.value>=60){
                        send_result39.innerHTML = Math.floor(s39.value/60) + ":" + s39.value%60;
                    }
                    else{
                        send_result39.innerHTML = "00:" + s39.value;
                    }
                    s39.value = document.getElementById('song39').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song39').pause();
        }
    })
    function volume39(){
        document.getElementById('v39').addEventListener('change', function(){
            document.getElementById('song39').volume = v39.value;
        }) 
    }
    document.getElementById('song39').volume = 0.5;
}

audio40:{
    var pauplay40 = 0
    function x40(){
        if(pauplay40%2!=0){
            document.getElementById('s40').addEventListener('change', function(){
                document.getElementById('song40').currentTime = s40.value;
            })
        }
        
    }
    document.getElementById('s40but').addEventListener('click', function(){
        pauplay40=pauplay40+1
        if(pauplay40%2!=0){
            document.getElementById('song40').play();
            for(var i40 = 0; i40<1; i40++){
                setInterval( function(){
                    if(s40.value>=60){
                        send_result40.innerHTML = Math.floor(s40.value/60) + ":" + s40.value%60;
                    }
                    else{
                        send_result40.innerHTML = "00:" + s40.value;
                    }
                    s40.value = document.getElementById('song40').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song40').pause();
        }
    })
    function volume40(){
        document.getElementById('v40').addEventListener('change', function(){
            document.getElementById('song40').volume = v40.value;
        }) 
    }
    document.getElementById('song40').volume = 0.5;
}

audio41:{
    var pauplay41 = 0
    function x41(){
        if(pauplay41%2!=0){
            document.getElementById('s41').addEventListener('change', function(){
                document.getElementById('song41').currentTime = s41.value;
            })
        }
        
    }
    document.getElementById('s41but').addEventListener('click', function(){
        pauplay41=pauplay41+1
        if(pauplay41%2!=0){
            document.getElementById('song41').play();
            for(var i41 = 0; i41<1; i41++){
                setInterval( function(){
                    if(s41.value>=60){
                        send_result41.innerHTML = Math.floor(s41.value/60) + ":" + s41.value%60;
                    }
                    else{
                        send_result41.innerHTML = "00:" + s41.value;
                    }
                    s41.value = document.getElementById('song41').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song41').pause();
        }
    })
    function volume41(){
        document.getElementById('v41').addEventListener('change', function(){
            document.getElementById('song41').volume = v41.value;
        }) 
    }
    document.getElementById('song41').volume = 0.5;
}

audio42:{
    var pauplay42 = 0
    function x42(){
        if(pauplay42%2!=0){
            document.getElementById('s42').addEventListener('change', function(){
                document.getElementById('song42').currentTime = s42.value;
            })
        }
        
    }
    document.getElementById('s42but').addEventListener('click', function(){
        pauplay42=pauplay42+1
        if(pauplay42%2!=0){
            document.getElementById('song42').play();
            for(var i42 = 0; i42<1; i42++){
                setInterval( function(){
                    if(s42.value>=60){
                        send_result42.innerHTML = Math.floor(s42.value/60) + ":" + s42.value%60;
                    }
                    else{
                        send_result42.innerHTML = "00:" + s42.value;
                    }
                    s42.value = document.getElementById('song42').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song42').pause();
        }
    })
    function volume42(){
        document.getElementById('v42').addEventListener('change', function(){
            document.getElementById('song42').volume = v42.value;
        }) 
    }
    document.getElementById('song42').volume = 0.5;
}

audio43:{
    var pauplay43 = 0
    function x43(){
        if(pauplay43%2!=0){
            document.getElementById('s43').addEventListener('change', function(){
                document.getElementById('song43').currentTime = s43.value;
            })
        }
        
    }
    document.getElementById('s43but').addEventListener('click', function(){
        pauplay43=pauplay43+1
        if(pauplay43%2!=0){
            document.getElementById('song43').play();
            for(var i43 = 0; i43<1; i43++){
                setInterval( function(){
                    if(s43.value>=60){
                        send_result43.innerHTML = Math.floor(s43.value/60) + ":" + s43.value%60;
                    }
                    else{
                        send_result43.innerHTML = "00:" + s43.value;
                    }
                    s43.value = document.getElementById('song43').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song43').pause();
        }
    })
    function volume43(){
        document.getElementById('v43').addEventListener('change', function(){
            document.getElementById('song43').volume = v43.value;
        }) 
    }
    document.getElementById('song43').volume = 0.5;
}

audio44:{
    var pauplay44 = 0
    function x44(){
        if(pauplay44%2!=0){
            document.getElementById('s44').addEventListener('change', function(){
                document.getElementById('song44').currentTime = s44.value;
            })
        }
        
    }
    document.getElementById('s44but').addEventListener('click', function(){
        pauplay44=pauplay44+1
        if(pauplay44%2!=0){
            document.getElementById('song44').play();
            for(var i44 = 0; i44<1; i44++){
                setInterval( function(){
                    if(s44.value>=60){
                        send_result44.innerHTML = Math.floor(s44.value/60) + ":" + s44.value%60;
                    }
                    else{
                        send_result44.innerHTML = "00:" + s44.value;
                    }
                    s44.value = document.getElementById('song44').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song44').pause();
        }
    })
    function volume44(){
        document.getElementById('v44').addEventListener('change', function(){
            document.getElementById('song44').volume = v44.value;
        }) 
    }
    document.getElementById('song44').volume = 0.5;
}

audio45:{
    var pauplay45 = 0
    function x45(){
        if(pauplay45%2!=0){
            document.getElementById('s45').addEventListener('change', function(){
                document.getElementById('song45').currentTime = s45.value;
            })
        }
        
    }
    document.getElementById('s45but').addEventListener('click', function(){
        pauplay45=pauplay45+1
        if(pauplay45%2!=0){
            document.getElementById('song45').play();
            for(var i45 = 0; i45<1; i45++){
                setInterval( function(){
                    if(s45.value>=60){
                        send_result45.innerHTML = Math.floor(s45.value/60) + ":" + s45.value%60;
                    }
                    else{
                        send_result45.innerHTML = "00:" + s45.value;
                    }
                    s45.value = document.getElementById('song45').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song45').pause();
        }
    })
    function volume45(){
        document.getElementById('v45').addEventListener('change', function(){
            document.getElementById('song45').volume = v45.value;
        }) 
    }
    document.getElementById('song45').volume = 0.5;
}

audio46:{
    var pauplay46 = 0
    function x46(){
        if(pauplay46%2!=0){
            document.getElementById('s46').addEventListener('change', function(){
                document.getElementById('song46').currentTime = s46.value;
            })
        }
        
    }
    document.getElementById('s46but').addEventListener('click', function(){
        pauplay46=pauplay46+1
        if(pauplay46%2!=0){
            document.getElementById('song46').play();
            for(var i46 = 0; i46<1; i46++){
                setInterval( function(){
                    if(s46.value>=60){
                        send_result46.innerHTML = Math.floor(s46.value/60) + ":" + s46.value%60;
                    }
                    else{
                        send_result46.innerHTML = "00:" + s46.value;
                    }
                    s46.value = document.getElementById('song46').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song46').pause();
        }
    })
    function volume46(){
        document.getElementById('v46').addEventListener('change', function(){
            document.getElementById('song46').volume = v46.value;
        }) 
    }
    document.getElementById('song46').volume = 0.5;
}

audio47:{
    var pauplay47 = 0
    function x47(){
        if(pauplay47%2!=0){
            document.getElementById('s47').addEventListener('change', function(){
                document.getElementById('song47').currentTime = s47.value;
            })
        }
        
    }
    document.getElementById('s47but').addEventListener('click', function(){
        pauplay47=pauplay47+1
        if(pauplay47%2!=0){
            document.getElementById('song47').play();
            for(var i47 = 0; i47<1; i47++){
                setInterval( function(){
                    if(s47.value>=60){
                        send_result47.innerHTML = Math.floor(s47.value/60) + ":" + s47.value%60;
                    }
                    else{
                        send_result47.innerHTML = "00:" + s47.value;
                    }
                    s47.value = document.getElementById('song47').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song47').pause();
        }
    })
    function volume47(){
        document.getElementById('v47').addEventListener('change', function(){
            document.getElementById('song47').volume = v47.value;
        }) 
    }
    document.getElementById('song47').volume = 0.5;
}

audio48:{
    var pauplay48 = 0
    function x48(){
        if(pauplay48%2!=0){
            document.getElementById('s48').addEventListener('change', function(){
                document.getElementById('song48').currentTime = s48.value;
            })
        }
        
    }
    document.getElementById('s48but').addEventListener('click', function(){
        pauplay48=pauplay48+1
        if(pauplay48%2!=0){
            document.getElementById('song48').play();
            for(var i48 = 0; i48<1; i48++){
                setInterval( function(){
                    if(s48.value>=60){
                        send_result48.innerHTML = Math.floor(s48.value/60) + ":" + s48.value%60;
                    }
                    else{
                        send_result48.innerHTML = "00:" + s48.value;
                    }
                    s48.value = document.getElementById('song48').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song48').pause();
        }
    })
    function volume48(){
        document.getElementById('v48').addEventListener('change', function(){
            document.getElementById('song48').volume = v48.value;
        }) 
    }
    document.getElementById('song48').volume = 0.5;
}

audio49:{
    var pauplay49 = 0
    function x49(){
        if(pauplay49%2!=0){
            document.getElementById('s49').addEventListener('change', function(){
                document.getElementById('song49').currentTime = s49.value;
            })
        }
        
    }
    document.getElementById('s49but').addEventListener('click', function(){
        pauplay49=pauplay49+1
        if(pauplay49%2!=0){
            document.getElementById('song49').play();
            for(var i49 = 0; i49<1; i49++){
                setInterval( function(){
                    if(s49.value>=60){
                        send_result49.innerHTML = Math.floor(s49.value/60) + ":" + s49.value%60;
                    }
                    else{
                        send_result49.innerHTML = "00:" + s49.value;
                    }
                    s49.value = document.getElementById('song49').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song49').pause();
        }
    })
    function volume49(){
        document.getElementById('v49').addEventListener('change', function(){
            document.getElementById('song49').volume = v49.value;
        }) 
    }
    document.getElementById('song49').volume = 0.5;
}

audio50:{
    var pauplay50 = 0
    function x50(){
        if(pauplay50%2!=0){
            document.getElementById('s50').addEventListener('change', function(){
                document.getElementById('song50').currentTime = s50.value;
            })
        }
        
    }
    document.getElementById('s50but').addEventListener('click', function(){
        pauplay50=pauplay50+1
        if(pauplay50%2!=0){
            document.getElementById('song50').play();
            for(var i50 = 0; i50<1; i50++){
                setInterval( function(){
                    if(s50.value>=60){
                        send_result50.innerHTML = Math.floor(s50.value/60) + ":" + s50.value%60;
                    }
                    else{
                        send_result50.innerHTML = "00:" + s50.value;
                    }
                    s50.value = document.getElementById('song50').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song50').pause();
        }
    })
    function volume50(){
        document.getElementById('v50').addEventListener('change', function(){
            document.getElementById('song50').volume = v50.value;
        }) 
    }
    document.getElementById('song50').volume = 0.5;
}

audio51:{
    var pauplay51 = 0
    function x51(){
        if(pauplay51%2!=0){
            document.getElementById('s51').addEventListener('change', function(){
                document.getElementById('song51').currentTime = s51.value;
            })
        }
        
    }
    document.getElementById('s51but').addEventListener('click', function(){
        pauplay51=pauplay51+1
        if(pauplay51%2!=0){
            document.getElementById('song51').play();
            for(var i51 = 0; i51<1; i51++){
                setInterval( function(){
                    if(s51.value>=60){
                        send_result51.innerHTML = Math.floor(s51.value/60) + ":" + s51.value%60;
                    }
                    else{
                        send_result51.innerHTML = "00:" + s51.value;
                    }
                    s51.value = document.getElementById('song51').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song51').pause();
        }
    })
    function volume51(){
        document.getElementById('v51').addEventListener('change', function(){
            document.getElementById('song51').volume = v51.value;
        }) 
    }
    document.getElementById('song51').volume = 0.5;
}

audio52:{
    var pauplay52 = 0
    function x52(){
        if(pauplay52%2!=0){
            document.getElementById('s52').addEventListener('change', function(){
                document.getElementById('song52').currentTime = s52.value;
            })
        }
        
    }
    document.getElementById('s52but').addEventListener('click', function(){
        pauplay52=pauplay52+1
        if(pauplay52%2!=0){
            document.getElementById('song52').play();
            for(var i52 = 0; i52<1; i52++){
                setInterval( function(){
                    if(s52.value>=60){
                        send_result52.innerHTML = Math.floor(s52.value/60) + ":" + s52.value%60;
                    }
                    else{
                        send_result52.innerHTML = "00:" + s52.value;
                    }
                    s52.value = document.getElementById('song52').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song52').pause();
        }
    })
    function volume52(){
        document.getElementById('v52').addEventListener('change', function(){
            document.getElementById('song52').volume = v52.value;
        }) 
    }
    document.getElementById('song52').volume = 0.5;
}

audio53:{
    var pauplay53 = 0
    function x53(){
        if(pauplay53%2!=0){
            document.getElementById('s53').addEventListener('change', function(){
                document.getElementById('song53').currentTime = s53.value;
            })
        }
        
    }
    document.getElementById('s53but').addEventListener('click', function(){
        pauplay53=pauplay53+1
        if(pauplay53%2!=0){
            document.getElementById('song53').play();
            for(var i53 = 0; i53<1; i53++){
                setInterval( function(){
                    if(s53.value>=60){
                        send_result53.innerHTML = Math.floor(s53.value/60) + ":" + s53.value%60;
                    }
                    else{
                        send_result53.innerHTML = "00:" + s53.value;
                    }
                    s53.value = document.getElementById('song53').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song53').pause();
        }
    })
    function volume53(){
        document.getElementById('v53').addEventListener('change', function(){
            document.getElementById('song53').volume = v53.value;
        }) 
    }
    document.getElementById('song53').volume = 0.5;
}

audio54:{
    var pauplay54 = 0
    function x54(){
        if(pauplay54%2!=0){
            document.getElementById('s54').addEventListener('change', function(){
                document.getElementById('song54').currentTime = s54.value;
            })
        }
        
    }
    document.getElementById('s54but').addEventListener('click', function(){
        pauplay54=pauplay54+1
        if(pauplay54%2!=0){
            document.getElementById('song54').play();
            for(var i54 = 0; i54<1; i54++){
                setInterval( function(){
                    if(s54.value>=60){
                        send_result54.innerHTML = Math.floor(s54.value/60) + ":" + s54.value%60;
                    }
                    else{
                        send_result54.innerHTML = "00:" + s54.value;
                    }
                    s54.value = document.getElementById('song54').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song54').pause();
        }
    })
    function volume54(){
        document.getElementById('v54').addEventListener('change', function(){
            document.getElementById('song54').volume = v54.value;
        }) 
    }
    document.getElementById('song54').volume = 0.5;
}

audio55:{
    var pauplay55 = 0
    function x55(){
        if(pauplay55%2!=0){
            document.getElementById('s55').addEventListener('change', function(){
                document.getElementById('song55').currentTime = s55.value;
            })
        }
        
    }
    document.getElementById('s55but').addEventListener('click', function(){
        pauplay55=pauplay55+1
        if(pauplay55%2!=0){
            document.getElementById('song55').play();
            for(var i55 = 0; i55<1; i55++){
                setInterval( function(){
                    if(s55.value>=60){
                        send_result55.innerHTML = Math.floor(s55.value/60) + ":" + s55.value%60;
                    }
                    else{
                        send_result55.innerHTML = "00:" + s55.value;
                    }
                    s55.value = document.getElementById('song55').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song55').pause();
        }
    })
    function volume55(){
        document.getElementById('v55').addEventListener('change', function(){
            document.getElementById('song55').volume = v55.value;
        }) 
    }
    document.getElementById('song55').volume = 0.5;
}

audio56:{
    var pauplay56 = 0
    function x56(){
        if(pauplay56%2!=0){
            document.getElementById('s56').addEventListener('change', function(){
                document.getElementById('song56').currentTime = s56.value;
            })
        }
        
    }
    document.getElementById('s56but').addEventListener('click', function(){
        pauplay56=pauplay56+1
        if(pauplay56%2!=0){
            document.getElementById('song56').play();
            for(var i56 = 0; i56<1; i56++){
                setInterval( function(){
                    if(s56.value>=60){
                        send_result56.innerHTML = Math.floor(s56.value/60) + ":" + s56.value%60;
                    }
                    else{
                        send_result56.innerHTML = "00:" + s56.value;
                    }
                    s56.value = document.getElementById('song56').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song56').pause();
        }
    })
    function volume56(){
        document.getElementById('v56').addEventListener('change', function(){
            document.getElementById('song56').volume = v56.value;
        }) 
    }
    document.getElementById('song56').volume = 0.5;
}

audio57:{
    var pauplay57 = 0
    function x57(){
        if(pauplay57%2!=0){
            document.getElementById('s57').addEventListener('change', function(){
                document.getElementById('song57').currentTime = s57.value;
            })
        }
        
    }
    document.getElementById('s57but').addEventListener('click', function(){
        pauplay57=pauplay57+1
        if(pauplay57%2!=0){
            document.getElementById('song57').play();
            for(var i57 = 0; i57<1; i57++){
                setInterval( function(){
                    if(s57.value>=60){
                        send_result57.innerHTML = Math.floor(s57.value/60) + ":" + s57.value%60;
                    }
                    else{
                        send_result57.innerHTML = "00:" + s57.value;
                    }
                    s57.value = document.getElementById('song57').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song57').pause();
        }
    })
    function volume57(){
        document.getElementById('v57').addEventListener('change', function(){
            document.getElementById('song57').volume = v57.value;
        }) 
    }
    document.getElementById('song57').volume = 0.5;
}

audio58:{
    var pauplay58 = 0
    function x58(){
        if(pauplay58%2!=0){
            document.getElementById('s58').addEventListener('change', function(){
                document.getElementById('song58').currentTime = s58.value;
            })
        }
        
    }
    document.getElementById('s58but').addEventListener('click', function(){
        pauplay58=pauplay58+1
        if(pauplay58%2!=0){
            document.getElementById('song58').play();
            for(var i58 = 0; i58<1; i58++){
                setInterval( function(){
                    if(s58.value>=60){
                        send_result58.innerHTML = Math.floor(s58.value/60) + ":" + s58.value%60;
                    }
                    else{
                        send_result58.innerHTML = "00:" + s58.value;
                    }
                    s58.value = document.getElementById('song58').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song58').pause();
        }
    })
    function volume58(){
        document.getElementById('v58').addEventListener('change', function(){
            document.getElementById('song58').volume = v58.value;
        }) 
    }
    document.getElementById('song58').volume = 0.5;
}

audio59:{
    var pauplay59 = 0
    function x59(){
        if(pauplay59%2!=0){
            document.getElementById('s59').addEventListener('change', function(){
                document.getElementById('song59').currentTime = s59.value;
            })
        }
        
    }
    document.getElementById('s59but').addEventListener('click', function(){
        pauplay59=pauplay59+1
        if(pauplay59%2!=0){
            document.getElementById('song59').play();
            for(var i59 = 0; i59<1; i59++){
                setInterval( function(){
                    if(s59.value>=60){
                        send_result59.innerHTML = Math.floor(s59.value/60) + ":" + s59.value%60;
                    }
                    else{
                        send_result59.innerHTML = "00:" + s59.value;
                    }
                    s59.value = document.getElementById('song59').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song59').pause();
        }
    })
    function volume59(){
        document.getElementById('v59').addEventListener('change', function(){
            document.getElementById('song59').volume = v59.value;
        }) 
    }
    document.getElementById('song59').volume = 0.5;
}

audio60:{
    var pauplay60 = 0
    function x60(){
        if(pauplay60%2!=0){
            document.getElementById('s60').addEventListener('change', function(){
                document.getElementById('song60').currentTime = s60.value;
            })
        }
        
    }
    document.getElementById('s60but').addEventListener('click', function(){
        pauplay60=pauplay60+1
        if(pauplay60%2!=0){
            document.getElementById('song60').play();
            for(var i60 = 0; i60<1; i60++){
                setInterval( function(){
                    if(s60.value>=60){
                        send_result60.innerHTML = Math.floor(s60.value/60) + ":" + s60.value%60;
                    }
                    else{
                        send_result60.innerHTML = "00:" + s60.value;
                    }
                    s60.value = document.getElementById('song60').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song60').pause();
        }
    })
    function volume60(){
        document.getElementById('v60').addEventListener('change', function(){
            document.getElementById('song60').volume = v60.value;
        }) 
    }
    document.getElementById('song60').volume = 0.5;
}

audio61:{
    var pauplay61 = 0
    function x61(){
        if(pauplay61%2!=0){
            document.getElementById('s61').addEventListener('change', function(){
                document.getElementById('song61').currentTime = s61.value;
            })
        }
        
    }
    document.getElementById('s61but').addEventListener('click', function(){
        pauplay61=pauplay61+1
        if(pauplay61%2!=0){
            document.getElementById('song61').play();
            for(var i61 = 0; i61<1; i61++){
                setInterval( function(){
                    if(s61.value>=60){
                        send_result61.innerHTML = Math.floor(s61.value/60) + ":" + s61.value%60;
                    }
                    else{
                        send_result61.innerHTML = "00:" + s61.value;
                    }
                    s61.value = document.getElementById('song61').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song61').pause();
        }
    })
    function volume61(){
        document.getElementById('v61').addEventListener('change', function(){
            document.getElementById('song61').volume = v61.value;
        }) 
    }
    document.getElementById('song61').volume = 0.5;
}

audio62:{
    var pauplay62 = 0
    function x62(){
        if(pauplay62%2!=0){
            document.getElementById('s62').addEventListener('change', function(){
                document.getElementById('song62').currentTime = s62.value;
            })
        }
        
    }
    document.getElementById('s62but').addEventListener('click', function(){
        pauplay62=pauplay62+1
        if(pauplay62%2!=0){
            document.getElementById('song62').play();
            for(var i62 = 0; i62<1; i62++){
                setInterval( function(){
                    if(s62.value>=60){
                        send_result62.innerHTML = Math.floor(s62.value/60) + ":" + s62.value%60;
                    }
                    else{
                        send_result62.innerHTML = "00:" + s62.value;
                    }
                    s62.value = document.getElementById('song62').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song62').pause();
        }
    })
    function volume62(){
        document.getElementById('v62').addEventListener('change', function(){
            document.getElementById('song62').volume = v62.value;
        }) 
    }
    document.getElementById('song62').volume = 0.5;
}

audio63:{
    var pauplay63 = 0
    function x63(){
        if(pauplay63%2!=0){
            document.getElementById('s63').addEventListener('change', function(){
                document.getElementById('song63').currentTime = s63.value;
            })
        }
        
    }
    document.getElementById('s63but').addEventListener('click', function(){
        pauplay63=pauplay63+1
        if(pauplay63%2!=0){
            document.getElementById('song63').play();
            for(var i63 = 0; i63<1; i63++){
                setInterval( function(){
                    if(s63.value>=60){
                        send_result63.innerHTML = Math.floor(s63.value/60) + ":" + s63.value%60;
                    }
                    else{
                        send_result63.innerHTML = "00:" + s63.value;
                    }
                    s63.value = document.getElementById('song63').currentTime;
                    // send_result2.innerHTML=document.getElementById('song1').currentTime;
                }, 1 );
            }   
        }
        else{
            document.getElementById('song63').pause();
        }
    })
    function volume63(){
        document.getElementById('v63').addEventListener('change', function(){
            document.getElementById('song63').volume = v63.value;
        }) 
    }
    document.getElementById('song63').volume = 0.5;
}