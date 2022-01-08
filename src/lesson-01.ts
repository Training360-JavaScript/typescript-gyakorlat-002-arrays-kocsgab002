export default class calculator {
    // A változókat az osztályon belül így hozhatod létre.
    active: boolean = false;

    // Hozd létre a következő változókat a megfelelő típusannotációval.

    /** @type {Array} points - számok tömbje, 1-től 10-ig egyesével. */
    points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /** 
     * A tömb minden eleme legyen egy objektum, amely egy felhasználót reprezentál.
     * Kötelező elemek: name<string>, email<string>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} users - minden elem egy felhasználó.
     */
    users: Array<{ name: string, email: string }> = [
        {
            name: "Fdg Gdg",
            email: "fgfgf@gmail.com"
        },
        {
            name: "Gtrt Gdg",
            email: "jkjjhkj@gmail.com"
        }
    ];

    /** 
     * A tömb minden eleme legyen egy objektum, amely egy terméket reprezentál.
     * Kötelező elemek: name<string>, price<number>, stock<number>.
     * Opcionális elemek: active<boolean>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} products - minden elem egy termék.
     */
    products: Array<{ name: string, price: number, stock: number, active?: boolean }> = [
        {
            name: "Product1",
            price: 1000,
            stock: 100
        },
        {
            name: "Product2",
            price: 2000,
            stock: 400,
            active: true
        },
        {
            name: "Product3",
            price: 5000,
            stock: 0,
            active: false
        },
    ]

    /** 
     * Inicializálj egy tuple típust, azaz adj neki értéket is.
     * @type {Tuple} role - number, string, boolean. 
     */
    role: [number, string, boolean] = [3, "three", true];

}
