var apitry ={
  getRovers(){
    var url = 'http://192.168.1.233:8080/mobile'
    return fetch(url).then((res)=>res.json());
  }
};

module.exports = apitry;
