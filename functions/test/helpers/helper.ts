import {ProductRepository} from "../../src/products/product.repository";
import {IMock, Mock} from "moq.ts";
import {Product} from "../../src/models/product";
import {StockRepository} from "../../src/stock/stock.repository";
import {Stock} from "../../src/models/stock";

export class TestHelper {

    getProductRepositoryMock(): IMock<ProductRepository> {
        return new Mock<ProductRepository>()
            .setup(repo => repo.create(this.getProduct1()))
            .returns(Promise.resolve(this.getProduct1()))
            .setup(repo => repo.updateProduct(this.getProduct2()))
            .returns(Promise.resolve(this.getProduct2()));
    }

    getStockRepositoryMock(): IMock<StockRepository> {
        return new Mock<StockRepository>()
            .setup(stockRepo => stockRepo.create(this.getProduct1(), 5))
            .returns(Promise.resolve(this.getStock1()))
    }

    getProduct1(): Product {
        return this.product1;
    }
    getProduct2(): Product {
        return this.product2;
    }
    getStock1(): Stock {
        return this.stock1;
    }

    product1: Product = {
        name: 'Product 1',
        id: 'p1',
        price: 22,
        timesPurchased: 5
    };

    product2: Product = {
        name: 'Product 2',
        id: 'p2',
        price: 22,
        timesPurchased: 5
    };
    stock1: Stock = {
        stockCount: 1,
        product: this.getProduct1()
    };
}
