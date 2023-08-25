const validation = new Validation();
const danhSachNhanVien = new DanhSachNhanVien();


function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(danhSachNhanVien.mangNV));
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        danhSachNhanVien.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThi(danhSachNhanVien.mangNV);
    }

}

getLocalStorage();

function hienThi(arr) {
    console.log(arr);
    var content = ""; 

    arr.map(function (nv, index) {

        var trELE = `<tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>    
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.loaiNhanVien}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')"   >Xóa</button>
                <button class="btn btn-info" data-target="#myModal" data-toggle="modal" onclick="hienThiChiTiet('${nv.taiKhoan}')"  >Xem</button>
            </td>
        </tr>`
        content += trELE;
    })

    document.querySelector("#tableDanhSach").innerHTML = content;

}


function themNhanVien(){
    var tk = document.querySelector("#tknv").value;
    var  ten  = document.querySelector("#name").value;
    var  email = document.querySelector("#email").value;
    var  mk = document.querySelector("#password").value;
    var  ngay = document.querySelector("#datepicker").value;
    var  luong = document.querySelector("#luongCB").value;
    var  chucvu = document.querySelector("#chucvu").value;
    var  gioLam = document.querySelector("#gioLam").value;

    var isValid = true; 

    isValid = validation.checkEmpty(tk, "Tài khoản nhân viên không được để trống", "tbTKNV") && validation.checkUsername(tk, "Tài khoản nhân viên phải dài từ 4 - 6 ký tự", "tbTKNV") && validation.checkEmpty(ten, "Tên nhân viên không được để trống", "tbTen") 
        && validation.checkName(ten, "Tên nhân viên không được có số và ký tự đặc biệt", "tbTen") && validation.checkEmpty(email, "Email không được để trống","tbEmail")&& validation.checkEmail(email, "Email phải đúng định dạng","tbEmail") && validation.checkEmpty(mk, "Mật khẩu không được để trống","tbMatKhau") 
        && validation.checkPassword(mk, "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)","tbMatKhau") && validation.checkEmpty(ngay, "Ngày làm không được để trống","tbNgay") && validation.checkNgaylam(ngay, "Ngày làm không đúng định dạng","tbNgay")&& validation.checkEmpty(luong, "Lương cơ bản không được để trống","tbLuongCB")
        && validation.checkSalary(luong, "Lương cơ bản 1 000 000 - 20 000 000","tbLuongCB")  && validation.checkEmpty(chucvu, "Chức vụ không được để trống","tbChucVu") && validation.checkPosition(chucvu, "Chức vụ không đúng định dạng","tbChucVu") && validation.checkEmpty(gioLam, "Thời gian làm không được để trống","tbGiolam") && validation.checkTime(gioLam, "Thời gian làm phải từ 80 - 200 giờ","tbGiolam");

    if(isValid){
        var nv = new nhanVien(tk, ten, email,mk,ngay,Number(luong),chucvu,Number(gioLam));
        nv.tinhTongLuong();
        nv.phanLoai();
        danhSachNhanVien.themNV(nv);

        hienThi(danhSachNhanVien.mangNV);
        setLocalStorage();
    }
}

function xoaNhanVien(maXoa) {
    danhSachNhanVien.xoaNV(maXoa)
    setLocalStorage();
    getLocalStorage();
}


function hienThiChiTiet(maXem) {

    var nvFind = danhSachNhanVien.xemNV(maXem);

    document.querySelector("#tknv").value = nvFind.taiKhoan;
    document.querySelector("#tknv").disabled = true;

    document.querySelector("#name").value = nvFind.hoTen;
    document.querySelector("#email").value = nvFind.email;
    document.querySelector("#password").value = nvFind.matKhau;
    document.querySelector("#datepicker").value = nvFind.ngayLam;
    document.querySelector("#luongCB").value = nvFind.luongCoBan;
    document.querySelector("#chucvu").value = nvFind.chucVu;
    document.querySelector("#gioLam").value = nvFind.gioLam;

}


function capNhatSV() {
    var tk = document.querySelector("#tknv").value;
    var  ten  = document.querySelector("#name").value;
    var  email = document.querySelector("#email").value;
    var  mk = document.querySelector("#password").value;
    var  ngay = document.querySelector("#datepicker").value;
    var  luong = document.querySelector("#luongCB").value;
    var  chucvu = document.querySelector("#chucvu").value;
    var  gioLam = document.querySelector("#gioLam").value;

    isValid = validation.checkEmpty(tk, "Tài khoản nhân viên không được để trống", "tbTKNV") && validation.checkUsername(tk, "Tài khoản nhân viên phải dài từ 4 - 6 ký tự", "tbTKNV") && validation.checkEmpty(ten, "Tên nhân viên không được để trống", "tbTen") 
        && validation.checkName(ten, "Tên nhân viên không được có số và ký tự đặc biệt", "tbTen") && validation.checkEmpty(email, "Email không được để trống","tbEmail")&& validation.checkEmail(email, "Email phải đúng định dạng","tbEmail") && validation.checkEmpty(mk, "Mật khẩu không được để trống","tbMatKhau") 
        && validation.checkPassword(mk, "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)","tbMatKhau") && validation.checkEmpty(ngay, "Ngày làm không được để trống","tbNgay") && validation.checkNgaylam(ngay, "Ngày làm không đúng định dạng","tbNgay")&& validation.checkEmpty(luong, "Lương cơ bản không được để trống","tbLuongCB")
        && validation.checkSalary(luong, "Lương cơ bản 1 000 000 - 20 000 000","tbLuongCB")  && validation.checkEmpty(chucvu, "Chức vụ không được để trống","tbChucVu") && validation.checkPosition(chucvu, "Chức vụ không đúng định dạng","tbChucVu") && validation.checkEmpty(gioLam, "Thời gian làm không được để trống","tbGiolam") && validation.checkTime(gioLam, "Thời gian làm phải từ 80 - 200 giờ","tbGiolam");


    if(isValid){
        var nvUpdate = new nhanVien(tk, ten, email,mk,ngay,Number(luong),chucvu,Number(gioLam));
        nvUpdate.tinhTongLuong();
        nvUpdate.phanLoai();


        danhSachNhanVien.capNhat(nvUpdate);

        setLocalStorage();
        getLocalStorage();
    }

}

function search(){
    var key = document.querySelector("#searchName").value;
    var arr = [];
    danhSachNhanVien.mangNV.forEach(function(element) {
        if(element.loaiNhanVien == key){
            arr.push(element);
        }
    }) 
    hienThi(arr);
}