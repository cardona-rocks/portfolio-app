import { Typography } from '@mui/material';

export const Job = ({ title, date, description}) => {
	return (
		<>
			<Typography variant="h3" style={{ marginTop: 30 }}>{ title }</Typography>
			<Typography variant="date" color="primary" style={{  display: 'inline-block', marginTop: 20, marginBottom: 20 }}>{ date }</Typography>
			<Typography>{ description }</Typography>
		</>
	)
}
