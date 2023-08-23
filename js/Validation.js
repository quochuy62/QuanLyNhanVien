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
}

