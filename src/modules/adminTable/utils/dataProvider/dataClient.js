import { dataProvider } from '@utils/dataProvider';
import { endpoints } from '@modules/adminTable/utils/constants/endpoints';

async function read() {
  const data = await dataProvider(endpoints.adminTable);

  return new Promise((resolve) => resolve({ data }));
}

function getPassCode({ tableId }) {
  return dataProvider(
    endpoints.getPassCode({
      tableId,
    })
  ).then((data) => {
    return new Promise((resolve) => resolve({ data }));
  });
}

export { read, getPassCode };
