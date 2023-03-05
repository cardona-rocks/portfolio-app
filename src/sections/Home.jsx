import { Stack, Grid, Button, Typography } from '@mui/material';
import { Download } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export const Home = () => {

	const { t } = useTranslation();

	return (
		<Stack
			spacing={2}
			className="welcome"
		>
			<Grid container spacing={0}>
				<Grid xs={12}>
					<Stack 
						alignItems="start"
						className='dots' spacing={1} style={{
						paddingTop: 50,
						paddingBottom: 50
					}}>
						<Typography paragraph>
							{t('home.greeting')}
						</Typography>
						<Typography variant="h1">
							{/* {t('home.introduce')} */}
							Sergio Cardona, <br/> Full-stack Web developer
						</Typography>
						<Button>
							<Download /> {t('general.download_cv')}
						</Button>
					</Stack>
				</Grid>
				
				<Grid xs={11}>
					<Typography paragraph>
						Hi! I'm <span className='highlight'>Sergio Cardona, a Full-stack developer</span> with more than <span className='highlight'>16 years of experience</span>. located in Medellín, Colombia.
					</Typography>
					<Typography paragraph>
						When I learned about code for the first time, I felt a great passion for technology and for all the things we can made with it. I don't know how many web projects I have participated in! but I do know that I have enjoyed to the fullest each line of code and each hour spent on the computer.
					</Typography>
					</Grid>
			</Grid>
		</Stack>
	)
}
