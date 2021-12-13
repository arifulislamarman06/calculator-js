//clear function
    function deleteData(){
        document.getElementById("display").value = ""
    }

//display values
    function calc(catchValue){
        let getData = document.getElementById("display").value += catchValue;
    };

//calculation function
    function answer(){
        let result = document.getElementById("display").value;
        let calculate = eval(result);
            document.getElementById("display").value = calculate;
    }