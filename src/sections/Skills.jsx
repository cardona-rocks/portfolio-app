import { useTranslation } from 'react-i18next';
import { Stack, Grid, Typography } from '@mui/material';
import { SkillsIcons } from './SkillsIcons';

export const Skills = () => {

	const { t } = useTranslation();

	return (
		<Stack 
			direction="row" 
			spacing={0} 
			className='page'
			style={{ paddingBottom: 250 }}
		>
			<Grid container spacing={0}>
				<Grid xs={10}>
					<Typography variant="h2" gutterBottom>
						{t('skills.title')}
					</Typography>
					<Typography paragraph>
						{t('skills.content')}
					</Typography>
					<SkillsIcons />
				</Grid>
			</Grid>
		</Stack>
	)
}
