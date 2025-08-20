// get the subscribe button
const subscribeBtn = document.getElementById('subscribeBtn');

// store original text
const originalText = subscribeBtn.childNodes[0].textContent.trim();

// hover - change text
subscribeBtn.addEventListener('mouseover', function() {
    subscribeBtn.childNodes[0].textContent = 'Youtube ';
});

// mouseout - revert back
subscribeBtn.addEventListener('mouseout', function() {
    subscribeBtn.childNodes[0].textContent = originalText + ' ';
});

  