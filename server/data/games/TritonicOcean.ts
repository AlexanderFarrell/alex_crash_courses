import {Product} from "../../apps/ProductsApp";

class TritonicOcean extends Product {
    protected GetIconLocalUrl(): string {
        return "Some.png";
    }

    GetLongDesc(): string {
        return "Combat forces of the underworld deep in the oceans with powerful watercraft.";
    }

    GetName(): string {
        return "Tritonic Ocean";
    }

    GetShortDesc(): string {
        return "Ocean FPS";
    }

    GetUrl(): string {
        return "/games/Tritonic";
    }
}