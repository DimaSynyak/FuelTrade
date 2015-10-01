var flag = false;

function order_check(){
    var row1 = document.getElementById('row1');
    var row2 = document.getElementById('row2');
    var row3 = document.getElementById('row3');

    if(flag){
        row1.style.display = 'none';
        row2.style.display = 'none';
        row3.style.display = 'none';
        flag = false;
        return;
    }
    else{
        row1.style.display = 'block';
        row2.style.display = 'block';
        row3.style.display = 'block';
        flag = true;
    }

}