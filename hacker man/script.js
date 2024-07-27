let a = [
    "Intializing hack tool",
    "connecting to facebook",
    "connecting to server 1",
    "connection failed. Retrying...",
    "connecting to sever 2",
    "connected successfully",
    "username laxman",
    "Trying brute force",
    "200k passwords tried...",
    "Match not found",
    "Another 200k passwords tried",
    "Match found",
    "Accessing account",
    "Hack successfully"
];
const sleep = async(seconds)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(true)
        }, seconds*1000);
    })
}
async function showHack(message) {
    await sleep(2);
    // console.log(message);
    text.innerHTML = text.innerHTML + message + "<br>"
}
(async ()=>{
    for(let i=0; i<a.length; i++){
        await showHack(a[i])
    }
})();