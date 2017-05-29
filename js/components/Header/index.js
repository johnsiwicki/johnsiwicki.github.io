export default class Header extends React.Component {
	render() {
		return (
			<div className="container">
        <div className="intro">
            <img src="beard.svg" alt="Beard Icon" className="icon-b" />
            <p className="intro__pre">Hello</p>
            <p className="intro__main">My name is <span>John Siwicki</span>, a front end developer who loves all things HTML, CSS &amp; JS</p>
            <p className="intro__post">Seymour, CT</p>
        </div>        

    </div>
		)
	}
}