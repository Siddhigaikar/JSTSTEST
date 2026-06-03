class Restaurant {
    restaurantName: string;
    location: string;
    rating: number;

    constructor(restaurantName: string, location: string, rating: number) {
        this.restaurantName = restaurantName;
        this.location = location;
        this.rating = rating;
    }

    displayInfo(): void {
        console.log(this.restaurantName);
        console.log(this.location);
        console.log(this.rating);
    }
}

const r = new Restaurant("FOOD", "Mumbai", 4.5);
r.displayInfo();