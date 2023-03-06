import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Project } from '../components';
import { projectList } from "../data";

export const Projects = () => {

	const { t } = useTranslation();

	return (
		<Stack 
			direction="row" 
			spacing={0}
		>
			<Grid container spacing={0}>
				<Grid xs={12}>
					<Typography variant="h2">{t('projects.title')}</Typography>

					<Stack className='dots' style={{
						marginTop: 35,
						paddingTop: 25,
						paddingBottom: 25
					}}>
						<Typography variant="h4" color="primary">
							Here are some projects I have worked on...
						</Typography>
					</Stack>

					<Swiper
						spaceBetween={30}
						slidesPerView={2}
						centeredSlides={true}
						loop={true}
						freeMode={true}
					>
						{ projectList.map((item, k) => (
							<SwiperSlide key={item.id}>
								<Project 
									media={ item.frontImage }
									id={item.id}
                            		title={item.title}
									content={item.content}
									technologies={item.technologies}
									link={item.link}
								/>
							</SwiperSlide>
						)) }
					</Swiper>
				</Grid>
			</Grid>
		</Stack>
	)
}
