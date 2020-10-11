import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig} from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  thongtin = {
    ten: "",
    sdt: "",
    diachi: ""
  };

  strinbuton: string = " Sửa";
 
  tinh = [
  { id: '0', name: 'tinh 1' },
  { id: '1', name: 'thinh 2' },
  
  ];
huyen1 = [
  { id: '0', name: 'quan 1 cua tinh 1' },
  { id: '1', name: 'thinh 2 cua tinh 1' },
  
  { id: '2', name: 'quan 1 cua tinh 2' },
  { id: '3', name: 'thinh 2 cua tinh 2' },
];
xa1 = [
  { id: '0', name: ' xa 1 quan 1 cua tinh 1' },
  { id: '1', name: 'xa 2 quan 1 cua tinh 1' },


  { id: '2', name: ' xa 1 quan 2 cua tinh 1' },
  { id: '3', name: 'xa 2 quan 2 cua tinh 1' },

  { id: '4', name: ' xa 1 quan 1 cua tinh 2' },
  { id: '5', name: 'xa 2 quan 1 cua tinh 2' },

  { id: '6', name: ' xa 1 quan 2 cua tinh 2' },
  { id: '7', name: 'xa 2 quan 2 cua tinh 2' },
];
huyen = [
  
];
xa = [
  
];

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  
  
  ngOnInit(){
    this.loadInfo();
    var splitted = this.thongtin.diachi.split(",", 3);
    console.log(splitted);

    var tinhid = this.tinh.find(f => f.name === splitted[2]);
    var huyenid = this.huyen1.find(f => f.name === splitted[1]);
    var xaid = this.xa1.find(f => f.name === splitted[0]);
    this.huyen = [...this.huyen1].splice(parseInt(tinhid.id)*2,2);
    this.xa = [...this.xa1].splice(parseInt(huyenid.id)*2,2);


    this.registerForm = this.formBuilder.group({
      
      acceptTerms: [true, Validators.requiredTrue],
      hoten: [this.thongtin.ten, Validators.required],
      dienthoai: [this.thongtin.sdt, [Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(8)]],

      tinh: [tinhid.id, Validators.required],
      huyen: [huyenid.id, Validators.required],
      xa: [xaid.id, Validators.required],

    

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
    localStorage.setItem('infoUser',JSON.stringify(this.thongtin));

}
loadInfo()
{
  this.thongtin = JSON.parse( localStorage.getItem('infoUser'));
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
    this.registerForm.reset();
}
onEditt()
{
  if(this.formdisplayy)
  {
    
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    else{
      this.strinbuton = 'Sửa';
    this.saveInfo();
    this.formdisplayy = !this.formdisplayy;
    }
    
  }
  else{
    this.loadInfo(); 
    this.strinbuton = 'Lưu';
    this.formdisplayy = !this.formdisplayy;

   
   
  }
  
  
}
}
