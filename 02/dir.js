const fs = require('fs');

if(!fs.existsSync("./new")){//덮어쓰기를 방지하기 위해 디렉토리가 없을 경우에만 디렉토리를 새로 생성함
    fs.mkdir("./new",(err)=>{
        if(err) throw err;
        console.log("Directory Created");
    })
}

if(fs.existsSync("./new")){//디렉토리가 있을경우에 삭제함
    fs.rmdir("./new",(err)=>{
        if(err) throw err;
        console.log("Directory Removed");
    })
}


