const fetch = require('node-fetch');

fetch('https://aws.amazon.com/')
    .then(res => res.text())
    .then(body => {
        let bodySplit = body.split("lb-content-item");
        let items = [];
        bodySplit.forEach((item, i) => {if (i > 0 && i < bodySplit.length - 1) items.push(item);});
        items = items.map(item => item.split('<span>')[0])
        items = items.map(item => item.split('so-exp=below"> ')[1]);
        
        console.log(items.length);
    }).catch(err => console.log(err))