var index={
  // getIndex:function(callback){
  //   $.ajax({
  //     url:config.baseUrl+"/index",
  //     type:"get",
  //     dataType:"json",//JSON.parse()
  //     success:function(result){
  //       console.log(result);
  //       callback(result);
  //     }
  //   });
  // }
  getIndex:function(){
    return new Promise(function(resolve,reject){
      /*$.ajax({
        url:config.baseUrl+"/index",
        type:"get",
        dataType:"json",//JSON.parse()
        success:function(result){
          console.log(result);
          resolve(result);
        },
        error:function(){
          reject("请求首页商品出错")
        }
      });*/
      axios.get(
        config.baseUrl+"/index"
      )
      .then(result=>{//success
        console.log(result.data);
        resolve(result.data);
      })
      .catch(()=>{//error
        reject("请求首页商品出错")
      })
    })
  }
}