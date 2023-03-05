import { Instagram, LinkedIn } from '@mui/icons-material';
import { Typography, Divider, Link, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SocialNav = () => {

	const { t } = useTranslation();

	return (
		<>
			<Typography variant="h3" style={{
				marginTop: 30,
				marginBottom: 30
			}}>{t('general.follow_me')}</Typography>
			<Stack
				direction="row"
				divider={ <Divider color="#fff" orientation="vertical" flexItem /> }
				spacing={ 2 }
			>
				<Link target="_blank" href="https://www.linkedin.com/in/sergio-cardona-3a6336166">
					<LinkedIn color="primary" />
				</Link>
				<Link target="_blank" href="https://www.instagram.com/im.nxpl">
					<Instagram color="primary" />
				</Link>
			</Stack>
		</>
	)
}

export default SocialNav;
