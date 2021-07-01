import { SampleModelService } from './../../services/sample-model.service';
import { Component, OnInit } from '@angular/core';
//import { SampleModelService } from 'src/app/services/sample-model.service';

@Component({
  selector: 'app-sample-model',
  templateUrl: './sample-model.component.html',
  styleUrls: ['./sample-model.component.scss']
})
export class SampleModelComponent implements OnInit {
  models:any;

  constructor(private sampleModelService: SampleModelService) { }

  ngOnInit(): void {
    this.getSampleModelData();
  }

  getSampleModelData () {
    this.sampleModelService.getData().subscribe(res=>{
      console.log("response - ",res);
      this.models = res;
    })
  };

}
