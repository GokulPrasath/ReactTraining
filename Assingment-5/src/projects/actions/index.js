import projectApi from '../services/projectsApi';

// let currentProjectId = 0;

export const addNew = async (projectName) => {
    const newProject = {
        id: 0,
        name: projectName,
        createdAt: new Date()
    },
     
     project = await projectApi.save(newProject),
     action = {
        type: "PROJECT_ADD_NEW",
        payload: project
    };
    return action;
}

export const load = async () => {
    const projects = await projectApi.getAll();
    const action = {type : 'PROJECT_INIT', payload : projects};
    return action;
}
