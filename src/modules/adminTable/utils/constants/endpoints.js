const endpoints = {
  adminTable:
    'https://xortkgd63b.execute-api.us-east-1.amazonaws.com/Prod/table/123',
  getPassCode({ tableId }) {
    return `https://xortkgd63b.execute-api.us-east-1.amazonaws.com/Prod/table-auth/123?TableId=${tableId}`;
  },
};

export { endpoints };
