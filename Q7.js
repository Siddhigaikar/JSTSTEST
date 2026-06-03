"use strict";
class Restaurant {
    restaurantName;
    location;
    rating;
    constructor(restaurantName, location, rating) {
        this.restaurantName = restaurantName;
        this.location = location;
        this.rating = rating;
    }
    displayInfo() {
        console.log(this.restaurantName);
        console.log(this.location);
        console.log(this.rating);
    }
}
const r = new Restaurant("FOOD", "Mumbai", 4.5);
r.displayInfo();
