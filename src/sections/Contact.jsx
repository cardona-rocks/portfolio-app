import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Contact = () => {

	const { t } = useTranslation();

	return (
		<Stack direction="row" spacing={0} className='contact'>
			<Grid container spacing={0}>
				<Grid xs={12}>
					<Typography variant="h2" gutterBottom>
						{t('contact.title')}
					</Typography>
					<Typography paragraph>
						{t('contact.content')}
					</Typography>
					<Stack spacing={3}>
						<TextField id="standard-basic" label="Full name" variant="standard" fullWidth margin="normal" />
						<TextField id="standard-basic2" label="Email" variant="standard" fullWidth margin="normal" color="primary"/>
						<TextField
							id="outlined-multiline-static"
							label="Message"
							multiline
							rows={4}
							defaultValue="Write something..."
							fullWidth
							margin="normal"
						/>
						<Button>Send this message</Button>
					</Stack>
				</Grid>
			</Grid>
		</Stack>
	)
}
