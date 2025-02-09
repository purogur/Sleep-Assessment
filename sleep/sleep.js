let task = [1,2,3,4];
let task_num,time;
let result_1,result_2,result_3,result_4;
function start(){
    document.getElementById("top").style.display = "none";
    task_num = Math.floor(Math.random()*task.length);
    document.getElementById("task_"+task[task_num]).style.display = "block";
    task.splice(task_num,1);
}
function task_start(num){
    document.getElementById("task_"+num+"_start_btn").style.display = "none";
    switch (num){
        case 1:
            task_1_program();   
            break;
        case 2:
            task_2_program();
            break;
        case 3:
            task_3_program();
            break;
        case 4:
            task_4_program();
            break;
    }
}

//ストループ作業
var answer;
var correct = 0;
var miss = 0;
function task_1_program(){
    let count = 3;
    document.getElementById("color_area").innerHTML = count;
    let count_down = setInterval(function(){
        count -= 1;
        document.getElementById("color_area").innerHTML = count;
        if(count<1){
            clearInterval(count_down);
            document.getElementById("color_area").style.fontWeight = "bold";
            time = new Date();
            question_1();
        }
    },1000)
}
function question_1(){
    let color_array = ["orange","blue","pink","yellow","red","green","purple","black",];
    let color_btn = [];
    let moji = Math.floor(Math.random()*color_array.length);
    document.getElementById("color_area").innerHTML = color_array[moji];
    answer = color_array[moji];
    color_btn.push(color_array[moji]);
    color_array.splice(moji,1);
    let color = Math.floor(Math.random()*color_array.length);
    document.getElementById("color_area").style.color = color_array[color];
    document.getElementById("color_back").style.backgroundColor = color_array[color];
    color_btn.push(color_array[color]);
    color_array.splice(color,1);
    for(let i=0;i<2;i++){
        let other = Math.floor(Math.random()*color_array.length);
        color_btn.push(color_array[other]);
        color_array.splice(other,1);
    }
    for(let i=1;i<5;i++){
        let num = Math.floor(Math.random()*color_btn.length);
        if(color_btn[num]==answer){
            answer = i;
        }
        document.getElementById("color_btn_"+i).style.backgroundColor = color_btn[num];
        color_btn.splice(num,1);
    }
}
function task_1_ans(num){
    if(answer==num){
        correct += 1;
    }
    else{
        miss += 1;
    }
    let now = new Date();
    if((now.getTime()-time)/1000<10){
        question_1();
    }
    //以下スコア計算
    else{
        result_1 = "正答数："+correct+"<br>"+"誤答数："+miss;//ここにスコア作る
        document.getElementById("task_1").style.display = "none";
        if(task.length>0){
            task_num = Math.floor(Math.random()*task.length);
            document.getElementById("task_"+task[task_num]).style.display = "block";
            task.splice(task_num,1);
        }
        else{
            task_end();
        }
    }
}

//計算作業
let answer_2 = 0;//一回ごとの答え
let correct_2 = 0;
let miss_2 = 0;
let i_2 = 1;//何問目か
let time_2_array = [];
function task_2_program(){
    let count = 3;
    document.getElementById("display_area").innerHTML = "第"+i_2+"問";
    let count_down = setInterval(function(){
        document.getElementById("display_area").style.color = "red";
        document.getElementById("display_area").innerHTML = count;
        count -= 1;
        if(count<1){
            clearInterval(count_down);
            question();
        }
    },1000)
}
function question(){
    let r = 5;//何回表示したか
    setTimeout(function(){
        let x = Math.floor(Math.random()*90+10);
        let x_before = x;
        answer_2 += x;
        document.getElementById("display_area").style.color = "white";
        document.getElementById("display_area").innerHTML = x;
        let Q = setInterval(function(){
            r -= 1;
            x = Math.floor(Math.random()*90+10);
            while(x==x_before){
                x = Math.floor(Math.random()*90+10);
            }
            if(r<1){
                clearInterval(Q);
                document.getElementById("display_area").innerHTML = "";
                time = new Date();
                document.getElementById("input_num").style.display = "inline";
                document.getElementById("input_num").focus();
            }
            else{
                answer_2 += x;
                document.getElementById("display_area").innerHTML = x;
            }
        },2000) 
    },1000);
}
function task_2_ans(){
    time_2_array.push((new Date()).getTime()-time.getTime());
    let input = document.getElementById("input_num").value;
    if(input==answer_2){
        correct_2 += 1;
    }
    else{
        miss_2 += 1;
    }
    if(i_2<5){
        document.getElementById("input_num").style.display = "none";
        document.getElementById("input_num").value = "";
        answer_2 = 0;
        i_2++;
        task_2_program();
    }
    //以下スコア計算
    else{
        let time_2_ave = 0;
        for(let i of time_2_array){
            time_2_ave += i;
        }
        time_2_ave = time_2_ave/time_2_array.length/1000;
        time_2_ave = (Math.round(time_2_ave*10))/10;
        result_2 = "正答数："+correct_2+"<br>"+"平均回答時間："+time_2_ave+"s";//ここにスコア作る
        document.getElementById("task_2").style.display = "none";
        if(task.length>0){
            task_num = Math.floor(Math.random()*task.length);
            document.getElementById("task_"+task[task_num]).style.display = "block";
            task.splice(task_num,1);
        }
        else{
            task_end();
        }
    }
}

