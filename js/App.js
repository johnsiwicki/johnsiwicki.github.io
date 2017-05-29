import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<h3 className="section-title">Follow & Connect</h3>
					<div className="wrapper">
						<div className="box a">
							<a href="https://github.com/johnsiwicki/" target="_blank">GitHub</a>
						</div>
						<div className="box b">
							<a href="https://codepen.io/siwicki/" target="_blank">CodePen</a>
						</div>
						<div className="box c">
							<a href="http://www.siwicki.blog/" target="_blank">Blog</a>
						</div>
						<div className="box d">
							<a href="mailto:johnsiwicki@gmail.com">Email</a>
						</div>
						<div className="box e">
							<a href="resume.pdf" target="_blank">Resume</a>
						</div>
						<div className="box f">
							<a href="https://www.linkedin.com/in/johnsiwicki/" target="_blank">
								LinkedIn
							</a>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
