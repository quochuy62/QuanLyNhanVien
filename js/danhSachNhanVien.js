function DanhSachNhanVien(){
    this.mangNV = [];

    this.themNV = function(nv){
        this.mangNV.push(nv);
    }
    this.xoaNV = function(maXoa){

        var indexXoa = this.mangNV.findIndex(function(nv){
                return nv.taiKhoan == maXoa
        });
        this.mangNV.splice(indexXoa,1);
    }

    this.xemNV = function(maXem){
        var nvFind = this.mangNV.find(function(nv){
            return nv.taiKhoan == maXem;
        });


        return nvFind;


    }

    this.capNhat = function(nvUpdate){
        var indexUpdate = this.mangNV.findIndex(function(nv){
            return nv.taiKhoan == nvUpdate.taiKhoan
        });

        if(indexUpdate > -1){
            this.mangNV[indexUpdate] = nvUpdate;
        }

    }


}