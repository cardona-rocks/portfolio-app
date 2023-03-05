import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


export const Project = () => {
	return (
		<Card elevation={3}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="300"
				image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Mushroom Revival
				</Typography>
				<Typography variant="body2" color="text.primary" style={{ marginTop: 25, marginBottom: 25}}>
					Full development on Shopify 2.0 from Dawn starter theme, Sidecart gamification and control subscriptions with Recharge.
				</Typography>
				<Chip label="Shopify 2.0" />
				<Chip label="jQuery" />
				<Chip label="Sass" />
				<Chip label="Gulp" />
				<Chip label="Github" />
			</CardContent>
			<CardActions>
				<Button size="small">https://mushroomrevival.com</Button>
			</CardActions>
		</Card>
	)
}
