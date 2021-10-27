export abstract class Product {
    protected constructor() {
        Products.Add(this);
    }
    public abstract GetName(): string;
    public abstract GetUrl(): string;
    protected abstract GetIconLocalUrl(): string;
    public GetIcon(): string {
        return `/images/marbles/hi/${this.GetIconLocalUrl()}`;
    }
    public GetIconLow(): string {
        return `/images/marbles/low/${this.GetIconLocalUrl()}`;
    }
    public abstract GetShortDesc(): string;
    public abstract GetLongDesc(): string;
}

class ProductsApp {
    private _products: Map<string, Product> = new Map<string, Product>();

    Add(product: Product) {
        this._products[product.GetName()] = product;
    }

    public GetProduct(name: string): Product {
        return this._products[name];
    }

    public GetProducts(): Product[] {
        let retVal = [];
        for (const [name, product] of this._products.entries()) {
            retVal.push(product);
        }
        return retVal;
    }
}

export let Products = new ProductsApp();