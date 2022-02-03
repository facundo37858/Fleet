import axios from "axios";
const ADD_CARRIER = "ADD_CARRIER"
import { API_URL} from "@env"




export function addCarrier(props) {
  return async function (dispatch) {
    try {
       const add = await axios.post(`${API_URL}/api/registerfleet`, props) 
       console.log("ESTO ES ADD", add.data)
       return dispatch({
         type: "ADD_CARRIER",
         payload: add.data
       })
    } catch (error) {
       console.log("Error", error) 
    }
  }
}




export function logiar(payload) {
    return async function (dispatch) {
      try {
        console.log(API_URL)
        const response = await axios.post(`${API_URL}/api/login`, payload)
        .then((r) => {
            dispatch({
                type: "LOGEO",
                payload: r.data.payload,
                token: r.data.token,
            });
            
            console.log("Aqui esta el token llegando en la action logiarusuario:",r.data.token);
         
        });
       
      }catch(error){

        console.log(error.response);
      }
    };
  }

  export function adminregister(payload) {
    return async function () {
      try {
        console.log(API_URL)
        const response = await axios.post(`${API_URL}/api/adminregister`, payload)
        .then((r) => {
          console.log(r.data.mensaje);
        });
       
      }catch(error){

        console.log(error.response);
      }
    };
  }