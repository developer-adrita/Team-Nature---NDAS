import React from 'react';
import { Header } from '../../components';

const Audio = () => {
	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="BlindED" title="Audio Course" />
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6">
				<h3 className='mt-5 mb-3'><b>Class lecture 1</b></h3>
					<audio controls>
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674585289/eduBangla/videos/topic-audio-1674585241689_gzy4u7.mp3" type="audio/ogg" />
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674585289/eduBangla/videos/topic-audio-1674585241689_gzy4u7.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6">
				<h3 className='mt-5 mb-3'><b>Dev Ops</b></h3>
					<audio controls>
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836694/eduBangla/videos/DevOps_CI_CD_Explained_in_100_Seconds_1_zobi1h.mp3" type="audio/ogg" />
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836694/eduBangla/videos/DevOps_CI_CD_Explained_in_100_Seconds_1_zobi1h.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6 ">
				<h3 className='mt-5 mb-3'><b>Computer Science</b></h3>
					<audio controls>
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836706/eduBangla/videos/Software_Engineering_in_60_seconds_lc8krv.mp3" type="audio/ogg" />
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836706/eduBangla/videos/Software_Engineering_in_60_seconds_lc8krv.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6">
				<h3 className='mt-5 mb-3'><b>Brian cox</b></h3>
					<audio controls>
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836753/eduBangla/videos/Brian_Cox_explains_quantum_mechanics_in_60_seconds_BBC_News_axwvhu.mp3" type="audio/ogg" />
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836753/eduBangla/videos/Brian_Cox_explains_quantum_mechanics_in_60_seconds_BBC_News_axwvhu.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6">
				<h3 className='mt-5 mb-3'><b>Quantum Mechanics</b></h3>
					<audio controls>
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836753/eduBangla/videos/Brian_Cox_explains_quantum_mechanics_in_60_seconds_BBC_News_axwvhu.mp3" type="audio/mpeg" />
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836753/eduBangla/videos/Brian_Cox_explains_quantum_mechanics_in_60_seconds_BBC_News_axwvhu.mp3" type="audio/ogg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6">
				<h3 className='mt-5 mb-3'><b>What is Programming language?</b></h3>
					<audio controls>
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836763/eduBangla/videos/What_is_a_Programming_Language_in_60_seconds_a10etr.mp3" type="audio/ogg" />
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836763/eduBangla/videos/What_is_a_Programming_Language_in_60_seconds_a10etr.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6">
				<h3 className='mt-5 mb-3'><b>Climate Change</b></h3>
					<audio controls>
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836765/eduBangla/videos/Climate_change_in_60_seconds_The_Royal_Society_cw0uxs.mp3" type="audio/ogg" />
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836765/eduBangla/videos/Climate_change_in_60_seconds_The_Royal_Society_cw0uxs.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<div className="w-full md:w-1/2 px-3 mb-6">
					<h3 className='mt-5 mb-3'><b>Introduction to Software Engineering</b></h3>
					<audio controls>
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836706/eduBangla/videos/Software_Engineering_in_60_seconds_lc8krv.mp3" type="audio/ogg" />
						<source src="https://res.cloudinary.com/hostingimagesservice/video/upload/v1674836706/eduBangla/videos/Software_Engineering_in_60_seconds_lc8krv.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
				</div>
			</div>
		</div>
	);
};

export default Audio;