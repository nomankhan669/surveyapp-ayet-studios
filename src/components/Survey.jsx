import { useEffect, useState } from "react";
import clock from '../assets/clock.png';
import questionMark from '../assets/Questionmark.png';
import rewardBtnIcon from '../assets/reward-btn-icon.png';

function Survey({
	title,
	icon,
	surveyLefts,
	duration,
	qualifications,
	points
}) {

	const [surveyIcon, setIcon] = useState(null);

	const loadImage = async () => {
		let iconArr = icon.split('.');
		let img = await import(`../assets/${iconArr[0]}.${iconArr[1]}`);
		setIcon(img.default);
	}

	useEffect(() => {
		loadImage();
	}, [icon]);

	return (
		<div className="survey-box mb-10">
			<div className="flex flex-row px-4">
				<div className="basis-1/4 icon-img">
					<img src={surveyIcon} />
				</div>
				<div className="basis-3/4 pl-4">
					<div className="title">{title}</div>
					{
					surveyLefts === 0 ?
						<span className="newSurvey">New</span> :
						<span className="surveyLefts">{surveyLefts} completes left</span>
					}
					<div className="stats mt-1">
						<div className="duration">
							<img src={clock} width="14"/> {duration} minutes
						</div>
						<div className="qualifications">
							<img src={questionMark} width="14"/> {qualifications} qualifications
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 mt-4">
				<button className="btn btn-blue rewardBtn text-center w-full rounded-lg py-2.5 px-2.5">
					<div className="btnIcon">
						<img src={rewardBtnIcon} width="18" /> {points}
					</div>
				</button>
			</div>
		</div>
	)
}

export default Survey;