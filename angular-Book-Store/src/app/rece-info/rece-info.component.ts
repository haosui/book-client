import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig} from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-rece-info',
  templateUrl: './rece-info.component.html',
  styleUrls: [ './rece-info.component.css']
})
export class ReceInfoComponent implements OnInit {
  registerForm: FormGroup;
  formdisplayy:boolean = true;
  infodisplay:boolean = !this.formdisplayy;
  submitted = false;
  thongtin = {
    ten: "",
    sdt: "",
    diachi: ""
  };

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
  { id: '0', name: 'quan 1 cua tinh 1' },
  { id: '1', name: 'thinh 2 cua tinh 1' },
];
xa = [
  { id: '0', name: ' xa 1 quan 1 cua tinh 1' },
  { id: '1', name: 'xa 2 quan 1 cua tinh 1' },
];

  constructor(private formBuilder: FormBuilder) {}
  
  
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      
      acceptTerms: [false, Validators.requiredTrue],
      hoten: ['', Validators.required],
      dienthoai: ['', [Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(8)]],

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
console.log(this.huyen1);

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
    this.thongtin.ten =    this.registerForm.value.hoten;
    this.thongtin.sdt =  this.registerForm.value.dienthoai;
    console.log(this.registerForm.value);
    this.thongtin.diachi = this.registerForm.value.xa +", "+this.gethuyenbyid( this.registerForm.value.huyen)+", "+ this.gettinhbyid(this.registerForm.value.tinh)+".";
    console.log(this.thongtin);


}
 gettinhbyid(id)
 {
    return this.tinh[parseInt(id)].name;
 }
 gethuyenbyid(id)
 {
    return this.huyen1[parseInt(id)].name;
 }
onCance() {
    this.submitted = false;
    this.registerForm.reset();
}
}
