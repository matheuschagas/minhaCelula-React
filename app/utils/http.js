
import Version from "./version";

let HttpService = {

    apiURL: Version.dev?'https://diana-pioneira-dev.herokuapp.com/api':'https://diana-painel.herokuapp.com/api',

    extractGetParams: function (params, token){
        let extractedParams = "?";
        for(let i=0; i<params.length; i++){
            if(i!==0){
                extractedParams += "&"
            }
            extractedParams += params[i].key+"="+params[i].value;
        }
        return extractedParams;
    },

    get: function(endpoint, token, params = [], callbackSuccess, callbackError, toAPI = true){
        try {
            let url = toAPI?(this.apiURL+ endpoint + this.extractGetParams(params, token)):endpoint;
            let headers = {};
            if(token !== null) {
                headers.Authorization = "Bearer " + token;
            }
            fetch(url, {headers: headers}).then((response) => response.json()).then((responseJson) => {
                if (callbackSuccess && typeof(callbackSuccess) === "function"){
                    callbackSuccess(responseJson);
                }
            }).catch((error) => {
                console.log(url, headers);
                throw error;
            });
        }catch(e){
            if (callbackError && typeof(callbackError) === "function"){
                callbackError(e);
            }
        }
    },

    post: function (endpoint, token, params = {}, callbackSuccess, callbackError, toAPI = true) {
        try {
            let url = toAPI?(this.apiURL + endpoint):endpoint;
            let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',};
            if(token !== null) {
                headers.Authorization = "Bearer " + token;
            }
            let body = JSON.stringify(params);
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: body
            }).then((response) => response.json()).then((responseJson) => {
                if (callbackSuccess && typeof(callbackSuccess) === "function"){
                    callbackSuccess(responseJson);
                }
            }).catch((error) => {
                console.log(url, headers, body);
                throw error;
            });
        }catch(e){
            if (callbackError && typeof(callbackError) === "function"){
                callbackError(e);
            }
        }
    }
};

export default HttpService;