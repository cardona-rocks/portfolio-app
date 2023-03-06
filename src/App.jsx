import { Element } from 'react-scroll'
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 
import { darkTheme } from './assets/theme';
import { Home, Skills, Experience, Projects, Contact } from './sections';
import { Sidebar } from './components';

export default function BasicGrid() {
	return (
		<ThemeProvider theme={ darkTheme }>
			<CssBaseline />
			<Container maxWidth="lg">
				<Grid container spacing={0}>
					<Grid 
						className="sidebar"
						xs={12} 
						md={4} 
						style={{ paddingLeft: 36 }}
					>
						<Sidebar />
					</Grid>
					<Grid xs={12} md={8} >
						<Element name="about"><Home /></Element>
						<Element name="skills"><Skills /></Element>
						<Element name="experience"><Experience /></Element>
						<Element name="portfolio"><Projects /></Element>
						<Element name="contact"><Contact /></Element>
					</Grid>
				</Grid>
				</Container>
		</ThemeProvider>
	);
}
