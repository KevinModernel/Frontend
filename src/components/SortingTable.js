import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import MOCK_DATA from './array.json';
import { COLUMNS } from './columns';
import './table.css';
import {GlobalFilter} from './GlobalFilter'

export const SortingTable = () => {
	

	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);


	const tableInstance = useTable({
		columns: columns,
		data: data
	}, useFilters, useGlobalFilter, useSortBy);

	const { 
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
		} = tableInstance;

	const { globalFilter } = state

	return (
	<>
		<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps( column.getSortByToggleProps() )}>
								{column.render('Header')}
								<div>{column.canFilter ? column.render('Filter') : null}</div>
								<span>
									{column.isSorted ? (column.isSortedDesc ? ' ⇓' : ' ⇑') : ''}
								</span>
							</th>
						))}
					</tr>
				))}
			</thead>

			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row)
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}> {cell.value} </td>
							})}	
						</tr>
					) 
				})}
			</tbody>
		</table>
	</>
	);

}