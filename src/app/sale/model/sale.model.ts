export class SaleModel {
  SaleLines: SaleLines[] = [];
  TotalValue: number = 0;
}

export class SaleLines {
  IdProduct?: string = '';
  IdCustomer: string = '';
  Quantity: number = 0;
  UnitValue: number = 0;
  TotalValueForLine: number = 0;
}
