import { Card, CardActions, CardContent, CardMedia, Button, Typography, Chip, Link } from '@mui/material';

export const Project = ({ media, title, content, technologies, link }) => {

	return (
		<Card elevation={3}>
			<CardMedia
				component="img"
				alt="Project media"
				height="300"
				image={ media }
			/>
			<CardContent style={{
				minHeight: 250
			}}>
				<Typography variant="h5" component="div">{ title }</Typography>
				<Typography variant="body2" color="text.primary" style={{ marginTop: 25, marginBottom: 25}}>{ content }</Typography>
				{
					technologies.map((item, k) => (
						<Chip key={item} label={item} />
					))
				}
			</CardContent>
			<CardActions>
			<Link target="_blank" href={ link }>
				{ link }
			</Link>
			</CardActions>
		</Card>
	)
}
