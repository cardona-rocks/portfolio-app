import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 
import { Job } from '../components';

export const Experience = () => {

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
					<Typography variant="h2">{t('experience.title')}</Typography>
					<Job 
						title={t('experience.job_grupo_title')}
						date={t('experience.job_grupo_date')}
						description={t('experience.job_grupo_description')}
					/>
					<Job 
						title={t('experience.job_sigma_title')}
						date={t('experience.job_sigma_date')}
						description={t('experience.job_sigma_description')}
					/>
					<Job 
						title={t('experience.job_quarto_title')}
						date={t('experience.job_quarto_date')}
						description={t('experience.job_quarto_description')}
					/>
					<Job 
						title={t('experience.job_ryt_title')}
						date={t('experience.job_ryt_date')}
						description={t('experience.job_ryt_description')}
					/>
				</Grid>
			</Grid>
		</Stack>
	)
}
