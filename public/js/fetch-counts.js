fetch('https://ecsptkcc68.execute-api.us-east-1.amazonaws.com/test').then(res => {
    res.text().then(text => {
        document.getElementById('services-count').innerHTML = "<div id='count-number' title=\"Don't say I didn't warn you.\"><a href='https://aws.amazon.com' target='_blank'>" + text + "</a></div>";
    })
});