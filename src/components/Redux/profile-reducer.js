const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postData: [
      {
        id: 1,
        message: "Heeey, Nova!",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCMfxamFyFeZvaJJU4qGsUz3mNh2Yf0_tWySUROv8J0EKqqri&s",
        likeCount: 12
      },
      {
        id: 2,
        message: "Hi, Li Ming",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcmvysa1iETxLvV6dTNtb7KNpuRE3oF60oJOc0lSy2TwY6F7sPw&s",
        likeCount: 48
      }
    ],
    newPostText: ""
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQ0RVqfW3wEqPrR9qzGfBdNtMPcLvPaZxjqJYaOYVGnh5ndJE&s",
        likeCount: 0
      };
      let stateCopy = {...state};
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case ADD_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.textPost;
      return stateCopy;
    }
    default:
      return state;
  };
};

export const addPostCreate = () => ({ type: ADD_POST });

export const updateNewPostCreate = text => ({ type: ADD_NEW_POST_TEXT, textPost: text });

export default profileReducer;