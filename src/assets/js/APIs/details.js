var details={
  // getDetails:function(lid,callback){
  //   $.ajax({
  //     url:config.baseUrl+"/details",
  //     type:"get",
  //     data:{lid},
  //     dataType:"json",//JSON.parse()
  //     success:function(result){
  //       console.log(result);
  //       callback(result);
  //     }
  //   });
  // }
  getDetails:function(lid){
    return new Promise(function(resolve,reject){
      /*$.ajax({
        url:config.baseUrl+"/details",
        type:"get",
        data:{lid},
        dataType:"json",//JSON.parse()
        success:function(result){
          console.log(result);
          resolve(result);
        },
        error:function(){
          reject("请求商品详情出错")
        }
      });*/
      axios.get(
        config.baseUrl+"/details",
        { params:{lid} } 
      )
      .then(result=>{//success
        console.log(result.data);
        resolve(result.data);
      })
      .catch(()=>{//error
        reject("请求商品详情出错")
      })
    })
  }
}