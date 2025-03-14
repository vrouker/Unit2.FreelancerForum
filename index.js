/**A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.

The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40.

A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.

New freelancers continue to appear every few seconds, and the average starting price is updated accordingly. */

//Step 1: create a class array that holds each freelancer as an object with the key-value pairs of name, occupation, and starting price

const freelancers = [
    {name: "Alice", occupation: "Writer", startingPrice: 30},
    {name: "Bob", occupation: "Teacher", startingPrice: 50}
];

const newFreelancers = [
    {name: "Carol", occupation: "Programmer", startingPrice: 70},
    {name: "Jordan", occupation: "HR Manager", startingPrice: 65},
    {name: "Sally", occupation:"Equestrian", startingPrice: 55}
];

//Step 2: write a function that calls and renders the initial freelancer data

function init() {
    const root = document.querySelector('#root');
    console.log(root);

    const h1 = document.createElement("h1");
    h1.innerHTML = "Freelancer Forum";
    root.append(h1);

  //create and add a container h2 to hold the average prices
     const h2 = document.createElement("h2");
    h2.id = "h2";
     h2.classList.add("h2");
     root.append(h2);

  //create and add a container div to hold the freelancers
    const freelancerContainer = document.createElement("div");
    freelancerContainer.id = "freelancerContainer";
    freelancerContainer.classList.add("freelancers");
    root.append(freelancerContainer);

    renderFreelancers();

    renderAveragePrices();
};

function renderFreelancers(){
    const container = document.querySelector("#freelancerContainer");
    container.innerHTML = "";
    freelancers.forEach((ind)=>{
        const freelancerDiv = document.createElement ("div");
        freelancerDiv.classList.add("ind");
        freelancerDiv.innerHTML = `
        <span> ${ind.name}
        <span> ${ind.occupation}
        <span> ${ind.startingPrice}`;

        container.append(freelancerDiv);
    })
}


//Step 3: write a function that calls and renders the new random freelancer
const addFreelancer = () => {
    const randomIndex = Math.floor(Math.random() * newFreelancers.length);
    const newFreelancer = newFreelancers[randomIndex];
    freelancers.push(newFreelancer);
    renderFreelancers();
}


//Step 4: change the interval for the random freelancer to appear

const add = setInterval(addFreelancer,3000);
setTimeout(()=>{
    clearInterval(add)},9000);


//Step 5: write a function to calculate the average starting price of the freelancers' array

function averagePrice(){
    const totalPrices = freelancers.reduce((total, ind)=> total + ind.startingPrice, 0);
    const avgPrice = (totalPrices / (freelancers.length -1));
    console.log(avgPrice);
    return avgPrice;};

function renderAveragePrices(){
    const avgContainer = document.querySelector("#h2");
    h2.innerHTML = `The average starting price is: ${averagePrice()}!`;
    avgContainer.append;
}
//The function accurately calculates the average and updates in the console, but not on the HTML...


const setAvgPrice = setInterval(averagePrice,3000);

setTimeout(()=>{
    clearInterval(setAvgPrice)},9000);


//call init function
init();