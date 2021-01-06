export class Menu {
    public items = [];

    constructor() {
            this.items =  [
                {
                    id: 1,
                    page: 'lancamentos',
                    title: 'MENU.ACCOUNTING_ENTRY',
                    active: true
                },
                {
                    id: 2,
                    page: 'pessoas',
                    title: 'MENU.PERSON',
                    active: true
                },
                {
                    id: 3,
                    page: '',
                    title: 'MENU.LOGOUT',
                    active: false
                }
            ];
        }
}