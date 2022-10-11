import { Button, IconButton } from '@material-ui/core'
import * as React from 'react'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styled from 'styled-components';
import { lightest, normallight, light, darkest } from '../../globals/colors';
import { SearchInput } from '../molecules/SearchInput';
import { HorizontalFlexDivSpaceBetween } from '../templates/Wrappers';

type THProps = {
    style?: React.CSSProperties
    activateSort?: React.Dispatch<React.SetStateAction<number | null>>
    index?: number
    activeIndex?: number | null
}

const TH: React.FC<THProps> = ({ children, index, activateSort, activeIndex }) => {

    const handleClick = () => {
        if (activateSort && index && activeIndex !== undefined) activateSort(index === activeIndex ? null : index)
    }
    console.log(activeIndex)

    return (
        <th style={{ textAlign: 'left', backgroundColor: lightest, color: darkest }}>
            {children}
            {activateSort && (
                <IconButton onClick={handleClick}>
                    <ArrowDownwardIcon style={{
                        color: (activeIndex === null ? normallight : darkest),
                        transition: "transform 0.3s",
                        transform: index === activeIndex ? "rotate(0deg)" : "rotate(-180deg)"
                    }} />
                </IconButton>
            )}
        </th>)
}


type Cell = string | number | string[]

type Row = Cell[]

export type TableData = {
    head: string[]
    bodyRows: Row[]
}


const TableDataCell = styled.td<{ odd: boolean, hover: boolean }>`
    padding:0;
    cursor:pointer;
    background-color: ${(props) => (props.hover ? normallight : props.odd ? light : lightest)};

`

const TR: React.FC<{ row: Cell[], index: number, onRowPress?: (id: string) => void }> = ({ row, index, onRowPress }) => {
    const [hover, setHover] = React.useState(false)

    const handleClick = () => onRowPress && onRowPress('some-id-here')

    return (
        <tr className="monospace" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handleClick}>
            {row.map((cell, cellIndex) =>
                <TableDataCell key={cellIndex} odd={index % 2 === 0} hover={hover}>
                    {cell.toString()}
                </TableDataCell>)}
        </tr>)
}

type DynamicDataTableProps = {
    tableData: TableData
    title: string
    customLength?: number
    onRowPress?: (id: string) => void
}


export const DynamicDataTable: React.FC<DynamicDataTableProps> = ({ tableData, title, customLength, onRowPress }) => {
    const PAGE_LENGTH = customLength || 50

    const [sortIndex, setSortIndex] = React.useState<number | null>(null)
    const [page, setPage] = React.useState(0)
    const [rows, setRows] = React.useState<Row[]>(tableData.bodyRows.slice(0, PAGE_LENGTH))

    const numberOfPages = Math.round(tableData.bodyRows.length / PAGE_LENGTH)

    const changePage = (increment: boolean) => () => {
        var newPage = page

        if (increment) newPage++
        else if (!increment) newPage--
        setRows(tableData.bodyRows.slice(newPage * PAGE_LENGTH, (newPage + 1) * PAGE_LENGTH))
        setPage(newPage)
    }

    return (
        <>
            <HorizontalFlexDivSpaceBetween>
                <h3>{title} ({rows.length} of {tableData.bodyRows.length})</h3>
                <SearchInput searchPlaceholder="Search..." />
            </HorizontalFlexDivSpaceBetween>

            <table style={{ width: '100%', borderSpacing: 1, borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        {tableData.head.map((cell, headCellKey) =>
                            <TH key={headCellKey} activateSort={setSortIndex} activeIndex={sortIndex} index={headCellKey + 1}>{cell}</TH>)}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((bodyRow, index) => <TR onRowPress={onRowPress} row={bodyRow}
                        index={index + (page * PAGE_LENGTH)} key={index + (page * PAGE_LENGTH)} />)}
                </tbody>
            </table>
            <div style={{ margin: 10 }}>
                <HorizontalFlexDivSpaceBetween>
                    <Button size='small' disabled={page === 0} variant="contained" onClick={changePage(false)}>Previous page</Button>
                    <p>Page {page + 1} of {(numberOfPages + 1)}</p>
                    <Button disabled={!numberOfPages || page === numberOfPages} variant="contained" onClick={changePage(true)}>Next page</Button>
                </HorizontalFlexDivSpaceBetween>
            </div>

        </>
    )
}
