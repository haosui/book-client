import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig} from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CusInfo } from '../rece-info/customerinfo';

@Component({
  selector: 'app-rece-info',
  templateUrl: './rece-info.component.html',
  styleUrls: [ './rece-info.component.css']
})
export class ReceInfoComponent implements OnInit {
  registerForm: FormGroup;
  formdisplayy:boolean = false;
  
  infodisplay:boolean = !this.formdisplayy;
  submitted = false;
  thongtin: CusInfo ={
    ten: "",
    sdt: "",
    diachi: ""
  };

  userinfos: Array<CusInfo> =[];
 
  tinh = [
  { id: '0', name: 'Hà Nội' },
  { id: '1', name: 'Hải Dương' },
  
  ];
huyen1 = [
  { id: '0', name: 'Cầu Giấy' },
  { id: '1', name: 'Long Biên' },
  
  { id: '2', name: 'TP Hải Dương' },
  { id: '3', name: 'Thanh Hà' },
];
xa1 = [
  { id: '0', name: 'Xuân Thủy' },
  { id: '1', name: 'Hồ Tùng Mậu' },


  { id: '2', name: 'Hoàng Như Tiếp' },
  { id: '3', name: 'Gia Lâm' },

  { id: '4', name: 'Ngô Quyền' },
  { id: '5', name: 'Trần Hưng Đạo' },

  { id: '6', name: 'xã gì đó của Thanh Hà 1' },
  { id: '7', name:  'xã gì đó của Thanh Hà  2' },
];
huyen = [
  
];
xa = [
  
];

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  
  
  ngOnInit(){
    

    this.registerForm = this.formBuilder.group({
      
      acceptTerms: [true, Validators.requiredTrue],
      hoten: [this.thongtin.ten, Validators.required],
      dienthoai: [this.thongtin.sdt, [Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(8)]],

      tinh: ['', Validators.required],
      huyen: ['', Validators.required],
      xa: ['', Validators.required],

    

  });
}
onBlurtinh(self)
{
 var idtinh = self.registerForm.value.tinh;
var so = parseInt(idtinh);
this.huyen = [...this.huyen1].splice(so*2,2)


}
onBlurhuyen(self)
{

  var idhuyen = self.registerForm.value.huyen;
  var so =2*(parseInt(idhuyen));
  this.xa = [...this.xa1].slice(so,so+2);

}
    get f() { return this.registerForm.controls; }

    onSubmit() {

    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
   this.saveInfo();

    alert('Đặt hàng thành công');
    this.router.navigate(['/home']);
    
}
saveInfo()
{
  this.thongtin.ten =    this.registerForm.value.hoten;
    this.thongtin.sdt =  this.registerForm.value.dienthoai;
    console.log(this.registerForm.value);
    this.thongtin.diachi = this.getxabyid(this.registerForm.value.xa) +","+this.gethuyenbyid( this.registerForm.value.huyen)+","+ this.gettinhbyid(this.registerForm.value.tinh);
    console.log(this.thongtin);
    let Ob: Array<CusInfo> = JSON.parse(localStorage.getItem('thongtinkhach'));
    if(Ob)
    {
      this.userinfos = Ob;
    }
    this.userinfos.push(this.thongtin);
    localStorage.setItem('thongtinkhach',JSON.stringify(this.userinfos));
}

 gettinhbyid(id)
 {
    return this.tinh[parseInt(id)].name;
 }
 gethuyenbyid(id)
 {
    return this.huyen1[parseInt(id)].name;
 }
 getxabyid(id)
 {
   return this.xa1[parseInt(id)].name;
 }
onCance() {
    this.submitted = false;
    this.router.navigate(['/checkout']);
}
xoaform()
{
  this.registerForm.reset();
}
onEditt()
{
  
    
    this.submitted = true;
    if (this.registerForm.invalid) {
      
        return;
    }
    else{
      
    this.saveInfo();
    this.router.navigate(['checkout']);
    console.log('loacl',localStorage.getItem('thongtinkhach'));
    }
    
}
  
  
  

}
