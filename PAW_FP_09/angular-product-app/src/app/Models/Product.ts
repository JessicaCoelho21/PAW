export class Product {
    _id: string;
    name: string;
    description: string;
    quantity: number;

    constructor(name:string, description:string, quantity:number){
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}