import restProvider from "ra-data-simple-rest";
const provider = (apiUrl, httpClient) => {
  const dataProvider = restProvider(apiUrl, httpClient);

  return {
    ...dataProvider,
    // patch https://github.com/marmelab/react-admin/blob/master/packages/ra-data-simple-rest/src/index.ts#L111
    update: (resource, params) => {
      // apiAction is a hack to be able to PUT/PATCH to /admin/v1//users/:id/verify for example
      const EXTRACT_BEFORE_REQUEST = ["apiAction"];

      const { data } = params;
      const { apiAction } = data;
      const baseUrl = `${apiUrl}/${resource}/${params.id}`;
      const url = apiAction ? `${baseUrl}/${apiAction}` : baseUrl;

      const body = Object.keys(data).reduce((obj, key) => {
        if (!EXTRACT_BEFORE_REQUEST.includes(key)) {
          return {
            ...obj,
            [key]: data[key],
          };
        }
        return {...obj };
      }, {});
      return httpClient(url, {
        method: "PATCH", // should be able to do PUT as well
        body: JSON.stringify(body),
      }).then(({ json }) => ({ data: json }));
    },
  };
};

export default provider;
