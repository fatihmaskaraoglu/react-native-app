var apitry ={
  getRovers(){
    return fetch(url).then((res)=>res.json());
  }
};

module.exports = apitry;
