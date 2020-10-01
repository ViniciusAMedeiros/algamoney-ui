export class Paginacao{

    private page:number = 0
    private size: number = 5;
    private total = 0; 

    getPage(): number{
        return this.page;
    }

    setPage(page: number){
        this.page = page;
    }

    getSize(): number{
        return this.size;
    }

    setSize(size: number){
        this.size = size;
    }

    getTotal(): number{
        return this.total;
    }

    setTotal(total: number){
        this.total = total;
    }

}