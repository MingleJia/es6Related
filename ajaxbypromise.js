const myHttpClient = url => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader = ('Accept',"application/json");
        xhr.send();

        function handler() {
            if(this.readyState !== 4){
                return;
            }
            if(this.status === 200){
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
    });
};

myHttpClient('http://www.baidu.com').then(res => {
    console.log(res);
}).catch(error => {
    console.log(error);
})