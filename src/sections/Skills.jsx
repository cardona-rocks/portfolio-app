import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 
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
					<Typography variant="h2" style={{
						marginBottom: 30
					}}>
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
