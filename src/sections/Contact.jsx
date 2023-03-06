import { useState, useRef } from "react";import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import emailjs from '@emailjs/browser';

export const Contact = () => {


	const form = useRef();


	const { t } = useTranslation();

	const [sending, setSending] = useState(false);
    const [sendEmailSuccess, setSendEmailSuccess] = useState(false);
    const SendEmail = (e) => {
		e.preventDefault();

		console.log("segding form");

        setSending(true);

        emailjs.sendForm('service_qsw31gw', 'template_6p4zuyu', form.current, 'V6iK5XmBc4g2OMtV0')
		.then((result) => {
			setSending(false);
			console.log(result.text);
		}, (error) => {
			setSending(false);
			console.log(error.text);
		});
    };

	return (
		<Stack direction="row" spacing={0} className='contact'>
			<Grid container spacing={0}>
				<Grid xs={12}>
					<Typography variant="h2" style={{
						marginBottom: 30
					}}>
						{t('contact.title')}
					</Typography>
					<Typography paragraph>
						{t('contact.content')}
					</Typography>
					<Stack spacing={3}>
					<form ref={form} onSubmit={SendEmail}>
						<TextField id="standard-basic" label="Full name" variant="standard" fullWidth margin="normal" name="from_name"/>
						<TextField id="standard-basic2" label="Email" variant="standard" fullWidth margin="normal" color="primary" name="from_email"/>
						<TextField
							id="outlined-multiline-static"
							label="Message"
							multiline
							rows={4}
							defaultValue="Write something..."
							fullWidth
							margin="normal"
							name="message"
						/>
						<Button type="submit" variant="outlined">Send this message</Button>
					</form>
					</Stack>
				</Grid>
			</Grid>
		</Stack>
	)
}
