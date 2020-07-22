import { usePaginatedQuery } from 'react-query';

import * as listItemsClient from '@modules/adminTable/utils/dataProvider/dataClient';

import { reactQueryConstants } from '@modules/adminTable/utils/constants/reactQuery';

export function readListItems(key, queryVariables) {
  return listItemsClient.read(queryVariables).then(({ data }) => {
    // parsing data if required

    return { listItems: data };
  });
}

// paginatedListItems
function usePaginatedListItems({ options, variables } = {}) {
  const param = {
    queryKey: reactQueryConstants.queryKey,
    queryFn: (key) => {
      return readListItems(key, variables);
    },
    ...options,
  };

  const {
    latestData,
    // resolvedData,
    status,
    error,
    isFetching,
    refetch,
  } = usePaginatedQuery(param);
  const listItems = latestData?.listItems ?? [];

  return { listItems, status, error, refetch, isFetching };
}

export { usePaginatedListItems };
