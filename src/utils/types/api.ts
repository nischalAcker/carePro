export type DocFileApiType = {
  id: string;
  name: string;
  document_category:
    | 'GENDER_PROOF'
    | 'DOB_PROOF'
    | 'NAME_PROOF'
    | 'IDENTITY_PROOF'
    | 'BIRTH_CERTIFICATE'
    | 'MARRIAGE_CERTIFICATE'
    | 'retail_porting_existing_policy'
    | 'medical_report';
  journey: 'endorsement' | 'retail_porting' | 'renewal' | 'post_payment';
  reference_type: 'USER' | 'SYSTEM' | 'VENDOR';
  url: string;
  metadata?: {
    file_name: string;
    proposal_id: string;
    description: string;
    document_category: string;
    member_unique_id?: string;
    medical_reason?: string;
    documents_name?: string;
    central_doc_id?: string;
    central_reference_id?: string;
  };
  central_reference_id?: string;
  central_doc_id?: string;
};
