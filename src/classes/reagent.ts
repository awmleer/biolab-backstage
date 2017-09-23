import {html, Label, url} from "./types";

export class ReagentEntry {
  id: number;
  chineseName: string='';
  englishName: string='';
  alias: string='';
  labels: ReagentLabel[];
}

export class ReagentBrief extends ReagentEntry {
  molecularFormula: string='';
  molecularFormulaParsed: html;
  molecularWeight: string='';
  dangerous: null | string='';
}

export class ReagentDetail extends ReagentBrief {
  pictures: ReagentPicture[]=[];
  description: string='';
}

export interface ReagentPicture {
  id: number;
  description: string;
  url: url;
}

export interface ReagentLabel extends Label{}

export interface ReagentLabelTreeNode extends ReagentLabel {
  children: ReagentLabelTreeNode[];
}