//記憶作業
let num_array = [];
let random;
let correct_3 = 0;
let miss_3 = 0;
let i_3 = 1;
let time_3_array = [];
function task_3_program(){
    let count = 3;
    document.getElementById("display_area_3").innerHTML = "第"+i_3+"問";
    let count_down = setInterval(function(){
        document.getElementById("display_area_3").style.color = "red";
        document.getElementById("display_area_3").innerHTML = count;
        count -= 1;
        if(count<1){
            clearInterval(count_down);
            question_3();
        }
    },1000)
}
function question_3(){
    let r = 7;//何回表示したか
    setTimeout(function(){
        let x = Math.floor(Math.random()*9+1);
        num_array.push(x);
        document.getElementById("display_area_3").style.color = "white";
        document.getElementById("display_area_3").innerHTML = x;
        let Q = setInterval(function(){
            r -= 1;
            x = Math.floor(Math.random()*9+1);
            while(num_array.includes(x)){
                x = Math.floor(Math.random()*9+1);
            }
            if(r<1){
                clearInterval(Q);
                random = Math.floor(Math.random()*6+1);
                document.getElementById("display_area_3").style.fontSize = "40px";
                document.getElementById("display_area_3").innerHTML = num_array[random]+"の前の数字";
                time = new Date();
                document.getElementById("input_num_3").style.display = "inline";
                document.getElementById("input_num_3").focus();
            }
            else{
                num_array.push(x);
                document.getElementById("display_area_3").innerHTML = x;
            }
        },1000) 
    },1000);
}
function task_3_ans(){
    time_3_array.push((new Date()).getTime()-time.getTime());
    let input = document.getElementById("input_num_3").value;
    console.log(input);
    if(input==num_array[random-1]){
        correct_3 += 1;
    }
    else{
        miss_3 += 1;
    }
    if(i_3<5){
        document.getElementById("display_area_3").style.fontSize = "80px";
        document.getElementById("input_num_3").style.display = "none";
        document.getElementById("input_num_3").value = "";
        num_array = [];
        i_3++;
        task_3_program();
    }
    //以下スコア計算
    else{
        let time_3_ave = 0;
        for(let i of time_3_array){
            time_3_ave += i;
        }
        time_3_ave = time_3_ave/time_3_array.length/1000;
        time_3_ave = (Math.round(time_3_ave*10))/10;
        result_3 = "正答数："+correct_3+"<br>"+"平均回答時間："+time_3_ave+"s";
        document.getElementById("task_3").style.display = "none";
        if(task.length>0){
            task_num = Math.floor(Math.random()*task.length);
            document.getElementById("task_"+task[task_num]).style.display = "block";
            task.splice(task_num,1);
        }
        else{
            task_end();
        }
    }
}

//タップ作業
let x_4,y_4,touch_x,touch_y,distance,response;
let time_array = [];
let distance_array =[];
let i_4 = 0;
function task_4_program(){
    let count = 3;
    document.getElementById("tap_area").style.fontSize = "80px"
    document.getElementById("tap_area").style.color = "black";
    document.getElementById("tap_area").innerHTML = count;
    let count_down = setInterval(function(){
        count -= 1;
        document.getElementById("tap_area").innerHTML = count;
        if(count<1){
            clearInterval(count_down);
            time = (new Date()).getTime()
            question_4();
        }
    },1000)
}
function question_4(){
    document.getElementById("tap_area").innerHTML = "";
    document.getElementById("tap_btn").style.display = "inline";
    x_4 = Math.floor(Math.random()*295+20);
    y_4 = Math.floor(Math.random()*443+107);
    document.getElementById("tap_btn").style.left = x_4+"px"; 
    document.getElementById("tap_btn").style.top = y_4+"px";
    document.getElementById("tap_area").addEventListener('touchend', task_4_ans)
}

function task_4_ans(event){
    touch_x = event.changedTouches[0].clientX-20;
    touch_y = event.changedTouches[0].clientY-20;
    //距離を求める
    distance = Math.sqrt((touch_x-x_4)**2+(touch_y-y_4)**2);
    time_array.push(response);
    distance_array.push(distance);
    i_4 ++;
    if(i_4<10){
        question_4();
    }
    //以下スコア計算
    else{
        response = ((new Date()).getTime()-time)/1000;
        response = Math.round(response*100);
        response = response/1000
        let distance_ave = 0;
        for(let i of distance_array){
            distance_ave += i;
        }
        distance_ave = distance_ave/distance_array.length;
        distance_ave = Math.round(distance_ave*10)/10;
        distance = (Math.round(distance_ave*10))/10;
        result_4 = "反応時間："+response+"s"+"<br>"+"平均距離："+distance_ave+"px";//ここにスコア作る
        document.getElementById("task_4").style.display = "none";
        if(task.length>0){
            task_num = Math.floor(Math.random()*task.length);
            document.getElementById("task_"+task[task_num]).style.display = "block";
            task.splice(task_num,1);
        }
        else{
            task_end();
        }
    }
};

//全部が終わったら
function task_end(){
    document.getElementById("task_1_result").innerHTML = result_1;
    document.getElementById("task_2_result").innerHTML = result_2;
    document.getElementById("task_3_result").innerHTML = result_3;
    document.getElementById("task_4_result").innerHTML = result_4;
    let now_time = new Date();
    let month = now_time.getMonth()+1;
    let date = now_time.getDate();
    let hour = now_time.getHours();
    let minute = now_time.getMinutes();
    document.getElementById("record").innerHTML = month+"月"+date+"日"+hour+"時"+minute+"分";
    document.getElementById("task_end").style.display = "block";
}