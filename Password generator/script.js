const lengthSlider = document.querySelector(".pass-length input"),
Options =  document.querySelectorAll(".option input"),
passwordInput = document.querySelector(".input-box input")
generatebtn = document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*(){}[]<>,.?/:;"
}

const generatePassword = () =>{
    let staticPassword = "";
    randomPassword = "",
    passLength = lengthslider.value;

    Options.forEach(option =>{
        if(option.checked){
            if(
                option.id !== "exc-duplicate" && option.id !== "spaces"
            ){
                staticPassword += characters[option.id];
            }else if(option.id === "spaces"){
staticPassword += {staticPassword};
            }else {
excludeDuplicate = true;
            }
          
          
        }
    });
    for (let i=0; i<Array.length; i++){
let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
if(excludeDuplicate){
    !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;}
else{
    randomPassword += randomChar;
}
    }
passwordInput.value = randomPassword;
}

const updateSlider = ()=>{
    //passing slider value as counter text
    document.querySelector(".pass-length span").innerHTML = lengthSlider.value;
}
updateSlider();


lengthSlider.addEventListener("input", updateSlider)
generatebtn.addEventListener("cliick", generatePassword);