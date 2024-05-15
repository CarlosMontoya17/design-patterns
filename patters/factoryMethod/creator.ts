import { ISale } from "./product"

// Creator
export default abstract class SaleFactory {
    public abstract getSale(): ISale;
}