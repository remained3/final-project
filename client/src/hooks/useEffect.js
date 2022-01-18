import {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_USERS
} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
      users: [],
      loading: true,
  });
  useEffect(() => {
      axios({
              method: 'GET',
              url: '/api/users',
          })
          .then(({
              data
          }) => {
              console.log(data);
              dispatch({
                  type: SET_USERS,
                  users: data
              });
          })
          .catch((err) => console.log(err));
  }, []);

  return {
      state,
      dispatch,
  };
};

export default useApplicationData;

export const SET_USERS = 'SET_USERS';

const dataReducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                    loading: false,
            };
        default:
            return state;
    }
};

export default dataReducer;