import axios from 'axios';

const serviceEndPoint = "http://localhost:3030/projects";

const getAll = async ()=>{
    const response = await axios.get(serviceEndPoint);
    return response.data;
}

const save = async (projectData) => {
    if(projectData.id === 0){
        const response = await axios.post(serviceEndPoint, projectData);
        return response.data;
    } else{
        const response = await axios.put(`${serviceEndPoint}/${projectData.id}`, projectData);
        return response.data;
    }
   
}

const projectApi = { getAll, save};
export default projectApi;