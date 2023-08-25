function nhanVien(tk, ten, email,mk,ngay,luong,chucvu,time){
    this.taiKhoan = tk;
    this.hoTen = ten;
    this.email = email;
    this.matKhau = mk;
    this.ngayLam = ngay;
    this.luongCoBan = luong;
    this.chucVu = chucvu;
    this.gioLam = time;
    this.tongLuong;
    this.loaiNhanVien;
    this.tinhTongLuong = function(){
        if(this.chucVu == "sep"){
            this.tongLuong = this.luongCoBan*3;
            
        }else if(this.chucVu =="truongphong"){
            this.tongLuong = this.luongCoBan*2;
        }else{
            this.tongLuong = this.luongCoBan;
        }
    }
    this.phanLoai = function(){
        if(this.gioLam >= 192){
            this.loaiNhanVien = "Xuất sắc";
        }
        else if(this.gioLam >=176){
            this.loaiNhanVien = "Giỏi";
        }
        else if(this.gioLam >= 160){
            this.loaiNhanVien = "Khá";
        }
        else{
            this.loaiNhanVien = "Trung bình";
        }
    }
}
