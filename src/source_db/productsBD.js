export const productsCategoriesBD = [
	{
		id: 0,
        name: "Todos",
		category: "todos",
	},

	{
		id: 1,
        name: "Mundo abierto",
		category: "mundoabierto",
	},

	{
		id: 2,
        name: "Plataformas",
		category: "plataformas",
	},

	{
		id: 3,
        name: "Deportes",
		category: "deportes",
	},

	{
		id: 4,
        name: "FPS",
		category: "fps",
	},
	
];

export const productsBD = [
	{
		id: 1,
        productImg: "img_shop_1.jpg",
        category: productsCategoriesBD[1].category,
		categoryName: productsCategoriesBD[1].name,
		name: "The Legend of Zelda: Breath of the Wild 2",
		priceNormal: 35.000,
        priceDiscount: null,
		textOffert: null,
        featured: false,
	},

	{
		id: 2,
        productImg: "img_shop_2.jpg",
        category: productsCategoriesBD[1].category,
		categoryName: productsCategoriesBD[1].name,
		name: "The Last of Us Parte II",
		priceNormal: 143.000,
        priceDiscount: null,
		textOffert: null,
        featured: false,
	},

	{
		id: 3,
        productImg: "img_shop_3.jpg",
        category: productsCategoriesBD[1].category,
		categoryName: productsCategoriesBD[1].name,
		name: "Fallout 4",
		priceNormal: 86.000,
        priceDiscount: null,
		textOffert: null,
        featured: false,
	},

	{
		id: 4,
        productImg: "img_shop_4.jpg",
        category: productsCategoriesBD[1].category,
		categoryName: productsCategoriesBD[1].name,
		name: "The Witcher 3: Wild Hunt",
		priceNormal: 399.000,
        priceDiscount: 379.180,
		textOffert: "10% OFF",
        featured: true,
	},

	{
		id: 5,
        productImg: "img_shop_5.jpg",
        category: productsCategoriesBD[1].category,
		categoryName: productsCategoriesBD[1].name,
		name: "Grand Theft Auto V",
		priceNormal: 138.500,
        priceDiscount: null,
		textOffert: null,
        featured: false,
	},
	
	{
		id: 6,
        productImg: "img_shop_6.jpg",
        category: productsCategoriesBD[2].category,
		categoryName: productsCategoriesBD[2].name,
		name: "Psychonauts 2",
		priceNormal: 110.000,
        priceDiscount: 94.270,
		textOffert: "15% OFF",
        featured: false,
	},

	{
		id: 7,
        productImg: "img_shop_7.jpg",
        category: productsCategoriesBD[2].category,
		categoryName: productsCategoriesBD[2].name,
		name: "Hollow Knight",
		priceNormal: 381.934,
        priceDiscount: null,
		textOffert: null,
        featured: true,
	},

	{
		id: 8,
        productImg: "img_shop_8.jpg",
        category: productsCategoriesBD[2].category,
		categoryName: productsCategoriesBD[2].name,
		name: "9 Years of Shadows",
		priceNormal: 742.828,
        priceDiscount: null,
		textOffert: null,
        featured: false,
	},

	{
		id: 9,
        productImg: "img_shop_9.jpg",
        category: productsCategoriesBD[3].category,
		categoryName: productsCategoriesBD[3].name,
		name: "EA Sports FIFA 23",
		priceNormal: 8.550,
        priceDiscount: 6.562,
		textOffert: "5% OFF",
        featured: true,
	},

	{
		id: 10,
        productImg: "img_shop_10.jpg",
        category: productsCategoriesBD[3].category,
		categoryName: productsCategoriesBD[3].name,
		name: "Virtua Tennis 4",
		priceNormal: 15.790,
        priceDiscount: null,
		textOffert: null,
        featured: false,
	},

	{
		id: 11,
        productImg: "img_shop_11.jpg",
        category: productsCategoriesBD[4].category,
		categoryName: productsCategoriesBD[4].name,
		name: "DOOM Eternal",
		priceNormal: 7.200,
        priceDiscount: 4.069,
		textOffert: "20% OFF",
        featured: false,
	},


	{
		id: 12,
        productImg: "img_shop_12.jpg",
        category: productsCategoriesBD[4].category,
		categoryName: productsCategoriesBD[4].name,
		name: "Wolfenstein: The New Order",
		priceNormal: 18.325,
        priceDiscount: null,
		textOffert: null,
        featured: true,
	},

	{
		id: 13,
        productImg: "img_shop_13.jpg",
        category: productsCategoriesBD[4].category,
		categoryName: productsCategoriesBD[4].name,
		name: "Max Payne 3",
		priceNormal: 37.610,
        priceDiscount: null,
		textOffert: null,
        featured: false,
	},

	{
		id: 14,
        productImg: "img_shop_14.jpg",
        category: productsCategoriesBD[4].category,
		categoryName: productsCategoriesBD[4].name,
		name: "Half-Life 2",
		priceNormal: 18.500,
        priceDiscount: 11.738,
		textOffert: "15% OFF",
        featured: true,
	},

	{
		id: 15,
        productImg: "img_shop_15.jpg",
        category: productsCategoriesBD[4].category,
		categoryName: productsCategoriesBD[4].name,
		name: "Call of Duty: Warzone 2.0",
		priceNormal: 25.500,
        priceDiscount: null,
		textOffert: null,
        featured: false,
	},

	{
		id: 16,
        productImg: "img_shop_16.jpg",
        category: productsCategoriesBD[4].category,
		categoryName: productsCategoriesBD[4].name,
		name: "Left 4 Dead 2",
		priceNormal: 192.600,
        priceDiscount: null,
		textOffert: null,
        featured: true,
	},
];


/*
export const CategoriesProducts = productsBD.filter((item) => {
	return item.category
});

console.log(CategoriesProducts);
console.log(productsBD); */
