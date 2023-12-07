
// Get the range input element
const rangeInput = document.getElementById('users');
const free = document.getElementById('free');
const pro = document.getElementById('pro');
const enterprise = document.getElementById('enterprise');
const displayUserNumber = document.getElementById('displayUserNumber');
const freeCleanUp = document.getElementById('freeCleanUp');

const submitMessage = document.getElementById('submitMessage');
const userCountHidden = document.getElementById('userCountHidden');
const orderComments = document.getElementById('orderComments');
const myForm = document.getElementById('myForm');
const identifier = document.getElementById('identifier');











// Function to be executed when the range input value changes
function handleRangeInputChange() {
    // Get the current value of the range input
    let currentValue = users.value;
    displayUserNumber.innerHTML = `<p>You have selected : ${currentValue} user${currentValue == 1 ? '' : 's'}</p>`;
    // displayUserNumber.innerHTML= '<p id="displayUserNumber" class="">You have selected : 0 users</p>';
    if (currentValue <= 10) {
        free.classList.add('highlighted');
        pro.classList.remove('highlighted');
        enterprise.classList.remove('highlighted');

        freeCleanUp.classList.remove('btn-outline-primary');
        freeCleanUp.classList.add('btn-primary');

        identifier.value = "Free"



    }
    if (currentValue > 10 && currentValue <= 20) {
        pro.classList.add('highlighted');
        free.classList.remove('highlighted');
        enterprise.classList.remove('highlighted');

        freeCleanUp.classList.remove('btn-primary');
        freeCleanUp.classList.add('btn-outline-primary');

        identifier.value = "Pro"



    }
    if (currentValue > 20 && currentValue <= 30) {
        enterprise.classList.add('highlighted');
        free.classList.remove('highlighted');
        pro.classList.remove('highlighted');

        freeCleanUp.classList.remove('btn-primary');
        freeCleanUp.classList.add('btn-outline-primary');

        identifier.value = "Enterprise"




    }

}

function submitForm() {
    myForm.action = "https://forms.maakeetoo.com/formapi/988"
    myForm.method = "POST"

    if (identifier.value === "Free") {
        submitMessage.value = `Plan: Free, Comment: ${orderComments.value}`
        myForm.submit()
    }
    if (identifier.value === "Pro") {
        submitMessage.value = `Plan: Pro, Comment: ${orderComments.value}`
        myForm.submit()
    }
    if (identifier.value === "Enterprise") {
        submitMessage.value = `Plan: Enterprise, Comment: ${orderComments.value}`
        myForm.submit()
    }

}

function freeClick() {
    free.classList.add('highlighted');
    pro.classList.remove('highlighted');
    enterprise.classList.remove('highlighted');

    freeCleanUp.classList.remove('btn-outline-primary');
    freeCleanUp.classList.add('btn-primary');
    identifier.value = "Free"

}
function proClick() {
    pro.classList.add('highlighted');
    free.classList.remove('highlighted');
    enterprise.classList.remove('highlighted');

    freeCleanUp.classList.remove('btn-primary');
    freeCleanUp.classList.add('btn-outline-primary');

    identifier.value = "Pro"


}
function enterpriseClick() {
    enterprise.classList.add('highlighted');
    free.classList.remove('highlighted');
    pro.classList.remove('highlighted');

    freeCleanUp.classList.remove('btn-primary');
    freeCleanUp.classList.add('btn-outline-primary');

    identifier.value = "Enterprise"

}

// Attach the event listener to the range input
users.addEventListener('input', handleRangeInputChange);
// Alternatively, you can use 'change' event instead of 'input'
// rangeInput.addEventListener('change', handleRangeInputChange);

free.addEventListener('click', freeClick);
pro.addEventListener('click', proClick);
enterprise.addEventListener('click', enterpriseClick);


