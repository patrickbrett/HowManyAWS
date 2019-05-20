fetch('https://ecsptkcc68.execute-api.us-east-1.amazonaws.com/test').then(res => {
    res.text().then(text => {
        document.getElementById('services-count').innerHTML = text;
    })
});