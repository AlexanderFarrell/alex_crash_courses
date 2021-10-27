enum ProductType {
    Game = 0,
    App = 10,
    Service = 20,
}

class Product {
    public Name: string;
    public Url: string;
    public IconHi: string;
    public IconLow: string;
    public ShortDesc: string;
    public LongDesc: string;
    public ProductType: ProductType;

    constructor(Name: string,
                Url: string,
                IconHi: string,
                IconLow: string,
                ShortDesc: string,
                LongDesc: string,
                ProductType: ProductType) {
        this.Name = Name;
        this.Url = Url;
        this.IconHi = IconHi;
        this.IconLow = IconLow;
        this.ShortDesc = ShortDesc;
        this.LongDesc = LongDesc;
        this.ProductType = ProductType;
    }

    public Create(name: string,
                  url: string,
                  icon: string,
                  descShort: string,
                  descLong: string,
                  productType: ProductType): Product {
        return new Product(
            name,
            url,
            `images/marbles/hi/${icon}`,
            `images/marbles/low/${icon}`,
            descShort,
            descLong,
            productType
        );
    };
}

function P(name: string,
           url: string,
           icon: string,
           descShort: string,
           descLong: string,
           productType: ProductType): Product {
    return new Product(
        name,
        url,
        `images/marbles/hi/${icon}`,
        `images/marbles/low/${icon}`,
        descShort,
        descLong,
        productType
    );
}

export const products: Product[] = [
    P(
        'Buried Peace',
        '/games/BuriedPeace',
        'b.png',
        'Dark SciFi Dungeon Crawler',
        'Rebuild the remains of human civilization deep underground and take back Earth from alien domination.',
        ProductType.Game
    ),
    P(
        'Void Money',
        '/games/VoidMoney',
        'c.png',
        'Business Simulator',
        'Void Money is a business simulator which lets players buy, sell, start and run simulated companies in a simulated economy.',
        ProductType.Game
    ),
    P(
        'Tritonic Ocean',
        '/games/Tritonic',
        'Some.png',
        'Ocean FPS',
        'Combat forces of the underworld deep in the oceans with powerful watercraft.',
        ProductType.Game
    ),
    P(
        'Programming Courses',
        '/courses',
        'courses.png',
        'One-on-One Programming Courses',
        'Offering one-on-one programming courses for $25 an hour. Conquer several languages. Build apps, games and websites.',
        ProductType.Service
    ),
    P(
        'Art',
        '/'
    )
]
