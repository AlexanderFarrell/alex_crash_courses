import {Product} from "../../apps/ProductsApp";

class BuriedPeace extends Product {
    protected GetIconLocalUrl(): string {
        return "b.png";
    }

    GetLongDesc(): string {
        return "Rebuild the remains of human civilization deep underground and take back Earth from alien domination.";
    }

    GetName(): string {
        return "Buried Peace";
    }

    GetShortDesc(): string {
        return "Dark SciFi Dungeon Crawler";
    }

    GetUrl(): string {
        return "/games/BuriedPeace";
    }
}