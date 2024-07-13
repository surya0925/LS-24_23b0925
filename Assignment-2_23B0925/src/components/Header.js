const Header = ({ handleToggleDarkMode, icon }) => {
	return (
		<div className='header'>
			<h1>My Notes</h1>
			<img 
				src={icon}
				alt='Toggle Dark Mode'
				onClick={handleToggleDarkMode}
				className='toggle-icon'
				style={{ cursor: 'pointer' }}
			/>
		</div>
	);
};

export default Header;
