/* eslint no-eval: 0 */

var Axios = require("axios");

export function formatMoney (valor, places, symbol, thousand, decimal) {
  places = !isNaN(places = Math.abs(places)) ? places : 2;
  symbol = symbol !== undefined ? symbol : "$";
  thousand = thousand || ",";
  decimal = decimal || ".";
  var number = valor, 
      negative = number < 0 ? "-" : "",
      i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
      //j = (j = i.length) > 3 ? j % 3 : 0;
      j = (i.length) > 3 ? i.length % 3 : 0;
      return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};


export async function axiospost (url,parametros,config) {

    //url = 'http://192.168.0.14:3999' + url

    let pro = new Promise( async (resolve, reject) => {
        let retorno;
        try {
            retorno = await Axios({
                method: 'post',
                url: url,
                data: parametros,
                headers: config
            })
            resolve(retorno.data)
        } catch (err) {
            retorno = {
                url: url,
                error: err,
                data: err.response ? err.response.data : {}
            }
            reject(retorno)
        }
    })    

    return pro
}




