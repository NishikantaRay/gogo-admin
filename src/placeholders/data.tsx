import { TableData } from "../components/organisms/DynamicDataTable";


const getRandomInt= () => {
    return Math.floor(Math.random() * 20);
}

const investments = ['Music/jazz', 'Music/classic', 'Music/pop', 'Arts/popup', 'Music/rock']

function getRandomInvestmentList() {
    var i = getRandomInt()
    var list: string[] = []
    while (i <5) {
        const investment = investments[i]
        if (!list.includes(investment)) list.push(investment)
        i = getRandomInt()
    }
    list.sort((a, b) => ('' + a).localeCompare(b))
    return list
}
const bigData: object[] = [];
for (let i = 0; i < 1000; i++) {
    const d = {
        id: i + 1,
        name: "Name" + i,
        status: getRandomInt()<10?'Confirmed':'Pending',
        gorups: getRandomInvestmentList().toString()
    };
    bigData.push(d);
}

export const getData = ()=>{
    return bigData
}



export const tableData: TableData = {
    head: ['Company', 'Status'],
    bodyRows: [
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active'],
        ['Anton Tobias Jensen', 'Active']
    ]
}

export const random = (max: number): number => {
    return Math.floor(Math.random() * max);
}