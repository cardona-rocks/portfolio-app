import { Typography } from '@mui/material';


import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTranslation, Trans } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Project } from '../components';

export const Projects = () => {

	const { t } = useTranslation();

	return (
		<Stack 
			direction="row" 
			spacing={0} 
			className='page'
		>
			<Grid container spacing={0}>
				<Grid xs={12}>
					<Typography variant="h2" gutterBottom>
						{t('projects.title')}
					</Typography>
					<div className='dots'>
					<Typography paragraph color="primary">
						Here are some projects I have worked on...
					</Typography>
					</div>
					

					<Swiper
						spaceBetween={30}
						slidesPerView={2}
					>
						<SwiperSlide>
							<Project />
						</SwiperSlide>
						<SwiperSlide>
							<Project />
						</SwiperSlide>
						<SwiperSlide>
							<Project />
						</SwiperSlide>
						<SwiperSlide>
							<Project />
						</SwiperSlide>
						
					</Swiper>
				
				</Grid>
			</Grid>
		</Stack>
	)
}
