var ob: Array<CartBook> = JSON.parse(localStorage.getItem('da'));

export interface CartBook {
    Id: number;
    Title: string;
    Price: number;
    PathImage: string;
    numberOrder: number;
}
