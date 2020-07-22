import React from 'react';

import { getPassCode } from '@modules/adminTable/utils/dataProvider/dataClient';

function usePassCode({ setIsAlert }) {
  const passCode = React.useRef(null);

  const handleViewPassCode = React.useCallback(
    async (event, rowData) => {
      const { data } = await getPassCode({ tableId: rowData.TableId });

      passCode.current = data?.length ? data[0] : {};
      setIsAlert(true);

      console.log(data);
    },
    [setIsAlert]
  );

  return { handleViewPassCode, passCode };
}

export { usePassCode };
