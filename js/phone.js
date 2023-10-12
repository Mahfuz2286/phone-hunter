const loadPhone = async (searchText,isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    // console.log(phones);
    displayPhones(phones,isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    // console.log(phones)
    // 1.
    const phoneContainer = document.getElementById('phone-container')
    // clear phone container
    phoneContainer.textContent = '';

    // display show all button:
const showAllContainer = document.getElementById('show-all-container')
if(phones.length > 12 && !isShowAll){
    showAllContainer.classList.remove('hidden')
}
else{
    showAllContainer.classList.add('hidden')
}
console.log('is show all',isShowAll)
    // dispaly first 12 phones
    if(!isShowAll){
        phones = phones.slice(0, 12)
    }

    phones.forEach(phone => {
        console.log(phone)
        //2. create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`

        // 3.innerhtml setting
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
          <div class="card-body">
             <h2 class="card-title">${phone.phone_name}</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div class="card-actions justify-end">
             <button class="btn btn-primary">Buy Now</button>
             </div>
             </div>
        `;
        //4. append child 
        phoneContainer.appendChild(phoneCard);
    });
    //hide loading spinner:
    toggleLoadingSpinner(false);
}
// handle search:
const handleSearch = (isShowAll) => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText,isShowAll)
    toggleLoadingSpinner(true);
}
// //Another search recap
// const handleSearch2 = () => {
//     const searchField = document.getElementById('search-field2');
//     const searchText = searchField.value;
//     //console.log(searchText);
//     loadPhone(searchText)
//     toggleLoadingSpinner(true);
// }

//loading spinner:

const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

// Handle show all:
const handleShowAll = () =>{
    handleSearch(true);
}


// loadPhone();