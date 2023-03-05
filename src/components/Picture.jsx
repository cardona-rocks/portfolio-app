import Avatar from '../assets/images/me.jpg';

const Picture = () => {
	return (
		<img 
			alt="Picture of Sergio Andrés Cardona Areiza, Full-stack developer"
			className="avatar"
			src={Avatar}
			style={{ 
				maxWidth: 350,
				marginBottom: 10
			}} />
	)
}

export default Picture;
