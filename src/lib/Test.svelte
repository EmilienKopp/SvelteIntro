<script lang="ts">
    //@ts-nocheck


    function MainDish(meat,sauce,seasoning) {
        this.meat = meat;
        this.sauce = sauce;
        this.seasoning = seasoning;
    } // create a 'MainDish' kind of object

    const customerOrder = {
        meat: 'chicken',
        sauce: 'tomato',
        seasoning: 'salt',
        doneness: 'well done',
        side: 'rice',
        customerName: 'Daniel'
    }; // create a 'data' object


    // defining the function
    function prepareMainDish(meat,sauce,seasoning,doneness) {
        const cookedMeat = 'Some ' + meat + ' cooked ' + doneness;
        const saucedMeat = cookedMeat + ' with ' + sauce;
        const seasonedSaucedMeat = saucedMeat + ' and ' + seasoning;
        return seasonedSaucedMeat;
    }

    function dressPlate(mainDish, side) {
        const plate = mainDish + ' with ' + side;
        return plate;
    }

    function serve(finishedOrder, customerName) {
        console.log(finishedOrder + ' was served to ' + customerName);
    }


    function executeOrder(customerOrder) {
        const mainDish = prepareMainDish(customerOrder.meat, customerOrder.sauce, customerOrder.seasoning, customerOrder.doneness);
        const finishedOrder = dressPlate(mainDish, customerOrder.side);
        serve(finishedOrder, customerOrder.customerName);
    }


</script>

<div>
    <input type="text" bind:value={c} />
    <input type="text" bind:value={customerOrder.sauce} />
    <input type="text" bind:value={customerOrder.seasoning} />
    <input type="text" bind:value={customerOrder.doneness} />
    <input type="text" bind:value={customerOrder.side} />
    <input type="text" bind:value={customerOrder.customerName} />
    <button on:click={() => executeOrder(customerOrder)}>Show Order</button>
</div>
