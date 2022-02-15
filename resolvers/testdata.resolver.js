const ResponseError = require('../Utils/ResponseError');

const profileData = [
    {
        name: "monis",
        address: 'Block 17',
        interest: ['React', 'JS', 'ABC'],
    },
    {
        name: "anas",
        address: 'Block 18',
        interest: ['PHP', 'Data-Science', 'Angular'],
    }
];

const profile = (args) => {
    return profileData.filter(data => data.name === args.name);
};

const createPost = (args) => {

    const errors = [];

    if(args.postBody.postData === '') errors.push('Post should contain some text!');
    if(args.postBody.postedBy === 'ashrafmonis13@gmail.com') errors.push('This user is not allowed on this platform!!');
    
    

    if(errors.length > 0) {

        const error = new ResponseError('An unexpected error occured!!', errors);

        throw error;
    }


    return {
        postedBy: 'Monis',
        createdAt: '2022-10-10',
        postData: `We have too many students getting into the software field with great passion. But you know - What they need ?? Counseling about what way they should choose in thier career - Not bully at me, I am not talking about those who are super genius and can get everything on thier own but a general perception that majority is confused in what to choose and how to approach the things and plan their career. I have got too many people who guided me in my career and that helped me a lot. Long story short .. Students: Don't be hesitant to send a msg to connections of your domain about guiding you .. Experience Technical Guys: Please be humble and support your juniors as much as you can`,
        likes: 12
    }
};

const createUser = (args) => {

    const errors = [];

    if(args.user.name === '') errors.push('User should have name');
    if(args.user.email === '' || !new RegExp('[a-zA-Z0-9]+@(gmail|yahoo|hotmail).com').test(args.user.email)) errors.push('User should have email and it should follow the pattern of email');
    if(args.user.password === '') errors.push('User should have password');
    
    

    if(errors.length > 0) {

        const error = new ResponseError('An unexpected error occured!!', errors);

        throw error;
    }


    return {
        name: args.user.name,
        email: args.user.email,
        password: args.user.password,
    };
};

const messages = () => {
    return [
        {
            messages: ['Hello', 'Hi', 'How are you ??'],
            by: 'Monis',
            to: 'Anas'
        },
        {
            messages: ['Hello', 'Hi', 'How are you ??'],
            by: 'Monis',
            to: 'Anas'
        },
        {
            messages: ['Hello', 'Hi', 'How are you ??'],
            by: 'Monis',
            to: 'Anas'
        },
    ]
};

module.exports = {
    profile,
    createPost,
    messages,
    createUser
};