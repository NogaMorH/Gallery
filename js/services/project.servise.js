'use strict'

const gProjects = [
    {
        id: makeId(),
        name: 'Minesweeper',
        title: 'Minesweeper',
        desc: 'Locate all the mines and open all the safe cells to win',
        url: 'https://nogamorh.github.io/Minesweeper/',
        publishedAt: new Date(2022, 6, 20).getTime(),
        labels: ['Matrix', 'Classic games', 'Board games'],
        img: 'img/portfolio/Minesweeper.png',
    },
    {
        id: makeId(),
        name: 'Book Shop',
        title: 'My book shop',
        desc: 'Manage your own online book shop',
        url: 'https://nogamorh.github.io/Book-shop/',
        publishedAt: new Date(2022, 7, 1).getTime(),
        labels: ['book shop', 'read'],
        img: 'img/portfolio/Book shop.png'
    },
    {
        id: makeId(),
        name: 'Task Manager',
        title: 'Task Manager',
        desc: 'Manage your tasks easily',
        url: 'https://nogamorh.github.io/Task-Manager/',
        publishedAt: new Date(2022, 7, 1).getTime(),
        labels: ['task', 'to do', 'task manager'],
        img: 'img/portfolio/Task Manager.png'
    }
]

function getProjects() {
    return gProjects
}
