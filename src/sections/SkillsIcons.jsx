import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typography } from '@mui/material';
import { 
	faAws, 
	faBootstrap, 
	faCss3Alt, 
	faDigitalOcean,
	faDocker,
	faFigma,
	faGitAlt,
	faGithub,
	faGitlab,
	faGulp,
	faHtml5,
	faJs,
	faMagento,
	faNodeJs,
	faNpm,
	faPhp,
	faPython,
	faReact,
	faSass,
	faShopify,
	faSymfony,
	faWordpress,
} from "@fortawesome/free-brands-svg-icons"
import { 
	DjangoIcon, 
	IllustratorIcon, 
	JqueryIcon, 
	MongoIcon,
	MuiIcon,
	MysqlIcon, 
	PhotoshopIcon, 
	PostmanIcon,
	PrestashopIcon,
	WebpackIcon,
	WoocommerceIcon,
} from '../assets/icons';


export const SkillsIcons = () => {
	return(
		<>
			<Typography variant="h3" gutterBottom style={{ marginTop: 50 }}>
				Main Skills
			</Typography>
			<List className='list-skills'>
				<ListItem>
					<FontAwesomeIcon icon={faShopify} />
					<Typography variant="body1">Shopify</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faHtml5} />
					<Typography variant="body1">HTML 5</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faJs} />
					<Typography variant="body1">Javascript</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faReact} />
					<Typography variant="body1">React Js</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faSass} />
					<Typography variant="body1">Sass</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faCss3Alt} />
					<Typography variant="body1">CSS</Typography>
				</ListItem>
				<ListItem>
					<MuiIcon viewBox="0 0 36 32"/>
					<Typography variant="body1">Material UI</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faBootstrap} />
					<Typography variant="body1">Bootstrap</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faNodeJs} />
					<Typography variant="body1">Node Js</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faGulp} />
					<Typography variant="body1">Gulp</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faGitAlt} />
					<Typography variant="body1">Git</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faDocker} />
					<Typography variant="body1">Docker</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faFigma} />
					<Typography variant="body1">Figma</Typography>
				</ListItem>
			</List>


			<Typography variant="h3" gutterBottom style={{ marginTop: 50 }}>
				Other skills
			</Typography>
			<List className='list-skills'>
				<ListItem>
					<MongoIcon viewBox="0 0 128 128"/>
					<Typography variant="body1">Mongo DB</Typography>
				</ListItem>
				<ListItem>
					<MysqlIcon viewBox="0 0 48 48" />
					<Typography variant="body1">MySQL</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faAws} />
					<Typography variant="body1">AWS</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faDigitalOcean} />
					<Typography variant="body1">Digital ocean</Typography>
				</ListItem>

				<ListItem>
					<FontAwesomeIcon icon={faNpm} />
					<Typography variant="body1">NPM</Typography>
				</ListItem>
				<ListItem>
					<WebpackIcon viewBox="0 0 128 128"/>
					<Typography variant="body1">Webpack</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faPython} />
					<Typography variant="body1">Python</Typography>
				</ListItem>
				<ListItem>
					<DjangoIcon viewBox="0 0 128 128" />
					<Typography variant="body1">Django</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faMagento} />
					<Typography variant="body1">Magento</Typography>
				</ListItem>
				<ListItem>
					<PrestashopIcon viewBox="0 0 256 256"/>
					<Typography variant="body1">Prestashop</Typography>
				</ListItem>
				<ListItem>
					<WoocommerceIcon viewBox="0 0 256 153" />
					<Typography variant="body1">Woocommerce</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faWordpress} />
					<Typography variant="body1">Wordpress</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faSymfony} />
					<Typography variant="body1">Symfony</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faPhp} />
					<Typography variant="body1">PHP</Typography>
				</ListItem>
				<ListItem>
					<JqueryIcon viewBox="0 0 128 128"/>
					<Typography variant="body1">jQuery</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faGitlab} />
					<Typography variant="body1">Gitlab</Typography>
				</ListItem>
				<ListItem>
					<FontAwesomeIcon icon={faGithub} />
					<Typography variant="body1">Github</Typography>
				</ListItem>
				<ListItem>
					<PostmanIcon viewBox="0 0 2491 2491"/>
					<Typography variant="body1">Postman</Typography>
				</ListItem>
				<ListItem>
					<PhotoshopIcon viewBox="0 90 300 380" />
					<Typography variant="body1">Photoshop</Typography>
				</ListItem>
				<ListItem>
					<IllustratorIcon viewBox="0 90 300 380" />
					<Typography variant="body1">Illustrator</Typography>
				</ListItem>
			</List>
			
			
	
		</>
	)
}
