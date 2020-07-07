import { v4 as uuid } from 'uuid';

const initialState = {
  users: [
    {
      id: "1",
      company: "Company Name",
      market: "Real Estate",
      location: "Lagos",
      joined: "Dec, 12, 2016",
      approve: 'Yes'


    },

    {
      id: "2",
      company: "Company Name",
      market: "Local Business",
      location: "Accra",
      joined: "Dec, 13, 2016",
      approve: 'Yes'


    },

    {
      id: "3",
      company: "Company Name",
      market: "Specialty Food",
      location: "Texas",
      joined: "Dec, 15, 2017",
      approve: 'Yes'


    },

    {
      id: "4",
      company: "Company Name",
      market: "E-Commerce",
      location: "Nairobi",
      joined: "Dec, 17, 2016",
      approve: 'Yes'


    },

  ],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        id: uuid(),
        company: action.payload.company,
        market: action.payload.market,
        location: action.payload.location,
        joined: action.payload.joined,
        approve: action.payload.approve
      };
      return { ...state, users: [...state.users, newUser] }
    case "DELETE_USER":
      const filterdUsers = state.users.filter(user => user.id !== action.payload);
      return { ...state, users: filterdUsers }
    case "EDIT_USER":
      const editedUsers = state.users.map(user => {
        if (user.id === action.user_id) {
          return { ...user, ...action.updated_info }
        }
        else {
          return user;
        }
      });
      return { ...state, users: editedUsers }
    default:
      return state;
  }

}

export default usersReducer;