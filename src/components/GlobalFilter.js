import React from 'react';

export const GlobalFilter = ({ filter, setFilter }) => {
	return (
		<span>
			Filtrar: {' '}
			<input value={filter || ''}
			onChange={e => setFilter(e.target.value)} />
		</span>
	)
}