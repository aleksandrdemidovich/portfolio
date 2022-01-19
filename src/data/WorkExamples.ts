import socialNetworkPreview from "../temp/social-network-preview-img.png";
import todolistPreview from "../temp/todolist-preview-img.png";
import cardsLearningPreview from "../temp/cards-learning-preview.png";
import iMarketPreview from "../temp/iMarket-preview.png";


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
    {
        previewImage: cardsLearningPreview,
        projectName: 'Cards learning',
        projectDescription: 'Flashcards are effective tools for both learning and studying when they’re used correctly. ' +
            'Whether you’re cramming for a test or learning a new language, flashcard apps help you study smarter, not longer.',
        gitHubURL: 'https://aleksandrdemidovich.github.io/friday-project/#/login'
    },
    {
        previewImage: iMarketPreview,
        projectName: 'Simple online store',
        projectDescription: 'Simple online store. Used Firebase to authorize and store products. Material UI for better UI experience.',
        gitHubURL: 'https://aleksandrdemidovich.github.io/orders-list/'
    },
] as Array<ExampleProjectType>
