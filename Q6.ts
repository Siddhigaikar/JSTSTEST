function getOrderInfo<T>(info: T): T {
    return info;
}

console.log(getOrderInfo<number>(101));
console.log(getOrderInfo<string>("Order Delivered"));
console.log(getOrderInfo<boolean>(true));