export class PaginationBlock {
  constructor(public currentPage: number, public pageAmount: number) {
    this.pageAmount = pageAmount;
    this.currentPage = currentPage;
  }
}