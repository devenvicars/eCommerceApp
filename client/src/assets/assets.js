import logo from './logo.png';
import add_icon from './add_icon.png';
import order_icon from './order_icon.png';
import upload_area from './upload_area.png';
import parcel_icon from './parcel_icon.svg';
import search_icon from './search_icon.png';
import profile_icon from './profile_icon.png';
import cart_icon from './cart_icon.png';
import menu_icon from './menu_icon.png';
import dropdown_icon from './dropdown_icon.png';
import hero_img from './hero_img.png';
import p_img1 from './p_img1.png';
import p_img2_1 from './p_img2_1.png';
import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.png'
import support_img from './support_img.png'

export const assets = {
    logo,
    add_icon,
    order_icon,
    upload_area,
    parcel_icon,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
    hero_img,
    exchange_icon,
    quality_icon,
    support_img
}

export const products = [
    {
        _id: "00001",
        name: "Women's Flowery Top",
        description: "A light-weight flowery top",
        price: 100,
        image: [p_img1],
        category: "Women's",
        subCategory: "Tops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "00002",
        name: "Men's Polo Shirt",
        description: "A two tone polo shirt",
        price: 125,
        image: [p_img2_1],
        category: "Men's",
        subCategory: "Tops",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345428,
        bestseller: false
    },
]

