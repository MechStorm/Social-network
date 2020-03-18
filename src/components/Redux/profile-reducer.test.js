import React from 'react';
import ReactDOM from 'react-dom';
import profileReducer, {addPost, deletePost} from "./profile-reducer";

let  state = {
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
    ]
};

it('add post without crashing', () => {
    const action = addPost('some')
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(3);
});

it('delete post without crashing', () => {
   const action = deletePost(1);
   let newState = profileReducer(state, action);
   expect(newState.postData.length).toBe(1);
});

it('correct deleting', () => {
    const action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(2);
});