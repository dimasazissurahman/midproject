import axios from "axios";

export function PostData(type, userData ) {

    axios.post('/user',{
        firstName: 'Fred',
        lastName: 'Flintstone'
    }).then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    });

}