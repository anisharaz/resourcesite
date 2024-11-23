export type module_url = [
  {
    doc_type: doc_type;
    doc_no: number;
    url: string;
  },
];

export enum doc_type {
  "MAIN_MODULE",
  "SUB_MODULE",
}
