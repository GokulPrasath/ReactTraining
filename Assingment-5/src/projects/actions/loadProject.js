import projectApi from '../services/projectApi';
export async function loadProject(){
    const projects = await projectApi.getAll();
    const action = { type : 'PROJ_INIT', payload : projects } ;
    return action;
} 