const { buildSchema } = require('graphql');


const chatMessages = `
    ChatMessages {
        messages: [String!]!
        by: String!
        to: String!        
    }
`;

const schema = buildSchema(`

    type ${chatMessages}

    type Profile {
        name: String!
        address: String!
        interest: [String!]!
    }

    type RootQuery {
        profile(name: String): [Profile!]!
        messages: [ChatMessages!]!
    }

    input Reply {
        repliedBy: String!
        repliedAt: String!
        replyText: String!
    }

    input Comments {
        postedBy: String!
        commentText: String!
        likes: Int!
        reply: [Reply]
    }
    

    input postInput {
        postedBy: String!
        createdAt: String!
        postData: String!
        likes: Int!
        comments: [Comments]
    }

    type postData {
        postedBy: String!
        createdAt: String!
        postData: String!
        likes: Int!
    }

    input userData {
        name: String!
        email: String!
        password: String!
    }
    type user_data {
        name: String!
        email: String!
        password: String!
    }

    type UserMutation {
        createPost(postBody: postInput): postData
        createUser(user: userData): user_data
    }

    schema {
        query: RootQuery
        mutation: UserMutation
    }
`);

module.exports = schema;