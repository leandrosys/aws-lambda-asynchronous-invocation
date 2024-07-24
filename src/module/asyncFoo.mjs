const someAsyncFunc = async (event) => {
  //const parsedJson = JSON.parse(event);
  if (event.onSuccess) {
    return {
      statusCode: 202,
      body: JSON.stringify({
        event,
      }),
    };
  }

  if (!event.onSuccess) {
    throw new Error('I am dead');
  }
};

export default someAsyncFunc;
