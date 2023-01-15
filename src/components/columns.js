import { ColumnFilter } from './ColumnFilter';

export const COLUMNS = [
 	{
 		Header: 'Id',
 		accessor: "id",
 		Filter: ColumnFilter,
 		disableFilters: true
 	},
 	{
 		Header: 'Title',
 		accessor: "title",
 		Filter: ColumnFilter
 	},
 	{
 		Header: 'Kilometers',
 		accessor: "kilometers",
 		Filter: ColumnFilter
 	},
 	{
 		Header: 'Price',
 		accessor: 'price',
 		Filter: ColumnFilter
 	},
 	{
 		Header: 'Year',
 		accessor: 'year',
 		Filter: ColumnFilter
 	},
 	{
 		Header: 'Engine',
 		accessor: 'engine',
 		Filter: ColumnFilter
 	},
 	{
 		Header: 'Transmission',
 		accessor: 'transmission',
 		Filter: ColumnFilter
 	},
 	{
 		Header: 'Fuel',
 		accessor: 'fuel',
 		Filter: ColumnFilter
 	},
 	{
 		Header: 'Link',
 		accessor: 'link',
 		Filter: ColumnFilter
 	}
]