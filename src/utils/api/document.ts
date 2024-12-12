export const uploadDocumentApi = ({
  file,
  proposal_id,
  reference_id,
  type,
  journey,
  document_type,
  description,
}: {
  file: File;
  type: string;
  proposal_id: string;
  reference_id: string;
  journey: string;
  document_type: string;
  description: string;
}) => {
  const myHeaders = new Headers();
  myHeaders.append('accept', 'application/json');
  // myHeaders.append('Content-Type', 'multipart/form-data');
  const formdata = new FormData();
  const document_list: any = [];
  if (file) {
    document_list.push({
      document_type: document_type,
      identifier_number: proposal_id,
      file_name: file.name,
      allow_duplicate: true,
      metadata: {
        file_name: file.name,
        proposal_id: proposal_id,
        description: description,
        document_category: type,
        member_unique_id: reference_id,
      },
    });
    formdata.append('documents', file, file.name);

    const requestPayload2 = {
      lob: 'health',
      attribute: 'medical_documents',
      journey: journey,
      entity_name: 'proposal',
      entity_id: proposal_id,
      modified_by: reference_id,
      document_type: document_type,
      document_list,
      associate_entity_to_document: true,
    };
    console.log('uploading document', requestPayload2);
    formdata.append(
      'documentGroupCreateRequest',
      new Blob([JSON.stringify(requestPayload2)], {
        type: 'application/json',
      }),
    );
    // formdata.append('documentGroupCreateRequest', JSON.stringify(requestPayload));

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
    };

    let url = `https://health-documentation-service-uat.internal.ackodev.com/api/v1/documentation/upload-many`;
    console.log('url docs', url);
    return fetch(url, requestOptions);
  }
};
