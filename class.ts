// class 

abstract class Phone {
    public brand: string;
    protected readonly model: number;
    private make: string = 'china'

    public spec() {
        console.log(`
            Phone brand :${this.brand} ,
            PhoneMOdel :${this.model} ,
            Make by :${this.make}
            `);
    }

    constructor(brand: string, model: number, make?: string) {
        this.brand = brand;
        this.model = model;
        this.make = make ?? this.make;
    }

    public getMake() {
        return this.make;
    }

    public setBrand(brand: string) {
        this.brand = brand
    }

}

interface Detail {
    detail: () => void;
}

class Iphone extends Phone implements Detail {
    price: string | number;
    constructor(brand: string, model: number, price: string | number, make?: string,) {
        super(brand, model, make);
        this.price = price;
    }
    logBrand() {
        console.log(this.model);
    }
    detail() {
        console.log(` Phone brand :${this.brand} ,PhoneModel :${this.model} `);
    }
}
const iPhone_13 = new Iphone('Apple', 13, "700$")
iPhone_13.setBrand('samsumg')
iPhone_13.detail();
iPhone_13.spec?.();

console.log(iPhone_13);

type IPhone = typeof iPhone_13
const myPhone: IPhone = new Iphone('mac', 14, '1000$', 'USA');
console.log(myPhone);

// car => get | set
type Service<service> = {
    service: service
}

abstract class Vehicle {
    private services: Service<{ name: string, type: string }>[] = [];

    setService(service: Service<{ name: string, type: string }>): void {
        this.services.push(service)
    }

    getServices(): Service<{ name: string, type: string }>[] {
        return this.services;
    }

    get _services(): Service<{ name: string, type: string }>[] {
        return this.services
    }

    set _services(service: Service<{ name: string, type: string }>) {
        this.services.push(service)
    }
}

class Car extends Vehicle {

}

let myCar1 = new Car();
myCar1.setService({ service: { name: 'Oil Change', type: 'Maintenance' } });

const myService: Service<{ name: string, type: string }> = {
    service: {
        name: 'AirCon',
        type: 'Update'
    }
}
myCar1.setService(myService)
myCar1._services = myService

console.log(myCar1.getServices());

myCar1.getServices().forEach(service => {
    console.log(service?.service.name);
});

console.log(myCar1._services);

