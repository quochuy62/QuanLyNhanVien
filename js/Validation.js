function Validation() {
    //input: value (giá trị của ô nhập), message, spanID (id của thẻ thông báo)
    //output: true , false
    this.checkEmpty = function (value, message, spanID) {
        //value từ form là kiểu string => so sánh chuỗi rỗng
        if (value != "") {
            //?value không bị rỗng => dữ liệu đúng
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;// lệnh thoát khỏi hàm
            // document.getElementById(spanID).style.display = "block";
        }

        //!Dữ liệu sai 
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkUsername = function (value, message, spanID) {
        console.log(value);
        if (value.length >= 4 && value.length <=6){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }

         document.getElementById(spanID).innerHTML = message;
         document.getElementById(spanID).style.display = "block";
         return false;
    }

    this.checkName = function (value, message, spanID) {
        var regex = /[^a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/;
        if(regex.test(value)){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
          //!Dữ liệu sai 
          document.getElementById(spanID).innerHTML = message;
          document.getElementById(spanID).style.display = "block";
          return false;
    }
 
    this.checkEmail = function (value, message, spanID) {
       var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
       if(regex.test(value)){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    
    this.checkPassword = function (value, message, spanID) {
        var regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[\W_])[0-9A-Za-z\W_]{6,10}$/;
        if(regex.test(value)){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkNgaylam = function (value, message, spanID) {
        var regex = /^\d{2}\/\d{2}\/\d{4}$/;
        if(regex.test(value)){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkSalary = function (value, message, spanID) {
        let numberSalary = parseInt(value);
        if (numberSalary >= 1000000 && numberSalary <= 20000000){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkPosition = function (value, message, spanID) {
        var position = ["sep", "truongphong", "nhanvien"];
        var isvalid = false;
        position.forEach(function (index) {
            console.log(index);
            if(index == value){
                document.getElementById(spanID).innerHTML = "";
                document.getElementById(spanID).style.display = "none";
                isvalid = true;
                
            }
        })
        if(!isvalid){
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
        }
        return isvalid;
    }
    
    this.checkTime = function (value, message, spanID) {
        let numberTime = parseInt(value);
        if (numberTime >= 80 && numberTime <= 200){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";

            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
}

