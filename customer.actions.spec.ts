import * as fromCustomer from './customer.actions';

describe('addCustomer', () => {
  it('should return an action', () => {
    expect(fromCustomer.addCustomer.type).toBe('[Customer] Add Customer');
  });
});
