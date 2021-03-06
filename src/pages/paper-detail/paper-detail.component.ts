import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import {ApiService} from '../../services/api.service';
import {CONST} from '../../app/const';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {PaperService} from '../../services/paper.service';
import {PaperDetail} from '../../classes/paper';


@Component({
  selector: 'app-paper-detail',
  templateUrl: './paper-detail.component.html',
  styleUrls: ['./paper-detail.component.scss']
})
export class PaperDetailComponent implements OnInit {
  public uploader:FileUploader;
  paper:PaperDetail;
  private newPdfContent:string='';

  constructor(
    private apiSvc: ApiService,
    private route: ActivatedRoute,
    private modalSvc: NzModalService,
    public paperSvc: PaperService,
    private messageSvc: NzMessageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params)=>{
        this.paperSvc.getPaperDetail(params['id']).then(data=>{
          this.paper=data;
          this.uploader=new FileUploader({url: `${CONST.apiUrl}/paper/${this.paper.id}/upload/`});
        });
      });
  }

  openModal(contentTpl) {
    this.modalSvc.create({
      nzTitle: '更新PDF中的文字',
      nzContent: contentTpl,
      // nzFooter: tplFooter,
      nzMaskClosable: true,
      nzClosable: true,
      nzOnOk: () => {
        this.updatePdfContent();
      }
    });
  }

  updatePdfContent(){
    this.apiSvc.post(`/paper/${this.paper.id}/updatePDFContent/`, this.newPdfContent).then(() => {
      this.messageSvc.success('上传成功');
    });
  }

  async remove() {
    await this.paperSvc.removePaper(this.paper.id);
    this.messageSvc.success('删除成功');
    await this.router.navigate(['/paper', 'list', 1]);
  }

}
