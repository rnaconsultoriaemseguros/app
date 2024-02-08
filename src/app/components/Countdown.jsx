import { CountdownCircleTimer } from 
	'react-countdown-circle-timer'

export default function Timer(){ 
return ( 
	<div className="flex min-h-screen flex-col mt-6 items-center"> 
	<CountdownCircleTimer 
		isPlaying 
		duration={172800} 
		colors={[ 
		['#004777', 0.33], 
		['#F7B801', 0.33], 
		['#A30000', 0.33], 
		]} 
	> 
		{({ remainingTime }) => remainingTime} 
	</CountdownCircleTimer> 
	</div> 
	
) 
}
