import { Component, OnInit } from '@angular/core';
import { AccountOperationsService } from 'src/app/services/account-operations.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-operation',
  templateUrl: './account-operation.component.html',
  styleUrls: ['./account-operation.component.scss']
})
export class AccountOperationComponent implements OnInit {
  accountNumber!: number;
  form!: FormGroup;
  submitted: boolean = false;
  data: Object | undefined;
  accounts:any;

  constructor(private accountOperationsService: AccountOperationsService, private formBuilder: FormBuilder) { }

  createForm() {
    this.form = this.formBuilder.group({
      accountNumber: [''],
    })
  }

  ngOnInit(): void {
  }

  findAccount(){
    this.submitted=true;
    console.log('the account number is - ',this.accountNumber);

    this.accountOperationsService.getData(this.accountNumber).subscribe(res => {
      console.log('the account transactions - ',res);
      this.accounts = res;
    })

  }

}
