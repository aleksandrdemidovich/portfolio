import socialNetworkPreview from "../temp/social-network-preview-img.png";
import todolistPreview from "../temp/todolist-preview-img.png";

export type ExampleProjectType = {
    previewImage: string,
    projectName: string,
    projectDescription: string
    gitHubURL: string
}
export const workExamples = [
    {
        previewImage: socialNetworkPreview,
        projectName: 'Social network',
        projectDescription: 'A social network is a website that allows people with similar interests to come together and shar information and photos',
        gitHubURL: 'https://aleksandrdemidovich.github.io/social-network-mui/'
    },
    {
        previewImage: todolistPreview,
        projectName: 'Todolist',
        projectDescription: 'What is a ToDo List? The definition is a simple one. It\'s a list of tasks you need to complete, or things that you want to do.',
        gitHubURL: 'https://aleksandrdemidovich.github.io/todo-list/'
    },
] as Array<ExampleProjectType>