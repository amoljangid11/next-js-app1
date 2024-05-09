import Link from "next/link";

export default function Home(){

	return (
		<div>
			<ul>
				<li>
				<Link href='/'>Home</Link>
				</li>
			<li>
			<Link href='/about'>About</Link>
			</li>
			<li>
			<Link href='/contact'>Contact</Link>
			</li>
			</ul>
			<h1>This is the Home Component</h1>
		</div>
	)
}