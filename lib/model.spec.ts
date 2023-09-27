import { createModel } from './model';

describe('Model example', () => {
  const createMockModel = () => ({
    user: {
      name: '🐼',
      email: '🐼@gmail.com',
      age: 23
    },
    hello: 'world'
  });

  it('Should be created with data', () => {
    const mockModel = createMockModel();
    const data = createModel(mockModel);
    expect(data.user).toHaveProperty('name', mockModel.user.name);
  });

  //   it('Should notify when something is changes', async () => {
  //     const { data, subscribe, unsubcribe } = createSimpleModel(stub());

  //     const mockFn = await new Promise<Function>(resolve => {
  //       const observer = jest.fn(() => {
  //         expect(data.hello).toBe('Hummus');
  //         resolve(observer);
  //       });

  //       subscribe(observer);

  //       data.hello = 'Hummus';
  //     });

  //     unsubcribe(mockFn);
  //     expect(mockFn).toHaveBeenCalledTimes(1);
  //   });

  //   it('Should unsubscribe', () => {
  //     const { data, subscribe, unsubcribe } = createSimpleModel(stub());
  //     const spy1 = jest.fn(() => void 0);
  //     const spy2 = jest.fn(() => void 0);

  //     subscribe(spy1);
  //     subscribe(spy2);

  //     data.hello = 'kuku';

  //     unsubcribe(spy2);

  //     data.hello = 'kuku';

  //     expect(spy1).toHaveBeenCalledTimes(2);
  //     expect(spy2).toHaveBeenCalledTimes(1);

  //     unsubcribe(spy1);
  //     unsubcribe(spy2);
  //   });
});
