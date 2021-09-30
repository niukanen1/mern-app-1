import { useForm } from 'react-hook-form'
import axios from 'axios'; 
import {useHistory } from 'react-router-dom';


function Vote() { 
    const { register, handleSubmit } = useForm(); 
    const history = useHistory();
    const onSubmit = data => { 
        axios.post("http://localhost:3001/resultlist/", data)
        console.log(data);
        history.push("/")
    };
    return( 
        <div className="vote">
            <h2>Vote Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" className="form-control" {...register("firstName", {required: true})} />
                    <input type="text" className="form-control" {...register("lastName", {required: true})} />
                </div>
                <div className="form-group">
                    <select {...register("voteFor")}>
                        <option value="spongebob">Sponge Bob</option>
                        <option value="patrick">Patrick</option>
                    </select>
                </div>
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Vote; 