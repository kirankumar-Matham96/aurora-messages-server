// export const schema = `
//   type Query {
//     add(x: Int, y: Int): Int
//   }
// `;

export const schema = `
  type Query {
    messages: [Message!]!
  }

  type Message {
    id: ID!
    title: String
    body: String
    author: String
  }
`;

// export const schema = `
//   type Query {
//     messages: data!
//   }

//   type data {
//     type: String,
//     list_item_type: String,
//     size: String,
//     items : [MessageItem]
//   }

//   type MessageItem {
//     type : String
//     id: ID!
//     href: String
//     view_href : String
//     author: {
//       type : String
//       id: ID!
//       href: String
//       view_href : String
//       login : String
//     }
//     subject : String
//     search_snippet : String
//     body : String
//     teaser : String
//     board : {
//       type : String
//       id: ID!
//       href: String
//       view_href : String
//     }
//   }
// `;
