import Link from "next/link";

export default function Home(){

	return (
		<div>
			<ul>
				<li>
				<Link href='/'>Home</Link>
				</li>
			<li>
			<Link href='/about'>About Page</Link>
			</li>
			<li>
			<Link href='/contact'>Contact Page</Link>
			</li>
			</ul>
			<h1>This is the Home Component</h1>
		</div>
	)
}