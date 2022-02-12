let user_hand =  prompt("ジャンケンの手をぐー、チョキ、パーから選んでください");
  while((user_hand != "ぐー") && (user_hand !="チョキ") && (user_hand != "パー") && (user_hand != null)){
    alert("ぐー、チョキ、パーのいずれかを入力してください");
    user_hand = prompt("ジャンケンの手をぐー、チョキ、パーから選んでください");
  }
let js_hand = getJShand();
let judge = winLose(user_hand,js_hand);

if(user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。javascriptの手は' + js_hand + 'です。結果は' + judge + 'です');
}else{
  alert('またチャレンジしてね！');
}


function getJShand(){
  let js_hand_num = Math.floor(Math.random()*3);
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "ぐー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name ="パー";
  }

  return hand_name;
}

function winLose(user,js){
  let winLoseStr;

  if(user == "ぐー"){
    if(js == "ぐー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "バー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "ぐー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "ぐー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}