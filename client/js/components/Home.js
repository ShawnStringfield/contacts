import React from 'react';

const Home = (props) => {
	console.log( props );
	return(
		<pre>
			<code>
				{JSON.stringify({...props}, null, 4)}
			</code>
		</pre>
	)
}

export default Home;
