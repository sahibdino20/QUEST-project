function Login(){
    if(!IsValid()){
        
        window.location.reload();
    }
    else{
        window.location.href = 'index.html';
    }

}
function IsValid(){
    let user = document.getElementById('userText').value;
    let pass = document.getElementById('passText').value;
    if(user == null || user == "null" || user == ""){
       let uError = document.getElementById('userInfo').style.display = 'inline';
       alert(document.getElementById('userInfo').innerHTML);
        return false;
    }
    if(pass == null || pass == "null" || pass == ""){
        document.getElementById('passInfo').style.display = 'inline';
        alert(document.getElementById('passInfo').innerHTML);
        return false;
    }
    else{
        return true;
    }
}