async function callingFn() {
    try {
        const response = await fetch("https://v1.nocodeapi.com/yfront/instagram/reQvBgmbSvVhwvgG?limit=6", {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
       // console.log("Success:", JSON.stringify(json));
    } catch (error) {
        console.error("Error:", error);
    }
}

function dateFormat ( date ){
    dateF = new Date(date);
    var month = dateF.getMonth() + 1;
    var day = dateF.getDate();
    var year = dateF.getFullYear();
    return month + "/" + day + "/" + year;
}

function renderInsta(item){
    let dateF = dateFormat(item.timestamp);
    return(
    `
    <figure>
        <a target="_blank" href="${item.permalink}">
            <img src="${item.media_url}" alt="${item.caption}">
            <div class="inst-info">
                <figcaption>${item.caption}</figcaption>
                <div class="date">${dateF}</div>
            </div>    
        </a>
    </figure>
    `)
}
const $instaArea = document.querySelector('#instagram');
async function loadInsta(){
    const dataInsta = await callingFn();
    dataInsta.data.forEach((item) => {
        const renderString = renderInsta(item);
        $instaArea.innerHTML += renderString;
    })
} 
loadInsta()

