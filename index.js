function shout (string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    let messageOne = "I can\'t hear you!";
    let messageTwo = "YES INDEED!";
    let messageThree = "I would love to!";
  
  
    if (string.toLowerCase(string)===string){
        return messageOne;
    }

    else if (string.toUpperCase(string)===string){
        return messageTwo;
    }
    else if("Let\'s have dinner together!" ===string){
        return messageThree;
    }

}