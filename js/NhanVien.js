function nhanVien(tk, ten, email,mk,ngay,luong,chucvu,time,tong,loai){
    var taiKhoan = tk;
    var hoTen = ten;
    var email = email;
    var matKhau = mk;
    var ngayLam = ngay;
    var luongCoBan = luong;
    var chucVu = chucvu;
    var gioLam = gio;
    var tongLuong = tong;
    var loaiNhanVien = loai
    function tongLuong(){
        if(this.chucVu == "giamdoc"){
            this.tongLuong = luongCoBan*3;
            
        }else if(this.chucVu =="truongphong"){
            this.tongLuong = this.luongCoBan*2;
        }else{
            this.tongLuong = this.luongCoBan;
        }
    }
}
