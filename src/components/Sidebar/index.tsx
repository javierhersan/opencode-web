import { useNavigate } from 'react-router-dom'
import { useCredentialStore } from '../../services/AuthService'
import FileExplorer from '../FileExplorer'

const Sidebar = () => {
	const navigate = useNavigate()
	const { username, setUsermail, setToken, setUsername, setPassword } =
		useCredentialStore()

	const handleSignOut = async () => {
		setUsername(null)
		setUsermail(null)
		setUsername(null)
		setToken(null)
		setPassword(null)
		navigate('/login')
	}

	return (
		<div className='w-64 p-5 bg-zinc-800 text-white overflow-y-auto h-screen relative'>
			<div className='flex items-center mb-6'>
				<span className='w-10 h-10 rounded-full mr-3 bg-slate-500'></span>
				<div>
					<h2 className='font-semibold text-lg'>{username}</h2>
					<button
						onClick={handleSignOut}
						className='text-sm text-blue-400 hover:underline'
					>
						Sign Out
					</button>
				</div>
			</div>

			<FileExplorer></FileExplorer>
		</div>
	)
}

export default Sidebar
