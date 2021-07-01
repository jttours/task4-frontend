import { Component, OnInit } from '@angular/core';
import { AccountOperationsService } from 'src/app/services/account-operations.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-sample-model',
  templateUrl: './add-sample-model.component.html',
  styleUrls: ['./add-sample-model.component.scss']
})
export class AddSampleModelComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;
  data: Object | undefined;
  constructor(private accountOperationsService: AccountOperationsService, private formBuilder: FormBuilder) { }


createForm() {
  this.form = this.formBuilder.group({
    accountNumber: [''],
    amount: [''],
    transactionType: [''],
    transactionDate: [''],
    interestRate: [''],
    numberOfPayments: [''],
  })
}

  ngOnInit(): void {
    this.createForm();
  }

  insertData(){
    this.submitted=true;

    this.accountOperationsService.insertData(this.form.value).subscribe(res => {
      this.data = res;
      alert("acount transaction added");
      this.form.reset();
    })

  }

}
