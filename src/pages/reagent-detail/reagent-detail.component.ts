import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {ReagentDetail, ReagentLabel} from "../../classes/reagent";
import {LabelService} from "../../services/label.service";
import * as _ from "lodash"
import {Location} from "@angular/common";
import { FileUploader } from 'ng2-file-upload';
import {CONFIG} from "../../app/config";


@Component({
  selector: 'app-reagent-detail',
  templateUrl: './reagent-detail.component.html',
  styleUrls: ['./reagent-detail.component.scss']
})
export class ReagentDetailComponent implements OnInit {
  public uploader:FileUploader;
  reagent: ReagentDetail;
  labelSearchText:string='';
  filteredLabels:ReagentLabel[]=[];

  constructor(
    public location: Location,
    private route: ActivatedRoute,
    private labelService: LabelService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params)=>{
        this.freshReagent(params['id']).then(()=>{
          this.uploader=new FileUploader({url: `${CONFIG.apiUrl}/reagent/${this.reagent.id}/picture/add/`});
        });
      });
  }

  freshReagent(reagentId){
    return this.api.get(`/reagent/${reagentId}/detail/`).then(data=>{
      this.reagent=data;
      return;
    });
  }



  removeLabel(id:number){
    this.api.get(`/reagent/${this.reagent.id}/label/remove/${id}/`).then(data=>{
      _.remove(this.reagent.labels,{
        id:id
      });
    });
  }

  addLabel(label){
    this.api.get(`/paper/${this.reagent.id}/label/add/${label.id}/`).then(data=>{
      if (_.isUndefined(_.find(this.reagent.labels,{id:label.id}))) {
        this.reagent.labels.push(label);
      }
      this.labelSearchText='';
      this.filteredLabels=[];
    });
  }

  filterLabels(){
    if (this.labelSearchText == '') {
      this.filteredLabels=[];
      return;
    }
    this.filteredLabels=_.filter(this.labelService.reagentLabels,(label)=>{
      return label.name.indexOf(this.labelSearchText)!=-1
    });
  }

  labelSearchTextChanged(newValue){
    // this.labelSearchText=$event.target.value;
    this.labelSearchText=newValue;
    this.filterLabels();
  }


  removePicture(pictureId){
    if (confirm('确定要删除这张图片吗？')) {
      this.api.get(`/reagent/picture/${pictureId}/remove/`).then(()=>{
        this.freshReagent(this.reagent.id);
      });
    }
  }

}