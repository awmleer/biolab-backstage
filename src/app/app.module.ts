import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PapersComponent } from '../pages/papers/papers.component';
import { LabelsComponent } from '../pages/labels/labels.component';
import { PaperDetailComponent } from '../pages/paper-detail/paper-detail.component';
import {LabelService} from '../services/label.service';
import {TreeModule} from 'angular-tree-component';
import {Router} from './app.router';

import { PaperEditComponent } from '../pages/paper-edit/paper-edit.component';
import {FileUploadModule} from 'ng2-file-upload';
import { ReagentsComponent } from '../pages/reagents/reagents.component';
import {ApiService} from '../services/api.service';
import { ReagentDetailComponent } from '../pages/reagent-detail/reagent-detail.component';
import { ReagentEditComponent } from '../pages/reagent-edit/reagent-edit.component';
import { LabelParentPipe } from '../pipes/label-parent.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { LabelManagementComponent } from '../components/label-management/label-management.component';
import {PaperService} from '../services/paper.service';
import {ReagentService} from '../services/reagent.service';
import { InstrumentEditComponent } from '../pages/instrument-edit/instrument-edit.component';
import {QuillModule} from 'ngx-quill';
import {BiolabErrorHandler} from './error-handler';
import {InstrumentService} from '../services/instrument.service';
import {InstrumentsComponent} from '../pages/instruments/instruments.component';
import {InstrumentDetailComponent} from '../pages/instrument-detail/instrument-detail.component';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html.pipe';
import { NoticesComponent } from '../pages/notice/notices/notices.component';
import {NoticeService} from '../services/notice.service';
import {NoticeEditComponent} from '../pages/notice/notice-edit/notice-edit.component';
import {NoticeDetailComponent} from '../pages/notice/notice-detail/notice-detail.component';
import { BbsListComponent } from '../pages/bbs/bbs-list/bbs-list.component';
import { BbsGroupComponent } from '../pages/bbs/bbs-group/bbs-group.component';
import {BbsService} from '../services/bbs.service';
import {AccountService} from '../services/account.service';
import { LoginComponent } from '../pages/login/login.component';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {LabReserveEditComponent} from '../pages/lab-reserve-edit/lab-reserve-edit.component';
import {LabReserveComponent} from '../pages/lab-reserve/lab-reserve.component';
import {LabReserveDetailComponent} from '../pages/lab-reserve-detail/lab-reserve-detail.component';
import {LabsService} from '../services/labs.service';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {CoursewareService} from '../services/courseware.service';
import { CoursewareListComponent } from '../pages/courseware/courseware-list/courseware-list.component';
import { UserManagementComponent } from '../pages/user/user-management/user-management.component';
import { UserAddBulkComponent } from '../pages/user/user-add-bulk/user-add-bulk.component';
import { UserEditComponent } from '../pages/user/user-edit/user-edit.component';
import {BbsDetailComponent} from '../pages/bbs/bbs-detail/bbs-detail.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    PapersComponent,
    LabelsComponent,
    PaperDetailComponent,
    PaperEditComponent,
    ReagentsComponent,
    ReagentDetailComponent,
    ReagentEditComponent,
    LabelParentPipe,
    LabelManagementComponent,
    InstrumentsComponent,
    InstrumentDetailComponent,
    InstrumentEditComponent,
    LabReserveEditComponent,
    LabReserveComponent,
    LabReserveDetailComponent,
    SanitizeHtmlPipe,
    NoticesComponent,
    NoticeEditComponent,
    NoticeDetailComponent,
    BbsListComponent,
    BbsGroupComponent,
    BbsDetailComponent,
    LoginComponent,
    UserProfileComponent,
    CoursewareListComponent,
    UserManagementComponent,
    UserAddBulkComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OverlayModule,
    BrowserAnimationsModule,
    TreeModule,
    FileUploadModule,
    NgZorroAntdModule.forRoot(),
    Router,
    QuillModule,
  ],
  providers: [
    ApiService,
    LabelService,
    PaperService,
    ReagentService,
    InstrumentService,
    NoticeService,
    BbsService,
    AccountService,
    LabsService,
    CoursewareService,
    {provide: ErrorHandler, useClass: BiolabErrorHandler},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
