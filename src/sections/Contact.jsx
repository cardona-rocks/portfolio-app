import { useState, useRef } from "react";
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { Stack, Typography, TextField, Button, DialogContent, Dialog } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useTranslation } from 'react-i18next';

const SimpleDialog = (props) => {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogContent>
				Your message has been received! Thank you!
			</DialogContent>
		</Dialog>
	);
}

SimpleDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired
};

export const Contact = () => {

	const form = useRef();
	const { t } = useTranslation();

	const [sending, setSending] = useState(false);
    const [sendEmailSuccess, setSendEmailSuccess] = useState(false);
	const [open, setOpen] = useState(false);

	const handleClose = (value) => {
		setOpen(false);
	};

    const SendEmail = (e) => {
		e.preventDefault();
		setSending(true);
		emailjs.sendForm('service_qsw31gw', 'template_6p4zuyu', form.current, 'V6iK5XmBc4g2OMtV0')
		.then((result) => {
			setSending(false);
			setOpen(true);
		}, (error) => {
			setSending(false);
			console.log(error.text);
		});
    };

	return (
		<>
			<SimpleDialog
				open={open}
				onClose={handleClose}
			/>
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
								<TextField 
									id="form__full-name" 
									label="Full name" 
									variant="standard" 
									margin="normal" 
									name="from_name"
									required
									fullWidth 
								/>
								<TextField 
									id="form__email" 
									label="Email" 
									variant="standard" 
									margin="normal" 
									color="primary" 
									name="from_email"
									type="email"
									required
									fullWidth 
								/>
								<TextField
									id="form__message"
									label="Message"
									multiline
									rows={4}
									margin="normal"
									name="message"
									required
									fullWidth
								/>
								<Button type="submit" variant="outlined">{t('contact.button')}</Button>
							</form>
						</Stack>
					</Grid>
				</Grid>
			</Stack>
		</>
	)
}
