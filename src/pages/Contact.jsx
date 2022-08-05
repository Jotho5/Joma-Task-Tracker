import React from 'react'
import FormContact from '../components/FormContact'
import Navbar from '../components/Navbar'

const Contact = () => {
	return (
		<div>
			<Navbar />
			<div className="h-screen w-full bg px-4 py-10">
				<div className="grid gap-5">
					<div className="headline text-white mx-auto text-center">
						<h1 data-aos="fade" data-aos-duration="500" className="text-2xl mb-2 sm:text-3xl md:text-4xl font-light">
							Having Issues With Our Web App?
						</h1>
						<p data-aos="fade-right" data-aos-delay="500" data-aos-duration="500" className="font-light text-sm md:text-base">
							We're here to serve you, don't hesitate to contact.
						</p>
					</div>

					<div data-aos="fade" data-aos-duration="800" data-aos-delay="1000" className="mt-6">
						<FormContact />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
