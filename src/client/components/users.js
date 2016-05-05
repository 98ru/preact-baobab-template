import {Link} from 'react-router'
import Spinner from 'components/spinner'

export default ({users}) =>
	!users
		? <Spinner />

		: <ul className="users">
			{users.map(({id, name}) =>
				<li className="users__user" key={id}>
					<Link to={`/users/${id}`}>{name}</Link>
				</li>
			)}
		</ul>