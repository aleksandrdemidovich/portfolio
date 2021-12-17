export type SkillType = {
    skillName: string
    skillNameColor: string
    skillInfo: string
    skillImg: string
    skillDocumentationLink: string
    fadeDirection: "bottom-left" | "bottom-right" | "down" | "left" | "right" | "top-left" | "top-right" | "up";
}
export const skills = [
    {
        skillName: 'React',
        skillNameColor: '#61DBFB',
        skillInfo: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ',
        skillImg: 'https://img.icons8.com/color/96/000000/react-native.png',
        skillDocumentationLink: 'https://reactjs.org/',
        fadeDirection: 'left',
    },
    {
        skillName: 'Redux',
        skillNameColor: '#764abc',
        skillInfo: 'Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.',
        skillImg: 'https://img.icons8.com/color/96/000000/redux.png',
        skillDocumentationLink: 'https://redux.js.org/',
        fadeDirection: 'up',
    },
    {
        skillName: 'TypeScript',
        skillNameColor: '#007acc',
        skillInfo: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
        skillImg: 'https://img.icons8.com/color/96/000000/typescript.png',
        skillDocumentationLink: 'https://www.typescriptlang.org/',
        fadeDirection: "right",
    },
] as Array<SkillType>