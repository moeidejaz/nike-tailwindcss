import { thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, bigShoe1, bigShoe2, bigShoe3, shoe4, shoe5, shoe6, shoe7 } from "../assets/images"
import { truckFast, shieldTick, support } from "../assets/icons"


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#aboutUs", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contactUs", label: "Contact Us" }
]

export const stats = [
    { label: "Brands", value: "1k+" },
    { label: "Shops", value: "500+" },
    { label: "Customers", value: "250k+" }
]

export const shoes = [
    { thumbnail: thumbnailShoe1, bigShoe: bigShoe1 },
    { thumbnail: thumbnailShoe2, bigShoe: bigShoe2 },
    { thumbnail: thumbnailShoe3, bigShoe: bigShoe3 }
]

export const products = [
    { image: shoe4, rating: "4.5", title: "Nike Air Jordan-01", price: "$200.20" },
    { image: shoe5, rating: "4.5", title: "Nike Air Jordan-10", price: "$210.20" },
    { image: shoe6, rating: "4.5", title: "Nike Air Jordan-100", price: "$220.20" },
    { image: shoe7, rating: "4.5", title: "Nike Air Jordan-001", price: "$230.20" }
]

export const services = [
    { image: truckFast, title: "Free shipping", description: "Enjoy seamless shopping with our complimentary shipping service." },
    { image: shieldTick, title: "Secure Payment", description: "Experience worry-free transactions with our secure payment options." },
    { image: support, title: "Love to help you", description: "Our dedicated team is here to assist you every step of the way." }
]