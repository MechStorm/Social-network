const ADD_MESSAGES = "ADD-MESSAGES";
const ADD_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

// let initialState = {
//   dialogsData: [
//     {
//       name: "Maria",
//       lastName: "Stone",
//       id: 1,
//       img:
//         "https://img.cinemablend.com/filter:scale/quill/0/b/a/8/b/5/0ba8b5b1f1f8fac9a80ac2bb03dc56460cfe119d.jpg?mw=600"
//     },
//     {
//       name: "John",
//       lastName: "Cena",
//       id: 2,
//       img:
//         "data:image/jpeg;base64,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"
//     },
//     {
//       name: "Emilia",
//       lastName: "Clarke",
//       id: 3,
//       img:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQ0RVqfW3wEqPrR9qzGfBdNtMPcLvPaZxjqJYaOYVGnh5ndJE&s"
//     },
//     {
//       name: "Emma",
//       lastName: "Roberts",
//       id: 4,
//       img:
//         "http://thumbs.dfs.ivi.ru/storage15/contents/0/e/978fd73456fbcf41a616b4ae8bc8a7.jpg"
//     },
//     {
//       name: "Peter",
//       lastName: "Parker",
//       id: 5,
//       img:
//         "https://www.meme-arsenal.com/memes/216046888167074957711725628c6d0d.jpg"
//     },
//     {
//       name: "Elsa",
//       lastName: "Frozen",
//       id: 6,
//       img:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7HOH7XDDyULqs3nG6qbfDOQd-BWqCTlvd1Rh6-KEKtGYhhrV&s"
//     }
//   ],
//   messagesData: [
//     {
//       name: "Maria",
//       lastName: "Stone",
//       img:
//         "https://img.cinemablend.com/filter:scale/quill/0/b/a/8/b/5/0ba8b5b1f1f8fac9a80ac2bb03dc56460cfe119d.jpg?mw=600",
//       message: "Hello",
//       id: 1
//     },
//     {
//       name: "Emma",
//       lastName: "Roberts",
//       img:
//         "http://thumbs.dfs.ivi.ru/storage15/contents/0/e/978fd73456fbcf41a616b4ae8bc8a7.jpg",
//       message: "How are you? :)",
//       id: 2
//     },
//     {
//       name: "Maria",
//       lastName: "Stone",
//       img:
//         "https://img.cinemablend.com/filter:scale/quill/0/b/a/8/b/5/0ba8b5b1f1f8fac9a80ac2bb03dc56460cfe119d.jpg?mw=600",
//       message: "Fine, thanks",
//       id: 1
//     },
//     {
//       name: "Maria",
//       lastName: "Stone",
//       img:
//         "https://img.cinemablend.com/filter:scale/quill/0/b/a/8/b/5/0ba8b5b1f1f8fac9a80ac2bb03dc56460cfe119d.jpg?mw=600",
//       message: "And how are you?",
//       id: 1
//     }
//   ],
//   newMessageText: ""
// };

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGES:
      let addMessage = {
        name: "Emma",
        lastName: "Roberts",
        img:
          "http://thumbs.dfs.ivi.ru/storage15/contents/0/e/978fd73456fbcf41a616b4ae8bc8a7.jpg",
        message: state.newMessageText,
        id: 2
      };
      state.messagesData.push(addMessage);
      state.newMessageText = "";
      return state;
    case ADD_NEW_MESSAGE_TEXT:
      state.newMessageText = action.textMessage;
      return state;
    default:
      return state;
  }
};

export const addMessageCreate = () => ({ type: ADD_MESSAGES});

export const updateNewMessageCreate = text => ({ type: ADD_NEW_MESSAGE_TEXT, textMessage: text});

export default dialogsReducer;