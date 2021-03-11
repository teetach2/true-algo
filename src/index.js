import input from "./input.json";

const sumData = (input) => {
    let cardCount = 0;
    let coinCount = 0;
    let totalValue = 0;
    const cardList = [1000, 500, 100, 50 , 20];
    const coinList = [10, 5, 2 ,1 ,0.5, 0.25];

    input.forEach(element => {
        const isCard = cardList.find(card => card === element.type);
        const isCoin = coinList.find(coin => coin === element.type);
        if (isCard) {
            cardCount += element.quantity;
        }
        if (isCoin) {
            coinCount += element.quantity;
        }
        totalValue += element.quantity * element.type;
    });

    const totalCount = coinCount + cardCount;
    validateData(cardCount, coinCount, totalCount);
    console.log(totalValue);
    const totalCountArray = totalCount.toString().split('');
    // Convert to readable value

};

const validateData = (cardCount, coinCount, total) => {
    const limitCard = 1000;
    const limitCoin = 500;
    const limitCardCoin = 1200;

    if (cardCount > limitCard) {
        console.error(`Card should not contain more than ${limitCard} cards`);
        return;
    }

    if (coinCount > limitCoin) {
        console.error(`Coin should not contain more than ${limitCoin} coins`);
        return;
    }

    if (total > limitCardCoin) {
        console.error(`Card and Coin should not contain more than ${limitCardCoin}`);
        return;
    }
}

sumData(input);