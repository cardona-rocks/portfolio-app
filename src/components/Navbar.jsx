import { Stack, Typography, MenuList, MenuItem } from '@mui/material';
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';

const Navbar = () => {

	const { t } = useTranslation();
	const scrollDuration = 500;

	return (
		<>
		<Typography variant="h3" 
		className='xs-hidden'
		style={{
				marginTop: 30,
				marginBottom: 30
		}}>{t('general.explore')}</Typography>


		<Stack direction="row" spacing={2}>
			<MenuList 
				className='navigation' 
				style={{
					maxWidth: 350,
					width: '100%'
			}}>
				<MenuItem 
					className='navigation__item'
					style={{ padding: 0 }}>
					<Link 
						className='navigation__item-link' 
						activeClass="navigation__item-link--active" 
						to="about" spy={true} smooth={true} duration={ scrollDuration } >{t('navigation.about')}</Link>
				</MenuItem>
				<MenuItem 
					className='navigation__item'
					style={{ padding: 0 }}>
					<Link 
						className='navigation__item-link' 
						activeClass="navigation__item-link--active" 
						to="skills" spy={true} smooth={true} duration={ scrollDuration }>{t('navigation.skills')}</Link>
				</MenuItem>
				<MenuItem 
					className='navigation__item'
					style={{ padding: 0 }}>
					<Link 
						className='navigation__item-link' 
						activeClass="navigation__item-link--active" 
						to="experience" spy={true} smooth={true} duration={ scrollDuration }>{t('navigation.experience')}</Link>
				</MenuItem>
				<MenuItem 
					className='navigation__item'
					style={{ padding: 0 }}>
					<Link 
						className='navigation__item-link' 
						activeClass="navigation__item-link--active" 
						to="portfolio" spy={true} smooth={true} duration={ scrollDuration }>{t('navigation.portfolio')}</Link>
				</MenuItem>
				<MenuItem 
					className='navigation__item'
					style={{ padding: 0 }}>
					<Link 
						className='navigation__item-link' 
						activeClass="navigation__item-link--active" 
						to="contact" spy={true} smooth={true} duration={ scrollDuration }>{t('navigation.contact_me')}</Link>
				</MenuItem>
			</MenuList>

		</Stack>
		</>
	);
}

export default Navbar;
