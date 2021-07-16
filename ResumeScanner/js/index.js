console.log('Working');

const obj = [
    {
        name: 'Deep',
        age: 21,
        city: 'Kolkata',
        language: 'Python',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name: 'Honey',
        age: 21,
        city: 'Ludhiana',
        language: 'JAVA',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },

    {
        name: 'Yamato',
        age: 20,
        city: 'Banglore',
        language: 'C++',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },

    {
        name: 'Nami',
        age: 22,
        city: 'Hamirpur',
        language: 'Kotlin',
        image: 'https://randomuser.me/api/portraits/women/78.jpg'
    },

    {
        name: 'Hina',
        age: 20,
        city: 'Delhi',
        language: 'C++',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    }
]

function userIterator(candidates){
    let index = 0;
    return{
        next: function(){
            return index < candidates.length ?
            {value: obj[index++], done: false} : { done: true};
        }
    }
}

const user = userIterator(obj);
nextResumeShow(); 

const nextResume = document.getElementById('check');
nextResume.addEventListener('click', nextResumeShow);

function nextResumeShow(){
    const currentUser = user.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(currentUser != undefined){
        image.innerHTML = `<img src="${currentUser.image}" alt="Avatar">`;

    profile.innerHTML = `<div class="card container-box">
                                <li class="userList">Name: ${currentUser.name}</li>
                                <li class="userList">Age: ${currentUser.age}</li>
                                <li class="userList">Location: ${currentUser.city}</li>
                                <li class="userList">Dev Language: ${currentUser.language}</li>
                            </div>`;
    }
    else{
        alert('End of Applications. Click OK to go back to First Application.');
        window.location.reload();
    }
}