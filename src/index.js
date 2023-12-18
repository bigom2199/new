import React from './Components';

const renderAll = (text = "") => {
    const target = document.getElementById("ads");
    target.innerHTML = '';

    /*filterAds(text).forEach(ad => {
        render({ target, ...ad });
    });*/
}

renderAll();
document.getElementById("search").addEventListener('keyup', (e) => {
    renderAll(e.target.value);
});